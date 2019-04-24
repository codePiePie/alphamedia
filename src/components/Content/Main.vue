<template lang="pug">
main
    div
        Home
        About
        Footer
</template>

<script>
import Home from './Home'
import About from './About'
import Footer from './Footer'

export default {
  name: 'Main',
  components: {About, Home, Footer}
}
</script>

<style lang="less" scoped>
    @font_family_1: 'AvenirNext';

    main {
        scroll-behavior: smooth;
        overflow-y: scroll;
        overflow-x: hidden;
        font-family: @font_family_1;
        >div {
            width: 93.75vw;
        }
    }
</style>
