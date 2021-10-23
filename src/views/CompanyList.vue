<template>
  <div class="company-list">
    <h1>All Companies</h1>
    <ul>
      <li v-for="company in companies" :key="company.id" class="columns">
        <div class="company-id column is-one-third">{{company.id}}</div>
        <div class="company-name column is-one-third">
          <router-link :to="{name:'companyView', params: {company_id: company.id}}">{{company.name}}</router-link>
        </div>
        <div class="company-edit column is-one-third">
          <router-link :to="{name:'companyEdit', params: {company_id: company.id}}" tag="button">Edit</router-link>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import companyData from '../services/CompanyService.js';

export default {
  data: function () {
    return {
      companies: ''
    }
  },
  mounted: function () {
    this.getAllCompanies();
  },
  methods: {
    getAllCompanies() {
      companyData.getAll().then((data) => {
        this.companies = data;
      });
    }
  }
}
</script>