#!/bin/bash

# S3 CORS Configuration Script
# 配置 QNAP NAS S3 存储桶的 CORS

# ============ 配置区域 ============
# S3 端点
S3_ENDPOINT="http://hcf.wwengg.cn:8010"

# 存储桶名称
BUCKET_NAME="threego"

# 访问凭证（需要替换为实际的 Access Key 和 Secret Key）
ACCESS_KEY="YOUR_ACCESS_KEY_HERE"
SECRET_KEY="YOUR_SECRET_KEY_HERE"

# 允许的来源（多个来源用空格分隔）
ALLOWED_ORIGINS=("http://localhost:9527" "http://localhost:9528" "https://your-production-domain.com")

# 允许的 HTTP 方法
ALLOWED_METHODS=("PUT" "GET" "POST" "DELETE" "HEAD")

# ============ CORS 配置 XML ============
generate_cors_xml() {
    local xml='<?xml version="1.0" encoding="UTF-8"?><CORSConfiguration>'

    # 为每个允许的来源创建规则
    for origin in "${ALLOWED_ORIGINS[@]}"; do
        xml+='<CORSRule>'
        xml+="<AllowedOrigin>${origin}</AllowedOrigin>"

        # 添加允许的方法
        for method in "${ALLOWED_METHODS[@]}"; do
            xml+="<AllowedMethod>${method}</AllowedMethod>"
        done

        # 允许所有请求头
        xml+='<AllowedHeader>*</AllowedHeader>'
        # 暴露 ETag 头
        xml+='<ExposeHeader>ETag</ExposeHeader>'
        xml+='<ExposeHeader>Content-Length</ExposeHeader>'
        # 预检请求缓存时间（秒）
        xml+='<MaxAgeSeconds>3000</MaxAgeSeconds>'
        xml+='</CORSRule>'
    done

    xml+='</CORSConfiguration>'
    echo "$xml"
}

# ============ 方法 1: 使用 AWS CLI ============
configure_cors_with_aws_cli() {
    if ! command -v aws &> /dev/null; then
        echo "错误: AWS CLI 未安装"
        echo "请运行: pip install awscli 或 brew install awscli"
        return 1
    fi

    local cors_xml=$(generate_cors_xml)

    echo "使用 AWS CLI 配置 CORS..."
    echo "存储桶: $BUCKET_NAME"
    echo "端点: $S3_ENDPOINT"
    echo ""

    aws s3api put-bucket-cors \
        --bucket "$BUCKET_NAME" \
        --endpoint-url "$S3_ENDPOINT" \
        --cors-configuration "$cors_xml" \
        --no-verify-ssl
}

# ============ 方法 2: 使用 curl（需要手动签名）============
configure_cors_with_curl() {
    local cors_xml=$(generate_cors_xml)

    echo "使用 curl 配置 CORS..."
    echo "存储桶: $BUCKET_NAME"
    echo "端点: $S3_ENDPOINT"
    echo ""
    echo "注意: curl 方法需要 AWS Signature V4 签名"
    echo "建议使用 AWS CLI 或 aws-signing-helper"
    echo ""

    # 生成临时文件保存 CORS 配置
    local tmp_file=$(mktemp)
    echo "$cors_xml" > "$tmp_file"

    echo "CORS 配置已保存到: $tmp_file"
    echo "内容:"
    cat "$tmp_file"
    echo ""

    # 构建请求 URL
    local url="${S3_ENDPOINT}/${BUCKET_NAME}?cors"

    echo "请求 URL: $url"
    echo ""
    echo "由于需要 AWS Signature V4 签名，建议使用以下方法之一:"
    echo "1. 安装 AWS CLI: pip install awscli"
    echo "2. 使用 s3cmd: s3cmd setcors $tmp_file s3://${BUCKET_NAME}"
    echo "3. 使用 Python boto3 库"
    echo ""

    rm -f "$tmp_file"
}

# ============ 方法 3: 使用 s3cmd ============
configure_cors_with_s3cmd() {
    if ! command -v s3cmd &> /dev/null; then
        echo "错误: s3cmd 未安装"
        echo "请运行: pip install s3cmd 或 brew install s3cmd"
        return 1
    fi

    echo "使用 s3cmd 配置 CORS..."

    # 生成 CORS 配置文件
    local tmp_file=$(mktemp)
    cat > "$tmp_file" << EOF
[cors]
allow_origin = ${ALLOWED_ORIGINS[0]}
$(for origin in "${ALLOWED_ORIGINS[@]:1}"; do
    echo "allow_origin = $origin"
done)
allow_methods = ${ALLOWED_METHODS[@]}
allow_headers = *
max_age = 3000
EOF

    echo "配置文件已保存到: $tmp_file"
    cat "$tmp_file"
    echo ""

    s3cmd setcors "$tmp_file" "s3://${BUCKET_NAME}" \
        --access_key="$ACCESS_KEY" \
        --secret_key="$SECRET_KEY" \
        --host="$S3_ENDPOINT" \
        --no-ssl

    rm -f "$tmp_file"
}

# ============ Python 脚本方法 ============
generate_python_script() {
    cat << 'PYTHON_EOF'
#!/usr/bin/env python3
"""
使用 boto3 配置 S3 存储桶 CORS
安装: pip install boto3
"""

import boto3
from botocore.client import Config

# 配置
S3_ENDPOINT = "http://hcf.wwengg.cn:8010"
BUCKET_NAME = "threego"
ACCESS_KEY = "YOUR_ACCESS_KEY_HERE"
SECRET_KEY = "YOUR_SECRET_KEY_HERE"

# CORS 配置
cors_configuration = {
    'CORSRules': [
        {
            'AllowedOrigins': [
                'http://localhost:9527',
                'http://localhost:9528',
                # 添加你的生产环境域名
            ],
            'AllowedMethods': ['PUT', 'GET', 'POST', 'DELETE', 'HEAD'],
            'AllowedHeaders': ['*'],
            'ExposeHeaders': ['ETag', 'Content-Length'],
            'MaxAgeSeconds': 3000
        }
    ]
}

# 创建 S3 客户端
s3 = boto3.client(
    's3',
    endpoint_url=S3_ENDPOINT,
    aws_access_key_id=ACCESS_KEY,
    aws_secret_access_key=SECRET_KEY,
    config=Config(signature_version='s3v4'),
    verify_ssl=False
)

# 配置 CORS
try:
    s3.put_bucket_cors(
        Bucket=BUCKET_NAME,
        CORSConfiguration=cors_configuration
    )
    print(f"成功配置存储桶 '{BUCKET_NAME}' 的 CORS")

    # 验证配置
    response = s3.get_bucket_cors(Bucket=BUCKET_NAME)
    print("当前 CORS 配置:")
    for rule in response['CORSRules']:
        print(f"  允许来源: {rule['AllowedOrigins']}")
        print(f"  允许方法: {rule['AllowedMethods']}")
except Exception as e:
    print(f"配置失败: {e}")
PYTHON_EOF
}

# ============ 主程序 ============
main() {
    echo "========================================"
    echo "   S3 存储桶 CORS 配置工具"
    echo "========================================"
    echo ""
    echo "存储桶: $BUCKET_NAME"
    echo "端点: $S3_ENDPOINT"
    echo ""
    echo "生成的 CORS 配置:"
    generate_cors_xml
    echo ""
    echo "========================================"
    echo ""

    # 检查参数
    if [ "$ACCESS_KEY" = "YOUR_ACCESS_KEY_HERE" ]; then
        echo "警告: 请先设置 ACCESS_KEY 和 SECRET_KEY"
        echo ""
        echo "编辑脚本，修改以下变量:"
        echo "  ACCESS_KEY=\"你的访问密钥\""
        echo "  SECRET_KEY=\"你的秘密密钥\""
        echo ""
    fi

    # 检测可用的工具
    if command -v aws &> /dev/null; then
        echo "检测到 AWS CLI，正在配置..."
        configure_cors_with_aws_cli
    elif command -v s3cmd &> /dev/null; then
        echo "检测到 s3cmd，正在配置..."
        configure_cors_with_s3cmd
    else
        echo "未检测到 AWS CLI 或 s3cmd"
        echo ""
        echo "生成 Python 脚本..."
        generate_python_script > "config_s3_cors.py"
        echo "Python 脚本已保存到: config_s3_cors.py"
        echo ""
        echo "请选择以下方式之一:"
        echo "1. 安装 AWS CLI: pip install awscli"
        echo "2. 安装 s3cmd: pip install s3cmd"
        echo "3. 使用 Python 脚本: python3 config_s3_cors.py"
        echo ""
        configure_cors_with_curl
    fi
}

# 运行主程序
main "$@"
