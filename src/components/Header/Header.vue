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
<HeaderBot
    v-for="(element, index) in headerBot"
    :key="index + 'ID2'"
    :linkHome=element.linkHome
    :linkElements=element.linkElements
    :linkFeatures=element.linkFeatures
    :linkPages=element.linkPages
    :linkPortfolio=element.linkPortfolio
    :linkBlog=element.linkBlog
    :linkShop=element.linkShop
/>
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
                    linkHome: 'home',
                    linkElements: 'elements',
                    linkFeatures: 'features',
                    linkPages: 'pages',
                    linkPortfolio: 'portfolio',
                    linkBlog: 'blog',
                    linkShop: 'shop'
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