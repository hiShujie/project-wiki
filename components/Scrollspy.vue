<template>
    <main>
      <div class="container">
          <slot/>
      </div>
    </main>
</template>

<script>
export default {
  props: {
    currentPage: {type: String},
    initialSection: {type: String}
  },
  data() {
    return {
      observer: null,
      observerOptions: {
        root: this.$refs.nuxtContent,
        rootMargin: '-35% 0% -35% 0%',
        threshold: 0
      },
      currentlyActiveSection: this.initialSection,
      currentlyActiveSubsection: "",
    };
  },
  methods: {
    setClass: function (id, isScrolled) {
        const a = document.querySelector(`nav li a[href="${this.currentPage}/#${id}"]`).classList
        if (isScrolled) {
          a.add("scrolled");
          return;
        }
        a.remove("scrolled");
    }
  },
  mounted() {
    this.observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        const id = entry.target.getAttribute("id");
        if (entry.isIntersecting) {
          if (this.currentlyActiveSubsection != "") {
            this.setClass(this.currentlyActiveSubsection, false)
          }
          this.setClass(this.currentlyActiveSection, false)
          
          if (document.querySelector(`nav li a[href="${this.currentPage}/#${id}"]`).hasAttribute("parent")) {
            this.currentlyActiveSection = document.querySelector(`nav li a[href="${this.currentPage}/#${id}"]`).getAttribute("parent");
            this.currentlyActiveSubsection = id;
          } else {
            this.currentlyActiveSection = id;
            this.currentlyActiveSubsection = "";
          } 
        }
        if (this.currentlyActiveSubsection != "") {
            this.setClass(this.currentlyActiveSubsection, true)
        }
        this.setClass(this.currentlyActiveSection, true)
      });   
    }, this.observerOptions);   
    
    document
      .querySelectorAll("section[id]")
      .forEach(section => {
        this.observer.observe(section);
      });
  },
  beforeDestroy() {
    this.observer.disconnect();
  }
};
</script>