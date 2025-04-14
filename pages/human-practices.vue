<template>
  <div>
    <Header :title="currentPage">
      <div class="bg" style="background: url('https://static.igem.wiki/teams/4772/wiki/website-material/homepage/hp1.png') center center no-repeat; background-size: cover;">
        <h1 class="head-title">{{currentPage}}</h1>
      </div>
      <section class="intro">
      <div class="container">
          <div class="row">
            <div class="gallery rounded mx-auto d-block" style="width: 70%; height: auto;text-align:center">
          <a href="https://static.igem.wiki/teams/4772/wiki/website-material/hp/3.png"><img
                  src="https://static.igem.wiki/teams/4772/wiki/website-material/hp/3.png" /></a></div></div>
        </div>
      </section>
   



    </Header>

    <Scrollspy :currentPage="currentPage" initialSection="section1">
      <div class="row">
        <div class="col-lg-3">
          <nav class="section-nav">
            <div class="row">
              <progress min="0" max="100" value="0"></progress>
              <ol>
                <li><a :href="`${currentPage}/#section1`" v-scroll-to="'#section1'">Overview</a></li>
                <li><a :href="`${currentPage}/#section2`" v-scroll-to="'#section2'">Designing Framework</a></li>
                <li><a :href="`${currentPage}/#section3`" v-scroll-to="'#section3'">Building Our Project</a></li>
                <li><a :href="`${currentPage}/#section4`" v-scroll-to="'#section4'">Testing Our Project</a></li>
               
              </ol>
            </div>
          </nav>
        </div>



        <div class="col-lg-9 main-content" id="main-content">
          <section id="section1">
            <h2 class="main-title">Overview</h2>
            
            <p>Due to natural hazards such as desertification, salinization, and soil erosion, a significant amount of arable land loses its productivity every year globally. However, while arable land is continually decreasing, the global population is growing at an accelerating rate, leading to an ever-increasing demand for food. In this context, food crises are spreading, and addressing the global arable land crisis is becoming increasingly urgent.<br><br>

In light of these challenges, our Tsinghua-TFL team has proposed the Star-Chlamy solution. Through the use of synthetic biology, we aim to transform Chlamydomonas reinhardtii  into a potential alternative source of food for the future. Our goal is to reduce the reliance on land resources in agricultural production by increasing photosynthetic efficiency, thereby enhancing food production. Simultaneously, we intend to improve the nutritional value of food by altering the composition of food products.<br><br>

Throughout our project's lifecycle, we have carefully considered its responsibility and global benefit. This was not a one-time assessment but a continuous process that evolved as we progressed. We documented our approach to exploring these questions and made sure that our Human Practices activities responded to the core values we identified. This approach has enabled us to address the "why" and "how" of our project's responsible and reflective implementation.<br><br>

We established a DBTL cycle between our project work and the world it is meant to serve. These loops informed our project's purpose, design, and execution. Our commitment to continuous improvement and adaptation based on insights from our Human Practices activities has been integral to the responsible development of our project. We have actively responded to the information acquired and ensured that our project evolves in harmony with our core values.</p><br>
<div class="gallery rounded mx-auto d-block" style="width: 70%; height: auto;text-align:center" ><a><img src="https://static.igem.wiki/teams/4772/wiki/website-material/hp/3.png" >The Human Practices Cycle</a></div>
          </section>




          <section id="section2">
            <h2 class="main-title">Designing Our Human Practice Framework</h2>
            
            <p>The idea of using microalgae, specifically Chlamydomonas reinhardtii , to help tackle the issues of land scarcity and food insecurity sparked our curiosity. In pursuit of this innovative concept, we embarked on a journey of background research and conducted a series of interviews to assess the viability and potential industrialization of starch production by these algae.<br>Our primary objectives in these interviews were to determine:</p>
           <li>First: The feasibility of starch accumulation in reinhardtii</li>
           <h3 class="main-title" style="font-size:4vh">Mingxiong Xue May 14<sub>th</sub> Interview</h3>
           <h4 class="small-title">Feedback</h4>
           <p>During our insightful interview with Mingxiong Xue, the CEO of the highly esteemed algae-based company, Beihai Shengbada Biotechnology Co., Ltd, we gained valuable insights into the practical aspects of our project. Mr. Xue underlined the critical importance of translating innovative ideas into practical solutions. He emphasized that Chlamydomonas reinhardtii's self-sustaining nature in regular production is a promising aspect, shedding light on its potential for large-scale implementation.<br><br>

Furthermore, Mr. Xue astutely pointed out a specific challenge that our project needs to address – the issue of inadequate light penetration within fermentation tanks. This issue is crucial as it affects the growth and productivity of Chlorella. His expertise in the field provided us with a clear direction to consider and resolve this issue effectively.</p>
<div class="gallery rounded mx-auto d-block" style="width: 70%; height: auto;text-align:center" ><a><img src="https://static.igem.wiki/teams/4772/wiki/website-material/hp/11.jpg" >Mr. Xue at a conference</a></div>

<h4 class="small-title">Closing the Loop</h4>
<p>Mr. Xue expressed a keen interest in our chlorophyll project. He recognized its significance and potential for the industry. He not only encouraged our team's efforts but also suggested that further development, particularly through wet-lab experimentation, could unlock even greater potential in our project. This enthusiastic response from a seasoned professional in the field has motivated us to explore and expand our chlorophyll project further, with a keen focus on practical implementation and real-world impact.</p><br><br>
           <li>Second: The potential for industrial-scale starch production using reinhardtii.</li>
           <h3 class="main-title" style="font-size:4vh">China Starch Industry Association (Starch Industry NGO)  May 24<sub>th</sub> Interview</h3>
           <h4 class="small-title">Feedback</h4>
           <p>During the interview with the China Starch Industry Association[ a national, cross-regional, and cross-sector industry organization, also a non-profit social organization,their speaker(s) requested anonymity.], their insights provided a deeper understanding of the intricacies of the starch supply chain. They underscored the significance of high-value products within this chain, shedding light on the importance of refining our project's focus. Specifically, they encouraged us to delve further into examining direct chain-to-chain ratios as a means to elevate the overall quality of starch products.</p><div class="gallery rounded mx-auto d-block" style="width: 70%; height: auto;text-align:center" ><a><img src="https://static.igem.wiki/teams/4772/wiki/website-material/hp/7.png">Logo of the China Starch Industry Association</a></div>
           <h4 class="small-title">Closing the lop</h4>
           <p>This invaluable feedback from the association has sparked a new avenue of exploration for our project. In response to their recommendation, we have established a method for thorough investigation and optimization of the direct chain-to-chain ratios through dry lab procedures. This proactive step is aimed at not only improving the quality of starch products but also aligning our project more closely with industry standards and stakeholder expectations, thus ensuring a fruitful and mutually beneficial outcome.</p>
          </section>

          <section id="section3">
           <h2 class="main-title">Buiding Our Project</h2>
           <p>As our experiments progress, we aim to delve deeper into the significance of microalgae starch synthesis. This endeavor has led us to interview Prof. Changhong Yao , a professor at Sichuan University and an expert in the field. Feedback from our research suggests that both starch and its by-products hold considerable value, especially in contrast to the resource-intensive cultivation of corn for starch production.</p>
           <div class="gallery rounded mx-auto d-block" style="width: 70%; height: auto;text-align:center" ><a><img src="https://static.igem.wiki/teams/4772/wiki/website-material/hp/6.png">Our meeting with Prof. Yao
</a></div>
<h4 class="small-title">Interview Highlight:</h4>
<li>Project Responsibility and Global Benefits:<br>In our interview, we asked Prof. Yao about the evidence that showcases the responsibility and global benefit of our project. According to Prof. Yao, our project holds great potential. Microalgae-based starch production requires significantly less land compared to corn, which is a high-value proposition. This, in turn, can mitigate land use and resource scarcity issues.</li><br>

<li>Core Values in Project Design:<br>In our interview, we asked Prof. Yao about the evidence that showcases the responsibility and global benefit of our project. According to Prof. Yao, our project holds great potential. Microalgae-based starch production requires significantly less land compared to corn, which is a high-value proposition. This, in turn, can mitigate land use and resource scarcity issues.</li><br>

<li>Project Impact:<br>In terms of impact, we discussed with Prof. Yao the potential end users of our microalgae-based starch. He emphasized that the project can benefit industries requiring starch and its by-products. The food industry, for instance, could utilize microalgae-derived starch in various applications, reducing its reliance on conventional starch sources.</li><br>

<li>Implementation in the Real World:<br>Prof. Yao outlined a vision of our project's implementation in the real world. He stressed the importance of conducting feasibility studies, pilot programs, and collaboration with key stakeholders. Such a phased approach ensures a responsible and effective transition to microalgae starch production.</li><br>
<h4 class="small-title">Feedback</h4>
<p>Our interview with Prof. Yao has provided valuable insights into the responsible development of microalgae-based starch synthesis. By considering environmental, social, and economic factors and by consulting with experts and communities, we are confident that our project aligns with responsible and globally beneficial values. Moreover, the guidance from Prof. Yao has highlighted the importance of a phased implementation plan, emphasizing the responsible execution of our project in the real world.</p>
          </section>




          <section id="section4">
            <h2 class="main-title">Testing Our Project</h2>
            <p>As our experiment nears its completion, we find it crucial to assess the effectiveness of our project's outcomes. It is essential to understand whether our project aligns with values that are responsible and beneficial for the world. In pursuit of this understanding, we conducted an interview with Dr. Dingyi Li. During this interaction, we discussed the design aspects of our CCM project and received valuable insights on experimental characterization.<br><br>

We also visited Protogabio, a prominent algae-based company, to see how our idea could be industrialized. We visited their experimental labs and discussed industrial production techniques of green algae with their CTO, Dr. Yujiao Qu.</p>
<div class="gallery rounded mx-auto d-block" style="width: 70%; height: auto;text-align:center" ><a><img src="https://static.igem.wiki/teams/4772/wiki/website-material/hp/1.png">Interview with Dr. Li
</a></div><br><div class="gallery rounded mx-auto d-block" style="width: 70%; height: auto;text-align:center" ><a><img src="https://static.igem.wiki/teams/4772/wiki/website-material/hp/12.png">Visiting Protoga Biotech and discussing the industrial application of our project with the company’s CTO Dr. Qu
</a></div><br>
<h4 class="small-title">Highlight</h4>
<p>In our interviews with Dr. Dingyi Li and based on our visit to Protogabio, the responsibility and global benefits of our project became evident. Dr. Qu emphasized its environmental responsibility in addressing land use and resource scarcity. We also discussed the project's broad impact, especially in industries reliant on starch, with the food industry and the feed industry taking the spotlight. The feasibility of implementing our algae for industrial use also became more apparent.</p>
<h4 class="small-title">Feedback</h4><p>Our  interview with Dr. Dingyi Li and the visit to Protogabio were invaluable experiences for our project. We gained significant insights and identified areas for improvement:<br>
<li>Technical Insights: The interview with Dr. Li provided a deeper understanding of the technical aspects of our project, especially concerning CCM and experimental characterization. This knowledge has allowed us to refine our project design and experimental approaches for better outcomes.</li><br>
<li>Environmental Responsibility: Dr. Qu emphasized the environmental responsibility of our project. Her insights highlighted the importance of our project in addressing land use and resource scarcity issues. This has reinforced our commitment to sustainable development.</li><br>
<li>Industrial Applications: The visit to Protogabio showcased real-world industrial applications of algae-based solutions. Witnessing these applications inspired us and reaffirmed the potential of our project in various industrial sectors.</li><br>In response to these experiences, we have made several improvements to our project design and implementation plan. We are committed to developing a project that aligns with global values and has a significant positive impact. We deeply appreciate the support and guidance from Dr. Li and Dr. Qu and look forward to potential future collaborations.</p>

           
           <h2 class="main-title">Partnership and collaboration</h2>
           <p>Our team highly values collaboration with other IGEM teams, as we believe it sparks inspiration and mutual growth, amplifying our collective impact. Throughout the competition, we actively participated in numerous key team meetups and conferences, including events like the Chinese Engineering Biology Innovation Forum IV, CCiC's Human Practice series, TP-link iGEM team meetup, CCiC, and the Hubei Synthetic Biology Open Conference. Notably, we spearheaded an international meetup, "Synthetic Biology x Sustainable Development," uniting IGEMers from around the world to discuss sustainable development. Beyond these gatherings, we maintained fruitful exchanges with numerous international teams, fortifying our collaborative efforts through various channels. Our unwavering commitment to collaboration is a linchpin of our IGEM journey, ensuring a potent collective impact.</p>
        	<h3 class="main-title" style="font-size:4vh">Organized by us</h3>
        	<h4 class="small-title">International Team Meetup for“Synthetic Biology x Sustainable Development”</h4>
        <p>Our team has tried to organize an international conference dedicated to the intersection of synthetic biology and sustainable development. This conference served as a pivotal platform for iGEM teams from all over the world who were dedicated to sustainability to come together and share their experiences, knowledge, and innovative ideas.
Because SDGs are global issues, we extended invitations to teams worldwide and received positive responses. Team Makerere-Uganda from Africa, Team Nanjing-China and Team SCU-China from China shared their projects and their opinions on SDGs and synthetic biology. Team Oxford and Team UZurich from Europe also expressed interest in our meetup and we had communications on the projects through emails.</p>
	<h4 class="small-title">SDG Handbook</h4>
<p>In addition to the conference, we recognized the need for a practical resource that future iGEM teams could use to navigate the complex landscape of sustainable development projects. To meet this need, we compiled a comprehensive handbook helped by Team Makerere-Uganda and Team SCUT-China. This handbook provides a detailed account of our approach to sustainable development initiatives, serving as a blueprint for other teams looking to undertake similar projects. </p>


	<h3 class="main-title" style="font-size:4vh">Participated in</h3>
<p>1.	2023.04.27-04.29; Offline; Chinese Engineering Biology Innovation Forum IV: Dr. Xiao Yi invited us to attend the grand conference hosted in Shenzhen, China. Many experts and the best companies in synthetic biology have attended this conference. We communicate with experts from all works of life and we meet iGEMers from HUST-China, DUT-China and a high school team SZ-SHD. We communicated about our projects and exchanged souvenirs with each other.</p>

          <div class="gallery rounded mx-auto d-block" style="width: 50%; height: auto;text-align:center">
            <a href="https://static.igem.wiki/teams/4772/wiki/website-material/contribution/figure-4.png"><img
                src="https://static.igem.wiki/teams/4772/wiki/website-material/contribution/figure-4.png" />
              </a><a
              class="link-download" style="text-align:center" download="" target="_blank"
              href="https://static.igem.wiki/teams/4772/wiki/website-material/sustainable-development-handbook-by-tsinghua-tfl-1.pdf">Click
              Here to Download Our SDG Handbook</a>
          </div>
          <br>
<section class="container">
      <div class="row centered">
        <div class="col">
          <h2 class="main-title">Our Journey</h2>

          <div class="timeline-menu">
            <a @click="scrollToMonth('#april'); clicked = 'april'" :class="clicked == 'april' ? 'active' : ''"
              name="april">April</a> -
            <a @click="scrollToMonth('#may'); clicked = 'may'" :class="clicked == 'may' ? 'active' : ''"
              name="may">May</a> -

            <a @click="scrollToMonth('#july'); clicked = 'july'" :class="clicked == 'july' ? 'active' : ''"
              name="july">July</a> -
            <a @click="scrollToMonth('#september'); clicked = 'september'" :class="clicked == 'september' ? 'active' : ''"
              name="september">September</a> -
            <a @click="scrollToMonth('#october'); clicked = 'october'" :class="clicked == 'october' ? 'active' : ''"
              name="october">Others</a>
          </div>

          <ul class="timeline timeline-centered" style="overflow-x: hidden">
            <!--<section id="march" class="nopad">
              <li class="timeline-item period">
                <div class="timeline-marker"></div>
                <div class="timeline-content">
                  <h2 class="timeline-title">March</h2>
                </div>
              </li>
              <li class="timeline-item left" data-aos="fade-right" data-aos-duration="1000" data-aos-once="true"
                data-aos-offset="100">
                <div class="timeline-info">
                  <span>March 03, 2022</span>
                </div>
                <div class="timeline-marker"></div>
                <div class="timeline-content">
                  <h3 class="timeline-title">Our first Meeting</h3>
                  <p>On the 3rd of March, we contacted iGEM Thessaliniki_Meta team on social media and arranged a video
                    call to explore the possibility of cooperation. Thus, an online meeting took place between Maria
                    Kosmidou and Anatoli Betsou. We briefly discussed our projects and thought of some ways of
                    collaboration. So, we agreed to be partners and travel together in the world of Synthetic Biology. We
                    decided to communicate every Thursday to coordinate our standard course. This is how our journey
                    began!</p>
                  <div class="timeline-images gallery">
                    <a href="https://static.igem.wiki/teams/4118/wiki/website-assets/partnership/2.png"><img
                        src="https://static.igem.wiki/teams/4118/wiki/website-assets/partnership/2.png" /></a>
                  </div>
                </div>
              </li>
              <li class="timeline-item right" data-aos="fade-left" data-aos-duration="1000" data-aos-once="true"
                data-aos-offset="100">
                <div class="timeline-info">
                  <span>March 10, 2022</span>
                </div>
                <div class="timeline-marker"></div>
                <div class="timeline-content">
                  <h3 class="timeline-title">Acquaintance of the two teams</h3>
                  <p>On the 10th of March, we scheduled an online meeting to get to know each other. In the beginning,
                    everyone introduced themselves by saying a few things about their work, and then we presented the two
                    projects in detail. We then created a common communication platform, and the leaders of each subgroup
                    discussed ways of possible cooperation in their field and scheduled different calls to discuss their
                    progress in more detail.</p>
                  <div class="timeline-images gallery">
                    <a href="https://static.igem.wiki/teams/4118/wiki/website-assets/partnership/5-allagi.png"><img
                        src="https://static.igem.wiki/teams/4118/wiki/website-assets/partnership/5-allagi.png" /></a>
                    <a href="https://static.igem.wiki/teams/4118/wiki/website-assets/partnership/3.png"><img
                        src="https://static.igem.wiki/teams/4118/wiki/website-assets/partnership/3.png" /></a>
                    <a href="https://static.igem.wiki/teams/4118/wiki/website-assets/partnership/foto-3.jpg"><img
                        src="https://static.igem.wiki/teams/4118/wiki/website-assets/partnership/foto-3.jpg" /></a>
                  </div>
                </div>
              </li>
              <li class="timeline-item left" data-aos="fade-right" data-aos-duration="1000" data-aos-once="true"
                data-aos-offset="100">
                <div class="timeline-info">
                  <span>March 11, 2022</span>
                </div>
                <div class="timeline-marker"></div>
                <div class="timeline-content">
                  <h3 class="timeline-title">Fundraising training</h3>
                  <p>On the 11th of March, Maria Kosmidou, Leader of Fundraising of the Thessaliniki_Meta team, trained
                    our team about the steps a team must follow to find sponsors. So, together we made a sponsorship
                    booklet, which includes information about iGEM Competition, our team members, our project description,
                    our budget analysis, and specific sponsorship packages for our potential sponsors. The selling points
                    were about how we can advertise our potential sponsors, for example, during our actions or on social
                    media. We also prepared a list containing approximately 207 Pharmaceutical and Medical companies with
                    their contact details and prepared the template mail we will send to the sponsors attaching the
                    Booklet. The next day the communications started, and soon we ended up having as a joint grand sponsor
                    the Research Genetic Cancer Center (RGCC Group), established in 2004 by Dr. Papasotiriou Ioannis,
                    Oncologist.</p>
                  <div class="timeline-images gallery">
                    <a href="https://static.igem.wiki/teams/4118/wiki/website-assets/partnership/6.png"><img
                        src="https://static.igem.wiki/teams/4118/wiki/website-assets/partnership/6.png" /></a>
                  </div>
                </div>
              </li>
            </section>-->

            <section id="april" class="nopad">
              <li class="timeline-item period">
                <div class="timeline-marker"></div>
                <div class="timeline-content">
                  <h2 class="timeline-title">April</h2>
                </div>
              </li>
              <li class="timeline-item right" data-aos="fade-left" data-aos-duration="1000" data-aos-once="true"
                data-aos-offset="100">
                <div class="timeline-info">
                  <span>April 27-29, 2023</span>
                </div>
                <div class="timeline-marker"></div>
                <div class="timeline-content">
                  <h3 class="timeline-title">Chinese Engineering Biology Innovation Forum IV, Offline</h3>
                  <p>Dr. Xiao Yi invited us to attend the grand conference hosted in Shenzhen, China. Many experts and the
                    best companies in synthetic biology have attended this conference. We communicate with experts from
                    all works of life and we meet iGEMers from HUST-China, DUT-China and a high school team SZ-SHD. We
                    communicated about our projects and exchanged souvenirs with each other.</p>
                  <div class="timeline-images gallery">
                    <a href="https://static.igem.wiki/teams/4772/wiki/website-material/0427.png"><img
                        src="https://static.igem.wiki/teams/4772/wiki/website-material/0427.png" /></a>
                    <a href="https://static.igem.wiki/teams/4772/wiki/website-material/0428.jpg"><img
                        src="https://static.igem.wiki/teams/4772/wiki/website-material/0428.jpg" /></a>
                    <a href="https://static.igem.wiki/teams/4772/wiki/website-material/0430.jpg"><img
                        src="https://static.igem.wiki/teams/4772/wiki/website-material/0430.jpg" /></a>
                  </div>
                </div>
              </li>
            </section>



            <section id="may" class="nopad">
              <li class="timeline-item period">
                <div class="timeline-marker"></div>
                <div class="timeline-content">
                  <h2 class="timeline-title">May</h2>
                </div>
              </li>

              <li class="timeline-item left" data-aos="fade-right" data-aos-duration="1000" data-aos-once="true"
                data-aos-offset="100">
                <div class="timeline-info">

                  <span>May 14, 2023</span>
                </div>
                <div class="timeline-marker"></div>
                <div class="timeline-content">
                  <h3 class="timeline-title">CCiC series for Human Practice, Online</h3>
                  <p>At this online conference, Dr. Yuhan Bao discussed how to do Human Practice with us. He pointed out
                    that Human Practice is not equal to holding activities monotonously. Actually, the soul of human
                    practice is to communicate and to judge our program with different stakeholders and in different
                    perspectives. In other words, it should serve our project!<br>His valuable guidance and reminding had
                    great influence on our human practice direction later on.</p>
                  <div class="timeline-images gallery">
                    <a href="https://static.igem.wiki/teams/4772/wiki/website-material/0514.jpg"><img
                        src="https://static.igem.wiki/teams/4772/wiki/website-material/0514.jpg" /></a>

                  </div>
                </div>
              </li>


              <li class="timeline-item right" data-aos="fade-left" data-aos-duration="1000" data-aos-once="true"
                data-aos-offset="100">
                <div class="timeline-info">
                  <span>May 27, 2023</span>
                </div>
                <div class="timeline-marker"></div>
                <div class="timeline-content">
                  <h3 class="timeline-title">TP-link iGEM team meetup (Hosted by Peking 2023), Offline</h3>
                  <p>Team from Peking University invited our team and another Tsinghua team to their campus to exchange
                    experience and ideas. We presented our project here and discussed interesting and various HP ideas
                    with each other like designing a game for promoting synthetic biology. Their admirable progress and
                    their encouragement had supported us a lot!</p>
                  <div class="timeline-images gallery">
                    <a href="https://static.igem.wiki/teams/4772/wiki/website-material/peking.png"><img
                        src="https://static.igem.wiki/teams/4772/wiki/website-material/peking.png" /></a>
                    <a href="https://static.igem.wiki/teams/4772/wiki/website-material/peking2.png"><img
                        src="https://static.igem.wiki/teams/4772/wiki/website-material/peking2.png" /></a>
                  </div>
                </div>
              </li>
            </section>


            <section id="july" class="nopad">
              <li class="timeline-item period">
                <div class="timeline-marker"></div>
                <div class="timeline-content">
                  <h2 class="timeline-title">July</h2>
                </div>
              </li>
              <li class="timeline-item left" data-aos="fade-right" data-aos-duration="1000" data-aos-once="true"
                data-aos-offset="100">
                <div class="timeline-info">
                  <span>July 05, 2023</span>
                </div>
                <div class="timeline-marker"></div>
                <div class="timeline-content">
                  <h3 class="timeline-title">Hubei Synthetic Biology Conference <br>(Hosted by HUBU-China), online</h3>
                  <p>HUBU-China held this activity and invited us fervidly. They were so earnest as to mail us an
                    exquisite invitation. It's an honor to hear from friends 1000 kilometers away. The hot discussion and
                    sharing last one day and we had some communications on project process and art design.
                    <br><br>
                  </p>
                  <div class="timeline-images gallery">
                    <a href="https://static.igem.wiki/teams/4772/wiki/website-material/0705.png"><img
                        src="https://static.igem.wiki/teams/4772/wiki/website-material/0705.png" /></a>
                  </div>
                </div>
              </li>

              <li class="timeline-item right" data-aos="fade-left" data-aos-duration="1000" data-aos-once="true"
                data-aos-offset="100">
                <div class="timeline-info">
                  <span>July 09-10, 2023</span>
                </div>
                <div class="timeline-marker"></div>
                <div class="timeline-content">
                  <h3 class="timeline-title">Conference of China iGEMer Community (CCiC), Offline</h3>
                  <p>When the annual celebration and discussion pageant belonging uniquely to Chinese iGEMers began, we
                    sent two of our team members even under the pressure brought by military training, which was delayed
                    in 2021 in Beijing. There we heard many sparking and fascinating ideas such as modifying a planet to
                    make it livable.<br> We made a very green poster and presented our project here and, to our surprise,
                    we found team ShanghaiTech-China wanted to edit the same gene in different chassis organism with us.
                    We had some communications on project design and modeling with them. It's quite an enjoyment to
                    introduce Chlamydomonas to others for whom this chassis sounded novel!</p>
                  <div class="timeline-images gallery">
                    <a href="https://static.igem.wiki/teams/4772/wiki/website-material/poster2.jpg"><img
                        src="https://static.igem.wiki/teams/4772/wiki/website-material/poster2.jpg" /></a>
                    <a href="https://static.igem.wiki/teams/4772/wiki/website-material/planet4.jpg"><img
                        src="https://static.igem.wiki/teams/4772/wiki/website-material/planet4.jpg" /></a>
                  </div>
                </div>
              </li>
            </section>


            <section id="september" class="nopad">
              <li class="timeline-item period">
                <div class="timeline-marker"></div>
                <div class="timeline-content">
                  <h2 class="timeline-title">September</h2>
                </div>
              </li>
              <li class="timeline-item left" data-aos="fade-right" data-aos-duration="1000" data-aos-once="true"
                data-aos-offset="100">
                <div class="timeline-info">
                  <span>September 17, 2023</span>
                </div>
                <div class="timeline-marker"></div>
                <div class="timeline-content">
                  <h3 class="timeline-title">International Team Meetup for <br> “Synthetic Biology x Sustainable
                    Development”<br> Organized by us</h3>
                  <p>Our team has tried to organize an international conference dedicated to the intersection of synthetic
                    biology and sustainable development. This conference served as a pivotal platform for iGEM teams from
                    all over the world who were dedicated to sustainability to come together and share their experiences,
                    knowledge, and innovative ideas.
                    <br>Because SDGs are global issues, we extended invitations to teams worldwide and received positive
                    responses. <br>Team
                    <a class="link-exchange" href="https://2023.igem.wiki/makerere-uganda" target="_blank"
                      style="color:#6bac74 size:12px">Makerere-Uganda </a>from Africa, Team
                    <a class="link-exchange" href="https://2023.igem.wiki/nanjing-china" target="_blank"
                      style="color:#6bac74 size:12px">Nanjing-China</a> and Team
                    <a class="link-exchange" href="https://2023.igem.wiki/scu-china" target="_blank"
                      style="color:#6bac74 size:12px">SCU-China</a> from China shared
                    their projects and their opinions on SDGs and synthetic biology. <br>Team <a class="link-exchange"
                      href="https://2023.igem.wiki/oxford" target="_blank" style="color:#6bac74 size:12px">Oxford</a> and
                    Team <a class="link-exchange" href="https://2023.igem.wiki/uzurich" target="_blank"
                      style="color:#6bac74 size:12px">UZurich</a> from
                    Europe also expressed interest in our meetup and we had communications on the projects through emails.
                  </p>
                  <div class="timeline-images gallery">

                    <a href="https://static.igem.wiki/teams/4772/wiki/website-material/sdg5.png"><img
                        src="https://static.igem.wiki/teams/4772/wiki/website-material/sdg5.png" /></a>
                    <a href="https://static.igem.wiki/teams/4772/wiki/website-material/sdg6.png"><img
                        src="https://static.igem.wiki/teams/4772/wiki/website-material/sdg6.png" /></a>
                  </div><br><br>

                  <div class="timeline-images gallery">
                    <a href="https://static.igem.wiki/teams/4772/wiki/website-material/sdg4.png"><img
                        src="https://static.igem.wiki/teams/4772/wiki/website-material/sdg4.png" /></a>
                  </div>
                </div>
              </li>

              <li class="timeline-item right" data-aos="fade-left" data-aos-duration="1000" data-aos-once="true"
                data-aos-offset="100">
                <div class="timeline-info">
                  <span>September, 2023</span>
                </div>
                <div class="timeline-marker"></div>
                <div class="timeline-content">
                  <h3 class="timeline-title">SDG Handbook Made by Us</h3>
                  <p>In addition to the conference, we recognized the need for a practical resource that future iGEM teams
                    could use to navigate the complex landscape of sustainable development projects. To meet this need, we
                    compiled a comprehensive handbook helped by Team Makerere-Uganda and Team SCUT-China. This handbook
                    provides a detailed account of our approach to sustainable development initiatives, serving as a
                    blueprint for other teams looking to undertake similar projects.</p>
                  <div class="timeline-images gallery">
                    <a href="https://static.igem.wiki/teams/4772/wiki/website-material/handbook.png"><img
                        src="https://static.igem.wiki/teams/4772/wiki/website-material/handbook.png" /></a>
                  </div><br>
                  <a class="link-download"
                    href="https://static.igem.wiki/teams/4118/wiki/website-assets/partnership/partnership-notebook.pdf"
                    download="" target="_blank" style="color:#6bac74">Download Our SDG Handbook</a>
                </div>
              </li>



            </section>


            <section id="october" class="nopad">
              <li class="timeline-item period">
                <div class="timeline-marker"></div>
                <div class="timeline-content">
                  <h2 class="timeline-title">Others</h2>
                </div>
              </li>
              <li class="timeline-item left" data-aos="fade-right" data-aos-duration="1000" data-aos-once="true"
                data-aos-offset="100">
                <div class="timeline-marker"></div>
                <div class="timeline-content">
                  <h3 class="timeline-title">Tsinghua</h3>
                  <p>The close physical distance has dragged us close. <br>Our two teams shared the right to attend the
                    group meeting for each other throughout the year and our discussion was especially hot in the period
                    of getting familiar with the rules of competitions and learning from previous outstanding projects.
                    <br>We also communicated about dry lab and HP. Team members from either team are so familiar with each
                    other that it seems that we are one team!
                  </p>
                </div>
              </li>

              <li class="timeline-item right" data-aos="fade-left" data-aos-duration="1000" data-aos-once="true"
                data-aos-offset="100">
                <div class="timeline-marker"></div>
                <div class="timeline-content">
                  <h3 class="timeline-title">SCU-China</h3>
                  <p>At first, it was just some communications on dry lab at CCiC. But we found the possibility of deeper
                    cooperation on SDG conference and they passionately participated we hosted. <br>Their project of
                    reducing hydrogen sulfide concentration in the sewer and alleviates the sewer crisis is widely
                    different from our arable land crisis but both led to SDG concerns!</p>
                  <br>
                </div>
              </li>

              <li class="timeline-item left" data-aos="fade-left" data-aos-duration="1000" data-aos-once="true"
                data-aos-offset="100">
                <div class="timeline-marker"></div>
                <div class="timeline-content">
                  <h3 class="timeline-title">UESTC-BioTech</h3>
                  <p>During the period of getting familiar with rules of competitions and learning from previous
                    outstanding projects, the team leader of UESTC-BioTech 2022 shared their project and some experience
                    for competing in iGEM with us. <br>
                    Many thanks!</p>
                  <br>
                </div>
              </li>

              <li class="timeline-item right" data-aos="fade-left" data-aos-duration="1000" data-aos-once="true"
                data-aos-offset="100">
                <div class="timeline-marker"></div>
                <div class="timeline-content">
                  <h3 class="timeline-title">Peking and Peking HSC</h3>
                  <p>We met in the TP-link iGEM team meetup and exchanged ideas about projects and human practices. </p>
                  <br>
                </div>
              </li>

              <li class="timeline-item left" data-aos="fade-left" data-aos-duration="1000" data-aos-once="true"
                data-aos-offset="100">
                <div class="timeline-marker"></div>
                <div class="timeline-content">
                  <h3 class="timeline-title">HUBU-China</h3>
                  <p>We participated the Hubei synthetic biology open conference hosted by them and we together made an
                    “Education Map” to highlight our effort on promoting the knowledge of synthetic biology. </p>
                  <br>
                </div>
              </li>

              <li class="timeline-item right" data-aos="fade-left" data-aos-duration="1000" data-aos-once="true"
                data-aos-offset="100">
                <div class="timeline-marker"></div>
                <div class="timeline-content">
                  <h3 class="timeline-title">ShanghaiTech-China</h3>
                  <p>We met in the 10th CCiC and exchanged ideas about project design and modeling. </p>
                  <br>
                </div>
              </li>


              <li class="timeline-item left" data-aos="fade-left" data-aos-duration="1000" data-aos-once="true"
                data-aos-offset="100">
                <div class="timeline-marker"></div>
                <div class="timeline-content">
                  <h3 class="timeline-title">HUST-China, DUT-China and high school team SZ-SHD</h3>
                  <p>We met in the Chinese Engineering Biology Innovation Forum IV and we exchanged ideas and souvenirs
                    with each other.</p>
                  <br>
                </div>
              </li>

              <li class="timeline-item period">
                <div class="timeline-marker"></div>
                <div class="timeline-content">
                  <h2 class="timeline-title">~Thank iGEMers for All the Communication and Cooperation~</h2>
                </div>
              </li>
            </section>


          </ul>
        </div>
      </div>
    </section>

      
             
            </section>
          </section>

        
          <p>Click here to see our <a href="https://2023.igem.wiki/tsinghua-tfl/collaborations" style="color:#6bac74">cooperation</a> and <a href="https://2023.igem.wiki/tsinghua-tfl/partnership" style="color:#6bac74">partnership</a>.</p>
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
            currentPage: "Human Practices",
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
