<template>
  <div class="container">
      <img 
        class="py-4"
        :src="src"
        alt="logo della società">
  </div>
</template>

<script>
export default {
    name: 'HeaderMid',
    props: [
      'src',
    ]
}
</script>

<style lang="scss" scoped>
@import "../../assets/scss/partials/_variables.scss";

</style>