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
                document.getElementById(this.name).innerHTML += marked.parse(
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
        margin: 10px 0;
    }

    .markdown h1 {
        border-bottom: 1px solid var(--h1-border-color);
    }

    .markdown p {
        margin: 0;
    }

    .markdown pre {
        background-color: var(--pre-code-background-color);
    }

    .markdown blockquote {
        border-left: 5px solid var(--blockquote-border-color);
        padding-left: 1em;
    }

    .token.url-link {
        text-decoration: underline;
    }

    .token.variable {
        color: var(--variable-color);
    }

    .token.property {
        color: var(--property-color);
    }

    .token.function {
        color: var(--function-color);
    }

    .token.number {
        color: var(--number-color);
    }

    span.inline-color-wrapper {
        width: 1em;
        height: 1em;
    }
    
</style>