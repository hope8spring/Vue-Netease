import Mock from 'mockjs';
import data from './homeData'
import category from './categoryList'
Mock.mock("/ban",{errno:0,data:data.ban});
Mock.mock("/policyDescList",{errno:0,data:data.policyDescList});
Mock.mock("/categoryList",{errno:0,category:category.categoryList});

