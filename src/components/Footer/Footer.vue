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
                <li
                  v-for="(element, index) in recentPost"
                  :key="index + 'ID5'"
                  class="list-group-item p-0 my-2 d-flex bg-dark" >
                  <img 
                    class="w-25 my-3 rounded-pill" 
                    :src="element.img" 
                    alt="">
                  <div class="container-info p-3 text-white">
                    <h5>{{ element.title }}</h5>
                    <p class="text-grey">{{ element.date }}</p>
                  </div>
                </li>
              </ul>
            </div>
            <div class="col comments">
              <h4 class="text-uppercase fs-6">Recent comments</h4>
              <div
                v-for="(element, index) in recentComments"
                :key="index + 'ID4'"
                class="container-comments">
                  <i class="fas fa-chevron-right color-blue me-2"></i>
                  <span><span>{{ element.author }}</span> commented on <a class="text-decoration-none" href="#">{{ element.comment }}</a></span>
                  <p class="text-grey">{{ element.date }}</p>
              </div>
            </div>
            <div class="col categories">
              <h4 class="text-uppercase fs-6">categories</h4>
              <div class="row flex-column">
                <div class="col">
                  <button 
                    v-for="(element, index) in buttons"
                    :key="index + 'ID3'"
                    type="button" 
                    class="btn text-uppercase text-white rounded-5"> {{ element.button}}
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
    data(){
      return {
        buttons: [
          {
            button:'gadgets',
          },
          {
            button:'photography',
          },
          {
            button:'lifestyle',
          },
          {
            button:'fashion',
          },
          {
            button:'recipes',
          },
          {
            button:'travel',
          },
          {
            button:'business',
          },
          {
            button:'architecture',
          },
          {
            button:'reviews',
          },
          {
            button:'sports',
          },
          {
            button:'videos',
          },
          {
            button: 'technology',
          },
          {
            button:'design',
          }
        ],
        recentComments: [
          {
            author: 'John Doe',
            comment: 'lorem lorem lorem',
            date: '26/01/2022'
          },
          {
            author: 'John Doe',
            comment: 'lorem lorem lorem',
            date: '26/01/2022'
          },
        ],
        recentPost: [
          {
            img:require('../../assets/img/our-office-4-square.jpg'),
            title: 'titolo articolo',
            date: '26/01/2022'
          },
          {
            img:require('../../assets/img/our-office-5-square.jpg'),
            title: 'titolo articolo',
            date: '26/01/2022'
          },
        ]
      }
    }
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
  left: 620px;
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