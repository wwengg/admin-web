/**
 * S3 Upload Utility
 * Handles S3 presigned URL uploads
 */

import request from '@/utils/request'
import protoUpload from '@/proto/upload.js'

/**
 * Get presigned upload URL from server
 * @param {string} fileName - The filename to upload
 * @returns {Promise<{url: string, baseUrl: string}>}
 */
export async function getPreSignUploadUrl(fileName) {
  // Use static encode method directly with plain object
  const buffer = protoUpload.pbupload.GetPreSignUploadUrlArgs.encode({
    fileName: fileName
  }).finish().slice().buffer

  const response = await request({
    url: '/v2/upload/getPreSignUploadUrl',
    method: 'post',
    buffer,
    pb: 'pbupload.GetPreSignUploadUrlReply'
  })

  return {
    url: response.url,
    baseUrl: response.baseUrl
  }
}

/**
 * Upload file to S3 using presigned URL (native XHR to avoid axios 0.18.x build bug)
 * @param {File} file - The file to upload
 * @param {Function} onProgress - Progress callback (percent: number)
 * @returns {Promise<string>} The final CDN URL
 */
export async function uploadToS3(file, onProgress) {
  try {
    // 1. Generate filename with timestamp
    const timestamp = Date.now()
    const extension = file.name.split('.').pop().toLowerCase()
    const fileName = `upload-${timestamp}.${extension}`

    // 2. Get presigned URL
    const { url, baseUrl } = await getPreSignUploadUrl(fileName)

    // 3. Upload to S3 using native XMLHttpRequest (avoids axios 0.18.x onUploadProgress bug in prod build)
    await new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest()
      xhr.open('PUT', url, true)
      xhr.setRequestHeader('Content-Type', file.type || `image/${extension}`)

      if (onProgress) {
        xhr.upload.onprogress = (e) => {
          if (e.lengthComputable) {
            onProgress(Math.round((e.loaded * 100) / e.total))
          }
        }
      }

      xhr.onload = () => {
        if (xhr.status >= 200 && xhr.status < 300) {
          resolve()
        } else {
          reject(new Error(`S3 upload failed: ${xhr.status}`))
        }
      }
      xhr.onerror = () => reject(new Error('S3 upload network error'))
      xhr.send(file)
    })

    // 4. Extract actual file path from presigned URL
    const actualUrl = url.split('?')[0]
    const uri = new URL(actualUrl)
    const path = uri.pathname

    // 5. Combine with CDN base URL
    const finalUrl = `${baseUrl}${path}`

    return finalUrl
  } catch (error) {
    console.error('S3 upload failed:', error)
    throw error
  }
}

/**
 * Upload multiple files to S3
 * @param {File[]} files - Array of files to upload
 * @param {Function} onProgress - Progress callback (percent: number, index: number)
 * @returns {Promise<string[]>} Array of final CDN URLs
 */
export async function uploadMultipleToS3(files, onProgress) {
  const urls = []
  for (let i = 0; i < files.length; i++) {
    const url = await uploadToS3(files[i], (percent) => {
      if (onProgress) {
        onProgress(percent, i)
      }
    })
    urls.push(url)
  }
  return urls
}

export default {
  getPreSignUploadUrl,
  uploadToS3,
  uploadMultipleToS3
}
