<template>
    <main>
        <div>
            <Home></Home>
            <About></About>
            <Footer></Footer>
        </div>
    </main>
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

<style scoped>
main {
    scroll-behavior: smooth;
    overflow-y: scroll;
    overflow-x: hidden;
    font-family: 'AvenirNext';
}

main > div {
    width: 93.75vw;
}
</style>
