<template>
  <div class="container">
    <nav class="navbar navbar-expand-lg navbar-light">
      <div class="collapse navbar-collapse d-flex justify-content-between" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a 
              class="nav-link ps-0 ms-0 text-uppercase text-decoration-none" 
              href="#">home </a>
          </li>
          <li class="nav-item">
            <a 
              class="nav-link text-uppercase text-decoration-none" 
              href="#">elements</a>
          </li>
          <li class="nav-item">
            <a 
              class="nav-link text-uppercase text-decoration-none" 
              href="#">features</a>
            </li>
            <li class="nav-item">
              <a 
                href="#"
                class="nav-link text-uppercase text-decoration-none">pages</a>
            </li>
            <li class="nav-item">
            <a 
              class="nav-link ps-0 text-uppercase text-decoration-none" 
              href="#">portfolio </a>
          </li>
          <li class="nav-item">
            <a 
              class="nav-link ps-0 text-uppercase text-decoration-none" 
              href="#">blog </a>
          </li>
          <li class="nav-item">
            <a 
              class="nav-link ps-0 text-uppercase text-decoration-none" 
              href="#">shop </a>
          </li>
        </ul>
        <span>
          <i class="fas fa-search"></i>
        </span>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
    name: 'HeaderBot'
}
</script>

<style style lang="scss" scoped>
@import "../../assets/scss/partials/_variables.scss";
.navbar-expand-lg .navbar-nav .nav-link {
  font-weight:bold ;
  margin: 0 1.8em 0 1.8em;
}
</style>