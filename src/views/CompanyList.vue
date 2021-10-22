<template>
  <div class="company-list">
    <h1>All Companies</h1>
    <ul>
      <li v-for="company in companies" :key="company.id">
        {{company.name}}
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