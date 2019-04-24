import Vue from 'vue'
import Vuex from 'vuex'
import Menu from './menu'
import Slides from './slides'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    menu: Menu,
    slides: Slides
  }
})
