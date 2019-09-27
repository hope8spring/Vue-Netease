import Mock from 'mockjs';
import data from './homeData'
Mock.mock("/ban",{errno:0,data:data.ban});
Mock.mock("/policyDescList",{errno:0,data:data.policyDescList});
Mock.mock("/swipeSlide",{errno:0,data:data.swipeSlide});

