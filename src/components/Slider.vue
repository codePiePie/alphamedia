<template>
    <div class="slider" :class="navDirectionType">
        <div class="points">
            <ul class="links">
                <li v-for="(slide, value) of slides"
                    :key="value" @mouseover="hover(value)"
                    :class="{active: value === activeLinkID}"
                >
                    <span class="lines"></span>
                    <span class="text">{{slide.name}}</span>
                </li>
                <hr class="indicator" :style="{left: indicatorPosition + 'px'}">
            </ul>
        </div>
        <div class="slides">
            <div class="lines-wrapper">
                <div class="lines">

                </div>
            </div>
            <div class="slides-container">
                <article :class="{animate: animate}">
                    {{slides[activeLinkID].text}}
                </article>
            </div>
        </div>
    </div>
</template>

<script>

export default {
  name: 'Slider',
  props: ['slides', 'nav-direction-type'],
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
  }
}
</script>

<style scoped>

.slider {
    margin-top: 4.8vw;
}

.slides {
    padding-left: 5.5%;
    background: #F8F8F8;
}

.lines-wrapper {
    flex-direction: column;
    display: flex;
}

.slider.horizontal-nav:before {
    content: "";
    background: #384555;
    height: 0.7vw;
    display: block;
}

.slider.horizontal-nav .indicator {
    background: #17C6A8;
    height: 0.7vw;
    display: block;
    position: absolute;
    top: -0.7vw;
    width: 6.25vw;
    border: none;
    margin: 0;
    transition: left .3s ease-in-out ;
}

.slider.horizontal-nav .points {
    margin-left: 5.5%;
    width: 55.1%;
}

.slider.horizontal-nav .slides {
    height: 15.6vw;
    margin-left: 5.5%;
}

.slider.horizontal-nav ul {
    display: flex;
    justify-content: space-between;
    position: relative;
}

.slider.horizontal-nav .points {
    position: relative;
}

.slider.horizontal-nav li {
    font-weight: bold;
    transition: color 0.3s, opacity 0.3s;
    font-size: 2.5vw;
    opacity: 0.2;
    color: #384555;
    margin-top: 4%;
    margin-bottom: 4%;
    cursor: pointer;
}

.slider.horizontal-nav .slides .lines-wrapper {
    height: 33.3%;
    justify-content: center;
}

.slider.horizontal-nav li.active {
    color: #17C6A8;
    opacity: 1;
}

.slider.vertical-nav .indicator {
    display: none;
}

.slider.vertical-nav {
    display: flex;
    height: 20.8vw;
}

.slider.vertical-nav  .slides {
    flex: 4 0 auto;
    background: #F8F8F8;
    width: min-content;
}

.slider.vertical-nav .slides .lines-wrapper {
    height: 16%;
    margin-bottom: 3%;
    justify-content: flex-end;
}

.slides .lines-wrapper .lines {
    height: 0.4vw;
    width: 4.17vw
}

.slides .lines-wrapper .lines:after {
    content: "";
    display: block;
    height: 50%;
    width: 100%;
    background: #384555;
}

.slides .lines-wrapper .lines:before {
    content: "";
    display: block;
    height: 50%;
    width: 50%;
    background: #17C6A8;
}

.slider.vertical-nav .links {
    margin-left: 15%;
    margin-top: 10%;
}

.slider.vertical-nav .links li {
    border-bottom: 2vw solid transparent;
    position: relative;
    display: flex;
}

.slider.vertical-nav .links li .lines {
    position: absolute;
    left: -2vw;
    height: 50%;
    bottom: 0;
    width: 0;
    transition: width 0.2s ease-in-out;
}

.slider.vertical-nav .links li.active .lines {
    width: 4vw;
}

.slider.vertical-nav .links li .lines:before {
    content: "";
    height: 25%;
    width: 50%;
    display: block;
    background: #17C6A8;
    margin-left: auto;
}

.slider.vertical-nav .links li .lines:after {
    content: "";
    height: 25%;
    width: 100%;
    display: block;
    background: #384555;
}

.slider.vertical-nav .links li .text {
    font-size: 1.5vw;
    text-transform: capitalize;
    letter-spacing: -0.14vw;
    color: #384555;
    opacity: 0.5;
    cursor: pointer;
    font-weight: bold;
    position: relative;
    left: 0;
    transition: left 0.2s ease-in-out;
}

.slider.vertical-nav .links li.active .text {
    color: #17C6A8;
    opacity: 1;
    left: 3.12vw;
}

.slides-container article {
    position: relative;
    width: 50%;
    line-height: 144%;
    transition: opacity .1s, transform .2s;

}

.slides-container article.animate {
    opacity: 0;
    transform: translateX(5.5%);
}

.slider.vertical-nav .points {
    flex: 1 0 auto;
}
</style>
