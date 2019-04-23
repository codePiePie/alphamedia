<template>
    <nav>
        <ul class="links">
            <li v-for="link in links" :key="link.id">
                <span></span><a :href="link.anchor">{{link.name}}</a>
            </li>
        </ul>
    </nav>
</template>

<script>
export default {
  name: 'LeftPart',
  data () {
    return {
      links: [
        {
          id: 0,
          name: 'Home',
          anchor: '#home'
        },
        {
          id: 1,
          name: 'About',
          anchor: ''
        },
        {
          id: 2,
          name: 'Our sevices',
          anchor: ''
        },
        {
          id: 3,
          name: 'Web design',
          anchor: ''

        },
        {
          id: 4,
          name: 'Web development',
          anchor: ''

        },
        {
          id: 5,
          name: 'Promotion',
          anchor: ''

        }
      ]
    }
  }
}
</script>

<style scoped>
nav {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

ul:hover > li:not(:hover){
    opacity: 0.2;
}

li {
    pointer-events: auto;
    transition: opacity 0.2s;
    border-bottom: 2.4vh solid transparent;
    font-size: 2.2vw;
    font-weight: bold;
    position: relative;

}

li span {
    left: -4.2vw;
    position: absolute;
    width: 0;
    transition: width 0.3s ease-in-out;
    bottom: 31.4%;
    height: 20%;
}

li:hover span {
    width: 4.2vw;
}

li span:after {
    content: "";
    background: #384555;
    width: 100%;
    display: block;
    height: 50%;
}

li span:before {
    content: "";
    background: #17C6A8;
    width: 50%;
    margin-left: auto;
    display: block;
    height: 50%;
}

ul {
    pointer-events: none;
    justify-content: center;
    align-items: start;
    display: flex;
    flex-direction: column;
    margin-left: 8%;
    margin-top: 6%;
}

a {
    text-decoration: none;
    color: #384555;
    position: relative;
    left: 0;
    transition: left 0.2s ease-in-out;
}

li:hover a {
    color: #17C6A8;
    left: 1vw;
}

</style>
