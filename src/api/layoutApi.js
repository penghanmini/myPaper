/**
 * 作者: ph
 * 日期: 2019-01-18
 * 描述: layout接口
 */
import apiFactory from "./apiFactory";

const module = {
  moduleName: "layout",
  apis: [{
    // 收货地址查询
    method: "get", // 请求方式
    name: "address", // 接口名称
    url: "/address" // 接口全路径
  },{
    // 走马灯
    method: "get", // 请求方式
    name: "carousel", // 接口名称
    url: "/carousel" // 接口全路径
  },{
    // 分类
    method: "get", // 请求方式
    name: "getCategory", // 接口名称
    url: "/categoryList" // 接口全路径
  },]
};

export default apiFactory(module)
