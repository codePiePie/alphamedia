<template lang="pug">
    section#home(:class='{fade: menuIsOpen}')
        .video-outer
            .video-inner
                video(autoplay='', loop='', muted='')
                    source(src='../../assets/Video/scrollingntyping.mp4', type='video/mp4')
        .container
            .info
                | We are the team that creates individual web
                br
                |  projects for companies specializing in any area
            .get-in-touch-button-wrapper
                .get-in-touch-button
                    svg(viewBox='0 0 62 62', fill='none', xmlns='http://www.w3.org/2000/svg')
                        path(fill-rule='evenodd', clip-rule='evenodd', d='M31 61C47.5685 61 61 47.5685 61 31C61 14.4315 47.5685 1 31 1C14.4315 1 1 14.4315 1 31C1 47.5685 14.4315 61 31 61Z', stroke='#17C6A8', stroke-width='2')
                        path(fill-rule='evenodd', clip-rule='evenodd', d='M42.7822 30.4855L35.3592 23.2125C35.07 22.9292 34.5996 22.9292 34.3092 23.2125C34.02 23.497 34.02 23.9579 34.3092 24.2413L40.4723 30.2786H19.7428C19.3324 30.2786 19 30.6042 19 31.0063C19 31.4084 19.3324 31.7341 19.7428 31.7341H40.4579L34.3092 37.7584C34.02 38.0418 34.02 38.5027 34.3092 38.7872C34.4556 38.9283 34.6452 39 34.8348 39C35.0244 39 35.2152 38.9283 35.3592 38.7872L42.7822 31.5142C43.0726 31.2297 43.0726 30.77 42.7822 30.4855Z', fill='white')
                .text-wrapper
                    .text Get in touch
        .scroll-down-wrapper
            a(href='#bottom') Scroll down
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Home',
  computed: {
    ...mapGetters({
      menuIsOpen: 'menu/isOpen'
    })
  }
}
</script>

<style lang="less" scoped>
@color_1: #fff;
@background_color_1: transparent;
@background_color_2: #000;

section {
    height: 100vh;
    overflow: hidden;
    position: relative;
    transition: filter 0.3s ease-in-out;
}
.video-outer {
    position: absolute;
    width: 100%;
    z-index: -1;
}
.scroll-down-wrapper {
    writing-mode: vertical-rl;
    position: absolute;
    right: 6vw;
    bottom: 0;
    a {
        color: @color_1;
        font-size: 1.25vw;
        text-decoration: none;
    }
    &:after {
        content: "";
        height: 7.4vh;
        background: #17C6A8;
        width: 0.2vw;
        display: inline-block;
        margin-top: 1.9vh;
    }
}
.video-inner {
    height: 100vh;
    overflow: hidden;
    position: relative;
    background-color: @background_color_1;
    transition: background-color 0.3s ease-in-out;
}
video {
    position: absolute;
    right: 0;
    bottom: 0;
    min-width: 100%;
    min-height: 100%;
    width: auto;
    height: auto;
    mix-blend-mode: normal;
    opacity: 0.8;
    transition: opacity 0.3s ease-in-out;
}
section.fade {
    .video-inner {
        background-color: @background_color_2;
    }
    filter: blur(2px);
    video {
        opacity: 0.3;
    }
}
.get-in-touch-button-wrapper {
    .text-wrapper {
        display: flex;
        align-items: center;
    }
    .text {
        color: @color_1;
        font-size: 1.26vw;
        cursor: pointer;
    }
    margin-top: 4.3%;
    display: flex;
    display: -webkit-box;
}
.container {
    position: absolute;
    bottom: 8.8vh;
    left: 5.6%;
}
.info {
    font-size: 1.92vw;
    color: @color_1;
    letter-spacing: 0.07vw;
    line-height: 149%;
}
.get-in-touch-button {
    width: 3.1vw;
    display: inherit;
    margin-right: 1vw;
    cursor: pointer;
    svg {
        width: 100%;
    }
}

@media (min-aspect-ratio: 16/9) {
   video { height: 300%; top: -100%; }
}
@media (max-aspect-ratio: 16/9) {
    video { width: 300%; left: -100%; }
}
@supports (object-fit: cover) {
    video {
        top: 0; left: 0;
        width: 100%; height: 100%;
        object-fit: cover;
    }
}
</style>
