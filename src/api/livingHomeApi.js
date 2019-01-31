/**
 * 作者: ph
 * 日期: 2019-01-17
 * 描述: 首页接口
 */
import apiFactory from "./apiFactory";

const module = {
  moduleName: "livingHome",
  apis: [{
    // 居家床品件套
    method: "get", // 请求方式
    name: "goodsList", // 接口名称
    url: "/goodsList" // 接口全路径
  },]
};

export default apiFactory(module)
