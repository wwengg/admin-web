import request from '@/utils/request'
import protoGame from '@/proto/game.js'
const { pbbattle, pbcommon } = protoGame

// ========== 助战选项管理 ==========

export function createAssistOption(data) {
  const buffer = pbbattle.AssistOptionModel.encode(data).finish().slice().buffer
  return request({
    url: '/v2/battleAdmin/createAssistOption',
    method: 'post',
    buffer,
    pb: 'pbcommon.CommonResult'
  })
}

export function updateAssistOption(data) {
  const buffer = pbbattle.AssistOptionModel.encode(data).finish().slice().buffer
  return request({
    url: '/v2/battleAdmin/updateAssistOption',
    method: 'post',
    buffer,
    pb: 'pbcommon.CommonResult'
  })
}

export function deleteAssistOption(data) {
  const buffer = pbcommon.IdArgs.encode(data).finish().slice().buffer
  return request({
    url: '/v2/battleAdmin/deleteAssistOption',
    method: 'post',
    buffer,
    pb: 'pbcommon.CommonResult'
  })
}

export function findAssistOptionById(data) {
  const buffer = pbcommon.IdArgs.encode(data).finish().slice().buffer
  return request({
    url: '/v2/battleAdmin/findAssistOptionById',
    method: 'post',
    buffer,
    pb: 'pbbattle.FindAssistOptionReply'
  })
}

export function findAssistOptionList(data) {
  const buffer = pbbattle.FindAssistOptionArgs.encode(data).finish().slice().buffer
  return request({
    url: '/v2/battleAdmin/findAssistOptionList',
    method: 'post',
    buffer,
    pb: 'pbbattle.FindAssistOptionReply'
  })
}

// ========== 概率配置管理 ==========

export function createProbabilityConfig(data) {
  const buffer = pbbattle.ProbabilityConfigModel.encode(data).finish().slice().buffer
  return request({
    url: '/v2/battleAdmin/createProbabilityConfig',
    method: 'post',
    buffer,
    pb: 'pbcommon.CommonResult'
  })
}

export function updateProbabilityConfig(data) {
  const buffer = pbbattle.ProbabilityConfigModel.encode(data).finish().slice().buffer
  return request({
    url: '/v2/battleAdmin/updateProbabilityConfig',
    method: 'post',
    buffer,
    pb: 'pbcommon.CommonResult'
  })
}

export function deleteProbabilityConfig(data) {
  const buffer = pbcommon.IdArgs.encode(data).finish().slice().buffer
  return request({
    url: '/v2/battleAdmin/deleteProbabilityConfig',
    method: 'post',
    buffer,
    pb: 'pbcommon.CommonResult'
  })
}

export function findProbabilityConfigById(data) {
  const buffer = pbcommon.IdArgs.encode(data).finish().slice().buffer
  return request({
    url: '/v2/battleAdmin/findProbabilityConfigById',
    method: 'post',
    buffer,
    pb: 'pbbattle.FindProbabilityConfigReply'
  })
}

export function findProbabilityConfigList(data) {
  const buffer = pbbattle.FindProbabilityConfigArgs.encode(data).finish().slice().buffer
  return request({
    url: '/v2/battleAdmin/findProbabilityConfigList',
    method: 'post',
    buffer,
    pb: 'pbbattle.FindProbabilityConfigReply'
  })
}

// ========== 游戏回合管理 ==========

export function findBattleRoundById(data) {
  const buffer = pbcommon.IdArgs.encode(data).finish().slice().buffer
  return request({
    url: '/v2/battleAdmin/findBattleRoundById',
    method: 'post',
    buffer,
    pb: 'pbbattle.FindBattleRoundReply'
  })
}

export function findBattleRoundList(data) {
  const buffer = pbbattle.FindBattleRoundArgs.encode(data).finish().slice().buffer
  return request({
    url: '/v2/battleAdmin/findBattleRoundList',
    method: 'post',
    buffer,
    pb: 'pbbattle.FindBattleRoundReply'
  })
}

// ========== 助战记录管理 ==========

export function findAssistRecordById(data) {
  const buffer = pbcommon.IdArgs.encode(data).finish().slice().buffer
  return request({
    url: '/v2/battleAdmin/findAssistRecordById',
    method: 'post',
    buffer,
    pb: 'pbbattle.FindAssistRecordReply'
  })
}

export function findAssistRecordList(data) {
  const buffer = pbbattle.FindAssistRecordArgs.encode(data).finish().slice().buffer
  return request({
    url: '/v2/battleAdmin/findAssistRecordList',
    method: 'post',
    buffer,
    pb: 'pbbattle.FindAssistRecordReply'
  })
}

// ========== 奖池流水管理 ==========

export function findPrizePoolLogById(data) {
  const buffer = pbcommon.IdArgs.encode(data).finish().slice().buffer
  return request({
    url: '/v2/battleAdmin/findPrizePoolLogById',
    method: 'post',
    buffer,
    pb: 'pbbattle.FindPrizePoolLogReply'
  })
}

export function findPrizePoolLogList(data) {
  const buffer = pbbattle.FindPrizePoolLogArgs.encode(data).finish().slice().buffer
  return request({
    url: '/v2/battleAdmin/findPrizePoolLogList',
    method: 'post',
    buffer,
    pb: 'pbbattle.FindPrizePoolLogReply'
  })
}

// ========== 中奖记录管理 ==========

export function findWinRecordById(data) {
  const buffer = pbcommon.IdArgs.encode(data).finish().slice().buffer
  return request({
    url: '/v2/battleAdmin/findWinRecordById',
    method: 'post',
    buffer,
    pb: 'pbbattle.FindWinRecordReply'
  })
}

export function findWinRecordList(data) {
  const buffer = pbbattle.FindWinRecordArgs.encode(data).finish().slice().buffer
  return request({
    url: '/v2/battleAdmin/findWinRecordList',
    method: 'post',
    buffer,
    pb: 'pbbattle.FindWinRecordReply'
  })
}

// ========== 系统号管理 ==========

export function createSystemUser(data) {
  const buffer = pbbattle.SystemUserModel.encode(data).finish().slice().buffer
  return request({
    url: '/v2/battleAdmin/createSystemUser',
    method: 'post',
    buffer,
    pb: 'pbcommon.CommonResult'
  })
}

export function updateSystemUser(data) {
  const buffer = pbbattle.SystemUserModel.encode(data).finish().slice().buffer
  return request({
    url: '/v2/battleAdmin/updateSystemUser',
    method: 'post',
    buffer,
    pb: 'pbcommon.CommonResult'
  })
}

export function deleteSystemUser(data) {
  const buffer = pbcommon.IdArgs.encode(data).finish().slice().buffer
  return request({
    url: '/v2/battleAdmin/deleteSystemUser',
    method: 'post',
    buffer,
    pb: 'pbcommon.CommonResult'
  })
}

export function findSystemUserById(data) {
  const buffer = pbcommon.IdArgs.encode(data).finish().slice().buffer
  return request({
    url: '/v2/battleAdmin/findSystemUserById',
    method: 'post',
    buffer,
    pb: 'pbbattle.FindSystemUserReply'
  })
}

export function findSystemUserList(data) {
  const buffer = pbbattle.FindSystemUserArgs.encode(data).finish().slice().buffer
  return request({
    url: '/v2/battleAdmin/findSystemUserList',
    method: 'post',
    buffer,
    pb: 'pbbattle.FindSystemUserReply'
  })
}

// ========== 武将管理 ==========

export function createGeneral(data) {
  const buffer = pbbattle.GeneralModel.encode(data).finish().slice().buffer
  return request({
    url: '/v2/battleAdmin/createGeneral',
    method: 'post',
    buffer,
    pb: 'pbcommon.CommonResult'
  })
}

export function updateGeneral(data) {
  const buffer = pbbattle.GeneralModel.encode(data).finish().slice().buffer
  return request({
    url: '/v2/battleAdmin/updateGeneral',
    method: 'post',
    buffer,
    pb: 'pbcommon.CommonResult'
  })
}

export function deleteGeneral(data) {
  const buffer = pbcommon.IdArgs.encode(data).finish().slice().buffer
  return request({
    url: '/v2/battleAdmin/deleteGeneral',
    method: 'post',
    buffer,
    pb: 'pbcommon.CommonResult'
  })
}

export function findGeneralById(data) {
  const buffer = pbcommon.IdArgs.encode(data).finish().slice().buffer
  return request({
    url: '/v2/battleAdmin/findGeneralById',
    method: 'post',
    buffer,
    pb: 'pbbattle.FindGeneralReply'
  })
}

export function findGeneralList(data) {
  const buffer = pbbattle.FindGeneralArgs.encode(data).finish().slice().buffer
  return request({
    url: '/v2/battleAdmin/findGeneralList',
    method: 'post',
    buffer,
    pb: 'pbbattle.FindGeneralReply'
  })
}

// ========== 统计数据 ==========

export function getGameStatistics(data) {
  const buffer = pbbattle.GetGameStatisticsArgs.encode(data).finish().slice().buffer
  return request({
    url: '/v2/battleAdmin/getGameStatistics',
    method: 'post',
    buffer,
    pb: 'pbbattle.GetGameStatisticsReply'
  })
}

export function getGeneralStatistics(data) {
  const buffer = pbbattle.GetGeneralStatisticsArgs.encode(data).finish().slice().buffer
  return request({
    url: '/v2/battleAdmin/getGeneralStatistics',
    method: 'post',
    buffer,
    pb: 'pbbattle.GetGeneralStatisticsReply'
  })
}
