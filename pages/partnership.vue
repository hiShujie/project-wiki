<template>
  <div>
    <Header :title="currentPage">
      <div class="bg"
        style="background: url('https://static.igem.wiki/teams/4772/wiki/website-material/finalpartner.png') center center no-repeat; background-size: cover;">
        <h1 class="head-title">Partnership</h1>
      </div>
    </Header>

    <section class="intro">
      <h2 class="main-title">Introduction</h2>

      <img alt="" src="https://static.igem.wiki/teams/4772/wiki/website-material/partnership-background.png">
      <a a class="link-title" target="_blank" style="color:#6bac74">Link Exchange</a>
      <br><a class="link-exchange" href="https://2023.igem.wiki/makerere-uganda" target="_blank"
        style="color:#6bac74 size:12px">Makerere-Uganda </a>

      <br><a class="link-exchange" href="https://2023.igem.wiki/scut-china" download="" target="_blank"
        style="color:#6bac74 size:12px">SCUT-China</a><br><br>

      <br><a class="link-download"
        href="https://static.igem.wiki/teams/4118/wiki/website-assets/partnership/partnership-notebook.pdf" download=""
        target="_blank" style="color:#6bac74">Download Our SDG Handbook</a>

    </section>


    <Scrollspy :currentPage="currentPage" initialSection="byus">
      <div class="row">
        <div class="col-lg-3">
          <nav class="section-nav">
            <div class="row">
              <progress min="0" max="100" value="0"></progress>
              <ol>
                <li><a :href="`${currentPage}/#byus`" v-scroll-to="'#byus'">With Makerere-Uganda</a></li>



                <li><a :href="`${currentPage}/#participated`" v-scroll-to="'#participated'">With SCUT-China</a></li>


              </ol>
            </div>
          </nav>
        </div>

        <div class="col-lg-9 main-content" id="main-content">
          <section id="byus">
            <h2 class="main-title">With Makerere-Uganda</h2>
            <img src="https://static.igem.wiki/teams/4772/wiki/website-material/uganda.png">
            <section id="ijet">
              <h3 class="small-title">Team Introduction</h3>
              <p> Makerere-Uganda IGEM Team 2023 is consisted of a group of student from Makerere University and India.
                Driven by a commitment to the environment and a desire to address pressing challenges, they are working on
                an innovative project to detect toxic Polyaromatic Hydrocarbons (PAHs) in water. They strongly believe
                that synthetic biology can be a game changer in advancing SDGs.</p>
              <div class="d-flex justify-content-center" style="margin-top: 0px; margin-bottom: 0px;"></div>
            </section>


            <section id="ijet">
              <h3 class="small-title">Communication</h3>
              <p>
                <li>They shared their opinions and understanding on SDGs and synthetic biology. </li>
                <li>Makerere’s presentation focus on how to use synthetic biology to advance nature-based solutions and
                  gives us many probable ideas to solve the problems in SDGs.</li>
                <li>Besides, they recommend the website for IUCN(International Union for Conservation of Nature) to all
                  engaged in our meetup. From their presentation, we found a new perspective to seek for SDGs.</li>
              </p>
              <div class="d-flex justify-content-center" style="margin-top: 0px; margin-bottom: 0px;"></div>
            </section>

          </section>




          <section id="participated">
            <h2 class="main-title">With SCUT-China</h2>
            <img src="https://static.igem.wiki/teams/4772/wiki/website-material/china.png">
            <section id="ijet">
              <h3 class="small-title">Team Introduction</h3>
              <p> SCUT-China are a team composed of 18 undergraduate students from South China University of Technology.
                The problem they aim to solve this year is related to the potential nitrogen resources in shrimp shells.
                They hope to turn shrimp shells into a valuable resource through an efficient microbial nitrogen
                utilization pathway.</p>
              <div class="d-flex justify-content-center" style="margin-top: 0px; margin-bottom: 0px;"></div>
            </section>


            <section id="ijet">
              <h3 class="small-title">Communication</h3>
              <p>
                <li>In their part of the SDG handbook, SCUT-China introduces their project background, design and
                  describes how their project is connected with SDG 9/12/13/14 in detail. </li>
                <li>From their words, we know about the nitrogen sources in shrimp shells, which is enlightening to us.
                </li>
                <li>Besides, their statements about SDG 12&14 gave us inspirations on our own project.</li>
              </p>
              <div class="d-flex justify-content-center" style="margin-top: 0px; margin-bottom: 0px;"></div>
            </section>
            <div class="gallery rounded mx-auto d-block" style="width: 50%; height: auto;text-align:center">
              <a href="https://static.igem.wiki/teams/4772/wiki/website-material/contribution/figure-4.png"><img
                  src="https://static.igem.wiki/teams/4772/wiki/website-material/contribution/figure-4.png" />Sustainable Development Handbook: A Guide to Sustainable iGEM Projects</a>
                <br><br><a class="link-download"
                style="text-align:center" download="" target="_blank"
                href="https://static.igem.wiki/teams/4772/wiki/website-material/sustainable-development-handbook-by-tsinghua-tfl-1.pdf">Click here to download this handbook</a>
          </div>
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
      currentPage: "Partnership",
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
    scrolled: function () {
      document.querySelector("progress").value = window.scrollY / (document.querySelector("#main-content").offsetHeight - window.innerHeight + document.querySelector("#header").clientHeight) * 100;
    }
  }
}
</script>
