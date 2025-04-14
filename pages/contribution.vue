<template>
  <div>
    <Header :title="currentPage">
      <div class="bg"
        style="background: url('https://static.igem.wiki/teams/4772/wiki/website-material/plantaward/contribution.png') center center no-repeat; background-size: cover;">
        <h1 class="head-title">{{ currentPage }}</h1>
      </div>
      <section class="intro">
        <p>In this section we present our contributions to the iGEM community. In our project, we gained some experience
          about our special chassis organism that we want to pass on to the next generation of iGEM teams interested in
          algae. Our contribution consists of two aspects: Plant synthetic biology and SDG.</p>
      </section>
    </Header>

    <Scrollspy :currentPage="currentPage" initialSection="fundraising">
      <div class="row">
        <div class="col-lg-3">
          <nav class="section-nav">
            <div class="row">
              <progress min="0" max="100" value="0"></progress>
              <ol>
                <li><a :href="`${currentPage}/#lab`" v-scroll-to="'#lab'">Plant Synthetic Biology</a></li>
                <ul>
                  <li><a :href="`${currentPage}/#rca`" v-scroll-to="'#rca'" parent="lab">Screening Strategy&nbsp;&nbsp;</a></li>
                  <li><a :href="`${currentPage}/#nano`" v-scroll-to="'#nano'" parent="lab">Other Parts</a></li>
                </ul>
                <li><a :href="`${currentPage}/#edu`" v-scroll-to="'#edu'">SDG</a></li>
                <li><a :href="`${currentPage}/#refs`" v-scroll-to="'#refs'">Reference</a></li>
              </ol>
            </div>


          </nav>
        </div>




        <div class="col-lg-9 main-content" id="main-content">
          <section id="lab">
            <h2 class="main-title">Contributions to Plant Synthetic Biology</h2>
            <section id="rca">
              <h3 class="main-title">Easier Chlamy Foreign Protein Expression Screening Strategy</h3>
              <h4 class="small-title">Background: Chlamy Screening Dilemma</h4>
              <p>Unlike chassis such as E.coli, which have high expression efficiency of foreign proteins, the low
                expression efficiency of foreign proteins and the resulting low screening efficiency for foreign protein
                expression have always been a disadvantage of using Chlamydomonas reinhardtii as chassis. Accordingly,
                inefficiencies in foreign protein expression screening broadly hinder Chlamydomonas project in iGEM. And
                many iGEM teams that use Chlamydomonas reinhardtii as chassis have been plagued by this issue, and many of
                their experimental designs have failed to proceed to subsequent verification due to protein expression
                failure. <br>
                To address this issue, we propose our solution: our favourite basic part SGT1. SGT1 provides a more
                efficient method for screening foreign protein expression, greatly reducing the workload, and can largely
                help future iGEM teams that want to use Chlamydomonas reinhardtii as chassis. If we could summarize our
                screening process in one sentence, that is: <a style="font-weight:border">Once movement occurs, a protein
                  is expressed.</a><br>
                We hope that through our efforts, more teams will use Chlamydomonas reinhardtii as a chassis organism, and
                tap into its unlimited potential in iGEM, which was limited by the expression screening efficiency of
                foreign proteins in the past.<br></p>

              <h4 class="small-title">SGT1 for Easier Chlamy Screening</h4>
              <p>To address the problem of screening for foreign gene expression in Chlamydomonas reinhardtii, we utilize
                SGT1 as a screening marker and construct a plasmid for efficient screening of foreign gene expression in
                Chlamydomonas reinhardtii.</p>
              <div class="gallery rounded mx-auto d-block" style="width: 70%; height: auto;text-align:center">
                <a href="https://static.igem.wiki/teams/4772/wiki/website-material/contribution/figure-1.png"><img
                    src="https://static.igem.wiki/teams/4772/wiki/website-material/contribution/figure-1.png" />Figure 1.1
                  Design of Part SGT1</a>
              </div><br>
              <p>SGT1/SUGT1, a co-chaperone of HSP90, is involved in multiple cellular activities including cullin E3
                ubiquitin ligase activity，multiple protein folding and complex formation process. Chlamydomonas mutants of SGT1 have cilia-related
                defects. Thus they are agglomerated in TAP medium and unable to move. </p>
              <div class="gallery rounded mx-auto d-block" style="width: 70%; height: auto;text-align:center">
                <a href="https://static.igem.wiki/teams/4772/wiki/website-material/contribution/figure-2.png"><img
                    src="https://static.igem.wiki/teams/4772/wiki/website-material/contribution/figure-2.png" />Figure 1.2
                  Chlamydomonas mutants of SGT1 are agglomerated in medium and unable to move. </a>
              </div><br>
              <p>In our design, SGT1-mutated Chlamydomonas reinhardtii exhibits a non-motile phenotype. The target foreign
                gene and SGT1 share the same promoter and initiation codon, ensuring that the expression levels of the
                target foreign protein and SGT1 are equivalent. Finally, by performing microscopic examination of the SGT1
                motility phenotype complementation, we achieve efficient screening for foreign protein expression in
                Chlamydomonas reinhardtii.</p>
              <div class="gallery rounded mx-auto d-block" style="width: 70%; height: auto;text-align:center">
                <a href="https://static.igem.wiki/teams/4772/wiki/website-material/contribution/figure-3.png"><img
                    src="https://static.igem.wiki/teams/4772/wiki/website-material/contribution/figure-3.png" />Figure 3.
                  An overview of principle of foreign protein expression screening by SGT1 marker.<br>
                  GOI: gene of interest; POI: protein of interest.</a>
              </div><br>
              <h4 class="small-title">Help for construction of sgt1 mutant Chlamy</h4>
<p>It is worth noting that using SGT1 as a screening marker requires the availability of an sgt1 mutant strain of Chlamydomonas. Considering that iGEM teams may not currently have access to this strain, we can provide two forms of assistance to teams who wish to use SGT1 in the future: <br>
<li>We provide a detailed protocol for CRISPR-Cas9 gene editing in Chlamydomonas. You can perform gene editing on your own Chlamydomonas strain in your laboratory to screen for sgt1 mutants. <br><br>
  <a class="link-download" style="text-align:center" download="" target="_blank"
                href="https://static.igem.wiki/teams/4772/wiki/website-material/protocol-knock-out.pdf">Click here to see more details about our Chlamy gene editing protocol.
               </a> <br>
If you encounter any technical issues during the gene editing process, you can email our team member Wenxi Wu at <a style="color:rgb(85, 147, 126)">wuwenxi21@mails.tsinghua.edu.cn</a> for help and we will be happy to assist you in resolving your problems. </li>

<li>We also provide SGT1 mutant strains of Chlamydomonas. Subject to compliance with all relevant biological safety requirements of the team region and iGEM official guidelines, you can email us to request directly the sgt1 mutant strain from us. We are willing to send it to you promptly.</li></p>

<a class="link-download" style="text-align:center" download="" target="_blank"
                href="https://2023.igem.wiki/parts">Click here to see more about "our favourite part
                SGT1"</a>
            </section>

            <section id="nano">
              <h3 class="small-title">Other Parts related to Chlamy Photosynthesis</h3>
              <p>To achieve the synthetic biological engineering of Chlamydomonas reinhardtii, we also constructed multiple other parts of Chlamydomonas reinhardtii. They are related to different processes of photosynthesis, including the light reaction, carbon fixation , and downstream carbon flow distribution. These parts all meet the standardized part requirements of the iGEM official . The lack of useful Part has been a problem for Chlamydomonas as a chassis organism in iGEM, especially for processes of photosynthesis. iGEM teams with needs can further learn about and obtain guidance for using these parts in our Parts.</p><a class="link-download" style="text-align:center" download="" target="_blank"
                href="https://2023.igem.wiki/parts">Click here to see more about other parts we made</a>

            </section>
</section>




            <section id="edu">
              <h2 class="main-title">Contribution to SDG:<br>Empowering Future iGEM Teams: Our Methodology for
                Sustainable Development</h2>
              <p>Recognizing the need to make a useful contribution for future iGEM teams, we embarked on a journey to craft a robust and invaluable resource that would transcend the boundaries of our current iGEM project. Our profound understanding of the intricate landscape of sustainable development projects was the driving force behind our commitment to this endeavor.<br> 

To address this pressing need, we meticulously curated and <a style="font-weight:border">compiled a comprehensive handbook </a>that would stand as a beacon of guidance for forthcoming iGEM teams. This handbook is not just a mere documentation of our efforts; it serves as a meticulously <a style="font-weight:border">detailed account of our unique approach to sustainable development initiatives</a>, thereby providing an invaluable blueprint for other teams venturing into similar projects.</p>
<div class="gallery rounded mx-auto d-block" style="width: 50%; height: auto;text-align:center">
                <a href="https://static.igem.wiki/teams/4772/wiki/website-material/contribution/figure-4.png"><img
                    src="https://static.igem.wiki/teams/4772/wiki/website-material/contribution/figure-4.png" />Figure 2.1 Sustainable Development Handbook: A guide to sustainable iGEM Projects</a><br><br><a class="link-download" style="text-align:center" download="" target="_blank"
                href="https://static.igem.wiki/teams/4772/wiki/website-material/sustainable-development-handbook-by-tsinghua-tfl-1.pdf">Click here to download this handbook</a>
              </div><br>
              <p>However, our mission  <a style="font-weight:border">extended beyond just documenting our own journey</a>. We fervently  <a style="font-weight:border">reached out to numerous iGEM teams</a>, extending an invitation to share their invaluable experiences and insights with us. This collaborative approach has bestowed upon our handbook the wealth of real-world case studies and best practices. By seamlessly interweaving these diverse perspectives, our resource has evolved into a dynamic and ever-evolving repository of knowledge. As a result, it not only encapsulates our journey but has also transformed into a living compendium of collective wisdom, making it a valuable asset for future iGEM teams aspiring to tackle the challenges of sustainable development projects.<br>

In essence, we think our work has not only met but greatly exceeded the requirement of making a useful contribution for future iGEM teams, offering them an enduring source of guidance and inspiration.</p>
            </section>


            <section id="refs">
              <ul class="acc">
                <li class="acc-item references">
                  <input id="s1" class="hide" type="checkbox">
                  <label for="s1" class="acc-label icon">References</label>
                  <div class="acc-child">
                    <p>[1] Yohei Niikura, Katsumi Kitagawa. Functions of SGT1, a Co-chaperone. Heat Shock 
Protein 90 in Human Diseases and Disorders(2019).
                      <br>
                    </p>
                  </div>
                </li>
              </ul>
            </section>
        </div>
      </div>
    </Scrollspy>
  </div>
</template>

<script>
import SimpleLightbox from "simplelightbox";

export default {
  data() {
    return {
      currentPage: "Contribution",
      options: {
        easing: [0.25, 0.1, 0.25, 1.0],
        force: true,
        cancelable: false,
        x: false,
        y: true,
        offset: -80,
      },
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
    },
    scrollToStickers: function () {
      this.$router.push({ path: "safety" });
      setTimeout(() => {
        this.$scrollTo("#section1", 350, this.options);
      }, 1000)
    },
  }
}
</script>
