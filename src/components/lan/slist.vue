<template>
    <div class="slist">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name:"slist"
    }
</script>

<style scoped>
    /* 侧边栏 */
    .slist {
        float: left;
        margin-right: 59px;
        min-height: 800px;
        width: 300px;
        background-color: var(--main-background-color);
        box-shadow: 5px 5px 10px 5px var(--box-shadow);
    }
</style>