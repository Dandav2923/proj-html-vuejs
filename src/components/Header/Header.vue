<template>
<div class="container-fluid">
<HeaderTop 
    v-for="(element, index) in headerTop"
    :key="index"
    :description=element.description
    :linkSign=element.linkSign
    :linkAbout=element.linkAbout
    :linkContact=element.linkContact
    :linkBuy=element.linkBuy
/>
<HeaderMid 
    v-for="(element, index) in img"
    :key="index + 'ID1'"
    :src=element.img_src
/>
<hr class="m-0">
<div class="container">
    <nav class="navbar navbar-expand-lg navbar-light">
        <div class="collapse navbar-collapse d-flex justify-content-between" id="navbarNav">
        <ul class="navbar-nav">
        <HeaderBot
            v-for="(element, index) in headerBot"
            :key="index + 'ID2'"
            :link=element.link
        />
        </ul>
        <span>
        <i class="fas fa-search"></i>
        </span>
        </div>
    </nav>
</div>
</div>
</template>

<script>
import HeaderTop from "./HeaderTop.vue";
import HeaderMid from "./HeaderMid.vue";
import HeaderBot from "./HeaderBot.vue";
export default {
components: {
    HeaderTop,
    HeaderMid,
    HeaderBot,
},
    name: 'Header',
    data(){
        return {
            headerTop: [
                {
                    description: 'Everything about Lifestyle, Travel and Gadgets!',
                    linkSign: 'sign in',
                    linkAbout: 'about us',
                    linkContact: 'contact us',
                    linkBuy: 'buy now'
                }
            ],
            img: [
                {
                    img_src:require( '../../assets/img/logo-default-slim.png' )
                }
            ],
            headerBot: [
                {
                    link: 'home',
                },
                {
                    link: 'elements',
                },
                {
                    link: 'features',
                },
                {
                    link: 'pages',
                },
                {
                    link: 'portfolio',
                },
                {
                    link: 'blog',
                },
                {
                    link: 'shop'
                }
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
@import "../../assets/scss/style.scss";
.container-fluid {
    padding:0 !important;
}
</style>