<template>
  <div>
    <Header :title="currentPage">
      <div class="bg"
        style="background: url('https://static.igem.wiki/teams/4772/wiki/website-material/homepage/edu.png') center center no-repeat; background-size: cover;">
        <h1 class="head-title">Education</h1>
      </div>
      <section class="intro">
        <p>We were seeking to bring <a style="font-weight: bolder;">the core ideas of synthetic biology and Star-Chalmy project</a> to public we coule get in touch with. Our first choice was thoses <a style="font-weight: bolder;">young teenagers who are in less developed areas and propbably have never heared of iGEM</a>, let alone made contrubutions through it. By making them embrace science and get informed about the competition and its prospects, we tried to <a style="font-weight: bolder;">sow a seed</a> in their heart. When the seed grows, they may become the new generation of iGEMers and continue to <a style="font-weight: bolder;">change the world with synthetic biology</a>.</p>
      </section>
    </Header>

    <Scrollspy :currentPage="currentPage" initialSection="general">
      <div class="row">
        <div class="col-lg-3">
          <nav class="section-nav">
            <div class="row">
              <progress min="0" max="100" value="0"></progress>
              <ol>
                <li><a :href="`${currentPage}/#general`" v-scroll-to="'#general'">Speech in Jinzhou Senior High School</a></li>
              
              </ol>
            </div>
          </nav>
        </div>

        <div class="col-lg-9 main-content" id="main-content">
          <section id="general">
           
            <p>Jinzhou Senior High School is where Minglong Shen graduated. We taken our SDG brochure into schools and conducted lectures on the subjects of synthetic biology and sustainable development. Hopefully the things we have done will empower these students with the understanding and motivation needed to actively both participate in synthetic biology and advocate for sustainable practices. In doing so, we aspire to contribute to a brighter future for society as a whole.</p>
            
              <a href="https://static.igem.wiki/teams/4772/wiki/website-material/edu2.png"><img src="https://static.igem.wiki/teams/4772/wiki/website-material/edu2.png" /></a>
           
               <a href="https://static.igem.wiki/teams/4772/wiki/website-material/edu1.png"><img src="https://static.igem.wiki/teams/4772/wiki/website-material/edu1.png" /></a>
               
          </section>

      </div>
    </div>
  </Scrollspy>
</div></template>

<script>
import SimpleLightbox from "simplelightbox";

export default {
  data() {
    return {
      currentPage: "Education",
      reset: false
    };
  },
  mounted() {
    var lightbox = new SimpleLightbox('.gallery a',
      {
        overlayOpacity: 0.9,
        animationSpeed: '150',
        animationSlide: false,
      }
    );

    window.addEventListener("scroll", this.scrolled);
    window.addEventListener("load", () => {
      this.scrolled();
    });
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.scrolled);
  },
  methods: {
    resetQuiz: function () {
      this.reset = true
      setTimeout(() => {
        this.reset = false
      }, 10)
    },
    scrolled: function () {
      document.querySelector("progress").value = window.scrollY / (document.querySelector("#main-content").offsetHeight - window.innerHeight + document.querySelector("#header").clientHeight) * 100;
    }
  }
}
</script>
