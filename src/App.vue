<template>
  <div id="app">
    <nav class="navbar" aria-label="navigation">
      <div class="navbar-brand">
        Company Information
      </div>
      <div class="navbar-menu">
        <!-- navbar start, navbar end -->
      </div>
    </nav>
    <router-view/>
  </div>
</template>

<style lang="scss">
@import '~bulma'; // This applies Bulma CSS to my whole frontend

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #222;
}

a {
  font-weight: bold;
  color: #009;
}
</style>
