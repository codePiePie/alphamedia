<template lang="pug">
    section
        .title
            h1 Portfolio
        .lines-wrapper
            .lines
        .slider
            .desc
                | Short description about project.
                | Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            .navigation
                span.prev(@click='move(-1)')
                    svg(viewBox='0 0 62 62', fill='none', xmlns='http://www.w3.org/2000/svg')
                        path(fill-rule='evenodd', clip-rule='evenodd', d='M31 1C14.4315 1 1 14.4315 1 31C1 47.5685 14.4315 61 31 61C47.5685 61 61 47.5685 61 31C61 14.4315 47.5685 1 31 1Z', stroke='#384555', stroke-width='2')
                        path(fill-rule='evenodd', clip-rule='evenodd', d='M19.2178 31.5145L26.6408 38.7875C26.93 39.0708 27.4004 39.0708 27.6908 38.7875C27.98 38.503 27.98 38.0421 27.6908 37.7587L21.5277 31.7214L42.2572 31.7214C42.6676 31.7214 43 31.3958 43 30.9937C43 30.5916 42.6676 30.2659 42.2572 30.2659H21.5421L27.6908 24.2416C27.98 23.9582 27.98 23.4973 27.6908 23.2128C27.5444 23.0717 27.3548 23 27.1652 23C26.9756 23 26.7848 23.0717 26.6408 23.2128L19.2178 30.4858C18.9274 30.7703 18.9274 31.23 19.2178 31.5145Z', fill='white')
                span.next(@click='move(1)')
                    svg(viewBox='0 0 62 62', fill='none', xmlns='http://www.w3.org/2000/svg')
                        path(fill-rule='evenodd', clip-rule='evenodd', d='M31 61C47.5685 61 61 47.5685 61 31C61 14.4315 47.5685 1 31 1C14.4315 1 1 14.4315 1 31C1 47.5685 14.4315 61 31 61Z', stroke='#384555', stroke-width='2')
                        path(fill-rule='evenodd', clip-rule='evenodd', d='M42.7822 30.4855L35.3592 23.2125C35.07 22.9292 34.5996 22.9292 34.3092 23.2125C34.02 23.497 34.02 23.9579 34.3092 24.2413L40.4723 30.2786H19.7428C19.3324 30.2786 19 30.6042 19 31.0063C19 31.4084 19.3324 31.7341 19.7428 31.7341H40.4579L34.3092 37.7584C34.02 38.0418 34.02 38.5027 34.3092 38.7872C34.4556 38.9283 34.6452 39 34.8348 39C35.0244 39 35.2152 38.9283 35.3592 38.7872L42.7822 31.5142C43.0726 31.2297 43.0726 30.77 42.7822 30.4855Z', fill='white')
            .slide-container-wrapper
                transition-group.slide-container(tag='ul', name='slider-transition')
                    li.slide(v-for='slide of slides', :class='{active: active === slide.id}', :key='slide.id')
                        img(:src="require('@/assets/images/' + slide.image)")
        .slide-desc(:class='{animate: animate}', @transitionend='animate = false')
            .slide-title
                | Case #1
            .slide-line
            .slide-text
                | Web-design
                br
                |                 SEO
</template>

<script>
export default {
  name: 'Portfolio',
  data: () => {
    return {
      active: 1,
      animate: false,
      slides: [
        {
          id: 1,
          image: 'image.png'
        },
        {
          id: 2,
          image: 'image1.png'
        },
        {
          id: 3,
          image: 'image2.png'
        },
        {
          id: 4,
          image: 'image1.png'
        },
        {
          id: 5,
          image: 'image1.png'
        },
        {
          id: 6,
          image: 'image1.png'
        }
      ]
    }
  },
  methods: {
    move (amount) {
      let newActive
      const newIndex = this.active + amount

      if (newIndex > this.active) {
        let shifted = this.slides.shift()
        this.slides.push(shifted)
      } else {
        let popped = this.slides.pop()
        this.slides.unshift(popped)
      }

      if (newIndex > this.slides.length) newActive = 1
      if (newIndex === 0) newActive = this.slides.length
      this.active = newActive || newIndex

      this.animate = true
    }
  }
}
</script>

<style lang="less" scoped>
    @color_1: #fff;

    section {
        background: #17C6A8;
        height: 45vw;
        display: grid;
        grid-template-columns: 1fr 4fr;
        grid-template-rows: 1fr 3fr;
        position: relative;
    }
    .title {
        background: #fff;
        text-align: center;
    }
    .lines-wrapper {
        display: flex;
        align-items: center;
    }
    .lines {
        width: 90.78%;
        margin-left: auto;
        height: 0.4vw;
        &:before {
            content: "";
            width: 50%;
            height: 50%;
            background: #FFF;
            display: block;
        }
        &:after {
            content: "";
            width: 100%;
            height: 50%;
            background: #000;
            display: block;
        }
    }
    .slider {
        grid-column-start: 2;
        display: grid;
        grid-template-columns: 2fr 1fr;
        grid-template-rows: 1fr 3fr;
        margin-left: 13.7%;
        .desc {
            color: @color_1;
            line-height: 144%;
            margin-bottom: 5%;
        }
    }
    .navigation {
        text-align: center;
        .prev {
            display: inline-block;
            width: 3.13vw;
            margin-right: 3%;
            position: relative;
            right: 0;
            transition: right 0.2s ease-in-out;
            cursor: pointer;
            &:hover {
                right: 3%;
            }
        }
        .next {
            display: inline-block;
            width: 3.13vw;
            margin-left: 3%;
            position: relative;
            left: 0;
            transition: left 0.2s ease-in-out;
            cursor: pointer;
            &:hover {
                left: 3%;
            }
        }
    }
    .slide-container-wrapper {
        grid-column-start: 1;
        grid-column-end: 3;
        max-height: 100%;
    }
    .slide-container {
        height: 90%;
        display: flex;
        transform: translateX(-80%);
        ul {
            display: flex;
            width: 100%;
            transition: all 1s;
        }
    }
    .slide {
        flex: 0 0 40%;
        display: inline-grid;
        position: relative;
        img {
            height: 100%;
            position: absolute;
        }
        &:first-child {
            opacity: 0;
        }
        &:last-child {
            opacity: 0;
        }
    }
    .slide.active {
        &+.slide {
            top: -25%;
        }
    }
    .slider-transition-move {
        transition: transform 0.3s;
    }
    .slide-desc {
        position: absolute;
        top: 82%;
        width: 24.3%;
        color: @color_1;
        background: transparent;
        text-align: right;
    }
    .slide-title {
        font-weight: bold;
        transition: transform 0.2s, opacity 0.1s;
    }
    .slide-text {
        transition: transform 0.2s, opacity 0.1s;
    }
    .slide-desc.animate {
        .slide-title {
            transform: translateX(-4%);
            opacity: 0;
        }
        .slide-text {
            transform: translateX(-4%);
            opacity: 0;
        }
    }
    .slide-line {
        height: 0.4vw;
        width: 21%;
        margin-left: auto;
        margin-top: 3%;
        margin-bottom: 3%;
        &:before {
            content: "";
            height: 50%;
            width: 50%;
            background: #fff;
            display: block;
            margin-left: auto;
        }
        &:after {
            content: "";
            height: 50%;
            width: 100%;
            background: #000;
            display: block;
        }
    }

</style>
