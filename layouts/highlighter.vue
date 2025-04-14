<template>
    <div id="top">
        <div class="fixed-div" :class="scrollY > 400 ? 'active' : ''" @click="scrollToTop()">
            <a class="scrolltotop-button" title="Scroll to top"></a>
        </div>
        <div class="highlighter" :class="isOpened && scrollY > 400 ? 'active' : ''">
          <h5 class="small-title">{{wordName}}</h5>
          <p v-html="wordDescription"></p>
          <div class="close" @click="closeHighlighter()">Close</div>
        </div>
        <Menu>
            <NuxtChild :isOpened.sync="isOpened" :wordName.sync="wordName" :wordDescription.sync="wordDescription"/>
        <Footer/>
        </Menu>
    </div>
</template>


<script>
export default {
    data() {
        return {
            scrollY: 0,
            isOpened: false,
            wordName: "",
            wordDescription: "",
            options: {
              easing: [0.25, 0.1, 0.25, 1.0],
              force: true,
              cancelable: false,
              x: false,
              y: true
            }
        };
    },
    watch: {
      $route(to, from) {
        this.closeHighlighter()
      }
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
      closeHighlighter() {
        this.isOpened = false;
        this.wordDescription = "";
        this.wordName = "";
      }
    },
}
</script>

