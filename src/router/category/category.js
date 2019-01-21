/**
 * 作者: ph
 * 日期: 2019-01-17
 * 描述:
 */
import index from '@/pages/index/index.vue'
import livingHome from '@/pages/livingHome/livingHome.vue'
import shoeBag from '@/pages/shoeBag/shoeBag.vue'
import cloth from '@/pages/cloth/cloth.vue'
import electric from '@/pages/electric/electric.vue'
import personalCare from '@/pages/personalCare/personalCare.vue'
import diet from '@/pages/diet/diet.vue'
import kitchen from '@/pages/kitchen/kitchen.vue'
import baby from '@/pages/baby/baby.vue'
import literaryForm from '@/pages/literaryForm/literaryForm.vue'
import special from '@/pages/special/special.vue'
import productDetails from '@/pages/productDetails/productDetails.vue'
import newProduct from '@/pages/newProduct/newProduct.vue'
import brandManufacturer from '@/pages/brandManufacturer/brandManufacturer.vue'

export default[
  {//首页
    path: '/',
    name: 'index',
    component: index,
  },
  {//家居
    path: '/livingHome',
    name: 'livingHome',
    component: livingHome,
  },
  {//鞋包
    path: '/shoeBag',
    name: 'shoeBag',
    component: shoeBag,
  },
  {//服装
    path: '/cloth',
    name: 'cloth',
    component: cloth,
  },
  {//电器
    path: '/electric',
    name: 'electric',
    component: electric,
  },
  {//洗护
    path: '/personalCare',
    name: 'personalCare',
    component: personalCare,
  },
  {//饮食
    path: '/diet',
    name: 'diet',
    component: diet,
  },
  {//餐厨
    path: '/kitchen',
    name: 'kitchen',
    component: kitchen,
  },
  {//婴童
    path: '/baby',
    name: 'baby',
    component: baby,
  },
  {//文体
    path: '/literaryForm',
    name: 'literaryForm',
    component: literaryForm,
  },
  {//特色区
    path: '/special',
    name: 'special',
    component: special,
  },
  {//商品详情页
    path: '/productDetails',
    name: 'productDetails',
    component: productDetails,
  },
  {//新品区
    path: '/newProduct',
    name: 'newProduct',
    component: newProduct,
  },
  {//品牌制造商
    path: '/brandManufacturer',
    name: 'brandManufacturer',
    component: brandManufacturer,
  },
]
