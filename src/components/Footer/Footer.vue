<template>
<footer>
  <div class="container-fluid position-relative bg-footer">
    <div class="container">
      <div class="row justify-content-center py-5">
        <div class="col-12">
          <div class="row row-cols-4">
            <div class="col about">
              <h4 class="text-uppercase fs-6">about the blog</h4>
              <p class="text-grey">Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam delectus explicabo sunt amet eaque distinctio iste expedita minima quo similique
              </p>
              <p class="text-grey">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem labore, modi aspernatur voluptas nobis in! Nobis incidunt quidem earum est laboriosam aliquid blanditiis.
              </p>
              <h4 class="text-uppercase fs-6">
                view more 
                <i class="fas fa-chevron-right"></i>
              </h4>
            </div>
            <div class="col recent-post">
              <h4 class="text-uppercase fs-6">Recent post</h4>
              <ul class="list-group list-group-flush ">
                <li class="list-group-item p-0 my-2 d-flex bg-dark" >
                  <img class="w-25 my-3 rounded-pill" src="../../assets/img/our-office-4-square.jpg" alt="">
                  <div class="container-info p-3 text-white">
                    <h5>titolo articolo</h5>
                    <p class="text-grey">data articolo</p>
                  </div>
                </li>
                <li class="list-group-item p-0 my-2 d-flex bg-dark">
                  <img class="w-25 my-3 rounded-pill" src="../../assets/img/our-office-5-square.jpg" alt="">
                  <div class="container-info p-3 text-white">
                    <h5>titolo articolo</h5>
                    <p class="text-grey">data articolo</p>
                  </div>
                </li>
              </ul>
            </div>
            <div class="col comments">
              <h4 class="text-uppercase fs-6">Recent comments</h4>
              <div class="container-comments">
                <i class="fas fa-chevron-right color-blue me-2"></i>
                <span>john doe commented on <a class="text-decoration-none" href="#">lorem lorem lorem</a></span>
                <p class="text-grey">data articolo</p>
                <i class="fas fa-chevron-right color-blue me-2"></i>
                <span>john doe commented on <a class="text-decoration-none" href="#">lorem lorem lorem</a></span>
                <p class="text-grey">data articolo</p>
              </div>
            </div>
            <div class="col categories">
              <h4 class="text-uppercase fs-6">categories</h4>
              <div class="row flex-column">
                <div class="col">
                  <button type="button" class="btn text-uppercase text-white rounded-5">gadgets
                  </button>
                  <button type="button" class="btn text-uppercase text-white rounded-5">photography
                  </button>
                </div>
                <div class="col">
                  <button type="button" class="btn text-uppercase text-white rounded-5">lifestyle
                  </button>
                  <button type="button" class="btn text-uppercase text-white rounded-5">fashion
                  </button>
                  <button type="button" class="btn text-uppercase text-white rounded-5">recipes
                  </button>
                </div>
                <div class="col">
                  <button type="button" class="btn text-uppercase text-white rounded-5">travel
                  </button>
                  <button type="button" class="btn text-uppercase text-white rounded-5">business
                  </button>
                </div>
                <div class="col">
                  <button type="button" class="btn text-uppercase text-white rounded-5">architecture
                  </button>
                  <button type="button" class="btn text-uppercase text-white rounded-5">reviews
                  </button>
                </div>
                <div class="col">
                  <button type="button" class="btn text-uppercase text-white rounded-5">sports
                  </button>
                  <button type="button" class="btn text-uppercase text-white rounded-5">videos
                  </button>
                  <button type="button" class="btn text-uppercase text-white rounded-5">technology
                  </button>
                </div>
                <div class="col">
                  <button type="button" class="btn text-uppercase text-white rounded-5">design
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  </div>
  <div class="container-fluid bg-dark-grey ">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-12 d-flex align-items-center justify-content-between">
          <div class="container-img-footer">
            <img class="w-50" src="../../assets/img/logo-footer.png" alt="">
          </div>
          <div class="copyright">
            <p class="m-0 text-grey">© Copyright 2020. All rights Reserved.</p>
          </div>
          <div class="container-links-faq text-grey">
            <i class="fas fa-chevron-right mx-2">FAQ's</i>
            <i class="fas fa-chevron-right mx-2">Sitemap</i>
            <i class="fas fa-chevron-right mx-2">Contact Us</i>
          </div>
        </div>
      </div>
      <div class="container-absolute">
        <h3>Get in touch</h3>
      </div>
    </div>
  </div>
</div>
</footer>
</template>

<script>
export default {
    name: 'Footer',
}
</script>

<style lang="scss" scoped>
@import "../../assets/scss/partials/_variables.scss";
.bg-footer {
  background-color: $bg-color-semi-black;
}
.col, .col-12{
  color: white;
}
.container-absolute {
  display: inline-block;
  color: $text-color-white;
  background-color: $bg-color-blue;
  position: absolute;
  top: -30px;
  left: 283px;
  // box-shadow: 5px 5px 8px 8px blue,
  // box-shadow: 5px -10px  blue;
  h3 {
    padding: 0.5em 0.7em;
    font-size: 1.5em;
  }
}
.text-grey {
  color: $text-color-dark-grey2;
}
.text-white {
  color: $text-color-white;
}
.color-blue {
  color: $text-color-blue;
}
.btn {
  margin: 0.1em;
  background-color: $text-color-black;
}
.bg-dark-grey {
  background-color: $bg-color-dark-grey3;
}
</style>