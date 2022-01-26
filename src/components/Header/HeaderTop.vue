<template>
  <li class="nav-item">
    <a 
      class="a-link nav-link text-uppercase text-decoration-none " 
      href="#">{{ linkNav }} </a>
  </li>
</template>

<script>
export default {
    name: 'HeaderTop',
    props: [
      'linkNav'
    ]
}
</script>

<style lang="scss" scoped>
// @import "../../assets/scss/style.scss";
@import "../../assets/scss/partials/_variables.scss";
.nav-item .nav-link.a-link {
  padding: 1em;
  color : $bg-color-white7;
}
</style>