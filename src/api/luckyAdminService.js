import request from '@/utils/request'
import protoGame from '@/proto/game.js'

const { pblucky, pbcommon } = protoGame

// ========== 奖品配置管理 ==========

/**
 * 创建奖品配置
 * @param {LuckyPrizeConfigModel} data
 * @returns {Promise<CommonResult>}
 */
export function createLuckyPrizeConfig(data) {
  const buffer = pblucky.LuckyPrizeConfigModel.encode(data).finish().slice().buffer
  return request({
    url: '/v2/luckyAdmin/createPrizeConfig',
    method: 'post',
    buffer,
    pb: 'pbcommon.CommonResult'
  })
}

/**
 * 更新奖品配置
 * @param {LuckyPrizeConfigModel} data
 * @returns {Promise<CommonResult>}
 */
export function updateLuckyPrizeConfig(data) {
  const buffer = pblucky.LuckyPrizeConfigModel.encode(data).finish().slice().buffer
  return request({
    url: '/v2/luckyAdmin/updatePrizeConfig',
    method: 'post',
    buffer,
    pb: 'pbcommon.CommonResult'
  })
}

/**
 * 删除奖品配置
 * @param {IdArgs} data
 * @returns {Promise<CommonResult>}
 */
export function deleteLuckyPrizeConfig(data) {
  const buffer = pbcommon.IdArgs.encode(data).finish().slice().buffer
  return request({
    url: '/v2/luckyAdmin/deletePrizeConfig',
    method: 'post',
    buffer,
    pb: 'pbcommon.CommonResult'
  })
}

/**
 * 获取奖品配置列表
 * @param {FindLuckyPrizeConfigArgs} data
 * @returns {Promise<FindLuckyPrizeConfigReply>}
 */
export function findLuckyPrizeConfigList(data) {
  const buffer = pblucky.FindLuckyPrizeConfigArgs.encode(data).finish().slice().buffer
  return request({
    url: '/v2/luckyAdmin/findPrizeConfigList',
    method: 'post',
    buffer,
    pb: 'pblucky.FindLuckyPrizeConfigReply'
  })
}

// ========== 回合管理 ==========

/**
 * 获取回合列表
 * @param {FindLuckyRoundArgs} data
 * @returns {Promise<FindLuckyRoundReply>}
 */
export function findLuckyRoundList(data) {
  const buffer = pblucky.FindLuckyRoundArgs.encode(data).finish().slice().buffer
  return request({
    url: '/v2/luckyAdmin/findLuckyRoundList',
    method: 'post',
    buffer,
    pb: 'pblucky.FindLuckyRoundReply'
  })
}

/**
 * 完成回合
 * @param {IdArgs} data
 * @returns {Promise<CommonResult>}
 */
export function completeLuckyRound(data) {
  const buffer = pbcommon.IdArgs.encode(data).finish().slice().buffer
  return request({
    url: '/v2/luckyAdmin/completeLuckyRound',
    method: 'post',
    buffer,
    pb: 'pbcommon.CommonResult'
  })
}

/**
 * 重置奖池
 * @param {ResetLuckyPoolArgs} data
 * @returns {Promise<CommonResult>}
 */
export function resetLuckyPrizePool(data) {
  const buffer = pblucky.ResetLuckyPoolArgs.encode(data).finish().slice().buffer
  return request({
    url: '/v2/luckyAdmin/resetLuckyPrizePool',
    method: 'post',
    buffer,
    pb: 'pbcommon.CommonResult'
  })
}

// ========== 抽奖记录查询 ==========

/**
 * 获取抽奖记录列表
 * @param {FindLuckyDrawArgs} data
 * @returns {Promise<FindLuckyDrawReply>}
 */
export function findLuckyDrawList(data) {
  const buffer = pblucky.FindLuckyDrawArgs.encode(data).finish().slice().buffer
  return request({
    url: '/v2/luckyAdmin/findLuckyDrawList',
    method: 'post',
    buffer,
    pb: 'pblucky.FindLuckyDrawReply'
  })
}

// ========== 统计数据 ==========

/**
 * 获取统计数据
 * @param {GetLuckyStatisticsArgs} data
 * @returns {Promise<GetLuckyStatisticsReply>}
 */
export function getLuckyStatistics(data) {
  const buffer = pblucky.GetLuckyStatisticsArgs.encode(data).finish().slice().buffer
  return request({
    url: '/v2/luckyAdmin/getLuckyStatistics',
    method: 'post',
    buffer,
    pb: 'pblucky.GetLuckyStatisticsReply'
  })
}

/**
 * 获取奖品统计
 * @param {GetLuckyPrizeStatisticsArgs} data
 * @returns {Promise<GetLuckyPrizeStatisticsReply>}
 */
export function getLuckyPrizeStatistics(data) {
  const buffer = pblucky.GetLuckyPrizeStatisticsArgs.encode(data).finish().slice().buffer
  return request({
    url: '/v2/luckyAdmin/getLuckyPrizeStatistics',
    method: 'post',
    buffer,
    pb: 'pblucky.GetLuckyPrizeStatisticsReply'
  })
}

// ========== 消耗配置管理 ==========

/**
 * 获取抽奖消耗配置
 * @returns {Promise<GetLuckyCostConfigsReply>}
 */
export function getLuckyCostConfigs() {
  const buffer = pbcommon.Empty.encode({}).finish().slice().buffer
  return request({
    url: '/v2/luckyAdmin/getLuckyCostConfigs',
    method: 'post',
    buffer,
    pb: 'pblucky.GetLuckyCostConfigsReply'
  })
}

/**
 * 更新抽奖消耗配置
 * @param {LuckyCostConfigModel} data
 * @returns {Promise<CommonResult>}
 */
export function updateLuckyCostConfig(data) {
  const buffer = pblucky.LuckyCostConfigModel.encode(data).finish().slice().buffer
  return request({
    url: '/v2/luckyAdmin/updateLuckyCostConfig',
    method: 'post',
    buffer,
    pb: 'pbcommon.CommonResult'
  })
}
