import request from '@/utils/request'
import protoErp from '@/proto/erp.js'

export function createProduct(data) {
  var buffer = protoErp.pbErpProduct.ProductModel.encode(data).finish().slice().buffer
  return request({
    url: '/v2/productService/createProduct',
    method: 'post',
    buffer,
    pb: 'pbcommon.CommonResult'
  })
}

export function updateProduct(data) {
  var buffer = protoErp.pbErpProduct.ProductModel.encode(data).finish().slice().buffer
  return request({
    url: '/v2/productService/updateProduct',
    method: 'post',
    buffer,
    pb: 'pbcommon.CommonResult'
  })
}

export function deleteProduct(data) {
  var buffer = protoErp.pbcommon.IdArgs.encode(data).finish().slice().buffer
  return request({
    url: '/v2/productService/deleteProduct',
    method: 'post',
    buffer,
    pb: 'pbcommon.CommonResult'
  })
}

export function findProductById(data) {
  var buffer = protoErp.pbcommon.IdArgs.encode(data).finish().slice().buffer
  return request({
    url: '/v2/productService/findProductById',
    method: 'post',
    buffer,
    pb: 'pbErpProduct.FindProductReply'
  })
}

export function findProductList(data) {
  var buffer = protoErp.pbErpProduct.FindProductArgs.encode(data).finish().slice().buffer
  return request({
    url: '/v2/productService/findProductList',
    method: 'post',
    buffer,
    pb: 'pbErpProduct.FindProductReply'
  })
}

export function updateStock(data) {
  var buffer = protoErp.pbErpProduct.UpdateStockArgs.encode(data).finish().slice().buffer
  return request({
    url: '/v2/productService/updateStock',
    method: 'post',
    buffer,
    pb: 'pbcommon.CommonResult'
  })
}

export function createCategory(data) {
  var buffer = protoErp.pbErpProduct.ProductCategory.encode(data).finish().slice().buffer
  return request({
    url: '/v2/productService/createCategory',
    method: 'post',
    buffer,
    pb: 'pbcommon.CommonResult'
  })
}

export function updateCategory(data) {
  var buffer = protoErp.pbErpProduct.ProductCategory.encode(data).finish().slice().buffer
  return request({
    url: '/v2/productService/updateCategory',
    method: 'post',
    buffer,
    pb: 'pbcommon.CommonResult'
  })
}

export function deleteCategory(data) {
  var buffer = protoErp.pbcommon.IdArgs.encode(data).finish().slice().buffer
  return request({
    url: '/v2/productService/deleteCategory',
    method: 'post',
    buffer,
    pb: 'pbcommon.CommonResult'
  })
}

export function findCategoryList(data) {
  var buffer = protoErp.pbErpProduct.FindCategoryArgs.encode(data).finish().slice().buffer
  return request({
    url: '/v2/productService/findCategoryList',
    method: 'post',
    buffer,
    pb: 'pbErpProduct.FindCategoryReply'
  })
}

