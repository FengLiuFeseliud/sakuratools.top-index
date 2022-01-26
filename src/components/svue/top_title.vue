<template>
    <router-link class="top-title" to="/">
        <span class="title-2">Sakura</span>Tools.top
    </router-link>
</template>

<script>
    export default {
        name:"top_title"
    }
</script>

<style scoped>
    .top-title {
        float: left;
        padding-left: 15px;
        line-height: 50px;
        font-weight: 700;
        color: var(--main-font-color);
        font-size: 32px;
        height: 50px;
    }

    .title-2 {
        color: var(--two-font-color);
    }
</style>