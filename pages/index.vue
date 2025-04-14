<template>
  <div style="overflow-x: hidden">
    <Header title="Home"></Header>

    <div class="backg"
      style="background: url('https://static.igem.wiki/teams/4772/wiki/website-material/backgif.gif') center center no-repeat; background-size: cover;">
    </div>


    <section style="background-color:#aeb799e9">
      <div class="container">
        <div class="row home-sections justify-content-end">
          <div class="col-lg-6 order-lg-last" data-aos="fade-left" data-aos-duration="1000">
            <h3 class="main-title" style="color:#b7eebe">What is Star-Chlamy?</h3>
            <p style="color:white;">"Starchlamy can be understood as <a style="font-weight:bolder">"A superstar in future
                agriculture"</a> and <a style="font-weight:bolder">"Starch(Ch)lamy"</a>.<br><br> We modified these
              <a style="font-style:italic">Chlamydomonas reinhardtii</a> strains to realize the potential to <a style="font-weight:bolder">produce starch
                efficiently in syhthetic plant</a> without taking up much land.</p>
            <a class="primary-button" href="description">Read more</a>
          </div>
          <div class="col-lg-6" data-aos="fade-right" data-aos-duration="1000">
            <img src="https://static.igem.wiki/teams/4772/wiki/website-material/homepage/index-2.png"
              alt="Chlamydomonas reinhardtii"/>
          </div>
        </div>
      </div>
    </section>



    <section style="background-color:#aeb799e2">
      <div class="container">
        <div class="row home-sections">
          <div class="col-lg-6" data-aos="fade-right" data-aos-duration="1000">
            <h3 class="main-title" style="align-self:center;color:#b7eebe">Land-Consuming Food Production:<br>as we know it</h3>
            <p style="color:white">Up to today, the most common agricultural paradigm is still <a
                style="font-weight:bolder">highly dependent on land</a>. According to FAO, over <a
                style="font-weight:bolder">95% of world crop production</a> comes from land. The plough supports every
              harvest with its nutration and fertileness.<br> However, at the same time, high dependency means <a
                style="font-weight:bolder">the same threat will come to food production</a> as to the arable land.<br>It
              is necessary that we must be visionary enough to <a style="font-weight:bolder">cultivate the possibility of
                land-free agriculture</a> to reduce the dependence.
            </p>
          </div>

          <div class="col-lg-6" data-aos="fade-left" data-aos-duration="1000">
            <img src="https://static.igem.wiki/teams/4772/wiki/website-material/homepage/index-3.png"
              alt="Chlamydomonas reinhardtii"/>
          </div>
        </div>
      </div>
    </section>


    <section style="background-color:#aeb799e5">
      <div class="container">
        <div class="row home-sections">
          <div class="col-lg-6" data-aos="fade-left" data-aos-duration="1000">
            <img src="https://static.igem.wiki/teams/4772/wiki/website-material/homepage/zjzfsrl.png"
              alt="Chlamydomonas reinhardtii"/>
          </div>
          <div class="col-lg-6" data-aos="fade-right" data-aos-duration="1000">
            <h3 class="main-title" style="color:#b7eebe">The Global Arable Land Crisis</h3>
            <p style="color:white">What's worse, due to natural hazards such as <a
                style="font-weight:bolder;">desertification, salinization, and soil erosion</a>, a large amount of
              arable land loses its productivity every year around the world, and that strengthen the necessity mentioned
              above.<br>Although arable land is
              constantly decreasing, the rate of <a style="font-weight:bolder;">global population growth</a> is
              accelerating, and the demand for
              food is constantly rising. Against this backdrop, the food crisis is spreading everywhere.
              <br><a style="font-weight:bolder">It is urgent to solve the global arable land crisis</a>.
            </p>
          </div>

        </div>
      </div>
    </section>


    <section style="background-color:#aeb799e5">
      <div class="container">
        <div class="row home-sections">

          <div class="col-lg-6" data-aos="fade-right" data-aos-duration="1000">
            <h3 class="main-title" style="color:#b7eebe">Which Crop to Target?</h3>
            <p style="color:white">After detailed researching, we decided to <a style="font-weight:bolder;">choose starch
                as a target to design the land-free agriculture paradigm</a>. <br>The reasons are as follows:<br>

              <li style="color:white">Starch distributes really widely in the nature, mainly in <a
                  style="font-weight:bolder;">cereals</a>. <br>In fact, it is one of the crops <a
                  style="font-weight:bolder;">with the most abundant production globally</a>.</li>
              <li style="color:white">Starch has <a style="font-weight:bolder;">high food and industrial value</a> and <a
                  style="font-weight:bolder;">modifying starch products in amylose content</a>, which has something
                similar to the core idea of synthetic biology, does has a growth market.</li>
              <li style="color:white">It's <a style="font-weight:bolder;">easy to find chassis organism that produces
                  starch themselves</a>, which simplify the modification.</li>

              <br>
            <p style="color:white;font-size:15px">Showed on the right is a prechart describing how much each type of crops
              takes in all the crop production worldwide every year (Item: billion ton).<br><a
                style="font-style:italic;font-size:15px">Data Source: STATISTICAL YEARBOOK 2022 ISSN 2225-7373 WORLD FOOD
                AND AGRICULTURE</a></p>

            </p>
          </div>
          <PieChart />
        </div>
      </div>
    </section>



    <section class="grid-transparent-cards">
      <div data-aos="fade-up" data-aos-duration="1000">
        <h3 class="large-title">Our Design<br>"Star-Chlamy"</h3>
        <p class="smaller" style="text-align: center !important;">
          We modify <a style=" font-style:italic">Chlamydomonas reinhardtii</a> starch synthesis pathway <br><a style="font-weight:bolder;">for higher
            starch synthesis</a> and <br><a style="font-weight:bolder;">manageable amylose content</a>. <br>Besides, we
          try to <a style="font-weight:bolder;">crack the main barrier for its industrial production</a>, which lies in
          its CCM and light capture in photosynthesis.
        </p>
      </div>
      <div class="container">
        <div class="row">
          <div class="col-lg-4" data-aos="fade-up-right" data-aos-duration="1000">
            <div class="card-component">
              <div class="comp">
                <img src="https://static.igem.wiki/teams/4772/wiki/website-material/homepage/starch.png" alt="" />
              </div>
              <h4 class="small-title2">Starch Pathway</h4>
              <h5 class="excerpt">Amount and "Amylose Flexibility"</h5>
              <p>
                <li style="font-size:15px;text-align:left">"Broaden the source of income and economize on
                  expenditure": Introduce <a style="font-weight: bolder;">a more efficient
                    AGPase</a> and <a style="font-weight: bolder;">knock outthe key enzyme genes</a> in the starch
                  decomposition pathway.</li>
                <li style="font-size:15px;text-align:left">Knocked out the key enzyme genes<a
                    style="font-weight: bolder;"> responsible for the conversion of amylose to
                    amylopectin</a> to increase the proportion of
                  amylose in starch</li>
                <li style="font-size:15px;text-align:left">Establish <a style="font-weight: bolder;">a reliable method</a>
                  for detecting starch content in Chlamy.</li>
              </p>

            </div>
          </div>
          <div class="col-lg-4" data-aos="fade-up" data-aos-duration="1000">
            <div class="card-component">
              <div class="comp">
                <img src="https://static.igem.wiki/teams/4772/wiki/website-material/homepage/chif.png" alt="" />
              </div>
              <h4 class="small-title2">Chlorophyll F</h4>
              <h5 class="excerpt">What if Chlamy can make use of FaRLiP?</h5>
              <p>
                <li style="font-size:15px;text-align:left">Chlamydomonas only uses
                  <a style="font-weight: bolder;">near-red light but not far-red light </a>. 
            The <a style="font-weight: bolder;">near-red light attenuation</a> in the depth of runway ponds becomes a serious problem. </li>
                <li style="font-size:15px;text-align:left">We expressed <a style="font-weight: bolder;">a chlorophyll F synthetic enzyme from cyanobacteria</a> to introduce FaRLiP-absorbing chlorophyll F into
                Chlamydomonas, hoping to <a style="font-weight: bolder;">extend its light harvesting spectrum
                </a>.</li>
              </p>
            </div>
          </div>
          <div class="col-lg-4" data-aos="fade-up-left" data-aos-duration="1000">
            <div class="card-component">
              <div class="comp">
                <img src="https://static.igem.wiki/teams/4772/wiki/website-material/homepage/ccm66.png" alt="" />
              </div>
              <h4 class="small-title2">Carbon Concentration Mechanism (CCM)</h4>
              <h5 class="excerpt">Wake Chlamy up in high CO<sub>2</sub> concentration</h5>
              <p>
                <a style="font-weight: bolder;">Target: Overexpressing major transcription factor CIA5</a>


                <li style="font-size:15px;text-align:left"> CIA5 undergoes chemical modification <a
                    style="font-weight: bolder;"> under and only under low carbon dioxide concentrations</a>.
                </li>
                <li style="font-size:15px;text-align:left"> Thereby <a style="font-weight: bolder;">activating its
                    transcriptional activity and up regulating the expression</a> of over 90% of CCM-related genes.</li>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>



    <section class="container-fluid">
      <div class="row">
        <div class="col tabbed-gallery">
          <ul class="thumbnails">
            <li>

              <input type="radio" name="select" id="image1" checked>
              <div class="item-hugger" data-aos="fade-up" data-aos-duration="1000">
                <img class="thumb-image"
                  src="https://static.igem.wiki/teams/4772/wiki/website-material/homepage/web-new-small.jpg" />
                <label for="image1"></label>
              </div>
              <div class="gal-content"
                style="background: url('https://static.igem.wiki/teams/4772/wiki/website-material/homepage/web-new.jpg') center center no-repeat; background-size: cover;">
                <div class="item-wrapper" data-aos="fade-right" data-aos-duration="1000">
                  <div class="title">Wet lab</div>
                  <p class="txt">Have a look at what we have achieved towards the realization of <a
                      style="font-weight:bolder">Chlamydomonas photosynthetic factory!</a></p>
                  <a href="wet-lab" class="pills">Read More</a>
                </div>
              </div>
            </li>


            <li>
              <input type="radio" name="select" id="image2">
              <div class="item-hugger" data-aos="fade-up" data-aos-duration="1000">
                <img class="thumb-image"
                  src="https://static.igem.wiki/teams/4772/wiki/website-material/homepage/drylab-small.jpg" />
                <label for="image2"></label>
              </div>
              <div class="gal-content"
                style="background: url('https://static.igem.wiki/teams/4772/wiki/website-material/dry-lab1.png') center center no-repeat; background-size: cover;">
                <div class="item-wrapper" data-aos="fade-right" data-aos-duration="1000">
                  <div class="title">Dry Lab</div>
                  <p class="txt">We are dedicated to <a style="font-weight:bolder">screening better promoters for our
                      hard-to-serve chassis organism</a> and to <a style="font-weight:bolder">predicting the percentage of
                      different starch</a> synthesized in metabolic pathway.</p>
                  <a href="dry-lab" class="pills">Read More</a>
                </div>
              </div>
            </li>


            <li>

              <input type="radio" name="select" id="image3">
              <div class="item-hugger" data-aos="fade-up" data-aos-duration="1000">
                <img class="thumb-image"
                  src="https://static.igem.wiki/teams/4772/wiki/website-material/homepage/imp-small.png" />
                <label for="image3"></label>
              </div>

              <div class="gal-content"
                style="background: url('https://static.igem.wiki/teams/4772/wiki/website-material/homepage/implementation.png') center center no-repeat; background-size: cover;">
                <div class="item-wrapper" data-aos="fade-right" data-aos-duration="1000">
                  <div class="title">Implementation</div>
                  <p class="txt" style="color:#7d7d7d">We survey the possibility of our strains <a
                      style="font-weight:bolder">to be applied in real factory cultivation</a> of Chlamy and to what <a
                      style="font-weight:bolder">degree</a> will they make a difference to <a
                      style="font-weight:bolder">starch production efficiency</a>.</p>
                  <a href="implementation" class="pills">Read More</a>
                </div>
              </div>
            </li>

            <li>
              <input type="radio" name="select" id="image4">
              <div class="item-hugger" data-aos="fade-up" data-aos-duration="1000">
                <img class="thumb-image"
                  src="https://static.igem.wiki/teams/4772/wiki/website-material/homepage/sustainable-small.png" />
                <label for="image4"></label>
              </div>
              <div class="gal-content"
                style="background: url('https://static.igem.wiki/teams/4772/wiki/website-material/homepage/sustainable.png') center center no-repeat; background-size: cover;">
                <div class="item-wrapper" data-aos="fade-right" data-aos-duration="1000">
                  <div class="title" style="color: #6bac74">Sustainable Development</div>
                  <p class="txt" style="color: #6bac74">See the <a style="font-weight:bolder">context</a> of our creative
                    solution to <a style="font-weight:bolder">arable land crisis</a> and how this SDG-associated idea has
                    been <a style="font-weight:bolder">well received and advised</a> by expertise and out fellows.</p>
                  <a href="sustainable" class="pills">Read More</a>
                </div>
              </div>
            </li>

            <li>
              <input type="radio" name="select" id="image5">
              <div class="item-hugger" data-aos="fade-up" data-aos-duration="1000">
                <img class="thumb-image"
                  src="https://static.igem.wiki/teams/4772/wiki/website-material/homepage/team-small1.jpg" />
                <label for="image5"></label>
              </div>
              <div class="gal-content"
                style="background: url('https://static.igem.wiki/teams/4772/wiki/website-material/team.png') center center no-repeat; background-size: cover;">
                <div class="item-wrapper" data-aos="fade-right" data-aos-duration="1000">
                  <div class="title">Our Team</div>
                  <p class="txt">We named ourselves as "Ten Chlamies" when <br>iGEM season 2023 began and we have grown
                    with our real Star-Chalmy!</p>
                  <a href="team" class="pills">Read More</a>
                </div>
              </div>
            </li>



          </ul>
        </div>
      </div>
    </section>
  </div>
</template>



<script>
import AOS from 'aos'
import 'aos/dist/aos.css'

export default {
  mounted() {
    this.$nextTick(() => {
      this.$nuxt.$loading.start()
      setTimeout(() => this.$nuxt.$loading.finish(), 1000)
    })
    AOS.init({});
  },
}
</script>
