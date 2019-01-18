/**
 * 作者: ph
 * 日期: 2019-01-18
 * 描述: layout接口
 */
import apiFactory from "./apiFactory";

const module = {
  moduleName: "layout",
  apis: [{
    // 首页走马灯
    method: "get", // 请求方式
    name: "layoutCategory", // 接口名称
    url: "/category" // 接口全路径
  },]
};

export default apiFactory(module)
