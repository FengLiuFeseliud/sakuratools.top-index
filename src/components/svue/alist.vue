<template>
    <div id="nav">
        <router-link v-for="itme in tags" :key="itme" :to="itme.url">
            {{itme.text}}
        </router-link>
    </div>
</template>

<script>
    export default {
        props: [
            "tags"
        ]
    }
</script>

<style scoped>
    a {
        display: inline-block;
        transition: background-color 0.3s;
    }

    a:hover {
        background-color: var(--two-background-color);
    }
</style>