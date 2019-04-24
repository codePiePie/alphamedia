<template lang="pug">
    .footer
        .rights
            | © Alpha Media Inc. 2019
        .design-author
            | designed by Tim Agency
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style lang="less" scoped>
    @color_1: #fff;

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
        color: @color_1;
    }
    .design-author {
        color: @color_1;
    }

</style>
