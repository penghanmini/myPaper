/**
 * 作者: ph
 * 日期: 2019-01-17
 * 描述: 配置文件
 */

import buildDevelopCd from './buildDevelopCd'
// let buildEnv = process.env.BUILD_ENV
let buildEnv = 'buildDevelopCd'

const api = {
  //开发环境
  buildDevelopCd: buildDevelopCd,

}[buildEnv];
if (!api){
  throw new Error(`BUILD_ENV: ${buildEnv} not match`);
}

export default api
