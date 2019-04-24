<template lang="pug">
    .menu(:class='{open: isOpen}')
        LeftPart
        RightPart(:menu-is-open='isOpen')
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

<style lang="less" scoped>
    @font_family_1: 'AvenirNextCondensed';

    .menu {
        height: 100vh;
        display: grid;
        grid-template-columns: 30.2vw 6.25vw;
        justify-content: end;
        width: 6.25vw;
        z-index: 1;
        transition: width 0.3s ease-in-out;
        font-family: @font_family_1;
    }
    .menu.open {
        width: 36.5vw;
    }

</style>
