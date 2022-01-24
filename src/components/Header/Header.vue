<template>
<div class="container">
<HeaderTop />
<HeaderMid />
<HeaderBot />
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
}
</script>

<style>

</style>