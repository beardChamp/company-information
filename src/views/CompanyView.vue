<template>
  <div class="company-view">
    <h1>{{company.name}} Information</h1>
    <section class="columns section">
      <div class="id column is-one-quarter">{{company.id}}</div>
      <div class="name column is-one-quarter">{{company.name}}</div>
      <div class="employees column is-one-quarter">{{company.numberOfEmployees}}</div>
      <div class="subscriptions column is-one-quarter">{{company.subscriptionsPerEmployee}}</div>
    </section>
  </div>
</template>

<script>
import companyData from '../services/CompanyService.js';

export default {
  data: function () {
    return {
      company: ''
    }
  },
  mounted: function () {
    this.getCompanyInfo();
  },
  methods: {
    getCompanyInfo() {
      companyData.getById( parseInt(this.$route.params.company_id, 10)).then((data) => {
        this.company = data;
      });
    }
  }
}
</script>