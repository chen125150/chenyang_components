<template>
    <!-- 能滚动的盒子 -->
    <div class="viewport" ref="viewport" @scroll="handleScroll">
        <!-- 自己做一个滚动条 -->
        <div class="scroll-bar" ref="scrollBar"></div>
        <!-- 真实渲染的内容 -->
        <div class="scroll-list" :style="{transform: `translate3d(0, ${offset}px, 0)`}">
            <div v-for="item in visibelData" :key="item.id">
                <slot :item="item"></slot>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'virtualList',
    props: {
        size: Number,
        remain: Number,
        items: Array
    },
    data() {
        return {
            start: 0,
            end: this.remain,
            offset: 0
        }
    },
    computed: {
        // 可见的数据有哪些
        visibelData() {
            return this.items.slice(this.start, this.end)
        }
    },
    methods: {
        handleScroll() {
            let scrollTop = this.$refs.viewport.scrollTop
            this.start = Math.floor(scrollTop / this.size)
            this.end = this.start + this.remain
            this.offset = this.start * this.size
        }
    },
    mounted() {
        this.$refs.viewport.style.height = this.size * this.remain + 'px'
        this.$refs.scrollBar.style.height = this.size * this.items.length + 'px'
    }
}
</script>
<style scoped>
.viewport {
    overflow-y: scroll;
    position: relative;
}
.scroll-list {
    position: absolute;
    top: 0;
    left: 0;
}
</style>