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
        color: var(--main-font-color);
        font-size: 32px;
        display: inline-block;
        height: 50px;
    }

    .title-2 {
        color: var(--two-font-color);
    }
</style>