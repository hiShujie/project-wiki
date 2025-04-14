<template>
  <div>
    <Header :title="currentPage">
      <div class="bg"
        style="background: url('https://static.igem.wiki/teams/4772/wiki/website-material/homepage/web-new.jpg') center center no-repeat; background-size: cover;">
        <h1 class="head-title">{{ currentPage }}</h1>
      </div>
    </Header>

    <Scrollspy :currentPage="currentPage" initialSection="design">
      <div class="row">
        <div class="col-lg-3">
          <nav class="section-nav">
            <div class="row">
              <progress min="0" max="100" value="0"></progress>
              <ol>
                <li><a :href="`${currentPage}/#s1`" v-scroll-to="'#s1'">Modification of Starch Metabolic Pathway</a></li>
                <ul>
                  <li class="sub"><a :href="`${currentPage}/#ss1`" v-scroll-to="'#ss1'" parent="s1">Overview</a></li>
                  <li class="sub"><a :href="`${currentPage}/#ss2`" v-scroll-to="'#ss2'" parent="s1">Design</a></li>
                  <li class="sub"><a :href="`${currentPage}/#ss3`" v-scroll-to="'#ss3'" parent="s1">Data and Results</a>
                  </li>
                  <li class="sub"><a :href="`${currentPage}/#ss3`" v-scroll-to="'#ss3'" parent="s1">Conclusion</a></li>
                  <li class="sub"><a :href="`${currentPage}/#ss3`" v-scroll-to="'#ss3'" parent="s1">Discussion</a></li>
                </ul>
                <li><a :href="`${currentPage}/#s2`" v-scroll-to="'#s2'">ChlF:Extended Light Harvesting of Chlamy</a></li>
                <ul>
                  <li class="sub"><a :href="`${currentPage}/#dd1`" v-scroll-to="'#dd1'" parent="d2">Background</a></li>
                  <li class="sub"><a :href="`${currentPage}/#dd2`" v-scroll-to="'#dd2'" parent="d2">Inspiration:
                      FaRLiP</a></li>
                  <li class="sub"><a :href="`${currentPage}/#dd3`" v-scroll-to="'#dd3'" parent="d2">Our Design</a></li>
                </ul>
                <li><a :href="`${currentPage}/#s3`" v-scroll-to="'#s3'">Broaden Application Scenarios of CCM</a></li>
                <ul>
                  <li class="sub"><a :href="`${currentPage}/#cc1`" v-scroll-to="'#cc1'" parent="c3"></a></li>
                  <li class="sub"><a :href="`${currentPage}/#cc2`" v-scroll-to="'#cc2'" parent="c3"></a></li>
                  <li class="sub"><a :href="`${currentPage}/#cc3`" v-scroll-to="'#cc3'" parent="c3"></a></li>
                </ul>

                <li><a :href="`${currentPage}/#refs`" v-scroll-to="'#refs'">References</a></li>
              </ol>
            </div>
          </nav>
        </div>

        <div class="col-lg-9 main-content" id="main-content">
          <section id="s1">
            <h2 class="main-title">Modification of Starch Metabolic Pathway</h2>
            <section id="ss1">
              <h3 class="main-title" style="font-size:4vh">Overview of Chlamydomonas Starch Metabolism</h3>
              <p> In order to enhance the total yield of starch and the proportion of amylose in Chlamydomonas
                reinhardtii, our project focuses on modulating the starch metabolism pathway of this green microalga using
                synthetic biology approaches. The starch metabolism pathway in Chlamydomonas has been elucidated by
                scientists, providing us with valuable insights. Based on literature research, the starch metabolism
                process begins with the conversion of glucose-6-phosphate to glucose-1-phosphate catalyzed by an
                isomerase. Subsequently, glucose-1-phosphate is transformed into the activated form of ADP-glucose by <a
                  style="font-weight:border"> ADP-glucose pyrophosphorylase (AGPase)</a>. The activated ADP-glucose is
                then utilized to synthesize starch. For starch degradation, it can occur through either phosphorylysis or
                hydrolysis, with one pathway involving the key phosphorylation activation by <a
                  style="font-weight:border"> glucan water dikinase (GWD) </a>. Our strategy utilized the principle of
                "broaden the source of income and economize on expenditure", aiming to <a style="font-weight:border">
                  promote starch synthesis while inhibiting starch degradation </a>.</p>

              <div class="gallery rounded mx-auto d-block" style="width: 70%; height: auto;text-align:center"> <a>
                  <img src="https://static.igem.wiki/teams/4772/wiki/website-material/drylab2/1.png " /> Figure 1 Starch
                  metabolism pathway in Chlamydomonas reinhardtii [1]
                </a></div><br>

              <p> Furthermore, during the process of HP, we were inspired by communication with the China Starch Industry
                Association that changing the composition ratio of starch adds more value and economic significance.
                Chemically, starch consists of two types of anhydroglucose polymers called amylose and amylopectin. <a
                  style="font-weight:border"> High amylose starch (HAS)</a> is a resistant starch that can ferment and
                produce various short-chain fatty acids (SCFA) in the colon through the action of intestinal microflora,
                providing several health benefits. HAS also shows potential for treating obesity, diabetes, and other
                diseases. Therefore, we regulated the starch composition in <a style=" font-style:italic "> Chlamydomonas
                  reinhardtii</a> to produce strains with high production of amylose. </p><br>
              <div class="gallery rounded mx-auto d-block" style="width: 70%; height: auto;text-align:center"><a><img
                    src="https://static.igem.wiki/teams/4772/wiki/website-material/final-engineering/fig1.png" /> Figure 2
                  Starch amylose and amylopectin structure [2]</a></div>

            </section>
            <section id="ss2">
              <h3 class="main-title" style="font-size:4vh">Experiment Design</h3>
              <h3 class="main-title" style="font-size:4vh"> Enhancing Starch Yield</h3>
              <h4 class="small-title">“Broaden the source of income”-AGPase </h4>
              <p> AGP4 encodes ADP-glucose pyrophosphorylase, which plays a crucial role as the second and rate-limiting
                step in glucose-to-starch synthesis. After research, we find the gene glgC encodes a highly efficient
                homolog from Escherichia coli. According to literature reports, its specific activity is several
                hundred-fold greater than that of the plant enzyme[3]. Additionally, several residues have been identified
                as important allosteric regulatory sites. A glycine-336 mutant AGPase (G336D) encoded by E. coli glgC has
                been shown to have high activity with or without the activator FBP, higher substrate (ATP and
                glucose-1-phosphate) affinity, and reduced affinity for the inhibitor AMP[4]. </p>

              <div class="gallery rounded mx-auto d-block" style="width: 70%; height: auto;text-align:center"><a><img
                    src=" https://static.igem.wiki/teams/4772/wiki/brenda.png " /> Figure 3 Km value comparison of AGPase
                  from Chlamydomonas reinhardtii, Escherichia coli, Zea mays (data from BRENDA) . The glgC exhibits
                  significantly higher Km value than the plant homolog</a></div>

              <p> Therefore, we have aimed to express the G333D site-directed mutant AGPase from <a
                  style=" font-style:italic ">E.coli</a> in AGP4 knocked out Chlamydomonas. This substitution of the
                functional enzyme with a highly efficient homolog will promote starch synthesis.</p>

              <h4 class="small-title">"Economize on expenditure"-GWD1 & GWD2</h4>
              <p> GWD1 and GWD2 encode Alpha-glucan water dikinase 1 and Alpha-glucan water dikinase 2, respectively. They
                are isoenzymes that function by phosphorylating the C-3 and C-6 positions of alpha glucans with the beta
                phosphate of ATP in the initial step of starch hydrolysis. By knocking out these two genes and inhibiting
                the synthesis of this enzyme, we can effectively block the major starch hydrolysis pathway, thereby
                enhancing the overall starch production.</p>
              <p> After obtaining individual mutants for GWD1 and GWD2, we further created double knockout mutants through
                hybridization, enabling both mutations to coexist in the same algal strain.</p>
              <p> Gene editing in Chlamydomonas reinhardtii, on a global scale, has proven to be quite challenging.
                However, we have successfully overcome this obstacle by utilizing a gene editing system developed by the
                collaborative laboratory of professor JUNMIN PAN. We employed <a style="font-weight:border">
                  CRISPR/Cas9</a> technology to perform gene editing on the <a style=" font-style:italic ">21gr</a> or <a
                  style=" font-style:italic ">srt2</a> Chlamydomonas cell lines (both considered wild-type)</p>

              <div class="gallery rounded mx-auto d-block" style="width: 70%; height: auto;text-align:center"><a><img
                    src=" https://static.igem.wiki/teams/4772/wiki/4.png" /> Figure 4 Design framework for AGPase and GWD
                </a></div>

              <h4 class="small-title"> Utilizing lipid synthesis inhibitor</h4>
              <p> The starch metabolism pathway and the lipid metabolism pathway have significant crosstalk. Since starch
                synthesis and lipid synthesis compete with each other, we decided to inhibit lipid synthesis to promote
                starch synthesis. Due to the uncertainty associated with this indirect approach, we chose not to
                manipulate it at the genetic level initially. Instead, we cultured Chlamydomonas in the presence of <a
                  style="font-weight:border"> cerulenin </a>, a lipid inhibitor. Cerulenin is a natural compound found in
                the <a style=" font-style:italic "> Cephalosporium caerulensfungus </a>, and it has been reported to bind
                to b-keto-acyl-ACP synthase, inhibiting fatty acid synthesis[5].</p>

              <div class="gallery grid" style="margin-left:4vw;margin-right:3vw;text-align: center;width:70%"> <a
                  style="width:150%;"><img src=" https://static.igem.wiki/teams/4772/wiki/.png" /></a>
                <div class="p"
                  style="text-align: left;color:#6bac74;font-weight: bolder;width:150%;justify-content:center;align-self: center;">
                  <a style="width:40%;"> <img src="https://static.igem.wiki/teams/4772/wiki/cerulenin.png"></a>
                </div>

              </div>
              <p>Figure 5 Design
                framework for using cerulenin <a style=" font-style:italic "> sbe2-3</a>
                <a style=" font-style:italic "> sbe3-5 </a> by carrying out gene knockout in obtained mutant.
              </p>

              <h3 class="main-title" style="font-size:4vh"> Improving Starch Value </h3>
              <h4 class="small-title"> SBE2 & SBE3</h4>
              <p> SBE2 and SBE3 are genes that encode Starch Branching Enzyme 2 and Starch Branching Enzyme 3,
                respectively. They, along with SBE1 and SBE4 in Chlamydomonas, are isoenzymes responsible for catalyzing
                the formation of alpha-1,6 linkages within the polymer. Considering their varying transcription levels, we
                have chosen SBE2 and SBE3, which exhibit higher transcription levels, to achieve more effective gene
                knockout. By inhibiting the synthesis of branched starch, we aimed to obtain a higher proportion of linear
                starch.</p>
              <p> After obtaining individual mutants for SBE2 and SBE3, we also created double knockout mutants to
                introduce both mutations into the same algal strain.</p>
              <div class="gallery rounded mx-auto d-block" style="width: 70%; height: auto;text-align:center"> <a><img
                    src=" https://static.igem.wiki/teams/4772/wiki/website-material/final-wet-lab-starch/qwjj-proc.jpg " />
                  Figure 6 Design framework for SBE </a></div>



            </section>

            <section id="ss3">
              <h3 class="main-title" style="font-size:4vh">Data and Results</h3>

              <h3 class="main-title" style="font-size:4vh"> Chlamy mutants </h3>
              <p> First, we utilized CRISPR-Cas9 technology to knock out the GWD and SBE genes. </p>
              <p>Additionally, to verify the functionality of glgC in Chlamy, we obtained a mutant strain with AGP4
                knocked out, which would allow us to introduce the plasmid containing glgC. We successfully generated five
                mutant strains with respective gene knockouts. </p>

              <div class="gallery grid" style="margin-left:4vw;margin-right:3vw;text-align: center;width:70%">
                <a style="width:90%;">
                  <img
                    src=" https://static.igem.wiki/teams/4772/wiki/website-material/final-wet-lab-starch/agp-gwd1-gwd2-20231012.png " /></a>
                <div class="p"
                  style="text-align: left;color:#6bac74;font-weight: bolder;width:150%;justify-content:center;align-self: center;">
                  <a style="width:90%;">
                    <img
                      src=" https://static.igem.wiki/teams/4772/wiki/website-material/final-wet-lab-starch/sbe2-sbe3-20231011.png" /></a>
                </div>
              </div>
              <p> Figure 7 Gene insertion and sequencing results of the five mutant strains. In the sequencing results,
                the red, bolded sequences with asterisks represent the inserted stop codons. All five mutant strains
                successfully inserted stop codons, resulting in disrupted gene expression and successful gene knockout.
                Also, we got a SBE double mutant <a style=" font-style:italic "> sbe2-3</a>
                <a style=" font-style:italic"> sbe3-5 </a> by carrying out gene knockout in obtained mutant.
              </p>
              <div class="gallery rounded mx-auto d-block" style="width: 70%; height: auto;text-align:center"> <a>
                  <img
                    src=" https://static.igem.wiki/teams/4772/wiki/website-material/final-wet-lab-starch/starch-mutants-dna-gel-shift-new.png" />
                  Figure 8 gel-shift conformation of corresponding mutants. We conducted PCR and gel electrophoresis to
                  analyze the target sequence of mutant variants. The gel-shift conformational analysis, as shown in the
                  figure, indicates that the PCR products of the mutants are significantly larger than those of the wild
                  type.
                </a></div>
              <h3 class="main-title" style="font-size:4vh"> Transferring glgC-G336D </h3>

              <p>We constructed three types of glgC-G336D plasmids that can be expressed in <a
                  style=" font-style:italic "> Chlamydomonas reinhardtii </a>. The YFP tag or the HA tag made sure that
                the expression of glgC-G336D can be verified by performing Western Blot.</p>

              <div class="gallery rounded mx-auto d-block" style="width: 70%; height: auto;text-align:center"> <a>
                  < img src=" https://static.igem.wiki/teams/4772/wiki/2023-10-12-6-08-15.png " /> Figure 9 Three
                  glgC-G336D plasmid profiles. (Promoters, resistance elements, etc., not drawn)
                </a></div>

              <p> By performing Fluorescence intensity detection and Western Blot, we can verify that glgC-G336D was
                successfully expressed in our Chlamy.</p>


              <div class="gallery rounded mx-auto d-block" style="width: 70%; height: auto;text-align:center"> <a><img
                    src="https://static.igem.wiki/teams/4772/wiki/website-material/final-engineering/plate.jpg" /></a>
                <a><img
                    src="https://static.igem.wiki/teams/4772/wiki/website-material/final-engineering/glgc-yfp.jpg" />Fig
                  10. Results of fluorescence intensity detection<br>
                  Excitation light wavelength: 488nm<br>
                  Absorption light wavelength range: 500-520nm<br>
                  The two 24-well plates in the first row show 48 different cell clones introduced into the PsaD CTP-glgC
                  G336D-mVenus vector, and the second row both show 48 different cell clones introduced into the glgC
                  G336D-YFP vector. One positive cell line was obtained from each of the two vectors. Scale of the map is
                  shown on the right.</a>
              </div>


              <h3 class="main-title" style="font-size:4vh"> Growth Curve Determination</h3>
              <p> In order to assess whether the gene knockout affects the normal growth of Chlamydomonas, we conducted a
                three-day growth curve experiment with several obtained mutants, using the wild-type strain as a control.
                The growth curve was measured at 8-hour intervals using optical density (OD) readings as a classic method
                for characterizing cell density. OD values of the Chlamydomonas culture were measured at 16:00, 24:00, and
                8:00, respectively. The growth curves were plotted, and the differences were calculated.
                By comparing the growth curves and analyzing the differences in OD values, we can evaluate the impact of
                the gene knockout on the growth of Chlamydomonas and determine if there are any noticeable deviations from
                the wild-type control.</p>
              <div class="gallery rounded mx-auto d-block" style="width: 70%; height: auto;text-align:center"> <a><img
                    src="https://static.igem.wiki/teams/4772/wiki/website-material/drylab2/14.png" /> Figure 12 data for
                  measuring the OD values of Chlamydomonas</a></div>

              <p> It can be seen that the growth of the wild type and each mutant basically conforms to the s-shaped curve
                of the logistic equation. It can be seen that the growth rate of gwd1 mutant was significantly faster than
                that of the wild type, and the growth rate of sbe3 was significantly slower.</p>


              <h3 class="main-title" style="font-size:4vh"> Starch Content Determination </h3>
              <p> To test the effectiveness of our strategy, we have developed a method for extracting and quantifying
                starch content in Chlamydomonas based on literature research and constant trial. This method allows us to
                measure the starch content in both the wild-type strain and the mutants, thereby validating whether there
                is an increase in starch content. Additionally, we have utilized a commercial assay kit to determine the
                proportion of linear starch in the mutants, specifically measuring the increase in linear starch content.
                Furthermore, we referred to literature and captured scanning electron microscope (SEM) images of starch
                granules to provide a visual representation of the proportion of linear starch within the cells. </p>

              <p> By employing these techniques, we aim to obtain quantitative data on starch content and assess the
                changes in linear starch proportions in the mutants compared to the wild-type strain. </p>

              <h4 class="small-title"> Total starch content</h4>
              <p> <a style="font-weight:border"> Starch content standard curve </a></p>
              <p> The standard curve was drawed using starch sample with a series of concentration gradients in the test
                kit(Starch Content Assay Kit (BOXBIO, China, AKSU015C)). The curve would be used in the concentration of
                starch produced by the sample we wanted to measure.</p>

              <div class="gallery rounded mx-auto d-block" style="width: 70%; height: auto;text-align:center"> <a><img
                    src=" https://static.igem.wiki/teams/4772/wiki/website-material/final-wet-lab-starch/starch-biaoqv-0717.png" />
                  Figure 13 Standard curve of starch content
                </a></div>

              <p> The horizontal axis represents the concentration of the standard starch samples and the vertical axis
                represents their absorbance at △620nm. The data were analyzed by linear regression. The linear regression
                formula is △620 = 6.614 Concentration. R2 = 0.9994. </p>

              <p> <a style="font-weight:border"> Total starch content of cells cultivated by lipid synthesis inhibitor
                </a></p>
              <p> According to the previous research using cerulenin in Chlamydomonas[6], we designed a control group and
                an experimental group. The control group was supplemented with 0.1% methanol, while the experimental group
                was supplemented with 10 μM cerulenin in 0.1% methanol. After 48 hours of nitrogen-depleted culture, we
                measured the starch content.</p>

              <div class="gallery grid" style="margin-left:4vw;margin-right:3vw;text-align: center;width:70%"> <a
                  style="width:65%;"><img
                    src="https://static.igem.wiki/teams/4772/wiki/website-material/final-wet-lab-starch/no-oil.png " /></a>
                <div class="p"
                  style="text-align: left;color:#6bac74;font-weight: bolder;width:150%;justify-content:center;align-self: center;">
                  <a style="width:90%;"><img
                      src="https://static.igem.wiki/teams/4772/wiki/website-material/final-wet-lab-starch/no-oil-photo.png " />
                  </a>
                </div>
              </div><a>Figure 14 Qualitative and quantitive starch content of control and cerulenin treatment group </a>


              <p> It can be seen from the figure that the starch content of cerulenin treatment group was significantly
                higher than the control group, about 2 times that of wild type. </p>

              <p> <a style="font-weight:border"> Total starch content of six mutants </a></p>
              <p> According to previous research[7], we measured the starch content of mutants after 5 days of
                nitrogen-depleted culture. 5×10^7 cells of wild type and each six mutants were collected for measurement.
              </p>


              <div class="gallery grid" style="margin-left:4vw;margin-right:3vw;text-align: center;width:70%"> <a
                  style="width:110%;"><img
                    src="https://static.igem.wiki/teams/4772/wiki/website-material/final-wet-lab-starch/all-mutants-native-starch.png " /></a>
                <div class="p"
                  style="text-align: left;color:#6bac74;font-weight: bolder;width:150%;justify-content:center;align-self: center;">
                  <a style="width:70%;"><img
                      src="https://static.igem.wiki/teams/4772/wiki/website-material/final-wet-lab-starch/all-native-starch-20231012.png" /></a>
                </div>
              </div><a>Figure 15 Qualitative and quantitive starch content of wild type and all mutants </a>
              <p> It can be seen from the figure that the starch content of mutant <a style=" font-style:italic ">
                  gwd1-1</a> and <a style=" font-style:italic "> gwd2-1</a>1 were higher than wild type, but <a
                  style=" font-style:italic "> gwd1-1</a> was significant while <a style=" font-style:italic "> gwd2-1</a>
                was not. The starch content of mutant <a style=" font-style:italic "> sbe2-3</a> and <a
                  style=" font-style:italic "> sbe2-3</a>;<a style=" font-style:italic "> sbe3-5</a> were significantly
                higher than wild type, in which <a style=" font-style:italic "> sbe2-3</a> was <a
                  style="font-weight:border">7.91 times</a> that of wild type. But <a style=" font-style:italic ">
                  sbe3-4</a> was lower than wild type(not significant). <a style=" font-style:italic "> Agp4</a> was
                significantly lower than wild type.</p>



              <h4 class="small-title"> Amylose content and perception </h4>

              <p> We use the Amylose Content Assay Kit ( Solarbio, China, BC4265) to measure amylose content. The starch
                sample for measurement were from the starch we extracted from cells before.</p>

              <p> <a style="font-weight:border"> Amylose content of mutant <a style=" font-style:italic ">
                    sbe2-3/sbe3-4/sbe2-3;sbe3-5 </a> </a></p>

              <div class="gallery grid" style="margin-left:4vw;margin-right:3vw;text-align: center;width:70%"> <a
                  style="width:100%;"><img
                    src="https://static.igem.wiki/teams/4772/wiki/website-material/final-wet-lab-starch/zhi-starch-dingxing.png" /></a>
                <div class="p"
                  style="text-align: left;color:#6bac74;font-weight: bolder;width:100%;justify-content:center;align-self: center;">
                  <a><img
                      src="https://static.igem.wiki/teams/4772/wiki/website-material/final-wet-lab-starch/zhi-starch-hanliang-20231012.png" />
                  </a>
                </div>
              </div><a>Figure 16 Qualitative and quantitive amylose content of wild type and SBE mutants </a><br>
              <p> It can be seen from the figure that the amylose content of 3 kinds of mutants were higher than wild
                type. <a style=" font-style:italic "> sbe2-3</a> and <a style=" font-style:italic "> sbe2-3; sbe3-5</a>
                were significantly while <a style=" font-style:italic "> sbe3-4</a> was not. <a
                  style=" font-style:italic "> sbe2-3</a> was <a style="font-weight:border">8.82 times </a> that of wild
                type.</p>

              <p> <a style="font-weight:border"> Amylose perception of mutant <a style=" font-style:italic ">
                    sbe2-3/sbe3-4/sbe2-3;sbe3-5 </a> </a></p>
              <div class="gallery rounded mx-auto d-block" style="width: 70%; height: auto;text-align:center"> <a><img
                    src=" https://static.igem.wiki/teams/4772/wiki/website-material/final-wet-lab-starch/zhi-starch-ratio-20231012.png" />
                  Figure17 Percent of Amylose to total starch </a></div>

              <p> It can be seen from the figure that amylose perception of mutant <a style=" font-style:italic ">
                  sbe3-4</a> and <a style=" font-style:italic "> sbe2-3; sbe3-5</a> were significantly higher than wild
                type, and <a style=" font-style:italic "> sbe2-3; sbe3-5</a> double mutant’s amylose perception was about
                <a style="font-weight:border">twice</a> that of wild type. <a style=" font-style:italic "> sbe2-3</a> was
                also higher but not significant. The result was consistent with the research paper[8].
              </p>

              <p> <a style="font-weight:border"> Phenotypic characterization of starches produced by mutant </a></p>

              <div class="gallery rounded mx-auto d-block" style="width: 70%; height: auto;text-align:center"> <a><img
                    src=" https://static.igem.wiki/teams/4772/wiki/website-material/final-wet-lab-starch/zhi-starch-photo.jpg" />
                  Figure18 Phenotypic characterization of starches produced by mutant <a style=" font-style:italic ">
                    sbe2-2; sbe3-3</a></a></div>

              <p> The figures were observed using SEM. It can be seen that in wild type cells, the surface of starch
                particles were round and smooth like that in the previous article[9]. But in mutant cells the particles
                were folded and angular, which showed that the phenotypic characterization changed significantly.</p>
            </section>

            <section id="ss4">
              <h3 class="main-title" style="font-size:4vh">Conclusion</h3>
              <li> Gene editing basically did not affect the normal growth of Chlamydomonas.</li>
              <li> Oil inhibitors can increase starch production, which indicates that further inhibition of oil pathway
                by knocking down genes can further increase starch production.</li>
              <li> The <a style=" font-style:italic "> sbe2-3</a>
                mutant strain was a strain with high starch yield up to 7.91 times that of wild type.</li>
              <li> The <a style=" font-style:italic "> sbe2-3;sbe3-5</a>
                mutant strain was a strain producing twice amylose starch of wild type.</li>



            </section>
            <section id="ss5">
              <h3 class="main-title" style="font-size:4vh">Discussion</h3>
              <p> The growth rate of <a style=" font-style:italic "> sbe3-4</a> and <a style=" font-style:italic ">
                  gwd1-1</a> mutants varied significantly, while the knockout gene basically did not affect the normal
                growth of several other mutants. The gwd mutant grew significantly faster than the wild type and has
                increased starch production, making it the very desired mutant. <a style=" font-style:italic "> gwd2-2,
                  agp4</a>, and <a style=" font-style:italic "> sbe2-3</a> mutants were not significantly different,
                indicating that the growth rate is not slower than the wild type and is an ideal mutant. <a
                  style=" font-style:italic "> sbe3-4</a> growth rate slowed significantly and may affect starch
                yield.<br>
                Western blot result showed a positive bang but with an error size of glgc protein, which probably was
                caused by proteinase degradation. We could try to use other efficient homologous enzymes in other species
                later.<br>
                <a style=" font-style:italic "> sbe2-3</a> grows fast and is unexpectedly a <a style="font-weight:border">
                  motor-defective type </a>, with short flagella and slow movement. We speculate that the reason for its
                high starch accumulation is that it does not exercise to consume energy, so this energy accumulates in
                starch or other forms. In the future, we will build movement defect mutant to detect whether starch will
                accumulate like this one.
              </p>
            </section>




          </section>





          <section id="s2">
            <h2 class="main-title">ChlF:Extended Light Harvesting of Chlamy</h2>
            <section id="dd1">
              <h3 class="main-title" style="font-size:4vh">Background</h3>
              <p>In runway ponds for industrial production and cultivation of Chlamydomonas, Chlamydomonas in the upper
                layer uses near-red light for photosynthesis. Therefore, a serious problem of near-red light attenuation
                in the depth of runway ponds exists, which leads to serious decrease of the photosynthetic efficiency of
                Chlamydomonas in the depth of runway ponds.</p>

              <div class="gallery rounded mx-auto d-block" style="width: 70%; height: auto;text-align:center"> <a><img
                    src="https://static.igem.wiki/teams/4772/wiki/website-material/final-wet-lab-chif/figure-1.png" />
                  Figure 1 Schematic diagram of different layers of Chlamy in industrial runway pond</a></div>

            </section>
          </section>

          <section id="dd2">
            <h3 class="main-title" style="font-size:4vh">Our Inspiration: Far-Red Light Photoacclimation (FaRLiP)</h3>
            <p>In terrestrial cyanobacteria, they live in an environment under near-infrared light(720nm) because of
              shading by plants or because of their associations with soil crusts, benthic mat communities, or dense
              cyanobacterial blooms.For evolution pressure, these cyanobacteria have evolved a novel far-red light
              photoacclimation (FaRLiP) that enable them to use far-red light (FRL) for photosynthesis. </p>

            <div class="gallery rounded mx-auto d-block" style="width: 70%; height: auto;text-align:center"> <a><img
                  src="https://static.igem.wiki/teams/4772/wiki/website-material/final-wet-lab-chif/figure-2.png" />
                Figure 2 Schematic diagram of terrestrial cyanobacteria in their living environment</a></div>
          </section>

          <p>And for evolution pressure, terrestrial cyanobacteria have evolved a novel far-red light photoacclimation
            (FaRLiP) that enable them to use far-red light (FRL) for photosynthesis. Chlorophyll f (Chl f) is the key
            pigment in FaRLiP whose maximal absoption is at around 707nm. And ChlF is the enzyme that produce chlorophyll
            f by oxidizing chlorophyll a. </p>
          <section id="dd3"></section>
          <h3 class="main-title" style="font-size:4vh">Our Design</h3>
          <p>Learning from terrestrial cyanobacteria, we try to express enzyme ChlF from cyanobacteria to introduce FaRLiP
            into Chlamydomonas, thereby extending their light harvesting into far red (700 to 800 nm) and improving their
            photosynthetic light use efficiency.</p>

          <div class="gallery rounded mx-auto d-block" style="width: 70%; height: auto;text-align:center"><a><img
                src="https://static.igem.wiki/teams/4772/wiki/website-material/final-wet-lab-chif/figure-3.png" /> Figure
              3 Introduce of FaRLiP in Chlamy by expressing ChlF</a></div>

          <h2 class="main-title">4. Star-Chlamy with FaRLiP</h2>

          <p>We constructed the ChlF plasmid that can be expressed in Chlamydomonas reinhardtii. And the YFP tag made sure
            that the expression of ChlF can be verified by performing Western Blot. PsaD CTP is a chloroplast transport
            peptide that helps transport ChlF into chloroplasts to function.</p>

          <div class="gallery rounded mx-auto d-block" style="width: 70%; height: auto;text-align:center"> <a><img
                src="https://static.igem.wiki/teams/4772/wiki/website-material/final-wet-lab-chif/figure-4.png" /> Figure
              4 Construction of PsaD CTP-ChlF-YFP plasmid.</a></div>


          <p>By performing Fluorescence intensity detection and Western Blot, we can verify that ChlF was successfully
            expressed in our Chlamy.</p>

          <div class="gallery rounded mx-auto d-block" style="width: 70%; height: auto;text-align:center"> <a><img
                src="https://static.igem.wiki/teams/4772/wiki/website-material/final-wet-lab-chif/figure-5.png" /> Figure
              5
              Fluorescence intensity detection experiment. Excitation light wavelength: 488nm. Absorption light wavelength
              range: 500-520nm. The first and second lines are two repeats. Samples in the same columns but different
              lines
              come from one strains of algae. Scale of the heat map is shown on the right. NC: Chlamy that do not express
              YFP; PC: Chlamy that express YFP; ChlF-YFP: Chlamy that express ChlF-YFP plasmid. ChlF-YFP-1 and ChlF-YFP-2
              are two different strains of Chlamy.</a></div>
          <div class="gallery rounded mx-auto d-block" style="width: 70%; height: auto;text-align:center"> <a><img
                src="https://static.igem.wiki/teams/4772/wiki/website-material/final-wet-lab-chif/figure-6.png" /> Figure
              6
              Western Blot result of PsaD CTP-ChlF-YFP. The lane of ChlF-YFP and YFP is indicated. Lane 1: ChlF-YFP-1;
              Lane
              9: ChlF-YFP-2; Lane 2-8,10: Chlamy that failed to express ChlF-YFP plasmid. NC: Chlamy that do not express
              YFP; PC: Chlamy that express YFP;
              * The smaller lane of PC might result from degradation of YFP or other unknown reasons.</a></div>

          <p>According to Roberta Croce's calculations, under special conditions of high far-red light, the total energy
            output (calculated as the product of total light absorption and photochemical heat production) of FaRLiP PSII
            is
            70% greater than that of white light PSII.
            Due to the higher total energy output of Chlamydomonas reinhardtii with the introduction of FaRLiP under
            far-red
            light conditions, the growth rate of our Star-Chlamy with FaRLiP under far-red light will be higher than that
            of
            WT. All in all, introducing FaRLiP to solve the shade problem of Chlamydomonas reinhardtii in industrial
            production runway pond is a promising and feasible approach.</p>

          <div class="gallery rounded mx-auto d-block" style="width: 70%; height: auto;text-align:center"> <a><img
                src="https://static.igem.wiki/teams/4772/wiki/website-material/final-wet-lab-chif/figure-7.png" /> Figure
              7
              Star-Chlamy with FaRLiP</a></div>



          </section>


          <section id="s3">
            <h2 class="main-title">Broaden Application Scenarios of CCM</h2>

            <section id="cc1"></section>
            <h2 class="main-title">Background</h2>
            <p>Chlamydomonas reinhardtii has acquired a series of specialized photosynthetic structures and pathways to
              achieve high photosynthetic efficiency during long-term evolution. However, due to the limited CO₂
              solubility in water, Chlamydomonas reinhardtii has only evolved mechanisms（CCM pathway）under lower CO₂
              concentrations than conventional to maintain its photosynthetic rate, but not under abundant（over normal）CO₂
              concentrations. </p>

            <p>In today's Chlamydomonas agriculture, regardless of whether the production mode is run tank or
              fermentation，there are various ways to ensure that the cultured Chlamydomonas receive higher light intensity
              than the wild environment without damaging the cells. Therefore, the CO2 (or CO3-) concentration in the
              culture medium has become the main factor limiting the photosynthetic rate and yield of Chlamydomonas. </p>

            <div class="gallery rounded mx-auto d-block" style="width: 70%; height: auto;text-align:center"> <a><img
                  src="https://static.igem.wiki/teams/4772/wiki/website-material/final-ccm-wetlab/figure-0.png" />Figure
                1</a></div>
            <p>Study showed that the photosynthetic rate of green algae increased from 5.1% to 9.8% by artificially
              enriching carbon dioxide and bicarbonate at the periphery of the cell wall<sup>[1]</sup>. This strongly
              support the feasibility of improving carbon assimilation capacity of Chlamydomonas to increase its
              photosynthetic rate under high carbon concentration.</p>

            <div class="gallery rounded mx-auto d-block" style="width: 70%; height: auto;text-align:center">  <a><img
                  src="https://static.igem.wiki/teams/4772/wiki/website-material/final-ccm-wetlab/figure-1.png" />Figure
                2</a></div>


            <section id="cc2"></section>
            <h2 class="main-title">Inspiration</h2>
            <p>CCM, short for Carbon Concentrating Mechanism, represents a pathway that specially enrich carbon dioxide
              for photosynthesis in green algae such as Chlamydomonas reinhardtii. Through a series of coordinated
              membrane transporters and carbonic anhydrase, extracellular CO2 is actively transported into the pyrenoid
              structure within chloroplasts against its concentration gradient. </p>

            <p>CCM pathway is an adaptation of green algae to the changes of carbon dioxide concentration in the water
              environment. In wild-type Chlamydomonas reinhardtii cells, a shift to limiting CO2 conditions induces
              expression of more than 50 genes, most of which encodes proteins in CCM pathway, thereby enhancing the CCM
              process and improving the utilization of inorganic carbon during cellular photosynthesis. </p>

            <p>CIA5, a transcription factor protein found in Chlamydomonas cells, plays a pivotal role in activating
              downstream gene expression related to CCM<sup>[2]</sup>. Under limited CO2 condition, the chemical
              modification of CIA5 changes, thus CIA5 locates at the nucleus and functions as a transcription factor for
              CCM genes. However, under high CO2 condition, the modification of CIA5 is not favorable to its transcription
              factor activity, resulting as a low CCM efficiency. </p>

            <div class="gallery rounded mx-auto d-block" style="width: 70%; height: auto;text-align:center"> <a><img
                  src="https://static.igem.wiki/teams/4772/wiki/website-material/final-ccm-wetlab/figure-2.png" />Figure
                3. CCM pathway under limited and ambient CO2 conditions</a></div>
            <p>It has been reported that the CIA5 protein gene with a deletion of 54 amino acids in the C terminus can
              complement the CIA5 mutant phenotype<sup>[3]</sup>, which suggests that the C terminus of Cia5 may function
              as the upstream CO2 sensing domain and regulate its own transcription factor activity. Therefore, we planned
              to transfer an artificial CIA5 mutant with a C-terminal truncation (CIA5-C-del) into the wild type
              Chlamydomonas reinhardtii to allow it to function as a transcription factor under any CO2 concentration.
            </p>

            <p>Besides CIA5, LCR1 is another transcription factor responsible for CCM genes, locating downstream of CIA5
              in the CCM regulating pathway. CCM genes CAH1, LCI1 and LCI6 are induced by LCR1, suggesting that LCR1
              transmits the low CO2 signal to at least three CO2-responsive genes and then fully induces
              CCM<sup>[4]</sup>. Thus it becomes another site where CCM could be regulated artificially.</p>

            <div class="gallery rounded mx-auto d-block" style="width: 70%; height: auto;text-align:center"> <a><img
                  src="https://static.igem.wiki/teams/4772/wiki/website-material/final-ccm-wetlab/figure-3.png" />Figure 4
                LCR1 function in CCM regulation pathway</a></div>

            <section id="cc3">
              <h2 class="main-title">Design and Results</h2>

              <h3 class="main-title" style="font-size:4vh">3.1 Star-Chlamy with CIA5-C-del</h3>

              <p>We constructed the CIA5-C-del plasmid that can be expressed in Chlamydomonas reinhardtii. The NLS
                sequences enhanced its transcription factor activity, and the 3x HA tag made sure that the expression of
                CIA5-C-del can be verified by performing Western Blot.</p>

              <div class="gallery rounded mx-auto d-block" style="width: 70%; height: auto;text-align:center"> <a><img
                    src="https://static.igem.wiki/teams/4772/wiki/website-material/final-ccm-wetlab/figure-4.png" />Figure
                  5</a></div>

              <div class="gallery rounded mx-auto d-block" style="width: 70%; height: auto;text-align:center"> <a><img
                    src="https://static.igem.wiki/teams/4772/wiki/website-material/final-ccm-wetlab/figure-5.png" />Figure
                  6 Western blot method was applied to verify the expression of the plasmid. Results showed no HA tag
                  expression was observed in all 96 lines examined, which means that screening for the target phenotype
                  should continue. Lane 1-12: Chlamy that fail to expression CIA5ΔC; PC: positive control; 1st Ab: Rat
                  anti-HA; 2nd Ab: Goat anti-rat.</a></div>
              <h3 class="main-title" style="font-size:4vh">3.2 other attempts and ideas</h3>

              <h4 class="small-title">3.2.1 CIA5 gene edit for confirming its function</h4>

              <div class="gallery rounded mx-auto d-block" style="width: 70%; height: auto;text-align:center">  <a><img
                    src="https://static.igem.wiki/teams/4772/wiki/website-material/final-ccm-wetlab/figure-6.png" />Figure
                  6</a></div>

              <p>Before we constructed the CIA5-C-del plasmid, we had tried to knock out the CIA5 gene at 4 different
                target site as well as reproduce the C-terminus truncation mutant by CRISPR method, aiming at confirming
                its CO2 responding function and transcription factor activity. A total of 1,008 algae strains after CRISPR
                operating had been tested by genotyping, with no positive result showing a successful editing on CIA5
                gene. This suggests that 1) CIA5 is strongly required for Chlamydomonas life activities and CIA5 knockout
                may lead to cell death; 2) The chromatin status of CIA5 is not suitable for CIRSPR system for gene
                editing. Either way, we have provided a good topic for future iGEM teams to pursue Chlamydomonas related
                research.</p>


              <h4 class="small-title">3.2.2 LCR1 expression plasmid’s construction</h4>

              <div class="gallery rounded mx-auto d-block" style="width: 70%; height: auto;text-align:center">  <a><img
                    src="https://static.igem.wiki/teams/4772/wiki/website-material/final-ccm-wetlab/figure-7.png" />Figure
                  7</a></div>
              <p>We also proposed to construct an LCR1 gene expression plasmid and insert it into Chlamydomonas genome,
                and to screen for a line with constitutively high LCR1 gene expression (relative to wild type). We hope
                that this could further enhance CCM protein expression in Chlamydomonas on the basis of the CIA5-C-del
                strain to further enhance its CO2 assimilation capacity.Relevant experiments are still in progress.</p>


            </section>
          </section>


          <section id="refs">
            <h2 class="main-title">Reference</h2>
                  <p style="font-size:12px">[1]Radakovits, R., Jinkerson, R. E., & Darzins, A. Posewitz,. MC. (2010). Genetic engineering of
                    algae for
                    enhanced biofuel production. Eukaryotic Cell, 9(4), 486-501<br>
                    [2]Gupta, K.M. (2011). Starch Based Composites for Packaging Applications. In Handbook of Bioplastics
                    and
                    Biocomposites Engineering Applications, S. Pilla (Ed.).<br>
                    [3].Ihemere, Uzoma et al. “Genetic modification of cassava for enhanced starch production.” Plant
                    biotechnology journal vol. 4,4 (2006): 453-65.<br>
                    [4] Ihemere, Uzoma et al. “Genetic modification of cassava for enhanced starch production.” Plant
                    biotechnology journal vol. 4,4 (2006): 453-65.<br>
                    [5]https://pubchem.ncbi.nlm.nih.gov/compound/cerulenin<br>
                    [6]Luis Gonzaga Heredia-Martínez, Ascensión Andrés-Garrido, Enrique Martínez-Force, María Esther
                    Pérez-Pérez,
                    José L. Crespo, Chloroplast Damage Induced by the Inhibition of Fatty Acid Synthesis Triggers
                    Autophagy in
                    Chlamydomonas, Plant Physiology, Volume 178, Issue 3, November 2018, Pages 1112–1129,
                    https://doi.org/10.1104/pp.18.00630<br>
                    [7]Delrue, B., Fontaine, T., Routier, F., Decq, A., Wieruszeski, J. M., Van Den Koornhuyse, N.,
                    Maddelein, M.
                    L., Fournet, B., & Ball, S. (1992). Waxy Chlamydomonas reinhardtii: monocellular algal mutants
                    defective in
                    amylose biosynthesis and granule-bound starch synthase activity accumulate a structurally modified
                    amylopectin. Journal of bacteriology, 174(11), 3612–3620.
                    https://doi.org/10.1128/jb.174.11.3612-3620.1992<br>
                  [8]Courseaux, A., George, O., Deschamps, P., Bompard, C., Duchêne, T., & Dauvillée, D. (2023). BE3 is
                  the
                  major branching enzyme isoform required for amylopectin synthesis in Chlamydomonas reinhardtii.
                  Frontiers in
                  plant science, 14, 1201386. https://doi.org/10.3389/fpls.2023.1201386<br>
                  [9]Deletion of BSG1 in Chlamydomonas reinhardtii leads to abnormal starch granule size and
                  morphology<br>
                  [10]Fukuzawa, H et al. Ccm1, a regulatory gene controlling the induction of a carbon-concentrating
                  mechanism in Chlamydomonas reinhardtii by sensing CO2 availability. National Academy of Sciences of
                  the United States of America vol. 98,9 (2001): 5347-52.<br>
                  [11]Kohinata T et al. Significance of zinc in a regulatory protein, CCM1, which regulates the
                  carbon-concentrating mechanism in Chlamydomonas reinhardtii. Plant & Cell Physiology. 2008
                  Feb;49(2):273-283.<br>
                  [12]Xiang, Y et al. The Cia5 gene controls formation of the carbon concentrating mechanism in
                  Chlamydomonas reinhardtii. National Academy of Sciences of the United States of America vol. 98,9
                  (2001): 5341-6.<br>
                  [13]Yoshioka, Satoshi et al. The novel Myb transcription factor LCR1 regulates the CO2-responsive gene
                  Cah1, encoding a periplasmic carbonic anhydrase in Chlamydomonas reinhardtii. The Plant cell vol. 16,6
                  (2004)<br></p>
       
        </section>
        
       
     
      </div>
    </div>
  </Scrollspy>
  <a class="link-ref" href=""></a>
</div></template>

<script>
import SimpleLightbox from "simplelightbox";

export default {
  layout: "highlighter",
  props: {
    isOpened: { type: Boolean },
    wordName: { type: String },
    wordDescription: { type: String },
  },
  data() {
    return {
      currentPage: "Wet Lab",
      dictionaryData: null,
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
    fetch("https://static.igem.wiki/teams/4118/wiki/website-assets/dictionary/experiments-2.json")
      .then(res => res.json())
      .then(data => this.dictionaryData = data)
      .catch(err => { throw err });
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.scrolled);
  },
  methods: {
    scrolled: function () {
      document.querySelector("progress").value = window.scrollY / (document.querySelector("#main-content").offsetHeight - window.innerHeight + document.querySelector("#header").clientHeight) * 100;
    },
    changeWord: function (word) {
      if (this.wordName != word) {
        if (!this.isOpened) {
          this.$emit('update:isOpened', true);
        }
        if (this.dictionaryData != null && this.wordIndex != "") {
          const index = this.dictionaryData.findIndex((index) => index.name == word)
          this.$emit('update:wordName', this.dictionaryData[index].name);
          this.$emit('update:wordDescription', this.dictionaryData[index].description);
        }
      } else if (this.wordName == word || this.wordName == "") {
        this.$emit('update:isOpened', !this.isOpened);
        this.$emit('update:wordName', "");
        this.$emit('update:wordDescription', "");
      }
    }
  }
}
</script>
