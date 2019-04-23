<template>
    <div class="menu" :class="{open: isOpen}">
        <LeftPart></LeftPart>
        <RightPart :menu-is-open="isOpen"></RightPart>
    </div>
</template>

<script>
import LeftPart from './LeftPart'
import RightPart from './RightPart'

import { mapGetters } from 'vuex'

export default {
  name: 'Menu',
  components: {RightPart, LeftPart},
  computed: {
    ...mapGetters({
      isOpen: 'menu/isOpen'
    })
  }
}
</script>

<style scoped>
    .menu {
        height: 100vh;
        display: grid;
        grid-template-columns: 30.2vw 6.25vw;
        justify-content: end;
        width: 6.25vw;
        z-index: 1;
        transition: width 0.3s ease-in-out;
        font-family: 'AvenirNextCondensed';
    }

    .menu.open {
        width: 36.5vw;
    }
</style>
