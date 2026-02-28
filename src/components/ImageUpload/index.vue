<template>
  <div class="image-upload">
    <el-upload
      :action="''"
      :http-request="handleUpload"
      :show-file-list="false"
      :before-upload="beforeUpload"
      :accept="accept"
      :disabled="uploading"
      list-type="picture-card"
      :class="{ 'is-uploading': uploading }"
    >
      <div v-if="imageUrl" class="uploaded-image">
        <el-image :src="imageUrl" fit="cover" style="width: 100%; height: 100%">
          <div slot="error" class="image-error">
            <i class="el-icon-picture-outline" />
          </div>
        </el-image>
        <div class="image-overlay">
          <div class="overlay-actions">
            <i class="el-icon-zoom-in" @click.stop="handlePreview" title="预览" />
            <i class="el-icon-delete" @click.stop="handleRemove" title="删除" />
          </div>
        </div>
        <div v-if="uploading" class="upload-progress">
          <el-progress :percentage="uploadPercent" type="circle" :width="50" />
        </div>
      </div>
      <div v-else class="upload-placeholder">
        <i v-if="!uploading" class="el-icon-plus" />
        <el-progress v-else :percentage="uploadPercent" type="circle" :width="50" />
      </div>
    </el-upload>

    <div v-if="tip" class="el-upload__tip">{{ tip }}</div>

    <!-- Preview dialog -->
    <el-dialog :visible.sync="previewVisible" title="图片预览" width="600px">
      <el-image :src="imageUrl" fit="contain" style="width: 100%" />
    </el-dialog>
  </div>
</template>

<script>
import { uploadToS3 } from '@/utils/s3Upload'

export default {
  name: 'ImageUpload',
  props: {
    // Image URL (v-model)
    value: {
      type: String,
      default: ''
    },
    // Accept file types (e.g., 'image/*', '.jpg,.png')
    accept: {
      type: String,
      default: 'image/*'
    },
    // Max file size in MB
    maxSize: {
      type: Number,
      default: 10
    },
    // Help text
    tip: {
      type: String,
      default: ''
    },
    // Compress image before upload
    compress: {
      type: Boolean,
      default: true
    },
    // Compress quality (0-1)
    compressQuality: {
      type: Number,
      default: 0.8
    },
    // Max width/height for compression
    maxDimension: {
      type: Number,
      default: 1920
    }
  },
  data() {
    return {
      uploading: false,
      uploadPercent: 0,
      previewVisible: false,
      internalUrl: this.value
    }
  },
  computed: {
    imageUrl: {
      get() {
        return this.internalUrl
      },
      set(val) {
        this.internalUrl = val
        this.$emit('input', val)
        this.$emit('change', val)
      }
    }
  },
  watch: {
    value(newVal) {
      this.internalUrl = newVal
    }
  },
  methods: {
    beforeUpload(file) {
      // Check file type
      const isImage = file.type.startsWith('image/')
      if (!isImage) {
        this.$message.error('只能上传图片文件!')
        return false
      }

      // Check file size
      const isLtMax = file.size / 1024 / 1024 < this.maxSize
      if (!isLtMax) {
        this.$message.error(`图片大小不能超过 ${this.maxSize}MB!`)
        return false
      }

      return true
    },

    async handleUpload({ file }) {
      try {
        this.uploading = true
        this.uploadPercent = 0

        let fileToUpload = file

        // Compress image if enabled
        if (this.compress) {
          fileToUpload = await this.compressImage(file)
        }

        // Upload to S3
        const url = await uploadToS3(fileToUpload, (percent) => {
          this.uploadPercent = percent
        })

        this.imageUrl = url
        this.$message.success('上传成功')
        this.$emit('upload-success', url)
      } catch (error) {
        console.error('Upload failed:', error)
        this.$message.error(error.message || '上传失败')
        this.$emit('upload-error', error)
      } finally {
        this.uploading = false
        this.uploadPercent = 0
      }
    },

    /**
     * Compress image using canvas
     */
    compressImage(file) {
      return new Promise((resolve) => {
        const reader = new FileReader()
        reader.readAsDataURL(file)
        reader.onload = (e) => {
          const img = new Image()
          img.src = e.target.result
          img.onload = () => {
            const canvas = document.createElement('canvas')
            let width = img.width
            let height = img.height

            // Scale down if exceeds max dimension
            if (width > this.maxDimension || height > this.maxDimension) {
              if (width > height) {
                height = Math.round((height * this.maxDimension) / width)
                width = this.maxDimension
              } else {
                width = Math.round((width * this.maxDimension) / height)
                height = this.maxDimension
              }
            }

            canvas.width = width
            canvas.height = height

            const ctx = canvas.getContext('2d')
            ctx.drawImage(img, 0, 0, width, height)

            canvas.toBlob(
              (blob) => {
                const compressedFile = new File([blob], file.name, {
                  type: file.type,
                  lastModified: Date.now()
                })
                resolve(compressedFile)
              },
              file.type,
              this.compressQuality
            )
          }
        }
      })
    },

    handlePreview() {
      this.previewVisible = true
    },

    handleRemove() {
      this.imageUrl = ''
      this.$emit('remove')
    }
  }
}
</script>

<style lang="scss" scoped>
.image-upload {
  ::v-deep .el-upload {
    width: 148px;
    height: 148px;
    line-height: 148px;
    position: relative;

    &.is-uploading {
      .el-upload__text {
        display: none;
      }
    }
  }

  ::v-deep .el-upload-list__item {
    width: 148px;
    height: 148px;
  }

  .uploaded-image {
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;
    border-radius: 6px;

    .image-overlay {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(0, 0, 0, 0.5);
      display: flex;
      align-items: center;
      justify-content: center;
      opacity: 0;
      transition: opacity 0.3s;

      &:hover {
        opacity: 1;
      }
    }

    .overlay-actions {
      display: flex;
      gap: 16px;

      i {
        color: #fff;
        font-size: 20px;
        cursor: pointer;

        &:hover {
          color: #409eff;
        }
      }
    }

    .upload-progress {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background: rgba(255, 255, 255, 0.9);
      border-radius: 50%;
      padding: 5px;
    }
  }

  .upload-placeholder {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    background: #fbfdff;
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    transition: border-color 0.3s;

    &:hover {
      border-color: #409eff;
    }

    i {
      font-size: 28px;
      color: #8c939d;
    }
  }

  .image-error {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    background: #f5f7fa;
    color: #909399;

    i {
      font-size: 28px;
    }
  }

  .el-upload__tip {
    margin-top: 8px;
    font-size: 12px;
    color: #909399;
    line-height: 1.5;
  }
}
</style>
