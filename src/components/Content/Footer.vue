<template>
    <div class="footer">
        <div class="rights">
            © Alpha Media Inc. 2019
        </div>
        <div class="design-author">
            designed by Tim Agency
        </div>
    </div>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style scoped>
.footer {
    background: #384555;
    height: 4vw;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-left: 5.5%;
    padding-right: 5.5%;
}

.rights {
    color: #fff;
}

.design-author {
    color: #fff;
}
</style>
