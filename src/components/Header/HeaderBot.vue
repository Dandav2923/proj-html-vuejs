<template>
  <li class="nav-item">
    <a 
      class="nav-link ps-0 ms-0 text-uppercase text-decoration-none" 
      href="#"> {{ link }} </a>
  </li>
</template>

<script>
export default {
    name: 'HeaderBot',
    props: [
      'link'
    ]
}
</script>

<style style lang="scss" scoped>
@import "../../assets/scss/partials/_variables.scss";
.navbar-expand-lg .navbar-nav .nav-link {
  font-weight:bold ;
  margin: 0 1.8em 0 1.8em;
}
</style>