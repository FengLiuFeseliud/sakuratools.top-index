<template>
    <div :id="name" class="line-numbers markdown">

    </div>
</template>

<script>
    import axios from "axios"
    import { marked } from "marked"
    import Prism from "prismjs"

    export default {
        props: {
            name: {
                type: String,
                default(){
                    return "markdown"
                }
            },

            url: {
                type: String
            }
        },

        mounted() {
            axios.get(this.url).then(res => {
                document.getElementById(this.name).innerHTML = marked.parse(
                    res.data,
                    {
                        gfm: true,
                        tables: true,
                        breaks: true,
                    }
                )
                Prism.highlightAll()
            })
        },
    }

</script>

<style>
    .markdown {
        margin: 0 auto;
        padding: 20px;
    }

    .markdown > * {
        /* display: block; */
        margin: 10px 0;
    }

    .markdown p {
        margin: 0;
    }
</style>