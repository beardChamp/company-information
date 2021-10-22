<template>
  <div class="company-list">
    <h1>All Companies</h1>
    <ul>
      <li v-for="company in companies" :key="company.id">
        <div class="company-id">{{company.id}}</div>
        <div class="company-name"><router-link :to="{name:'companyView', params: {id: company.id}}">{{company.name}}</router-link></div>
        <div class="company-edit"><router-link :to="{name:'companyEdit', params: {id: company.id}}" tag="button">Edit</router-link></div>
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