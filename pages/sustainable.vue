<template>
  <div>
    <Header :title="currentPage">
      <div class="bg"
        style="background: url('https://static.igem.wiki/teams/4772/wiki/website-material/homepage/sustainable.png') center center no-repeat; background-size: cover;">
        <h1 class="head-title">{{ currentPage }}</h1>
      </div>
    </Header>

    <Scrollspy :currentPage="currentPage" initialSection="intoduction">
      <div class="row">
        <div class="col-lg-3">
          <nav class="section-nav">
            <div class="row">
              <progress min="0" max="100" value="0"></progress>
              <ol>
                <li><a :href="`${currentPage}/#intoduction`" v-scroll-to="'#section1'">Overview</a></li>
                <li><a :href="`${currentPage}/#goals`" v-scroll-to="'#section2'">Core:SDG 2 & SDG 15</a></li>
                <li><a :href="`${currentPage}/#conclusion`" v-scroll-to="'#section3'">Derivative</a></li>
                <ul>
                  <li class="sub"><a :href="`${currentPage}/#hunger`" v-scroll-to="'#hunger'" parent="section3">SDG 4</a>
                  </li>
                  <li class="sub"><a :href="`${currentPage}/#good`" v-scroll-to="'#good'" parent="section3">SDG 9</a></li>
                  <li class="sub"><a :href="`${currentPage}/#good`" v-scroll-to="'#good1'" parent="section3">SDG17</a>
                  </li>
                </ul>
                <li><a :href="`${currentPage}/#conclusion`" v-scroll-to="'#section4'">Conclusion</a></li>
              </ol>
            </div>
          </nav>

        </div>

        <div class="col-lg-9 main-content" id="main-content">
          <section id="section1">
            <h2 class="main-title">Overview</h2>

            <p>In 2015, world leaders adopted the 17 Sustainable Development Goals (SDGs) of the 2030 Agenda for
              Sustainable Development. As we approach the 2030 deadline, progress towards these goals remains
              insufficient. The recent United Nations SDGs Report 2023 highlights concerning trends, particularly
              regarding SDG 2: "Zero Hunger" and SDG 15: "Life on Land."<br></p>
            <div class="gallery rounded mx-auto d-block" style="width: 70%; height: auto;text-align:center">
              <a><img src="https://static.igem.wiki/teams/4772/wiki/website-material/sustainable/7.png" /></a>
            </div> <br>
            <p>Hunger continues to be a critical global issue, with hunger levels not seen since 2005, and food prices
              remaining elevated in numerous countries [United Nations, SDGs Report 2023]. Simultaneously, land
              degradation poses a growing threat, with 100 million hectares of productive land degrading annually.<br><br>

              Our Starchlamy project aligns closely with SDG 2 and SDG 15, as it employs synthetic biology to transform
              Chlamydomonas reinhardtii into a future food source. By reducing land dependency, enhancing photosynthesis
              efficiency, and improving nutritional content, we aim to combat hunger and unsustainable farming practices,
              particularly in Asia.<br><br>

             Our efforts also align with SDG 4 (Quality Education), SDG 9 (Industry, Innovation, and Infrastructure), and SDG 17 (Partnerships for the Goals). We conducted educational classes on SDGs and synthetic biology in high schools, collaborated with the Starch Industry Association for project feasibility, and formed global alliances. Moreover, We've created a handbook documenting our experiences in coordinating cross-continental and time-zone-spanning events. In addition, we've invited multiple teams to share their experiences and synthesized a methodology. This not only aids future iGEM teams in establishing broader connections but also promotes the development of Sustainable Development Goals (SDGs).<br><br>

              We also recognized the essential need for a practical resource <a style="font-weight:border">that can guide future iGEM teams</a> through the intricate landscape of sustainable development projects. To fulfill this need, we meticulously compiled <a style="font-weight:border">an all-encompassing handbook</a>. This handbook offers a comprehensive account of our sustainable development
              approach and stands as a practical blueprint for other teams embarking on similar projects. Furthermore, we
              proactively <a style="font-weight:border">engaged with diverse iGEM teams</a>, integrating their valuable
              experiences and insights into the handbook, enriching it with real-world case studies and best practices.
              This collaborative effort ensures that our work is well-documented, allowing other teams to build upon our
              achievements effectively.<br><br>

              Throughout this journey, we've continuously integrated feedback from stakeholders, ensuring that our project
              considers the long-term social, economic, and environmental impacts. Our work measurably and significantly
              addresses multiple SDGs, underscoring its significance in the context of sustainable development.</p>
          </section>





          <section id="section2">
            <h2 class="main-title">Core: Zero Hunger (SDG 2) & Life on Land (SDG 15)</h2>
            <p>SDG 2 - Zero Hunger: End hunger, ensure food security, and promote sustainable agriculture.</p><br>
            <div class="gallery">
              <a><img src="https://static.igem.wiki/teams/4772/wiki/website-material/sdg/website-material/sdg-goal2.png" /></a>
            </div>
            <p>SDG 15 - Life on Land: Protect and sustainably manage terrestrial ecosystems and biodiversity.</p>
            <div class="gallery">
              <a><img src="https://static.igem.wiki/teams/4772/wiki/website-material/sdg/website-material/sdg-goal15.png" /></a>
            </div>
            <h3 class="main-title" style="font-size:4vh">The problem we face:<br> Less land supporting more food demand.
            </h3>
            <p>Two key factors drive this concerning trend: urbanization encroaches on arable land, and unsustainable farming practices degrade land quality. As our population grows, food demand is stronger than ever, necessitating more land to sustain agricultural output. Hunger is now a global concern that goes beyond just a lack of food; it also encompasses problems related to access, distribution, and food security. Recent data reveals that hunger is on the rise, reaching levels not seen since 2005, and food prices remain elevated in many countries, especially in Asia.<br><br>

              However, the expansion of cities continues to encroach on our valuable farmland, adding more pressure to the remaining farmland. Unsustainable farming practices exacerbate the situation. The burden our land bears has led to severe land degradation. Between 2015 and 2019, a shocking 100 million hectares of arable land were degraded annually. This has significant consequences for global food security, directly impacting approximately 1.3 billion people who grapple with the challenges of land degradation. <br><br>


             In summary, addressing the issues of urbanization, land quality degradation, and rising hunger is crucial as the world's population grows, especially in Asia. The degradation of arable land further threatens food security globally.</p>


            <h3 class="main-title" style="font-size:4vh">Long-term and short-term impacts of Starchlamy:</h3>
            <p>Our project employs algae to produce starch, reducing the need for arable land, enhancing nutritional value
              through specialized starch, and improving production efficiency by optimizing photosynthesis. This approach
              supports Zero Hunger (SDG2) and offers economic potential, especially in food processing.<br><br>

              Additionally, we optimize the photosynthetic pathway in Chlamydomonas reinhardtii, broadening its light
              absorption range to boost starch production within the algae. This sustainable approach not only increases
              starch production but also promotes efficient land use and sustainable agriculture, aligning with Life on
              Land (SDG 15).</p>

              <p>As a reminder, while our project holds great promise, it's prudent to be mindful of potential issues. For instance, ensuring food safety and proper regulation is crucial because new sources of starch could introduce food safety concerns, such as allergies or improper storage leading to food spoilage.</p>

            <h3 class="main-title" style="font-size:4vh">Our solution:</h3>
            <p>Traditional agriculture often demands high-quality arable land, often leading to deforestation in order to create new farmland, which harms the natural environment. Having a more efficient method of starch production could contribute to the protection of terrestrial ecosystems. We recognized that starch, a key component of food, plays a crucial role in human diets as an energy source and in shaping food products' texture. It's a fundamental element in staple foods like rice, wheat, and potatoes, contributing to nutrition and food security. Given its importance, exploring alternative methods for starch production beyond traditional agriculture is a reasonable and globally significant endeavor.<br><br>

              Our team choose <a style="font-style:italic">Chlamydomonas reinhardtii</a> as the chassis organism to
              provide a new way for starch synthesis.<a style="font-style:italic">Reinhardtii</a> is a single-cell green
              algae. It has a special CO<sub>2</sub>-concentrating mechanism to carry out efficient photosynthesis.<br>

              <p>We regulated the starch metabolism pathway of Chlamydomonas reinhardtii and achieved a 700% increase in yield. We also adjusted the proportion of amylose and amylopectin, enhancing the value of reinhardtii-produced starch. These modifications effectively contributed to SDG2.</p> 

             <p>Additionally, by optimizing its photosynthetic pathway, we granted reinhardtii higher photosynthesis efficiency and an extended range of light wavelengths absorbed. This outcome supports higher-density industrial production, improved land use efficiency, and reduced ecological degradation. Through our efforts, we aim to establish an innovative method for industrial starch production.</p>
            <div class="gallery rounded mx-auto d-block" style="width: 70%; height: auto;text-align:center">
              <a><img src="https://static.igem.wiki/teams/4772/wiki/website-material/sustainable/zjhjj.png" /></a>
            </div> <br>

            <p>Above is our project design, from left to right, top to bottom: Extending light harvesting of Chlamy,
              broadening the application scenarios of CCM, Chlamy with a high yield of starch, Chlamy with a higher ratio
              of amylose.</p>

              <div class="gallery rounded mx-auto d-block" style="width: 70%; height: auto;text-align:center">
              <a><img src="https://static.igem.wiki/teams/4772/wiki/website-material/final-wet-lab-starch/all-native-starch-20231012.png" /></a>
            </div> <br>
            <p>Above shows a 700% increase in starch yield, it's an amazing achievement.</p>

            <h3 class="main-title" style="font-size:4vh">Feedback from relevant stakeholders:</h3>
            <p>When we initially embarked on our project focused on starch synthesis, we conducted an interview with <a style="font-weight:border">Prof. Changhong Yao from Sichuan University</a>, an expert in the precise regulation of functional starch in algae. He not only affirmed the viability of our project but also elaborated on the industrialization of algae, <a style="font-weight:border">underscoring that our initiative to expand the spectrum of light wavelengths</a> absorbed by reinhardtii is not just beneficial but absolutely imperative for various industries.<br><br>

              We've also incorporated guidance from <a style="font-weight:border">a member<sup>2</sup>  of the China Starch Industry Association<sup>3</sup></a>. During our discussion, this expert acknowledged the significance of our work in addressing SDG2 and SDG15. However, he emphasized the importance of not only producing a product with social value but also <a style="font-weight:border">enhancing its economic viability</a>. In light of this valuable guidance, we made the decision to optimize the amylose and amylopectin ratio, which holds greater nutrition and commercial potential. This strategic adjustment aligns our project with both sustainable development objectives and economic feasibility.</p>


            <div class="gallery rounded mx-auto d-block" style="width: 70%; height: auto;text-align:center">
              <a><img src="https://static.igem.wiki/teams/4772/wiki/website-material/sustainable/4.png" />Our meeting with
                Prof. Yao</a>
            </div> <br>


          </section>



          <section id="section3">
            <h2 class="main-title">Derivative</h2>
            <p></p>
            <section id="hunger">
              <h2 class="main-title">Uplift: Quality Eduction (SDG 4)</h2>
              <p>SDG 4: Quality Education - Ensure inclusive, equitable, and quality education for all.</p>
              <div class="gallery">
                <a><img src="https://static.igem.wiki/teams/4772/wiki/website-material/sdg/website-material/sdg-goal4.png" /></a>
              </div>
              <h3 class="main-title" style="font-size:4vh">The problem we face:</h3>
              <p>Quality Education are compounded by the limited knowledge and awareness of sustainable development,
                especially among students in remote areas. This lack of awareness hinders their grasp of the broader
                context within which SDG 4 operates. To address this, it is essential to not only provide quality
                education but also to incorporate sustainable development principles into the curriculum. This approach
                empowers students to excel academically while becoming advocates for sustainability, ensuring that SDG 4's
                goal of inclusive, equitable education is met and fostering a deeper commitment to sustainable
                development.
              </p>
              <h3 class="main-title" style="font-size:4vh">Long-term and short-term positive impacts of Starchlamy:</h3>
              <p>Supporting education in underserved communities has increased students' awareness of SDGs, offering
                pathways for deeper understanding. It has also disseminated information that may influence their family
                members. This support has improved their comprehension of synthetic biology, introduced them to the iGEM
                competition, and encouraged them to engage in practical projects, promoting SDGs through innovation.</p>
              <p>In response to this challenge, our initiative is dedicated to bridging the knowledge gap and instilling a
                strong sense of concern for sustainable development among high school students. To achieve this, we have
                crafted an informative brochure that introduces the concept of the Sustainable Development Goals (SDGs)
                and elucidates the intricate connection between the SDGs and the field of synthetic biology. Our primary
                objective is to cultivate a sustainability-oriented mindset by showcasing the potential contributions of
                synthetic biology to the broader sustainable development process.<br><br>

                We have taken this brochure into schools and conducted lectures on the subjects of synthetic biology and
                sustainable development. Our ultimate goal is to empower these students with both the understanding and
                motivation needed to actively participate in and advocate for sustainable practices. In doing so, we
                aspire to contribute to a brighter future not only for remote areas but for society as a whole.</p>
              <h3 class="main-title" style="font-size:4vh">Our solution:</h3>
              <h3 class="main-title" style="font-size:4vh">Feedback from relevant stakeholders:</h3>
              <p>From collected feedback we might say that our lecture was quite effective in engaging high school
                students, as exemplified by Yiming Jiang's feedback. The lecture effectively conveyed the message that
                sustainable development is crucial for maintaining a delicate balance between people and nature. <br><br>
                We hereby quote Yiming’s comment on the lecture.<br><br>
                Yiming Jiang (age 16) :In my opinion,sustainable development is a wise and essential choice in the face of the new era and environments. Definitely,it truly balances people and nature.I believe that the topic studied by your research group is truly beneficial to the environment and has been widely valued by the world, which has made us deeply realize that humans and nature are inseparable. I’d like to take the brochure home and show it to my parents.</p>

              <div class="gallery rounded mx-auto d-block" style="width: 70%; height: auto;text-align:center">
                <a><img src="https://static.igem.wiki/teams/4772/wiki/website-material/sustainable/5.jpg" />Lecture at a
                  high school</a>
              </div>
              <a href="education" class="primary-button">visit our Education page</a>

            </section>

            <section id="good">
              <h2 class="main-title">Reform: Industry.Innovation and Infrastructure (SDG 9)</h2>
              SDG 9: Industry, Innovation, and Infrastructure - Promote sustainable industrialization, innovation, and
              infrastructure development to foster economic growth and ensure access to essential services.
              <div class="gallery">
              <a><img src="https://static.igem.wiki/teams/4772/wiki/website-material/sdg/website-material/sdg-goal9.png" /></a>
            </div>
               <!--<div class="gallery">
                <a href="https://static.igem.wiki/teams/4772/wiki/website-material/sustainable/goal-4-min.png"><img src="https://static.igem.wiki/teams/4772/wiki/website-material/sustainable/goal-4-min.png"/></a>
              </div>-->
              <h3 class="main-title" style="font-size:4vh">The problem we face:</h3>
              <p>In developing countries, only 30% of agricultural products undergo industrial processing, whereas in
                high-income countries, this figure stands at 98%. This stark contrast highlights the immense untapped
                potential for growth in agricultural enterprises within developing nations.</p>
              <h3 class="main-title" style="font-size:4vh">	Long-term and short-term positive impacts of Starchlamy:</h3>
              <p>Substituting traditional land crops with industrially-produced algae is at the heart of our strategy to
                address both hunger and land-related challenges. By enhancing the photosynthetic spectrum absorption of
                algae and regulating starch synthesis pathways, we enable factories to produce more nutrient-rich algae
                and starch with lower energy consumption and reduced space requirements.</p>
              <h3 class="main-title" style="font-size:4vh">Our solution:</h3>
              <p>Under the guidance of industrial stakeholders, we have developed a solution to broaden the photosynthetic spectrum in algae cultivation, addressing challenges in the industrial sector. Specifically, terrestrial cyanobacteria inhabit environments with near-infrared light at around 720nm, often due to shading by plants or their associations with soil crusts, benthic mat communities, or dense cyanobacterial blooms. These cyanobacteria have evolved a unique far-red light photoacclimation (FaRLiP) in response to evolutionary pressures, allowing them to harness far-red light (FRL) for photosynthesis.<br><br>

                In addition, the Carbon Concentrating Mechanism (CCM) in green algae enhances carbon dioxide utilization during photosynthesis. Our project optimizes the key transcription factor, CIA5, to enhance CCM efficiency, leading to improved energy utilization, reduced energy consumption, and increased production. When applied in industry, it can accommodate higher CO2 concentrations. Elevated CO2 concentration can act as a growth factor, utilizing carbon dioxide emissions to boost production.<br><br>
                
                Furthermore, our project provides a cost-effective and efficient method for producing both linear and branched-chain starch, addressing the industrial challenge of manufacturing high-value products.</p>
            <div class="gallery">
                <a><img src="https://static.igem.wiki/teams/4772/wiki/website-material/final-best-plant/lhbljh.png" /> From left to right: Extending light harvesting of Chlamy, broadening the application scenarios of CCM</a>
              </div><br>
            
            
            
            <h3 class="main-title" style="font-size:4vh">Feedback from relevant stakeholders:</h3>
            <p> To delve further into this matter, we conducted a interview with Mingxiong Xue, CEO of a prominent
              algae-based company, Beihai Shengbada Biotechnology Co., Ltd. <br><br>
              Additionally, we visited algae enterprises to gain insight into their research and industrial production
              processes.These visits were driven by our deep commitment to understanding the intricacies of their
              research and industrial production processes. By immersing ourselves in real-world industry operations, we
              sought to gain valuable insights into how these enterprises operate and how our own projects align with
              the practical demands of the industry. This hands-on approach underscores our genuine dedication to
              bridging the gap between academic research and industrial application in the field of algae-based
              solutions.<br><br>
              We also recently had the opportunity to speak with Yibo Xiao, CEO of Protogabio, where we explored the
              challenges and solutions associated with post-treatment of wastewater generated by algal industrial
              processes. An exciting revelation was the beneficial impact of algae wastewater on the growth of
              high-value crops, indicating that microalgae cultivation can be seen as a sustainable development industry. This not only
              underscores the economic potential of our project but also highlights the environmental benefits
              associated with them.<br><br>
              These initiatives allowed us to better understand the development and innovation prospects in the field of
              algae-based agriculture in developing regions.</p>
            <div class="gallery rounded mx-auto d-block" style="width: 70%; height: auto;text-align:center">
              <a><img src="https://static.igem.wiki/teams/4772/wiki/website-material/sustainable/6.png" />Beijing Protoga
                Biotechnology Co., Ltd(Image from official website)</a>
            </div>
            <div class="gallery rounded mx-auto d-block" style="width: 70%; height: auto;text-align:center">
              <a><img src="https://static.igem.wiki/teams/4772/wiki/website-material/sustainable/3.png" />Visiting
                Shenzhen Advanced Institute’s synthetic biology facility</a>
            </div>
            <br>
          </section>


          <section id="good1">
            <h2 class="main-title">Collaborate: Partnerships for the Goals (SDG17)</h2>
            <p> SDG 17: Partnerships for the Goals - Strengthen global partnerships for sustainable development by
              promoting collaboration, knowledge-sharing, and resource mobilization to achieve the SDGs.</p>
             <div class="gallery">
                <a><img src="https://static.igem.wiki/teams/4772/wiki/website-material/sdg/website-material/sdg-goal17.png" /></a>
              </div> 
            <h3 class="main-title" style="font-size:4vh">The problem we face:</h3>
            <p>We observed that different countries face unique situations, and there is a lack of communication among
              iGEM teams when it comes to sustainable development. While the iGEM competition encourages creativity and
              innovation in synthetic biology, there was a clear gap in fostering collaboration on
              sustainability-centered projects.</p>
            <h3 class="main-title" style="font-size:4vh">Long-term and short-term positive impacts of Starchlamy:</h3>
            <p>This initiative is dedicated to closing the divide between iGEM teams and countries, with the goal of
              nurturing collaboration for a more sustainable future. Through the cultivation of a community centered
              around knowledge exchange and the provision of a valuable reference guide, <a
                style="font-weight:border">our primary aspiration is to equip future iGEM teams with the resources and
                insights</a> essential for propelling innovation and change within the realm of sustainable development.
              Ultimately, our collective endeavor aims to leave a profound and enduring mark on the worldwide
              advancement of sustainability, amplifying the potential of iGEM projects within the realm of the SDGs.</p>
            <h3 class="main-title" style="font-size:4vh">Our solution:</h3>
            <p>Our primary initiative was <a style="font-weight:border">the organization of an international
                conference</a> dedicated to the intersection of synthetic biology and sustainable development. This
              conference served as a pivotal platform for iGEM teams from around the world who were dedicated to
              sustainability to come together and share their experiences, knowledge, and innovative ideas.<br><br>
              We extended invitations to teams worldwide and received enthusiastic responses from teams across Europe,
              Africa, and Asia. Notably, <a style="font-weight:border">teams from Oxford and Zurich</a> engaged in
              active discussions regarding the advancement of our collaboration. Our heartfelt gratitude goes to our
              esteemed partners, the <a style="font-weight:border">Makerere iGEM Team 2023</a> and <a
                style="font-weight:border">Team SCUT-China</a>, whose unwavering support has been invaluable to our
              project's progress. We also reached out to scholars involved in sustainable development worldwide and
              received valuable advice from <a style="font-weight:border">Dr. Claudia Zingerli, Head of ETH
                Sustainability</a>. Notably, we were honored to have <a style="font-weight:border">Mr. Yu Han Bao</a> as
              our keynote speaker, an iGEM Liaison Officer with extensive experience in sustainable development and a
              background in public administration and innovative policy research.<br><br>

              In addition to the conference, we recognized the need for a practical resource that <a
                style="font-weight:border">future iGEM teams</a> could use to navigate the complex landscape of
              sustainable development projects. To meet this need, we <a style="font-weight:border">compiled a
                comprehensive handbook</a>. This handbook provides a detailed account of our approach to sustainable
              development initiatives, serving as a blueprint for other teams looking to undertake similar projects.
              Moreover, we reached out to various iGEM teams to contribute their experiences and insights, enriching the
              handbook with real-world case studies and best practices.</p>
            <div class="gallery grid" style="margin-left:4vw;margin-right:3vw;text-align: center;width:70%">
              <a style="width:65%;"
                href="https://static.igem.wiki/teams/4772/wiki/website-material/sustainable/1.jpg"><img
                  src="https://static.igem.wiki/teams/4772/wiki/website-material/sustainable/1.jpg" /></a>

              <div class="p"
                style="text-align: left;color:#6bac74;font-weight: bolder;width:150%;justify-content:center;align-self: center;">
                <a style="width:90%;"
                  href="https://static.igem.wiki/teams/4772/wiki/website-material/sustainable/8.png"><img
                    src="https://static.igem.wiki/teams/4772/wiki/website-material/sustainable/8.png" />Left: Poster of our conference right: presentation during the conference(usage acknowledged by the
              presenting team)</a>

              </div>
            </div>

            
           
            <h3 class="main-title" style="font-size:4vh">Feedback from relevant stakeholders:</h3>
            <p>We gathered feedback from our valued collaborators, and the responses were extremely positive. Shakirah
              Namuli from our collaborative team at Makerere University expressed her gratitude, stating, "We are so
              grateful for your support and glad that we cooperated with you!" Furthermore, Kun Xuan, the Human Practice
              Leader from Nanjing, China, enthusiastically commended our meetup and offered invaluable insights and
              advice. He expressed, "I think you've done a fantastic job! If there's potential for enhancement, we'd
              greatly appreciate the opportunity for extended discussion." Inspired by his suggestions, we subsequently
              initiated email correspondences with teams who had shown interest in future collaborations and delved into
              their thoughts on the projects presented during the conference.<br><br>

              This feedback underscores the success of our collaboration and the constructive impact it has had,
              fostering a spirit of cooperation and knowledge exchange among our teams. We are immensely grateful for
              the opportunity to collaborate with numerous outstanding teams and the invaluable support of experts in
              our field. This collaborative effort has not only significantly enriched our collective experience but has
              also propelled us forward in pursuit of our shared mission and common goals.
            </p>
          </section>
          </section>
          <section id="section4">
            <h2 class="main-title">Conclusion</h2>
            <p>Our journey, centered on the Starchlamy project, has been a remarkable stride towards advancing
              sustainable development. We recognized the pressing global issues of hunger and land degradation and
              sought innovative solutions. Starchlamy, driven by synthetic biology, holds the potential to revolutionize
              food production by reducing land dependence, increasing efficiency, and improving nutritional value. Our
              project's alignment with key Sustainable Development Goals (SDGs) - notably SDG 2: "Zero Hunger" and SDG
              15: "Life on Land" - underscores its profound impact on addressing these challenges.
              <br><br>
              Our commitment extended beyond the lab, embracing quality education(SDG 4), industry innovation(SDG 9),
              and global collaboration(SDG 17). Our project modestly but resolutely serves as a testament to the power
              of synthetic biology in advancing sustainable development, demonstrating the potential for science and
              technology to drive positive change on a global scale.
              <br><br>
              We have dedicated ourselves to creating a clear roadmap for future iGEM teams interested in sustainable
              development. Our aim is to provide them with valuable insights and guidelines in our handbook, making it
              easier for them to develop their projects successfully.<br><br>

              By seamlessly merging science and sustainable development, we've taken significant strides towards a more
              sustainable and equitable world.



            </p>
          </section>
          <div class="gallery rounded mx-auto d-block" style="width: 50%; height: auto;text-align:center">
            <a href="https://static.igem.wiki/teams/4772/wiki/website-material/contribution/figure-4.png"><img
                src="https://static.igem.wiki/teams/4772/wiki/website-material/contribution/figure-4.png" />
              </a><br><a
              class="link-download" style="text-align:center" download="" target="_blank"
              href="https://static.igem.wiki/teams/4772/wiki/website-material/sustainable-development-handbook-by-tsinghua-tfl-1.pdf">Click
              Here to Download Our SDG Handbook</a>
              <br>
              <a
              class="link-download" style="text-align:center" download="" target="_blank"
              href="https://static.igem.wiki/teams/4772/wiki/website-material/sustainable/sdg-science-outreach-brochure-1.pdf">Click
              Here to Download Our Synthetic Biology and Sustainable Development Goals: A Science Outreach Brochure</a>
          </div><br>
      </div>
      </section>
    </div>



  </Scrollspy>
</div></template>

<script>
import SimpleLightbox from "simplelightbox";

export default {
  data() {
    return {
      currentPage: "Sustainable Development Impact",
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
