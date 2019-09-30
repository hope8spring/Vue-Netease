import Mister from '@/pages/Mister/Mister';
import Lister from '@/pages/Lister/Lister';
import Discover from '@/pages/Discover/Discover';
import Car from '@/pages/Car/Car';
import Login from '@/pages/Login/Login';
import LoginPhone from '@/pages/Login/LonginPhone';


export default[
  {path:'/Mister',component:Mister},
  {path:'/Lister',
    component:Lister,
  },
  {path:'/Discover',component:Discover},
  {path:'/Car',component:Car},
  {path:'/Login',component:Login},
  {path:'/LoginPhone',component:LoginPhone},
  {path:'/',redirect:'/Mister'},

]
