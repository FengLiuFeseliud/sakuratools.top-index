<template>
    <div id="text-sbox">
        <slot></slot>
    </div>
</template>

<script>

</script>

<style scoped>
    #text-sbox {
        float: left;
        width: 100%;
        padding: 20px;
        background-color: var(--main-background-color);
        border-radius: 20px;
        box-shadow: 5px 5px 10px 5px var(--box-shadow);
    }
</style>