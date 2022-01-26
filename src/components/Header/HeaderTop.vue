<template>
  <nav class="navbar navbar-expand-lg navbar-light">
    <div class="container">
      <span>
          {{ description }}
      </span>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a 
              class="nav-link text-uppercase text-decoration-none" 
              href="#">{{ linkSign }} </a>
          </li>
          <li class="nav-item">
            <a 
              class="nav-link text-uppercase text-decoration-none" 
              href="#">{{ linkAbout }}</a>
          </li>
          <li class="nav-item">
            <a 
              class="nav-link text-uppercase text-decoration-none" 
              href="#">{{ linkContact}}</a>
            </li>
            <li class="nav-item">
              <a 
                href="#"
                class="nav-link text-uppercase text-decoration-none">{{ linkBuy }}</a>
            </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
    name: 'HeaderTop',
    props: [
      'description',
      'linkSign',
      'linkAbout',
      'linkBuy',
      'linkContact'
    ]
}
</script>

<style lang="scss" scoped>
// @import "../../assets/scss/style.scss";
@import "../../assets/scss/partials/_variables.scss";
nav {
  background-color: $bg-color-blue;
  span {
    color: $text-color-light-blue;
  }
  .collapse .nav-link {
    padding: 1em;
    color : $bg-color-white7;
  }
}
</style>