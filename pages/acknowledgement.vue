<template>
  <div>
    <Header :title="currentPage">
      <div class="bg"
        style="background: url('https://static.igem.wiki/teams/4772/wiki/website-material/attributionsb.png') center center no-repeat; background-size: cover;">
        <h1 class="head-title">Acknowledgement</h1>
      </div>
    </Header>

    <Scrollspy :currentPage="currentPage" initialSection="team">
      <div class="row">
        <div class="col-lg-3">
          <nav class="section-nav">
            <div class="row">
              <progress min="0" max="100" value="0"></progress>
              <ol>
                <li><a :href="`${currentPage}/#team`" v-scroll-to="'#team'">Team</a></li>
                <li><a :href="`${currentPage}/#supervisors`" v-scroll-to="'#supervisors'">Supervisors</a></li>
                <li><a :href="`${currentPage}/#instructors`" v-scroll-to="'#instructors'">Instructors</a></li>
                <li><a :href="`${currentPage}/#advisor`" v-scroll-to="'#advisor'">Advisors</a></li>
                <li><a :href="`${currentPage}/#human-practices`" v-scroll-to="'#human-practices'">Others</a></li>
                <li><a :href="`${currentPage}/#finance`" v-scroll-to="'#finance'">Financial Support</a></li>
              </ol>
            </div>
          </nav>
        </div>

        <div class="col-lg-9 main-content" id="main-content">
          <section id="team">
            <h2 class="main-title">Team</h2>

            <p><span>Wenxi Wu (吴文曦) : </span>
              <br>Undergraduate student from Department of Life Sciences, Tsinghua University
              <li>She majors in Life Science and is one of the team leaders. Wenxi is a gentle and scrupulous girl, who
                have arranged the affairs of our team in perfect order.</li>
              <li>For wet lab, she undertook much work of experimental design and operation. </li>
              <li>And out of the love for painting, she is also responsible for art design in team emblem, uniform and
                wiki.</li>
            </p>

            <p><span>Shujie Zhang (张淑杰) : </span>
              <br>Undergraduate student from Department of Automation, Tsinghua University
              <li>She is another leader of our team. We can clearly see calmness and capability from Shujie.</li>
              <li>She came up with the idea of ChiF part in our project and is responsible for almost all work for the
                wiki production. </li>
              <li>Also, she loves painting and did some art work for our wiki.</li>
            </p>

            <p><span>Jinghan Zhao (赵靖涵) :</span> <br>Undergraduate student from Department of Life Sciences, Tsinghua
              University
              <li> She is an open and enthusiastic girl with much creativity.</li>
              <li> Jinghan is responsible for the starch part of our project and has carried the experiment design and
                operation.</li>
              <li> She came up with many great ideas for our project and we all can draw strength from her.</li>
            </p>

            <p><span>Minglong Shen (沈铭龙) :</span> <br>Undergraduate student from Zhili College, Tsinghua University.
              <li> He is an expert in experiment skills and has much knowledge about our chassis organism Chlamydomonas
                Reinhardtii.</li>
              <li> He is an enthusiastic person and love to teach us anything as long as he knows.</li>
              <li> He is the person in charge of CCM part in wet lab of our project and has done a lot of work.</li>
            </p>

            <p><span>Qingwen Li (李清雯) :</span>
              <br>Undergraduate student from Department of Life Sciences, Tsinghua University.
              <li> She is a cheerful and agreeable member and is responsible for wet lab and human practices in our team.
              </li>
              <li>Also, photographing and making video are the two of her many hobbies. So she took the directing,
                shooting and editing work for our team’s promotion video. </li>
            </p>

            <p><span>Huibing Li (李蕙冰) :</span> <br>Undergraduate student from Tanwei College, Tsinghua University. <li>
                Huibing majors in biochemistry and Chemical Engineering and she is the human practice leader of our team!
                She has designed and organized the framework of human practices. </li>
              <li>Huibing is good at English so she truly plays an important role in affairs that need to communicate with
                the international community.</li>
              <li>Also, she is active at lab work and helped a lot.</li>
            </p>

            <p><span>Yitong Liu (刘易彤) :</span> <br>Undergraduate student from Xingjian College, Tsinghua University.
              <li>She majors at Theoretical and Applied Mechanics and is responsible for the modeling and data processing
                in our project.</li>
              <li>Yitong is passionate for life and people around her, and she has accumulated much biology knowledge in
                high school. </li>
              <li> Using her modeling skills and biology knowledge, she has done a great work for our team! </li>
            </p>

            <p><span>Yizhen Liao (廖艺臻) :</span> <br>Undergraduate student from Tanwei College, Tsinghua University.
              <li>Yizhen has a background in chemical biology and is a sweet and energetic girl. </li>
              <li>In our team, she is responsible for conducting dry lab experiments and assisting with both wet lab tasks
                and human practice assignments.</li>
              <li>She is eager to continue expanding her knowledge in the field of synthetic biology while contributing
                meaningfully to our team's success.</li>
            </p>

            <p><span>Yuqing Zhou (周雨晴) :</span> <br>Undergraduate student from Department of Life Sciences, Tsinghua
              University
              <li>Yuqing majors in Life sciences and she is a quiet and intelligent girl.</li>
              <li>She is good at biochemistry experiment skills and the minister of WB! Also, she is responsible for part
                of Dry lab.</li>
              <li> Yuqing is a reliable team member and is always giving silent dedication to our team.</li>
            </p>
            <p><span>ALDABERGENOV SHADI:</span> <br>Undergraduate student at Department of Life Sciences, Tsinghua
              University
              <li>As the only foreign student in our team, Shadi brough us a lot of surprise. His spoken English is very
                standard and often helps us with text modification.</li>
              <li>Also, he is an active wet laborer and always ready to help us.</li>
            </p>
          </section>
          <section id="supervisors">
            <h2 class="main-title">Supervisors</h2>
            <p><span>Professor Junmin PAN:</span> Primary PI
              <li>Instructions to the project selection and experiment design</li>
              <li>Solutions and suggestions to our problems</li>
              <li>Laboratory equipment and reagents for our experiments</li>
            </p>

            <p><span>Doctor Yibo Xiao:</span> Secondary PI
              <li>Instructions to the project selection</li>
              <li>Background and industrial knowledge of our project</li>
              <li>Financial support</li>
            </p>

          </section>
          <section id="instructors">
            <h2 class="main-title">Instructors</h2>
            <p><span>Jinhao Liu (刘金澔) :</span> <br> Graduate student at Department of Life Sciences, Tsinghua University;
              <li>Leader of 2021 Tsinghua iGEM team</li>
              <li>It is he that organized our team, helped us get familiar with the basic rules of iGEM competition and
                contribute a lot to the team building and project carrying process.</li>
            </p>
          </section>

          <section id="advisor">
            <h2 class="main-title">Advisor</h2>
            <p><span>Xuecheng Li (李学成) :</span><br> Graduate student at Department of Life Sciences, Tsinghua University
              <li>He provided generous and very patient guidance on our project design, lab safety training, experiment
                skills training and experiment troubleshooting.</li>
              <li>He came to our weekly meeting no matter how busy he was. He is the helper without whom we would never
                have gone so far.</li>
            </p>

            <p><span>Xin Wen (温馨) ：</span> <br>Graduate student at Department of Life Sciences, Tsinghua University
              <li>She provided guidance on lab safety training, experiment skills training and experiment troubleshooting
                for us.</li>
              <li>She is also really helpful in laboratory finance.</li>
            </p>

            <p><span>Ziting Zhang (张梓婷) :</span> <br>Graduate student at Department of Automation, Tsinghua University
              <li>She provided suggestions on dry lab design and helped us get familiar with basic rules of iGEM
                competition.</li>
              <li>Her interdisciplinary background brings us a lot of inspiration.</li>
            </p>

            <p><span>Chaonan Wang (王超男) :</span> <br>Teacher from Department of Life Sciences, Tsinghua University
              <li>She provided guidance on promotion video making and affairs about going abroad for Jamboree.</li>
              <li>Her solid support matters a lot in our finishing phase.</li>
            </p>
          </section>

            <p><span>Ya Wang (王丫) :</span><br>Academy of Arts & Design, Tsinghua University
              <li>She provided guidance for us on art design, especially about the team logo.</li>
            </p>

          <section id="human-practices">
            <h2 class="main-title">Human Practices</h2>

            <p><span>Liliang Ouyang (欧阳礼亮) : </span> <br>Department of Mechanical Engineering, Tsinghua University
              <li>He provided valuable suggestions on our project design during brainstorming stage.</li>
            </p>

            <p><span>Mingxiong Xue (薛命雄) :</span> <br>CEO of a prominent algae-based company, Beihai Shengbada
              Biotechnology Co., Ltd
              <li>He provided background knowledge and guidance on the real-world application of our project.</li>
            </p>

            <p><span>Jian Li (李健) : </span><br>Department of Technique, China Starch Industry Association <li>He provided
                valuable guidance on project design about high-amylose starch.</li>
            </p>

            <p><span>Professor Changhong Yao (姚长洪) :</span> <br>School of Chemical Engineering, Sichuan University
              <li>He provided guidance on project design for precise regulation of starch pathway.</li>
            </p>

            <p><span>Doctor Xiao Yi (易啸) : </span> <br>Shenzhen Institute of Advanced Technology, Chinese Academy of
              Sciences
              <li>He invited us to attend Chinese Engineering Biology Innovation Forum IV in Shenzhen fervidly with open
                arms.</li>
            </p>

            <p><span>Professor Xiaowo Wang (汪小我) :</span><br>Department of Automation, Tsinghua University
              <li>He provided guidance on dry lab design about promoter optimization</li>
            </p>

            <p><span>Haochen Wang (王昊晨) : </span><br>Department of Automation, Tsinghua University <li>He provided
                guidance
                on dry lab design for promoter optimization</li>
            </p>



            <p><span> Doctor Claudia Zingerli : </span><br>Head of ETH Sustainability
              <li>She shared some cases seeking for SDGs with us.</li>
            </p>

            <p><span>Yuhan Bao (包堉含) : </span><br>Liaison Officer at IGEM HQ Team
              <li>He gave a speech in our SDG meetup and provided guidance on SDG goals
                realizing.</li>
            </p>

            <p><span>Dapeng Wang (王大鹏) :</span><br>Teacher from Jinzhou Senior Middle School
              <li>He provided us a chance to promote our project towards high
                school students.</li>
            </p>

            <p><span>Doctor Dingyi Li (李定颐) :</span><br>School of Materials Science and Engineering, Nankai University
              <li>He provided guidance on wet lab design about result characterization of CCM part.</li>
            </p>

          </section>

          <section id="finance">
            <h2 class="main-title">Financial Support</h2>
            <li>PROTOGA BIOTECH</li>
            <li>Tsinghua University Initiative Scientific Research Program</li>
            <li>JUNMIN PAN's lab</li>
            <li>Tsinghua Xuetang Program</li>
            <li>Institute of Synthetic Biology, Shenzhen Institute of Advanced Technology, Chinese Academy of Sciences
            </li>
            <li>Tsinghua Student Research Training Program</li>
          </section>
        </div>
      </div>
    </Scrollspy>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentPage: "Acknowledgement",
    };
  },
  mounted() {
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
