<template lang="pug">
    .slider(:class='navDirectionType')
        .points
            ul.links
                li(v-for='(slide, value) of getSlidesBySelectionID(sectionId)', :key='value', @mouseover='hover(value)', :class='{active: value === activeLinkID}')
                    span.lines
                    span.text {{slide.name}}
                hr.indicator(:style="{left: indicatorPosition + 'px'}")
        .slides
            .lines-wrapper
                .lines
            .slides-container
                article(:class='{animate: animate}')
                    | {{getSlidesBySelectionID(sectionId)[activeLinkID].text}}

</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Slider',
  props: {
    navDirectionType: String,
    sectionId: Number
  },
  data () {
    return {
      activeLinkID: 0,
      animate: false,
      indicatorPosition: 0
    }
  },
  methods: {
    hover (value) {
      this.indicatorPosition = event.target.parentElement.offsetLeft
      this.activeLinkID = value
      this.animate = true

      setTimeout(() => {
        this.animate = false
      }, 200)
    }
  },
  computed: {
    ...mapGetters({
      getSlidesBySelectionID: 'slides/getSlidesBySelectionID'
    })
  }
}
</script>

<style lang="less" scoped>

    @color_1: #384555;
    @color_2: #17C6A8;

    .slider {
        margin-top: 4.8vw;
    }
    .slides {
        padding-left: 5.5%;
        background: #F8F8F8;
        .lines-wrapper {
            .lines {
                height: 0.4vw;
                width: 4.17vw;
                &:after {
                    content: "";
                    display: block;
                    height: 50%;
                    width: 100%;
                    background: #384555;
                }
                &:before {
                    content: "";
                    display: block;
                    height: 50%;
                    width: 50%;
                    background: #17C6A8;
                }
            }
        }
    }
    .lines-wrapper {
        flex-direction: column;
        display: flex;
    }
    .slider.horizontal-nav {
        &:before {
            content: "";
            background: #384555;
            height: 0.7vw;
            display: block;
        }
        .indicator {
            background: #17C6A8;
            height: 0.7vw;
            display: block;
            position: absolute;
            top: -0.7vw;
            width: 6.25vw;
            border: none;
            margin: 0;
            transition: left .3s ease-in-out;
        }
        .points {
            margin-left: 5.5%;
            width: 55.1%;
            position: relative;
        }
        .slides {
            height: 15.6vw;
            margin-left: 5.5%;
            .lines-wrapper {
                height: 33.3%;
                justify-content: center;
            }
        }
        ul {
            display: flex;
            justify-content: space-between;
            position: relative;
        }
        li {
            font-weight: bold;
            transition: color 0.3s, opacity 0.3s;
            font-size: 2.5vw;
            opacity: 0.2;
            color: @color_1;
            margin-top: 4%;
            margin-bottom: 4%;
            cursor: pointer;
        }
        li.active {
            color: @color_2;
            opacity: 1;
        }
    }
    .slider.vertical-nav {
        .indicator {
            display: none;
        }
        display: flex;
        height: 20.8vw;
        .slides {
            flex: 4 0 auto;
            background: #F8F8F8;
            width: min-content;
            .lines-wrapper {
                height: 16%;
                margin-bottom: 3%;
                justify-content: flex-end;
            }
        }
        .links {
            margin-left: 15%;
            margin-top: 10%;
            li {
                border-bottom: 2vw solid transparent;
                position: relative;
                display: flex;
                .lines {
                    position: absolute;
                    left: -2vw;
                    height: 50%;
                    bottom: 0;
                    width: 0;
                    transition: width 0.2s ease-in-out;
                    &:before {
                        content: "";
                        height: 25%;
                        width: 50%;
                        display: block;
                        background: #17C6A8;
                        margin-left: auto;
                    }
                    &:after {
                        content: "";
                        height: 25%;
                        width: 100%;
                        display: block;
                        background: #384555;
                    }
                }
                .text {
                    font-size: 1.5vw;
                    text-transform: capitalize;
                    letter-spacing: -0.14vw;
                    color: @color_1;
                    opacity: 0.5;
                    cursor: pointer;
                    font-weight: bold;
                    position: relative;
                    left: 0;
                    transition: left 0.2s ease-in-out;
                }
            }
            li.active {
                .lines {
                    width: 4vw;
                }
                .text {
                    color: @color_2;
                    opacity: 1;
                    left: 3.12vw;
                }
            }
        }
        .points {
            flex: 1 0 auto;
        }
    }
    .slides-container {
        article {
            position: relative;
            width: 50%;
            line-height: 144%;
            transition: opacity .1s, transform .2s;
        }
        article.animate {
            opacity: 0;
            transform: translateX(5.5%);
        }
    }

</style>
