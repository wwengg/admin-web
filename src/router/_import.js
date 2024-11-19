// module.exports = file => () => {
//     return import ('@/' + file)
// }

// module.exports = file => import ('@/' + file)

module.exports = file => (resolve) => {
  return require(['@/' + file], resolve)
}
