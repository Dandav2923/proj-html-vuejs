<template>
<div class="container-fluid">
<!-- creazione dinamica del componente figlio (HeaderTop) -->
    <nav class="navbar navbar-expand-lg navbar-light bg-color-blue">
        <div class="container">
            <span class="color-text-blue">
                {{ description }}
            </span>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <HeaderTop 
                        v-for="(element, index) in headerTop"
                        :key="index"
                        :linkNav=element.link
                    />
                </ul>
            </div>
        </div>
    </nav>
<!-- creazione dinamica del componente figlio (HeaderMid) -->
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
<!-- creazione dinamica del componente figlio (Headerbot) che essendo un <li> viene geretato tot volte quanti sono gli elementi nei data -->
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
            description: 'Everything about Lifestyle, Travel and Gadgets!',
            headerTop: [
                {
                    link: 'sign in',
                },
                {
                    link: 'about us',
                },
                {
                    link: 'contact us',
                },
                {
                    link: 'buy now',
                },
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
.bg-color-blue {
    background-color: $bg-color-blue;
}
.color-text-blue {
    color: $text-color-light-blue;
}
</style>