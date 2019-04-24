<template lang="pug">
    nav
        ul.links
            li(v-for='(link, value) in links', :key='value')
                span
                a(:href='link.anchor') {{link.name}}
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'LeftPart',
  computed: {
    ...mapGetters({
      links: 'menu/getLinks'
    })
  }
}
</script>

<style lang="less" scoped>
    @color_1: #384555;
    @color_2: #17C6A8;

    nav {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }
    ul {
        &:hover {
            >li {
                &:not(:hover) {
                    opacity: 0.2;
                }
            }
        }
        pointer-events: none;
        justify-content: center;
        align-items: start;
        display: flex;
        flex-direction: column;
        margin-left: 8%;
        margin-top: 6%;
    }
    li {
        pointer-events: auto;
        transition: opacity 0.2s;
        border-bottom: 2.4vh solid transparent;
        font-size: 2.2vw;
        font-weight: bold;
        position: relative;
        span {
            left: -4.2vw;
            position: absolute;
            width: 0;
            transition: width 0.3s ease-in-out;
            bottom: 31.4%;
            height: 20%;
            &:after {
                content: "";
                background: #384555;
                width: 100%;
                display: block;
                height: 50%;
            }
            &:before {
                content: "";
                background: #17C6A8;
                width: 50%;
                margin-left: auto;
                display: block;
                height: 50%;
            }
        }
        &:hover {
            span {
                width: 4.2vw;
            }
            a {
                color: @color_2;
                left: 1vw;
            }
        }
    }
    a {
        text-decoration: none;
        color: @color_1;
        position: relative;
        left: 0;
        transition: left 0.2s ease-in-out;
    }

</style>
