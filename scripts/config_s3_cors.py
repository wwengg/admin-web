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
ACCESS_KEY = "threego:IXPsUVokzEBUPys61Lpu"
SECRET_KEY = "mLv2w8N08u5p1CZ2gY4DA25hhq8ocqAB"

# CORS 配置
cors_configuration = {
    'CORSRules': [
        {
            'AllowedOrigins': [
                '*',
            ],
            'AllowedMethods': ['PUT', 'GET', 'POST', 'DELETE', 'HEAD'],
            'AllowedHeaders': ['*'],
            'ExposeHeaders': ['ETag', 'Content-Length'],
            'MaxAgeSeconds': 3000
        }
    ]
}

# 创建 S3 客户端
from botocore import UNSIGNED
from botocore.config import Config
import urllib3
urllib3.disable_warnings(urllib3.exceptions.InsecureRequestWarning)

s3 = boto3.client(
    's3',
    endpoint_url=S3_ENDPOINT,
    aws_access_key_id=ACCESS_KEY,
    aws_secret_access_key=SECRET_KEY,
    config=Config(signature_version='s3v4'),
    verify=False
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
