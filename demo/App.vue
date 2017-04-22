<template>
    <div class="preview-img-list">
        <img class="preview-img-item" v-for="(item, index) in items"
            :src="item.src" @click="$photoswipe.open(index, items)">
    </div>
</template>

<style scoped>
.preview-img-list {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
}
.preview-img-item {
    margin: 5px;
    max-width: 100px;
    max-height: 100px;
}
</style>

<script>
    export default {
        data () {
            return {
                items: [{
                    src: '../demo/img/Chrysanthemum.jpg',
                    w: 1024,
                    h: 768
                }, {
                    src: '../demo/img/Desert.jpg',
                    w: 1024,
                    h: 768
                }, {
                    src: '../demo/img/Hydrangeas.jpg',
                    w: 1024,
                    h: 768
                }, {
                    src: '../demo/img/Jellyfish.jpg',
                    w: 1024,
                    h: 768
                }, {
                    src: '../demo/img/Koala.jpg',
                    w: 1024,
                    h: 768
                }, {
                    src: '../demo/img/Lighthouse.jpg',
                    w: 1024,
                    h: 768
                }, {
                    src: '../demo/img/Penguins.jpg',
                    w: 1024,
                    h: 768
                }, {
                    src: '../demo/img/Tulips.jpg',
                    w: 1024,
                    h: 768
                }]
            }
        }
    }

</script>