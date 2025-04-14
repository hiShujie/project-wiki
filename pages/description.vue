<template>
  <div>
    <Header :title="currentPage">
      <div class="bg"
        style="background: url('https://static.igem.wiki/teams/4772/wiki/website-material/homepage/description.png') center center no-repeat; background-size: cover;">
        <h1 class="head-title">{{ currentPage }}</h1>
      </div>
    </Header>
    <section class="intro">
      <div class="gallery rounded mx-auto d-block" style="width: 70%; height: auto;text-align:center">
        <iframe title="Tsinghua-TFL: STAR-CHLAMY: A New Solution to Land Crisis (2023) - Project Promotion [English]"
          width="560" height="315" src="https://video.igem.org/videos/embed/0aa3fc57-5a27-46a8-867d-503b96d5d648"
          frameborder="0" allowfullscreen="" sandbox="allow-same-origin allow-scripts allow-popups"></iframe>
      </div>


    </section>

    <Scrollspy :currentPage="currentPage" initialSection="started">
      <div class="row">
        <div class="col-lg-3">
          <nav class="section-nav">
            <div class="row">
              <progress min="0" max="100" value="0"></progress>
              <ol>
                <li><a :href="`${currentPage}/#started`" v-scroll-to="'#started'">How did it all start?</a></li>
                <li><a :href="`${currentPage}/#why`" v-scroll-to="'#why'">Our Solution</a></li>
                <li><a :href="`${currentPage}/#liquid`" v-scroll-to="'#liquid'">About "Star-Chalmy"</a></li>

                <ul>
                  <li class="sub"><a :href="`${currentPage}/#bio`" v-scroll-to="'#bio'" parent="liquid">Starch</a>
                  </li>
                  <li class="sub"><a :href="`${currentPage}/#circ`" v-scroll-to="'#circ'" parent="liquid">ChlF</a></li>
                  <li class="sub"><a :href="`${currentPage}/#our`" v-scroll-to="'#our'" parent="liquid">CCM</a>
                  </li>
                </ul>

                <li><a :href="`${currentPage}/#nano`" v-scroll-to="'#nano'">The Future</a></li>
                <ul>
                  <li class="sub"><a :href="`${currentPage}/#general`" v-scroll-to="'#general'" parent="nano">Project</a>
                  </li>
                  <li class="sub"><a :href="`${currentPage}/#ldn`" v-scroll-to="'#ldn'" parent="nano">Implementation</a></li>
                </ul>


                <li><a :href="`${currentPage}/#refs`" v-scroll-to="'#refs'">References</a></li>
              </ol>
            </div>
          </nav>
        </div>



        <div class="col-lg-9 main-content" id="main-content">
          <section id="started">
            <h2 class="main-title">Global Problem - Land Crisis</h2>
            <p>Hunger is one of the sustainable challenges the world is facing, and the staggering number of people
              suffering from hunger is alarming. According to the latest research by the Food and Agriculture Organization
              (FAO) of the United Nations, there are 828 million people in the world who are undernourished. In this
              situation, however, food production is increasingly under immense pressure.</p>
            <div class="gallery rounded mx-auto d-block" style="width: 50%; height: auto;text-align:center">
              <a href="https://static.igem.wiki/teams/4772/wiki/website-material/description/desc-fig1.jpg"><img
                  src="https://static.igem.wiki/teams/4772/wiki/website-material/description/desc-fig1.jpg" /> Figure 1.1
                FAO data on global hunger </a>
              <a class="link-ref" v-scroll-to="'#refs'">[1]</a>
            </div><br>
            <p>Apart from natural disasters, the main cause of the global food crisis is the scarcity of arable land. Up
              to today, the most common agricultural paradigm is still highly dependent on land. According to FAO, <a
                style="font-weight:bolder">over 95% of the world's crop production comes from land</a>. However, this high
              dependency also means that food production faces the same threat as arable land. Due to natural hazards such
              as desertification, salinization, and soil erosion, a significant amount of arable land loses its
              productivity every year. Many countries resort to deforestation to maintain arable land area, leading to a
              substantial reduction in global forest coverage. Despite these efforts, it is still insufficient to meet the
              growing food demand of the global population, with a decreasing per capita arable land area.</p>
            <div class="gallery rounded mx-auto d-block" style="width: 50%; height: auto;text-align:center">
              <a href="https://static.igem.wiki/teams/4772/wiki/website-material/description/desc-fig2.jpg"><img
                  src="https://static.igem.wiki/teams/4772/wiki/website-material/description/desc-fig2.jpg" /> Figure 1.2
                Changes in per capita arable land area over time (data from FAO) </a>
              <a class="link-ref" v-scroll-to="'#refs'">[2]</a>
            </div><br>

            <p>However, this problem not only exists in the present but may become even more severe in the future.
              According to FAO's document<a style="font-style:italic"> How to Feed the World in 2050</a>, by 2050, the
              world's population will reach 9.1 billion, which is 34 percent higher than today. It is estimated that
              annual cereal production will need to rise to about 3 billion tons from the current 2.1 billion tons. The
              increasing demand for agricultural produce, both new and traditional, will further strain already scarce
              agricultural resources. Agriculture will not only be forced to compete for land and water with expanding
              urban settlements but will also be required to serve on other major challenges: adapting to and mitigating
              climate change, preserving natural habitats, and maintaining biodiversity. To meet these demands, it is
              urgent to solve the global arable land crisis and discover new methods that can <a
                style="font-weight:bolder">produce more from less land</a>.</p>
            <div class="gallery rounded mx-auto d-block" style="width: 50%; height: auto;text-align:center">
              <a href="https://static.igem.wiki/teams/4772/wiki/website-material/description/desc-fig3.jpg"><img
                  src="https://static.igem.wiki/teams/4772/wiki/website-material/description/desc-fig3.jpg" /> Fig 1.3
                Global progress in food consumption (data from FAO) </a>
              <a class="link-ref" v-scroll-to="'#refs'">[3]</a>
            </div>

          </section>


          <section id="why">
            <h2 class="main-title">Our Solution</h2>
            <p>Therefore, the key question to address is <a style="font-weight:bolder">how to produce more food with
                limited arable land</a>, thus tackling the land crisis. Based on this, our Tsinghua-TFL team propose a
              potential solution - using synthetic biology methods to transform Chlamydomonas reinhardtii into a possible
              alternative source of food in the future. Our goal is to create a means of agricultural production that can
              <a style="font-weight:bolder">utilize non-arable land</a> while simultaneously increasing grain production
              by improving photosynthetic efficiency. Additionally, we aim to improve the nutritional value by altering
              the composition ratio of food.<br><a style="font-weight:bolder">Chlamydomonas reinhardtii</a>, also known as
              chlamy, is a unicellular
              eukaryotic photosynthetic algae. It possesses several advantages, making it an ideal candidate for our
              project:<br>
            </p>

            <div class="gallery grid" style="margin-left:10vw;text-align: center;">
              <a style="width:55%;"
                href="https://static.igem.wiki/teams/4772/wiki/website-material/description/last-2.png"><img
                  src="https://static.igem.wiki/teams/4772/wiki/website-material/description/last-2.png" />Figure
                1.4</a>
              <div class="p" style="text-align: left;align-self: center;margin-right:4vw;width:100%;">


                As a potential food source:
                <div style="color:#6bac74;font-weight:border">
                  <div>
                    <li>Do not require arable land.</li>
                    <li>High photosynthetic efficiency.</li>
                    <li>High carbon fixation efficiency based on the CCM (Carbon Concentrating Mechanism) mechanism.</li>
                    <li>Growth cycle is shorter compared to higher plants.</li>
                  </div><br>
                </div>
                As a model organism:
                <div style="color:#6bac74;font-weight:border">
                  <div>
                    <li>Accomplished complete genome sequencing.</li>
                    <li>With well-established gene editing and genetic transformation system.</li>
                    <li>With extensive research on CCM.</li>
                  </div>
                </div>

              </div>
            </div> <br>
            <p>Therefore, we have chosen Chlamydomonas reinhardtii as our chassis and designed a series of
              bioengineering operations based on its inherent characteristics to enhance its potential as a food
              source.<br><br>
              After thorough research, we have decided to target starch and design a land-free agriculture paradigm.
              Globally, most cereal crops are primarily composed of starch. Approximately 2 billion out of the estimated 3
              billion tons of annual grain production worldwide consist of starch molecules. Starch is a crucial energy
              source for humans and an important industrial raw material. By developing a land-independent method for
              starch production, we are able to achieve sustainable development in the field of starch agriculture and
              address the challenges of land scarcity and global hunger.</p>
            <div class="gallery rounded mx-auto d-block" style="width: 50%; height: auto;text-align:center">
              <a href="https://static.igem.wiki/teams/4772/wiki/website-material/description/last-3.png"><img
                  src="https://static.igem.wiki/teams/4772/wiki/website-material/description/last-3.png" /> Fig 1.5
                Distribution of arable crop types</a>
              <a class="link-ref" v-scroll-to="'#refs'">[4]</a>
            </div> <br>
            <p>To accomplish this, we have modified the starch synthesis pathway in Chlamydomonas reinhardtii to enable
              large-scale starch production, which we refer to as Star-Chlamy. The name <a
                style="font-weight:bolder">"Star-Chlamy"</a> holds two meanings: firstly, we aim to cultivate a superstar
              in food production, and secondly, we focus on starch production.</p>
          </section>

          <section id="liquid">
            <h2 class="main-title">About "Star-Chalmy"</h2>
            <section id="bio">
              <h3 class="main-title">Modification of Starch Metabolic Pathway</h3>
              <h4 class="small-title" style="font-size:30px">About the Starch Amount</h4>
              <div>
                <li>To achieve high starch production in Chlamydomonas reinhardtii, we targeted the rate-limiting enzyme
                  AGPase (ADP-glucose pyrophosphorylase) and introduced a more efficient AGPase encoded by <a
                    style="font-weight:bolder;font-style:italic">glgC</a> from <a style="font-style:italic">Escherichia
                    coli</a> to the mutant chlamy strain knockout of the endogenous one.</li>
                <li>We also knocked out the key enzyme genes GWD1 and GWD2 in the starch decomposition pathway.</li>
                <li>Besides, we established a reliable method for detecting starch content in Chlamydomonas reinhardtii.
                </li>

              </div><br>
              <div class="gallery rounded mx-auto d-block" style="width: 50%; height: auto;text-align:center">
                <a href="https://static.igem.wiki/teams/4772/wiki/website-material/description/fig666.png"><img
                    src="https://static.igem.wiki/teams/4772/wiki/website-material/description/fig666.png" /> Fig 2.1.1
                </a>
              </div><br><br>
              <h4 class="small-title" style="font-size:30px">About the Amylose Content</h4>
              <p>During the process of HP, we were inspired by communication with the China Starch Industry Association <a
                  href="https://2023.igem.wiki/tsinghua-tfl/human-practices" style="color:#6bac74">(visit HP page to read
                  more)</a> that changing the <a style="font-weight:bolder">composition ratio of starch</a> adds more
                value and economic significance. Chemically, starch consists of two types of anhydroglucose polymers
                called amylose and amylopectin. Amylose is relatively long and slightly branched, while amylopectin
                consists of numerous shorter highly branched chains. <a style="font-weight:bolder">High amylose starch
                  (HAS)</a> is a resistant starch that can ferment and produce various short-chain fatty acids (SCFA) in
                the colon through the action of intestinal microflora, providing several health benefits. HAS also
                enhances insulin sensitivity, lowers blood glucose levels, improves metabolic health, and shows potential
                for treating obesity, diabetes, and other diseases. Therefore, we regulated the starch composition in
                Chlamydomonas reinhardtii to produce strains with high production of amylose.</p><br>
              <div class="gallery rounded mx-auto d-block" style="width: 50%; height: auto;text-align:center">
                <a href="https://static.igem.wiki/teams/4772/wiki/website-material/description/last-4.png"><img
                    src="https://static.igem.wiki/teams/4772/wiki/website-material/description/last-4.png" /> Figure 2.1.2
                  Starch amylose and amylopectin structure <a class="link-ref" v-scroll-to="'#refs'">[5]</a></a>
              </div>
              <br>
              <p>To increase the proportion of amylose in <a style="font-weight:italic">Chlamydomonas reinhardtii</a>, we
                targeted the pathway responsible for the conversion of amylose to amylopectin. By knocking out the starch
                branching enzyme (SBE) in Chlamydomonas reinhardtii, we promote the accumulation of amylose.</p>
            </section>
            <h4 class="main-title" style="font-size:40px">Transition of Further Ideas</h4>
            <p>For further validating the feasibility and effectiveness of our project, we interviewed Xiao Yibo, the CEO
              of the microalgae synthetic biology company, PROTOGA BIOTECH. He emphasized the need to <a
                style="font-weight:bolder">improve the actual cultivation efficiency of microalgae</a> in terms of light
              energy conversion for commercialization of starch production. Therefore, we made two additional design
              modifications, <a style="font-weight:bolder">targeting both the light and dark reaction</a>s of
              photosynthesis in Chlamydomonas. These modifications aim to broaden the spectrum of light captured by
              photosynthetic pigments and promote the aggregation of carbon dioxide near the rubisco enzyme, thus
              enhancing photosynthesis and starch yield in Chlamydomonas.
            </p>
            <div class="gallery rounded mx-auto d-block" style="width: 50%; height: auto;text-align:center">
              <a href="https://static.igem.wiki/teams/4772/wiki/website-material/description/last-5.png"><img
                  src="https://static.igem.wiki/teams/4772/wiki/website-material/description/last-5.png" /> Figure 2.1.3
                Schematic representation of light and dark reactions </a>
            </div><br>


            <section id="circ">
              <h3 class="main-title">Extend light harvesting of Chlamy</h3>

              <p>In runway ponds for industrial production and cultivation, Chlamydomonas in the upper layer uses near-red
                light for photosynthesis. Therefore, similar to the living environment of terrestrial cyanobacteria, a
                serious problem of near-red light attenuation in the depth of runway ponds exists, which leads to serious
                decrease of the photosynthetic efficiency of Chlamydomonas in the depth of runway ponds. In order to solve
                this problem, we adopted the means of synthetic biology. We tried to express enzyme ChlF from
                cyanobacteria to introduce FaRLiP into Chlamydomonas, thereby extending their light harvesting into far
                red (700 to 800 nm) and improving their photosynthetic light absorbance efficiency</p>
              <div class="gallery rounded mx-auto d-block" style="width: 50%; height: auto;text-align:center">
                <a href="https://static.igem.wiki/teams/4772/wiki/website-material/description/desc-2.png"><img
                    src="https://static.igem.wiki/teams/4772/wiki/website-material/description/desc-2.png" /> Figure 2.2.1
                  Introduce of FaRLiP in Chlamy by expressing ChlF.<br>
                  RLiP: Red light photoacclimation; FaRLiP:Far-red light photoacclimation
                </a>
              </div>
            </section>

            <section id="our">
              <h3 class="main-title">Broaden the application scenarios of CCM</h3>

              <p>CCM, short for Carbon Concentrating Mechanism, represents a pathway that specially enrich carbon dioxide for photosynthesis in green algae such as <a style=" font-style:italic ">Chlamydomonas reinhardtii</a>. Through a series of coordinated membrane transporters and carbonic anhydrase, extracellular CO2 is actively transported into the pyrenoid structure within chloroplasts against its concentration gradient.  <br><br>
              CCM pathway is an adaptation of green algae to the changes of carbon dioxide concentration in the water environment. In wild-type <a style=" font-style:italic ">Chlamydomonas reinhardtii</a> cells, a shift to limiting CO2 conditions induces expression of more than 50 genes, most of which encodes proteins in CCM pathway, thereby enhancing the CCM process and improving the utilization of inorganic carbon during cellular photosynthesis. <br><br>
              CIA5, a transcription factor protein found in <a style=" font-style:italic ">Chlamydomonas</a> cells, plays a pivotal role in activating downstream gene expression related to CCM [6][7]. Under limited CO2 condition, the chemical modification of CIA5 changes, thus CIA5 locates at the nucleus and functions as a transcription factor for CCM genes. However, under high CO2 condition, the modification of CIA5 is not favorable to its transcription factor activity, resulting as a low CCM efficiency. </p>
               <a class="link-ref" v-scroll-to="'#refs'"></a></p>
              <div class="gallery rounded mx-auto d-block" style="width: 50%; height: auto;text-align:center">
                <a href="https://static.igem.wiki/teams/4772/wiki/website-material/description/desc-3.png"><img
                    src="https://static.igem.wiki/teams/4772/wiki/website-material/description/desc-3.png" /> Figure 2.2.2
                  Schematic diagram of CCM pathway
                </a>
              </div>
             <p> <br>
               It has been reported that the CIA5 protein gene with a deletion of 54 amino acids in the C terminus can complement the CIA5 mutant phenotype [8], which suggests that the C terminus of CIA5 may function as the upstream CO2 sensing domain and regulate its own transcription factor activity. Therefore, we planned to transfer an artificial CIA5 mutant with a C-terminal truncation (CIA5-C-del) into the wild type <a style=" font-style:italic ">Chlamydomonas reinhardtii</a> to allow it to function as a transcription factor under any CO2 concentration.</p> 
            </section>
          </section>


          <section id="nano">
            <h2 class="main-title">The Future</h2>
            <section id="general">
              <h3 class="small-title">Project</h3>




              <div class="gallery grid" style="margin-left:10vw;text-align: center;">
                <a style="width:55%;"
                  href="https://static.igem.wiki/teams/4772/wiki/website-material/description/desc-fig11.png"><img
                    src="https://static.igem.wiki/teams/4772/wiki/website-material/description/desc-fig11.png" />Figure
                  3.1</a>
                <div class="p" style="text-align: left;align-self: center;margin-right:4vw;width:100%;">


                  <p>In summary, we have proposed microalgae as <a style="font-weight:bolder">a next-generation,
                      sustainable, low-cost, and high-yield starch producing system</a>, providing a solution to the food
                    crisis. Our project is a great example of applying synthetic biology (the integration of biology and
                    engineering) to solve real-world problems. Through the <a
                      style="font-weight:bolder">Design-Build-Test-Learn cycle</a>, we have engineered the chassis,
                    Chlamydomonas reinhardtii, to produce a large quantity of high-quality starch. This reduces the
                    reliance on land resources in agricultural production and paves the way for addressing issues such as
                    land scarcity and global hunger.</p>


                </div>
              </div>
            </section>


            <section id="ldn">
              <h3 class="small-title">Implementation</h3>
              <p>Star-Chlamy, as a product combining principles of genetics and engineering, holds great potential for
                industrialization and forms the foundation for the concept of creating a light-drive cell-based starch
                factory. In fact, we have opened up the possibility of a sustainable farming that does not rely on arable
                land. Our project may not only assist to solve the issues described earlier but also contribute to
                mitigating climate change, generating new employment opportunities, and establishing sustainable
                industrial facilities to some extent. In the future, with advancements in chassis development and
                engineering optimization, productivity can increase and costs will reduce, thus our vision of constructing
                a phototrophic cell starch synthesis factory may become a reality. </p>
                <div class="gallery rounded mx-auto d-block" style="width: 70%; height: auto;text-align:center">
                <a style="width:55%;"
                  href="https://static.igem.wiki/teams/4772/wiki/website-material/description/last-1.png"><img
                    src="https://static.igem.wiki/teams/4772/wiki/website-material/description/last-1.png" />Figure
                  3.2 Schematic diagram of light-drive cell-based starch factory</a>
              </div>
        </section>
        </section>


        <section id="refs">
          <ul class="acc">
            <li class="acc-item references">
              <input id="s1" class="hide" type="checkbox">
              <label for="s1" class="acc-label icon">References</label>
              <div class="acc-child">
                <p>[1]<a class="link-ref"
                    href="https://www.deliveryrank.com/blog/world-hunger-facts-statistics">https://www.deliveryrank.com/blog/world-hunger-facts-statistics</a><br>
                  [2]<a class="link-ref"
                    href="https://www.heraeus.com/en/hch/leverage_a_better_world/nutrition/lightbox_graphic/bevoelkerungswachstum.html">https://www.heraeus.com/en/hch/leverage_a_better_world/nutrition/lightbox_graphic/bevoelkerungswachstum.html</a><br>
                  [3]<a class="link-ref"
                    href="https://www.fao.org/fileadmin/templates/wsfs/docs/expert_paper/How_to_Feed_the_World_in_2050.pdf">https://www.fao.org/fileadmin/templates/wsfs/docs/expert_paper/How_to_Feed_the_World_in_2050.pdf</a><br>
                  [4]Vajsová B, Fasbender D, Wirnhardt C, Lemajic S, Devos W. Assessing Spatial Limits of Sentinel-2 Data
                  on Arable Crops in the Context of Checks by Monitoring.Remote Sensing. 2020; 12(14):2195.<br>
                  [5] Gupta, K.M. (2011). Starch Based Composites for Packaging Applications. In Handbook of Bioplastics
                and Biocomposites Engineering Applications, S. Pilla (Ed.).<br>
                [6] Fukuzawa, H et al. Ccm1, a regulatory gene controlling the induction of a carbon-concentrating mechanism in Chlamydomonas reinhardtii by sensing CO2 availability. National Academy of Sciences of the United States of America vol. 98,9 (2001): 5347-52. <br>
                [7]Kohinata T et al. Significance of zinc in a regulatory protein, CCM1, which regulates the carbon-concentrating mechanism in Chlamydomonas reinhardtii. Plant & Cell Physiology. 2008 Feb;49(2):273-283.<br>
                [8]Xiang, Y et al. The Cia5 gene controls formation of the carbon concentrating mechanism in Chlamydomonas reinhardtii. National Academy of Sciences of the United States of America vol. 98,9 (2001): 5341-6.<br>
              </p>
            </div>
          </li>
        </ul>
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
      currentPage: "Description",
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
    scollToBiomarker: function () {
      this.$router.push({ path: "model" });
      setTimeout(() => {
        this.$scrollTo("#biomarker", 350, this.options);
      }, 1000)
    },
  }
}
</script>
