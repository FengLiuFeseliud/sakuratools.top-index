<template>
    <div id="nav">
        <router-link v-for="itme in tags" :key="itme" :to="itme.url" @click="setTitle(itme.text)">
            {{itme.text}}
        </router-link>
        <a  v-for="itme in http_tags" :key="itme" :href="itme.url">
            {{itme.text}}
        </a>
    </div>
</template>

<script>
    export default {
        props:{
            tags:{
                type: Array,
                default(){
                    return []
                }
            },
            http_tags:{
                type: Array,
                default(){
                    return []
                }
            },
            
        },

        methods:{
            setTitle(title){
                document.title = title
            }
        }
    }
</script>

<style scoped>
    a {
        display: inline-block;
    }

    a:hover {
        background-color: var(--two-background-color);
    }
</style>