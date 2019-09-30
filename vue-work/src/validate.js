import Vue from 'vue';
import VeeValidate from 'vee-validate';
Vue.use(VeeValidate);
VeeValidate.Validator.extend('mobile', {
  validate: value => {
    return /^1\d{10}$/.test(value)
  },
  getMessage: field => field + '必须是11位手机号码'
});
