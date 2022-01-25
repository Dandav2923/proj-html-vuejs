<template>
<div class="container-fluid p-0 my-5">
    <MainTop />
    <MainMid />
    <MainBot />
</div>
</template>

<script>
import MainTop from "./MainTop.vue";
import MainMid from "./MainMid.vue";
import MainBot from "./MainBot.vue";
export default {
    components: {
        MainTop,
        MainMid,
        MainBot,
    },
    name: 'Main',
}
</script>

<style>

</style>