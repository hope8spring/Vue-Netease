import Mister from '@/pages/Mister/Mister';
import Lister from '@/pages/Lister/Lister';
import Discover from '@/pages/Discover/Discover';
import Car from '@/pages/Car/Car';
import Login from '@/pages/Login/Login';


export default[
  {path:'/Mister',component:Mister},
  {path:'/Lister',
    component:Lister,
    children:[
      {path:'/Mister',component:Mister},
      {path:'/Lister',component:Mister},
      {path:'/Discover',component:Mister},
      {path:'/Car',component:Mister},
      {path:'/Login',component:Mister},
    ]

  },
  {path:'/Discover',component:Discover},
  {path:'/Car',component:Car},
  {path:'/Login',component:Login},
  {path:'/',redirect:'/Mister'},

]
