import Vue from 'vue';
import Router from 'vue-router';
import CompanyList from './views/CompanyList.vue';
import CompanyView from './views/CompanyView.vue';
import CompanyEdit from './views/CompanyEdit.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'companyList',
      component: CompanyList,
    },
    { 
      path: '/company/view/:company_id',
      name: 'companyView',
      component: CompanyView
    },
    { 
      path: '/company/edit/:company_id',
      name: 'companyEdit',
      component: CompanyEdit
    },
  ],
});
