<template>
    <div id="top">
        <div class="fixed-div" :class="scrollY > 400 ? 'active' : ''" @click="scrollToTop()">
            <a class="scrolltotop-button" title="Scroll to top"></a>
        </div>
        <Menu>
            <NuxtChild/>
            <Footer/>
        </Menu>
    </div>
</template>


<script>
export default {
    data() {
        return {
            scrollY: 0,
            options: {
              easing: [0.25, 0.1, 0.25, 1.0],
              force: true,
              cancelable: false,
              x: false,
              y: true
            }
        };
    },
    mounted() {
        window.addEventListener("scroll", this.onScroll);
        window.addEventListener("load", () => {
          this.onScroll();
        });
    },
    beforeDestroy() {
      window.removeEventListener("scroll", this.onScroll);
    },
    methods: {
      scrollToTop: function () {
        this.$scrollTo("#top", 500, this.options);
      },
      onScroll() {
        this.scrollY = window.pageYOffset;
      },
    },
}
</script>