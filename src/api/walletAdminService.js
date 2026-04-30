import request from '@/utils/request'
import protoWallet from '@/proto/wallet.js'
const { pbwallet } = protoWallet

// ========== 钱包查询 ==========

/**
 * 获取用户钱包信息
 * @param {Object} data { userId: number }
 * @returns {Promise<{code: string, msg: string, wallet: Object}>}
 */
export function getWalletInfo(data) {
  const buffer = pbwallet.GetWalletInfoArgs.encode(data).finish().slice().buffer
  return request({
    url: '/v2/walletAdmin/getWalletInfo',
    method: 'post',
    buffer,
    pb: 'pbwallet.GetWalletInfoReply'
  })
}

/**
 * 获取钱包流水列表
 * @param {Object} data { userId: number, page: number, pageSize: number }
 * @returns {Promise<{code: string, msg: string, list: Array, total: number}>}
 */
export function findWalletList(data) {
  const buffer = pbwallet.FindWalletListArgs.encode(data).finish().slice().buffer
  return request({
    url: '/v2/walletAdmin/findWalletList',
    method: 'post',
    buffer,
    pb: 'pbwallet.FindWalletListReply'
  })
}

/**
 * 获取钱包统计数据
 * @param {Object} data { startDate?: string, endDate?: string }
 * @returns {Promise<{code: string, msg: string, statistics: Object}>}
 */
export function getWalletStatistics(data) {
  const buffer = pbwallet.GetWalletStatisticsArgs.encode(data || {}).finish().slice().buffer
  return request({
    url: '/v2/walletAdmin/getWalletStatistics',
    method: 'post',
    buffer,
    pb: 'pbwallet.GetWalletStatisticsReply'
  })
}

// ========== 钱包操作 ==========

/**
 * 管理员加币
 * @param {Object} data { userId: number, amount: number, description?: string }
 * @returns {Promise<{code: string, msg: string, wallet: Object}>}
 */
export function addBalance(data) {
  const buffer = pbwallet.AddBalanceArgs.encode(data).finish().slice().buffer
  return request({
    url: '/v2/walletAdmin/addBalance',
    method: 'post',
    buffer,
    pb: 'pbwallet.AddBalanceReply'
  })
}

/**
 * 管理员扣币
 * @param {Object} data { userId: number, amount: number, description?: string }
 * @returns {Promise<{code: string, msg: string, wallet: Object}>}
 */
export function deductBalance(data) {
  const buffer = pbwallet.DeductBalanceArgs.encode(data).finish().slice().buffer
  return request({
    url: '/v2/walletAdmin/deductBalance',
    method: 'post',
    buffer,
    pb: 'pbwallet.DeductBalanceReply'
  })
}
