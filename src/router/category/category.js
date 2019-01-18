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

export default[
  {
    path: '/index',
    name: 'index',
    component: index,
  },
  {
    path: '/livingHome',
    name: 'livingHome',
    component: livingHome,
  },
  {
    path: '/shoeBag',
    name: 'shoeBag',
    component: shoeBag,
  },
  {
    path: '/cloth',
    name: 'cloth',
    component: shoeBag,
  },
  {
    path: '/electric',
    name: 'electric',
    component: electric,
  },
  {
    path: '/personalCare',
    name: 'personalCare',
    component: personalCare,
  },
  {
    path: '/diet',
    name: 'diet',
    component: diet,
  },
  {
    path: '/kitchen',
    name: 'kitchen',
    component: kitchen,
  },
  {
    path: '/baby',
    name: 'baby',
    component: baby,
  },
  {
    path: '/literaryForm',
    name: 'literaryForm',
    component: literaryForm,
  },
  {
    path: '/special',
    name: 'special',
    component: special,
  },
  {
    path: '/productDetails',
    name: 'productDetails',
    component: productDetails,
  },
]
