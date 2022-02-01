<template>
    <div id="big-input-field">
        <label for="input-text">{{label_text}}</label>
        <input type="text" v-model="inputData" id="input-text">
        <button @click="updata">{{button_text}}</button>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                inputData: "",
            }
        },

        props: {
            label_text:{
                type: String,
                default(){
                    return "input"
                }
            },

            button_text:{
                type: String,
                default(){
                    return "updata"
                }
            },
        },

        methods:{
            updata(){
                this.$emit("updata", this.inputData)
            }
        },
    }
    
</script>

<style scoped>
    #big-input-field {
        height: 40px;
        border: 3px solid var(--main-background-color);
        background-color: var(--two-background-color);
        opacity: var(--opacity);

    }

    #big-input-field >* {
        float: left;
        font-weight: 700;
        font-size: 20px;
        line-height: 40px;
    }

    #big-input-field > label {
        padding: 0 10px;
        width: 160px;
        color: var(--two-font-color);
        font-size: 20px;
        line-height: 40px;
    }

    #big-input-field > input {
        width: 465px;
        height: 100%;
        border: none;
        padding: 0 10px;
        outline: none;
        background-color: transparent;
        border-right: 3px solid var(--main-background-color);
        border-left: 3px solid var(--main-background-color);
    }

    #big-input-field > input[type='text']{
        text-align: left;
        color: var(--input-color);
    }

    #big-input-field > button {
        width: 80px;
        height: 100%;
        background-color: transparent;
        color: var(--two-font-color);
        border: none;
        transition: all 0.3s;
        cursor: pointer;
    }

    #big-input-field > button:hover{
        color: var(--hover-font-color);
    }

</style>