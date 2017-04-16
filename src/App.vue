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
                    src: '../img/Chrysanthemum.jpg',
                    w: 1024,
                    h: 768
                }, {
                    src: '../img/Desert.jpg',
                    w: 1024,
                    h: 768
                }, {
                    src: '../img/Hydrangeas.jpg',
                    w: 1024,
                    h: 768
                }, {
                    src: '../img/Jellyfish.jpg',
                    w: 1024,
                    h: 768
                }, {
                    src: '../img/Koala.jpg',
                    w: 1024,
                    h: 768
                }, {
                    src: '../img/Lighthouse.jpg',
                    w: 1024,
                    h: 768
                }, {
                    src: '../img/Penguins.jpg',
                    w: 1024,
                    h: 768
                }, {
                    src: '../img/Tulips.jpg',
                    w: 1024,
                    h: 768
                }]
            }
        }
    }

</script>