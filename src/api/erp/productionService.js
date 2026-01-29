import request from '@/utils/request'
import protoErp from '@/proto/erp.js'

export function createProductionOrder(data) {
  var buffer = protoErp.pbErpProduction.ProductionOrderModel.encode(data).finish().slice().buffer
  return request({
    url: '/v2/productionService/createProductionOrder',
    method: 'post',
    buffer,
    pb: 'pbcommon.CommonResult'
  })
}

export function updateProductionOrder(data) {
  var buffer = protoErp.pbErpProduction.ProductionOrderModel.encode(data).finish().slice().buffer
  return request({
    url: '/v2/productionService/updateProductionOrder',
    method: 'post',
    buffer,
    pb: 'pbcommon.CommonResult'
  })
}

export function deleteProductionOrder(data) {
  var buffer = protoErp.pbcommon.IdArgs.encode(data).finish().slice().buffer
  return request({
    url: '/v2/productionService/deleteProductionOrder',
    method: 'post',
    buffer,
    pb: 'pbcommon.CommonResult'
  })
}

export function findProductionOrderById(data) {
  var buffer = protoErp.pbcommon.IdArgs.encode(data).finish().slice().buffer
  return request({
    url: '/v2/productionService/findProductionOrderById',
    method: 'post',
    buffer,
    pb: 'pbErpProduction.FindProductionOrderReply'
  })
}

export function findProductionOrderList(data) {
  var buffer = protoErp.pbErpProduction.FindProductionOrderArgs.encode(data).finish().slice().buffer
  return request({
    url: '/v2/productionService/findProductionOrderList',
    method: 'post',
    buffer,
    pb: 'pbErpProduction.FindProductionOrderReply'
  })
}

export function createWorkOrder(data) {
  var buffer = protoErp.pbErpProduction.WorkOrderModel.encode(data).finish().slice().buffer
  return request({
    url: '/v2/productionService/createWorkOrder',
    method: 'post',
    buffer,
    pb: 'pbcommon.CommonResult'
  })
}

export function updateWorkOrder(data) {
  var buffer = protoErp.pbErpProduction.WorkOrderModel.encode(data).finish().slice().buffer
  return request({
    url: '/v2/productionService/updateWorkOrder',
    method: 'post',
    buffer,
    pb: 'pbcommon.CommonResult'
  })
}

export function deleteWorkOrder(data) {
  var buffer = protoErp.pbcommon.IdArgs.encode(data).finish().slice().buffer
  return request({
    url: '/v2/productionService/deleteWorkOrder',
    method: 'post',
    buffer,
    pb: 'pbcommon.CommonResult'
  })
}

export function findWorkOrderById(data) {
  var buffer = protoErp.pbcommon.IdArgs.encode(data).finish().slice().buffer
  return request({
    url: '/v2/productionService/findWorkOrderById',
    method: 'post',
    buffer,
    pb: 'pbErpProduction.FindWorkOrderReply'
  })
}

export function findWorkOrderList(data) {
  var buffer = protoErp.pbErpProduction.FindWorkOrderArgs.encode(data).finish().slice().buffer
  return request({
    url: '/v2/productionService/findWorkOrderList',
    method: 'post',
    buffer,
    pb: 'pbErpProduction.FindWorkOrderReply'
  })
}

export function updateWorkOrderProgress(data) {
  var buffer = protoErp.pbErpProduction.UpdateWorkOrderProgressArgs.encode(data).finish().slice().buffer
  return request({
    url: '/v2/productionService/updateWorkOrderProgress',
    method: 'post',
    buffer,
    pb: 'pbcommon.CommonResult'
  })
}

export function createMaterial(data) {
  var buffer = protoErp.pbErpProduction.MaterialModel.encode(data).finish().slice().buffer
  return request({
    url: '/v2/productionService/createMaterial',
    method: 'post',
    buffer,
    pb: 'pbcommon.CommonResult'
  })
}

export function updateMaterial(data) {
  var buffer = protoErp.pbErpProduction.MaterialModel.encode(data).finish().slice().buffer
  return request({
    url: '/v2/productionService/updateMaterial',
    method: 'post',
    buffer,
    pb: 'pbcommon.CommonResult'
  })
}

export function deleteMaterial(data) {
  var buffer = protoErp.pbcommon.IdArgs.encode(data).finish().slice().buffer
  return request({
    url: '/v2/productionService/deleteMaterial',
    method: 'post',
    buffer,
    pb: 'pbcommon.CommonResult'
  })
}

export function findMaterialById(data) {
  var buffer = protoErp.pbcommon.IdArgs.encode(data).finish().slice().buffer
  return request({
    url: '/v2/productionService/findMaterialById',
    method: 'post',
    buffer,
    pb: 'pbErpProduction.FindMaterialReply'
  })
}

export function findMaterialList(data) {
  var buffer = protoErp.pbErpProduction.FindMaterialArgs.encode(data).finish().slice().buffer
  return request({
    url: '/v2/productionService/findMaterialList',
    method: 'post',
    buffer,
    pb: 'pbErpProduction.FindMaterialReply'
  })
}

export function createEquipment(data) {
  var buffer = protoErp.pbErpProduction.EquipmentModel.encode(data).finish().slice().buffer
  return request({
    url: '/v2/productionService/createEquipment',
    method: 'post',
    buffer,
    pb: 'pbcommon.CommonResult'
  })
}

export function updateEquipment(data) {
  var buffer = protoErp.pbErpProduction.EquipmentModel.encode(data).finish().slice().buffer
  return request({
    url: '/v2/productionService/updateEquipment',
    method: 'post',
    buffer,
    pb: 'pbcommon.CommonResult'
  })
}

export function deleteEquipment(data) {
  var buffer = protoErp.pbcommon.IdArgs.encode(data).finish().slice().buffer
  return request({
    url: '/v2/productionService/deleteEquipment',
    method: 'post',
    buffer,
    pb: 'pbcommon.CommonResult'
  })
}

export function findEquipmentById(data) {
  var buffer = protoErp.pbcommon.IdArgs.encode(data).finish().slice().buffer
  return request({
    url: '/v2/productionService/findEquipmentById',
    method: 'post',
    buffer,
    pb: 'pbErpProduction.FindEquipmentReply'
  })
}

export function findEquipmentList(data) {
  var buffer = protoErp.pbErpProduction.FindEquipmentArgs.encode(data).finish().slice().buffer
  return request({
    url: '/v2/productionService/findEquipmentList',
    method: 'post',
    buffer,
    pb: 'pbErpProduction.FindEquipmentReply'
  })
}

export function reportRepair(data) {
  var buffer = protoErp.pbErpProduction.ReportRepairArgs.encode(data).finish().slice().buffer
  return request({
    url: '/v2/productionService/reportRepair',
    method: 'post',
    buffer,
    pb: 'pbcommon.CommonResult'
  })
}

export function completeRepair(data) {
  var buffer = protoErp.pbErpProduction.CompleteRepairArgs.encode(data).finish().slice().buffer
  return request({
    url: '/v2/productionService/completeRepair',
    method: 'post',
    buffer,
    pb: 'pbcommon.CommonResult'
  })
}

