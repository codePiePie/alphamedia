<template lang="pug">
    #app
        .wrapper
            Menu
            Content
</template>

<script>
import Menu from './components/Menu/Main'
import Content from './components/Content/Main'

export default {
  name: 'App',
  components: {Content, Menu}
}
</script>

<style lang="less">
    @color_1: #2c3e50;

    @font-face {
        font-family: 'AvenirNextCondensed';
        font-style: normal;
        font-weight: normal;
        src: local('Avenir Next LT Pro Condensed'), url('assets/Fonts/AvenirNextLTPro-Cn.woff') format('woff');
    }
    @font-face {
        font-family: 'AvenirNext';
        font-style: normal;
        font-weight: normal;
        src: local('Avenir Next'), url('assets/Fonts/AvenirNextCyr-Regular.woff') format('woff');
    }
    #app {
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: @color_1;
    }
    .wrapper {
        display: flex;
        height: 100vh;
    }
    h1 {
        font-size: 2.5vw;
    }
    h2 {
        font-size: 1.2vw;
    }
    button {
        padding: 0;
        margin: 0;
        outline: none;
        &::-moz-focus-inner {
            border: 0;
        }
    }
    a {
        outline: none;
        &::-moz-focus-inner {
            border: 0;
        }
    }
    ul {
        list-style: none;
        margin: 0;
        padding: 0;
    }
    * {
        box-sizing: border-box;
    }

</style>
