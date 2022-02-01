<template>
    <a id="go-top" @click="goTop" v-show="show_in">
        <br>
        <img src="../../assets/gotopbg.png">
    </a>
</template>

<script>
    export default {
        data(){
            return {
                show_in: false
            }
        },

        props:{
            to_name:{
                type:String,
                default(){
                    return "#to-top"
                }
            }
        },

        mounted(){
            window.addEventListener("scroll", this.scroll)
        },
        
        unmounted(){
            window.removeEventListener("scroll", this.scroll)
        },

        methods:{
            scroll(){
                let scroll = document.documentElement.scrollTop || document.body.scrollTop
                if(scroll > window.screen.height / 2){
                    this.show_in = true
                }else{
                    this.show_in = false
                }
            },

            goTop(){
                document.querySelector(this.to_name).scrollIntoView({
                    block: 'end',
                    behavior: 'smooth' 
                })
            }
        }
    }
</script>

<style scoped>
    #go-top {
        position: fixed;
        top: 75%;
        right: 50px;
        width: 80px;
        border-radius: 10px;
        background-color: var(--two-background-color);
        text-align: center;
        font-size: 50px;
        cursor: pointer;
    }

    #go-top > img{
        width: 80px;
        height: 80px;
    }   
</style>