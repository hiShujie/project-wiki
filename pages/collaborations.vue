<template>
  <div>
    <Header :title="currentPage">
      <div class="bg"
        style="background: url('https://static.igem.wiki/teams/4772/wiki/website-material/collaboration1.png') center center no-repeat; background-size: cover;">
        <h1 class="head-title">Collaboration</h1>
      </div>
    </Header>


    <section class="intro">
      <h2 class="main-title">Overview</h2>
      <p>Our team attaches great importance to collaboration with other iGEM teams. We believe that collaborations can
        bring inspiration and harvest to both our team and others, leading to a larger impact of synthetic biology. During
        the whole competition schedule, we have taken part in five team meetups and conferences: <br>
        <li>Chinese Engineering Biology Innovation Forum IV</li>
        <li>Conference of China iGEMer Community (CCiC)</li>
        <li>CCiC series for Human Practice</li>
        <li>TP-link iGEM team meetup</li>
        <Li>Hubei Synthetic Biology Conference</Li><br>
        It is worth mentioning that we also organized an international meetup “Synthetic Biology x Sustainable
        Development” for iGEMers around the world to discuss sustainable development. Apart from meetups and conferences,
        we have also communicated and collaborated with many other teams around the world in various ways.
      </p>
    </section>


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
  </div>
</template>

<script>
import SimpleLightbox from "simplelightbox";
import AOS from 'aos'
import 'aos/dist/aos.css'

export default {
  data() {
    return {
      currentPage: "Collaboration",
      options: {
        easing: [0.25, 0.1, 0.25, 1.0],
        offset: -120,
        force: true,
        cancelable: false,
        x: false,
        y: true,
      },
      observer: null,
      observerOptions: {
        root: this.$refs.nuxtContent,
        rootMargin: '-35% 0% -35% 0%',
        threshold: 0
      },
      activeMonth: "",
      clicked: ""
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
    AOS.init({});
    this.observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        const id = entry.target.getAttribute("id");
        if (entry.isIntersecting) {
          if (this.activeMonth == "") {
            this.activeMonth = id;
            document.querySelector(`.timeline-menu a[name="${this.activeMonth}"]`).className = "active";
          }
          if (this.activeMonth != id) {
            document.querySelector(`.timeline-menu a[name="${this.activeMonth}"]`).className = "";
            this.activeMonth = id;
            document.querySelector(`.timeline-menu a[name="${this.activeMonth}"]`).className = "active";
          }
        }
      });
    }, this.observerOptions);

    document
      .querySelectorAll("section[id]")
      .forEach(section => {
        this.observer.observe(section);
      });
  },
  methods: {
    scrollToMonth: function (month) {
      this.$scrollTo(month, 500, this.options);
    },
    changeActive: function (id, isActive) {
      const a = document.querySelector(`.timeline-menu a[name="${id}"]`)
      // .classList
      console.log(a);
      if (isActive) {
        a.className = "active";
        return;
      }
      a.className = "";
    }
  },
  start() {
    this.$nuxt.$loading.finish()
  },
}
</script>
