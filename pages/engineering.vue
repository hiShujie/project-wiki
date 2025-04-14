<template>
  <div>
    <Header :title="currentPage">
      <div class="bg"
        style="background: url('https://static.igem.wiki/teams/4772/wiki/website-material/homepage/engineering3.jpg') center center no-repeat; background-size: cover;">
        <h1 class="head-title">{{ currentPage }}</h1>
      </div>
    </Header>

    <Scrollspy :currentPage="currentPage" initialSection="overview">
      <div class="row">
        <div class="col-lg-3">
          <nav class="section-nav">
            <div class="row">
              <progress min="0" max="100" value="0"></progress>
              <ol>
                <li><a :href="`${currentPage}/#overview`" v-scroll-to="'#overview'">Introduction to DBTL</a></li>


                <li><a :href="`${currentPage}/#optimization`" v-scroll-to="'#optimization'">Design</a></li>
                <ul>
                  <li class="sub"><a :href="`${currentPage}/#section1`" v-scroll-to="'#section1'"
                      parent="optimization">Chassis</a></li>
                  <li class="sub"><a :href="`${currentPage}/#section2`" v-scroll-to="'#section2'"
                      parent="optimization">Pathway</a></li>
                  <li class="sub"><a :href="`${currentPage}/#section3`" v-scroll-to="'#section3'"
                      parent="optimization">Wet Lab</a></li>
                  <li class="sub"><a :href="`${currentPage}/#section4`" v-scroll-to="'#section4'" parent="optimization">In
                      Silico Design</a></li>
                </ul>





                <li><a :href="`${currentPage}/#build`" v-scroll-to="'#build'">Build</a></li>
                <ul>
                  <li class="sub"><a :href="`${currentPage}/#dnas`" v-scroll-to="'#dnas'" parent="build">DNA Synthesis</a>
                  </li>
                  <li class="sub"><a :href="`${currentPage}/#assembly`" v-scroll-to="'#assembly'" parent="build">Part
                    </a></li>
                  <li class="sub"><a :href="`${currentPage}/#editing`" v-scroll-to="'#editing'" parent="build">Gene
                      Editing</a></li>
                  <li class="sub"><a :href="`${currentPage}/#wcross`" v-scroll-to="'#wcross'" parent="build">Cell
                      Treatment</a></li>
                </ul>





                <li><a :href="`${currentPage}/#test`" v-scroll-to="'#test'">Test</a></li>
                <ul>
                  <li class="sub"><a :href="`${currentPage}/#s1`" v-scroll-to="'#s1'" parent="test">Module
                      &nbsp;1&nbsp;</a></li>
                  <li class="sub"><a :href="`${currentPage}/#s2`" v-scroll-to="'#s2'" parent="test">Module
                      &nbsp;2&nbsp;</a></li>
                  <li class="sub"><a :href="`${currentPage}/#s3`" v-scroll-to="'#s3'" parent="test">Module
                      &nbsp;3&nbsp;</a></li>
                </ul>





                <li><a :href="`${currentPage}/#learn`" v-scroll-to="'#learn'">Learn</a></li>
                <ul>
                  <li class="sub"><a :href="`${currentPage}/#se1`" v-scroll-to="'#se1'" parent="learn">For Design</a>
                  </li>
                  <li class="sub"><a :href="`${currentPage}/#se2`" v-scroll-to="'#se2'" parent="learn">For
                      Build</a></li>
                  <li class="sub"><a :href="`${currentPage}/#se3`" v-scroll-to="'#se3'" parent="learn">For
                      Test</a></li>
                </ul>


              </ol>
            </div>
          </nav>
        </div>

        <div class="col-lg-9 main-content" id="main-content">
          <section id="overview">
            <h2 class="main-title">Introduction to DBTL</h2>
            <P>Engineering is a set of principles that we use to effectively design and build projects of interest. When
              developing a biological system, this framework consists of four stages, commonly referred to as the <a
                style="font-weight:border">"Design-Build-Test-Learn cycle" (DBTL cycle) </a>. We embrace this cycle as an
              engineering principle to address real-world problems or achieve specific goals. The following are key stages
              within the DBTL cycle:</p>

            <div class="gallery rounded mx-auto d-block" style="width: 50%; height: auto;text-align:center"><a><img
                  src="https://static.igem.wiki/teams/4772/wiki/website-material/final-engineering/fig1.png" /> Figure
                1.1 The pattern diagram of the DBTL cycle </a></div><br>

            <li><a style="font-weight:border">Design: </a>In this stage, we design a new biological system based on
              desired functionality or objectives. This includes determining the required chassis, signaling pathways,
              regulatory elements, and other biological components, as well as their interactions. Computer simulations
              and mathematical modeling are often used to optimize system design.</li><br>
            <li><a style="font-weight:border">Build: </a>After the design, we construct the required biological system
              according to the plans developed in the design stage. This involves DNA synthesis, genome assembly, chassis
              manipulation, gene sequencing, and more. The advancements in synthetic biology techniques have made it more
              efficient and precise to build complex biological systems.</li><br>
            <li><a style="font-weight:border">Test: </a>Once the system is built, we experimentally validate the
              constructed biological system. Through experimental testing, we evaluate if the system's functionality and
              performance meet the design requirements. This may involve gene expression analysis, cell characterization,
              analytical chemistry, and other laboratory experiments, utilizing various measurement techniques and
              instruments to gather data. </li><br>
            <li><a style="font-weight:border">Learn: </a>Based on the testing, we assess and improve whole performance of
              the system. By analyzing experimental data and comparing the results with the expected design, we can
              identify issues or potential improvements within the system. These insights can be used to optimize the
              design, modify the build process, and guide the next cycle. </li><br>

            <p>DBTL cycle is an iterative process that provides opportunities for understanding and improving biological
              systems. It serves as a fundamental engineering principle that runs through our project <a
                style="font-weight:border"> “Star-Chlamy” </a>and plays a crucial role. In response to the urgent need to
              address the agricultural crisis and achieve sustainable development goals, we have designed an innovative
              approach using microalgae as cell factories for starch production. </p>

            <p>To achieve our <a style="font-weight:border">proof-of-concept</a>, we have gone through multiple DBTL
              cycles that encompass various aspects of our project design. Through continuous design, building, testing,
              and learning, we have progressively improved and optimized the functionality and performance of the selected
              biological system, enabling Star-Chlamy to better serve real-world demands and applications.</p><br>
            <div class="gallery grid" style="margin-left:9vw;text-align: center;width:60%">
              <a style="width:100%;"
                href="https://static.igem.wiki/teams/4772/wiki/website-material/final-engineering/fig2-1.png"><img
                  src="https://static.igem.wiki/teams/4772/wiki/website-material/final-engineering/fig2-1.png" /></a>


              <div class="p"
                style="text-align: left;color:#6bac74;font-weight: bolder;width:150%;justify-content:center;align-self: center;">
                <a style="width:90%;"
                  href="https://static.igem.wiki/teams/4772/wiki/website-material/final-engineering/fig2-2.png "><img
                    src="https://static.igem.wiki/teams/4772/wiki/website-material/final-engineering/fig2-2.png " /></a>

              </div>
            </div>
            <p style="margin-left:5px">Figure 1.2 An overview of our project “Star-Chlamy”</p>
          </section>



          <section id="optimization">
            <h2 class="main-title">Design</h2>
            <div class="gallery rounded d-block" style="width: 20%;margin-left:0"><a><img
                  src="https://static.igem.wiki/teams/4772/wiki/website-material/final-engineering/dbtl.png" /> </a></div>
            <section id="section1">
              <h3 class="main-title" style="font-size:4vh">Chassis Selection</h3>

              <p>Chassis cells serve as the "hardware" foundation of synthetic biology. Based on our objectives, we have
                chosen <a style=" font-style:italic">Chlamydomonas reinhardtii</a> as the chassis for our project. <a
                  style=" font-style:italic ">Chlamydomonas reinhardtii</a> is a unicellular eukaryotic photosynthetic
                microalga that offers the following advantages:</p>

              <div class="gallery grid" style="margin-left:9vw;text-align:left;width:100%">
                <div>
                  As a potential food source:
                  <li>Do not require arable land. </li>
                  <li>High photosynthetic efficiency. </li>
                  <li>High carbon fixation efficiency based on CCM.</li>
                  <li>Growth cycle is shorter compared to higher plants. </li>
                </div>


                <div class="p">
                  As a model organism:
                  <li>Accomplished complete genome sequencing.</li>
                  <li>With well-established gene editing system.</li>
                  <li>With well genetic transformation system.</li>
                  <li>With extensive research on CCM</li>
                </div>
              </div>
            </section>

            <section id="section2">
              <h3 class="main-title" style="font-size:4vh">Pathway selection</h3>
              <p>We have employed the principles of metabolic engineering in our design. The cellular factory aims to
                achieve optimized synthesis of the entire metabolic pathway by modulating the native starch metabolism of
                the cell, effectively allocating light and carbon outputs.</p>
              <p>Scientists have elucidated the starch metabolism pathway in Chlamydomonas reinhardtii (Radakovits et al.,
                Eukaryotic Cell, 2010), which has provided us with considerable convenience. Based on this, we have
                decided to target this pathway for our project.</p>
              <p>Additionally, considering the crosstalk between the starch metabolism pathway and the lipid metabolism
                pathway, we have also targeted the lipid pathway to indirectly promote starch synthesis.</p>
              <div class="gallery rounded mx-auto d-block" style="width: 70%; height: auto;text-align:center"><a
                  href="https://s10.lite.msu.edu/res/msu/botonl/b_online/e19_1/metabol.htm"><img
                    src="https://static.igem.wiki/teams/4772/wiki/website-material/final-engineering/pathway.png" />Figure2.1
                  Click Here to view the page<sup>[1]</sup></a></div><br>

                 <h3 class="main-title" style="font-size:4vh">Wet Lab Design</h3>
              <p>After selecting the pathway, we proceeded to design our laboratory procedures. We devised a strategy
                utilizing the principle of "broaden the source of income and economize on expenditure" to simultaneously
                promote starch synthesis and inhibit starch degradation. </p>
              <p>The Star-Chlamy project is a classic example of metabolic engineering. In metabolic engineering, certain
                pathways are often limited at two or more metabolic nodes. A feasible solution to this issue is to combine
                <a style="font-weight:border">regulatory modules</a> to control the metabolic flux at multiple nodes.
                Therefore, we have divided the starch metabolic pathway into three major modules, following an engineering
                approach: <a style="font-weight:border">modifying starch metabolic pathway（Regulatory module
                  1.1-1.4）、expand the optical absorption spectrum (Regulatory module 2)、broaden the application scenarios
                  of CCM (Regulatory module 3). </a>By combining these three modules, we can control the output of
                targeted metabolic circuit.</p>

              <div class="gallery rounded mx-auto d-block" style="width: 70%; height: auto;text-align:center"><a><img
                    src="https://static.igem.wiki/teams/4772/wiki/website-material/final-engineering/module.png" /> Figure
                  2.2 Schematic diagram of regulatory modules and metabolic circuit</a></div>
            </section>
            <section id="section3">
              <h4 class="small-title">Regulatory module 1.1:</h4>
              <p>Metabolic engineering often alters production by altering enzyme levels. Through literature research, we
                discovered that AGPase is the rate-limiting enzyme instarch synthesis. So we designed to introduce a more
                efficient AGPase encoded by <a style="font-style:italic">glgC</a> from Escherichia coli to AGP4-knockout chlamy strain. In this way, the
                source of income can be broaden.</p>

              <h4 class="small-title">Regulatory module 1.2:</h4>
              <p>It is also important to economize on expenditure in engineering thinking. GWD plays a crucial role in the
                process of starch degradation. Consequently, we selected the corresponding genes <a style="font-style:italic">GWD1</a> and <a style="font-style:italic">GWD2</a> as targets
                and manipulated them accordingly.</p>

              <h4 class="small-title">Regulatory module 1.3:</h4>
              <p>At the same time, reducing the competitive endogenous pathways can also improve the production. Since
                starch synthesis and lipid synthesis compete with each other, we decided to inhibit lipid synthesis to
                promote starch synthesis. Due to the inherent uncertainty of this approach, we have chosen not to
                manipulate genes at this stage. Instead, we are designing a cultivation experiment using the lipid
                synthesis inhibitor, cerulenin, on the chassis Chlamy.</p>

              <h4 class="small-title">Regulatory module 1.4:</h4>
              <p>Regulation of the value of metabolic products is also important. After communicating with the China
                Starch Industry Association(<a href="https://2023.igem.wiki/tsinghua-tfl/human-practices"
                  style="color:#6bac74">Click Here to see more details</a>), we learned that high amylose starch has
                higher added value. To promote the accumulation of high amylose starch, we decided to target the SBE
                enzyme and knock out the <a style="font-style:italic">SBE2</a> and <a style="font-style:italic">SBE3</a> genes.</p>

              <h4 class="small-title">Regulatory module 2:</h4>
              <p>Starch is one of the important storage carbon sources, and it is crucial to improve the yield of starch
                from the source. Therefore, we have chosen the key node, right reaction, as module 2. In runway ponds for
                industrial production and cultivation of Chlamydomonas, Chlamy in the upper layer uses near-red light for
                photosynthesis. Therefore, a serious problem of near-red light attenuation in the depth of runway ponds
                exists, which leads to serious decrease of the photosynthetic efficiency of Chlamydomonas in the depth of
                runway ponds. So we targeted it to <a style="font-weight:border">broaden the light absorption
                  spectrum</a>.</p>

              <h4 class="small-title">Regulatory module 3: </h4>
              <p>In addition to that, we also target the dark reactions of chlamy photosynthesis. Our chassis, <a
                  style=" font-style:italic ">Chlamydomonas reinhardtii</a>, possesses a <a
                  style="font-weight:border">carbon concentration mechanism (CCM) </a> that allows for the high
                concentration enrichment of CO<sub>2</sub> even in low external inorganic carbon conditions, giving it a
                certain advantage. However, this mechanism is inhibited under high CO<sub>2</sub> concentrations.
                Therefore, in order to further increase starch metabolism flux, we designed to regulate the key
                transcription factor CIA5 of CCM. </p>




            </section>

            <section id="section4">
              <h3 class="main-title" style="font-size:4vh">In Silico Design</h3>
              <p>In addition, we use computer simulation and mathematical modeling to help optimize the design and also
                verify if the laboratory design functions correctly.</p>
              <h4 class="small-title">Module 1&nbsp;-&nbsp;starch pathway</h4>
              <p>First, we modeled starch metabolism based on the Mie equation to assess how the activity our targets
                affects the amount of starch accumulated. We focused on the two main variables that make changes in the
                amount of starch accumulated, GWD as well as AGPase activity. Using the Matlab, we can get the results,
                which matches with the expective results in the wet lab design. </p>



              <div class="gallery rounded mx-auto d-block" style="width: 50%; height: auto;text-align:center"><a><img
                    src="https://static.igem.wiki/teams/4772/wiki/website-material/drylab2/18.png" /></a></div>
              <div class="gallery rounded mx-auto d-block" style="width: 50%; height: auto;text-align:center"><a><img
                    src="https://static.igem.wiki/teams/4772/wiki/website-material/drylab2/19.png" /> Figure 2.4 AGPase
                  and gwd activity’s influence on starch yield</a></div><br>
              <p>We also model the starch branching process for verification. Differential equations are used to represent
                the starch branching kinetics and give the starch branching profile. From the results it can be seen that
                the larger the relative activity of SBE, the smaller the amount of straight chain starch. The wet lab
                designs are <a style="font-weight:border">evaluated and verified</a> through data analysis.</p>

              <div class="gallery rounded mx-auto d-block" style="width: 70%; height: auto;text-align:center"><a><img
                    src="https://static.igem.wiki/teams/4772/wiki/website-material/drylab2/23.png" />Figure 2.5 Effect of
                  branching enzyme activity on starch branching </a></div>
              <h4 class="small-title">Module 3-CCM</h4><br>
              <p>In order to provide ideas for our operation of CIA5, we start with modeling CIA5's 3D structure. It has
                been reported that the CIA5 protein gene with a deletion of 54 amino acids in the C terminus can
                complement the CIA5 mutant phenotype<sup>[2]</sup>, which suggests that the C terminus of CIA5 may
                function as the upstream CO2 sensing domain and regulate its own transcription factor activity. There is
                currently a lack of CIA5 structure information on the Internet, so we used Alpha Fold to predict CIA5 and
                C terminus deleted CIA5 structures.</p>

              <div class="gallery rounded mx-auto d-block" style="width: 70%; height: auto;text-align:center"> <a><img
                    src="https://static.igem.wiki/teams/4772/wiki/website-material/final-engineering/design-cia5-structure.png" />Figure
                  2.6 Prediction of the structure of wild-type and C-deletion CIA5 protein</a></div><br>
              <p>The prediction showed that: The C terminus was located on the lateral side of the protein. The confidence
                of the C-terminal structure prediction was less than 50%, and it was speculated to be a flexible structure
                (it could not be excluded that the lack of homologous protein structure information makes it difficult to
                predict, resulting in low confidence). And truncated CIA5 center relatively stable structure before and
                after almost no change. The external flexible part also changed less. So this suggests that the C-terminal
                itself may not be an influencing factor, but the C-terminal phosphorylation reported by predecessors plays
                a role.</p>
              <p>Therefore, we analyzed the C end of potential phosphorylation sites of CIA5 using NetPhos
                3.1<sup>[3]</sup> . Those with high scores were
                highly likely. Among the 54 amino acids in the C-terminal region of CIA5, there were three potential
                phosphorylation sites, 649T, 667S and 696S, and the highest scoring phosphorylase were cdc2, PKA and CKⅡ,
                respectively. The highest rating of the three was 667S. This provides ideas for our subsequent
                experimental operations in the <a style="font-weight:border">Build</a> stage.</p>

              <div class="gallery rounded mx-auto d-block" style="width: 70%; height: auto;text-align:center"> <a><img
                    src="https://static.igem.wiki/teams/4772/wiki/website-material/final-engineering/design-cia5-phos.png" />
                  Figure 2.7 Prediction of the phosphorylation site at the C-terminus of the CIA5 protein </a></div>
            </section>

            <p></p>
          </section>




          <section id="build">
            <h2 class="main-title">Build</h2>
            <div class="gallery rounded d-block" style="width: 20%;margin-left:0"><a><img
                  src="https://static.igem.wiki/teams/4772/wiki/website-material/final-engineering/dbtl-1.png" /> </a>
            </div>

            <section id="dnas">
              <h3 class="main-title" style="font-size:4vh">DNA Synthesis</h3>
              <p>During Build stage, the designs are implemented through specific experiments to construct the required
                biological systems. Based on the targets identified in the Design stage, we constructed several basic
                parts. </p>
              <h4 class="small-title">Module 1-starch pathway</h4>
              <p>For regulation module 1.1, we built part BBa_K4772000:<a
                  href="http://parts.igem.org/Part:BBa_K4772000">glgC-G336D</a> . Its gene sequence was derived from a
                more efficient modified AGPase (referred as glgC-G336D) from <a style=" font-style:italic ">Escherichia
                  coli</a>, which was optimized using preferred codons for <a style=" font-style:italic ">Chlamydomonas
                  reinhardtii</a>. Additionally, to ensure standardization of our basic part, we avoided using restricted
                restriction enzyme recognition sites. We synthsized the BBa_K4772000: <a
                  href="http://parts.igem.org/Part:BBa_K4772000">glgC-G336D</a> DNA by company and
                performed PCR for amplification.</p>

              <div class="gallery rounded mx-auto d-block" style="width: 70%; height: auto;text-align:center"> <a><img
                    src="https://static.igem.wiki/teams/4772/wiki/website-material/final-engineering/glgc.png" /> </a>
              </div>

              <h4 class="small-title">Module 2-light absorption</h4>
              <p>For module 2, we built part BBa_K4772001: <a hrel="http://parts.igem.org/Part:BBa_K4772001">ChlF</a>. It
                encodes enzyme ChlF from cyanobacteria, which produces chlorophyll f (Chl f) by oxidizing chlorophyll a
                (Chl a). <a style=" font-style:italic ">Chlamydomonas reinhardtii</a> are organisms that convert visible
                photons into chemical energy via oxygenic photosynthesis. And it usually uses Chl a as photochemically
                active pigment. However, Chl f, as a red-shifted pigment, has been discovered recently<sup>[4]</sup>. It was found in terrestrial
                cyanobacteria and for evolution pressure, they have evolved a novel far-red light photoacclimation
                (FaRLiP) use far-red light (FR) for photosynthesis. So express ChlF in Chlamydomonas may help to extend
                their light harvesting and improve their photosynthetic light use efficiency. We obtained the
                BBa_K4772001: ChlF<a hrel="http://parts.igem.org/Part:BBa_K4772001">ChlF</a> DNA through commercial
                synthesis and performed PCR for amplification.</p>

              <div class="gallery rounded mx-auto d-block" style="width: 70%; height: auto;text-align:center"> <a><img
                    src="https://static.igem.wiki/teams/4772/wiki/website-material/final-engineering/chlf.png" /> </a>
              </div>
              <h4 class="small-title">Module 3-CCM</h4>
              <p>For module 2, we built part BBa_K4772002:<a hrel="http://parts.igem.org/Part:BBa_K4772002">CIA5</a> . It
                encodes an artificial CIA5 mutant with a C-terminal truncation into the wild type <a
                  style="font-style:italic">Chlamydomonas reinhardtii</a> to allow it to function as a activated
                transcription factor under any CO2 concentration. Since CIA5 gene segment is relatively long, our funding
                did not support its commercial synthesis. Also, because of the high GC content of <a
                  style="font-style:italic">Chlamydomonas reinhardtii</a>, we could not directly amplify CIA5 from its
                genome. Therefore, we divided CIA5 gene into three segments and amplified them separately, which were then
                spliced by <a style="font-weight:border">overlapping PCR</a>. Finally, We obtained the BBa_K4772002: <a
                  hrel="http://parts.igem.org/Part:BBa_K4772002">CIA5</a> DNA.</p>

              <div class="gallery rounded mx-auto d-block" style="width: 70%; height: auto;text-align:center"> <a><img
                    src="https://static.igem.wiki/teams/4772/wiki/website-material/final-engineering/cia5.png" /> </a>
              </div>
            </section>

            <section id="assembly">
              <h3 class="main-title" style="font-size:4vh">Part Assembly</h3>
              <p>To assemble the <a style="font-weight:border">BioBricks</a>，we constructed several plasmids to construct genetic circuits. The YFP tag made
                sure that the expression of basic parts can be verified by performing Western Blot. PsaD CTP is a
                chloroplast transport peptide that helps transport the parts into chloroplasts to function. And the HA tag
                made sure that the expression of parts can be verified by performing Western Blot.</p>
              <div class="gallery rounded mx-auto d-block" style="width: 70%; height: auto;text-align:center"> <a><img
                    src="https://static.igem.wiki/teams/4772/wiki/website-material/final-engineering/plasmid.png" /> All of
                  plasmid profiles in three modules. (Promoters, resistance elements, etc., not drawn)</a></div><br>


              <p>We used the <a style="font-weight:border">seamless assembly closing kit</a> from company CloneSmarter to
                assemble the synthesized parts onto the plasmid vector using <a style="font-weight:border">homologous
                  recombination</a>. By employing this method, we successfully constructed these plasmids and obtained
                accurate sequencing results.</p>

              <div class="gallery rounded mx-auto d-block" style="width: 70%; height: auto;text-align:center"> <a><img
                    src="https://static.igem.wiki/teams/4772/wiki/website-material/final-engineering/gene-assembly.png" />Figure
                  3.1 Gene assembly paradigm of Module1-3</a></div>
            </section>

            <section id="editing">
              <h3 class="main-title" style="font-size:4vh">Gene Editing</h3>
              <p>In the upcoming chassis modification, although genetic editing of Chlamydomonas has been proven
                challenging worldwide, we have successfully overcome this obstacle by utilizing a gene editing system
                developed by the collaborative laboratory of professor JUNMIN PAN. We employed <a
                  style="font-weight:border">CRISPR/Cas9</a>technology to knockout the AGP4, GWD1, GWD2, SBE2, and SBE3
                genes in both the 21gr and srt2 Chlamydomonas cell lines (considered wild-type). After obtaining
                individual gene knockout mutants, we further constructed double knockout mutants, achieving the presence
                of both mutations within the same algal strain. Besides, we introduced glgC-G336D、ChIF and CIA5 plasmids
                into Chlamydomonas using electroporation.</p>

              <div class="gallery rounded mx-auto d-block" style="width: 70%; height: auto;text-align:center"> <a><img
                    src="https://static.igem.wiki/teams/4772/wiki/website-material/final-engineering/crispr-cas9.png " />Figure
                  3.2 Paradigm of
                  CRISPR/Cas9<sup>[5]</sup></a>
              </div>
            </section>

            <section id="wcross">
              <h3 class="main-title" style="font-size:4vh">Cell Treatment</h3>
              <p>For lipid synthesis inhibition, we set a control group and an experimental group. The control group was
                supplemented with 0.1% methanol, while the experimental group was supplemented with 10 μM cerulenin in
                0.1% methanol. After 48 hours of nitrogen-depleted culture, we measured the starch content.</p>

            </section>

            <p></p>
          </section>




          <section id="optimization">
            <h2 class="main-title">Test</h2>
            <div class="gallery rounded d-block" style="width: 20%;margin-left:0"><a><img
                  src="https://static.igem.wiki/teams/4772/wiki/website-material/final-engineering/dbtl-2.png" /> </a>
            </div>

            <section id="s1">
              <h3 class="small-title">Module
                &nbsp;1&nbsp;Modificating Starch Metabolic Pathway</h3>
              <h4 class="small-title">1) Screening</h4>
              <p>Once the system is built, we experimentally validate the constructed chassis. We performed genotyping and
                successfully obtained five positive strains respectively for targeted genes. After further check, we
                confirm that they are knocked out mutant. Additionally, we also screened for a mutant with double knockout
                of SBE2 and SBE3, thereby achieving the presence of these two mutations in the same strain. </p><br>
              <div class="gallery grid" style="margin-left:9vw;text-align: center;width:60%">
                <a style="width:100%;"
                  href="https://static.igem.wiki/teams/4772/wiki/website-material/final-engineering/mutants-gwd12agp4.jpg"><img
                    src="https://static.igem.wiki/teams/4772/wiki/website-material/final-engineering/mutants-gwd12agp4.jpg" /></a>


                <div class="p"
                  style="text-align: left;color:#6bac74;font-weight: bolder;width:150%;justify-content:center;align-self: center;">
                  <a style="width:90%;"
                    href="https://static.igem.wiki/teams/4772/wiki/website-material/final-engineering/mutants-sbe23.jpg"><img
                      src="https://static.igem.wiki/teams/4772/wiki/website-material/final-engineering/mutants-sbe23.jpg" /></a>

                </div>
              </div>
              <p>Figure 3.3 Gene insertion and sequencing results of the five mutant strains</p>
              <p>In the sequencing results, the red, bolded sequences with asterisks represent the inserted stop codons.
                All five mutant strains successfully inserted stop codons, resulting in disrupted gene expression and
                successful gene knockout. Also, we got a SBE double mutant sbe2-3;sbe3-5 by carrying out gene knockout in
                obtained mutant.</p>
              <div class="gallery rounded mx-auto d-block" style="width: 70%; height: auto;text-align:center"> <a><img
                    src="https://static.igem.wiki/teams/4772/wiki/website-material/final-engineering/mutants-gel.jpg" />Figure
                  3.3 gel-shift conformation of corresponding mutants.<br>We conducted PCR and gel electrophoresis to
                  analyze the target sequence of mutant variants. The gel-shift conformational analysis, as shown in the
                  figure, indicates that the PCR products of the mutants are significantly larger than those of the wild
                  type. </a></div>
              <p>Besides, we conducted fluorescence detection using YFP tags and screened in the 24-well plates. We
                obtained two positive strains , each transferred one type of glgC-G336D plasmids(PsaD CTP-glgC
                G336D-mVenus and glgC G336D-YFP).</p><br>
              <div class="gallery grid" style="margin-left:9vw;text-align: center;width:60%">
                <a style="width:100%;"
                  href="https://static.igem.wiki/teams/4772/wiki/website-material/final-engineering/plate.jpg"><img
                    src="https://static.igem.wiki/teams/4772/wiki/website-material/final-engineering/plate.jpg" /></a>


                <div class="p"
                  style="text-align: left;color:#6bac74;font-weight: bolder;width:150%;justify-content:center;align-self: center;">
                  <a style="width:90%;"
                    href="https://static.igem.wiki/teams/4772/wiki/website-material/final-engineering/glgc-yfp.jpg"><img
                      src="https://static.igem.wiki/teams/4772/wiki/website-material/final-engineering/glgc-yfp.jpg" /></a>

                </div>
              </div>
              <p>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Figure
                3.4 Results of fluorescence intensity detection</p>
              <p>Excitation light wavelength: 488nm<br>
                Absorption light wavelength range: 500-520nm</p>
              <p>The two 24-well plates in the first row show 48 different cell clones introduced into the PsaD CTP-glgC
                G336D-mVenus vector, and the second row both show 48 different cell clones introduced into the glgC
                G336D-YFP vector. One positive cell line was obtained from each of the two vectors.</p>

              <h4 class="small-title">Analytical chemistry</h4>
              <p>To test the effectiveness of our strategy, we have developed a method for extracting and quantifying
                starch content in Chlamydomonas based on literature research and constant trial. This method allows us to
                measure the starch content in both the wild-type strain and the mutants, thereby validating whether there
                is an increase in starch content. Additionally, we have utilized a commercial assay kit to determine the
                proportion of linear starch in the mutants, specifically measuring the increase in linear starch content.
                Furthermore, we referred to literature and captured scanning electron microscope (SEM) images of starch
                granules to provide a visual representation of the proportion of linear starch within the cells.</p>
              <p>By employing these techniques, we aim to obtain quantitative data on starch content and assess the
                changes in linear starch proportions in the mutants compared to the wild-type strain.</p>

              <p><a style="font-weight:border">Total starch content</a></p>
              <p>1.Starch content standard curve<br>
                The standard curve was drawed using starch sample with a series of concentration gradients in the test
                kit(Starch Content Assay Kit (BOXBIO, China, AKSU015C)). The curve would be used in the concentration of
                starch produced by the sample we wanted to measure.</p>

              <div class="gallery rounded mx-auto d-block" style="width: 70%; height: auto;text-align:center"> <a><img
                    src="https://static.igem.wiki/teams/4772/wiki/website-material/final-wet-lab-starch/starch-biaoqv-0717.png" />
                </a></div>

              <p>The horizontal axis represents the concentration of the standard starch samples and the vertical axis
                represents their absorbance at △620nm. The data were analyzed by linear regression. The linear regression
                formula is △620 = 6.614 Concentration. R2 = 0.9994. </p>

              <P>2.Total starch content of cells cultivated by lipid synthesis inhibitor<br>
                According to the previous research using cerulenin in Chlamydomonas<sup>[6]</sup>, we
                designed a control group and an experimental group. The control group was supplemented with 0.1% methanol,
                while the experimental group was supplemented with 10 μM cerulenin in 0.1% methanol. After 48 hours of
                nitrogen-depleted culture, we measured the starch content.</p>
              <div class="gallery grid" style="margin-left:9vw;text-align: center;width:60%">
                <a style="width:100%;"
                  href="https://static.igem.wiki/teams/4772/wiki/website-material/final-wet-lab-starch/no-oil.png"><img
                    src="https://static.igem.wiki/teams/4772/wiki/website-material/final-wet-lab-starch/no-oil.png" /></a>


                <div class="p"
                  style="text-align: left;color:#6bac74;font-weight: bolder;width:150%;justify-content:center;align-self: center;">
                  <a style="width:90%;"
                    href="https://static.igem.wiki/teams/4772/wiki/website-material/final-wet-lab-starch/no-oil-photo.png"><img
                      src="https://static.igem.wiki/teams/4772/wiki/website-material/final-wet-lab-starch/no-oil-photo.png" /></a>

                </div>
              </div>
              <p>Figure 3.5 Qualitative and quantitive starch content of control and cerulenin treatment group<br>It can
                be seen from the figure that the starch content of cerulenin treatment group was significantly higher than
                the control group, about 2 times that of wild type.</p>


              <p>3.Total starch content of six mutants<br>
                According to previous research<sup>[7]</sup>, we measured the starch content of mutants
                after 5 days of nitrogen-depleted culture. 5×10^7 cells of wild type and each six mutants were collected
                for measurement.</p>
            <div class="gallery grid" style="margin-left:9vw;text-align: center;width:60%">
              <a style="width:100%;"
                href="https://static.igem.wiki/teams/4772/wiki/website-material/final-wet-lab-starch/all-mutants-native-starch.png"><img
                  src="https://static.igem.wiki/teams/4772/wiki/website-material/final-wet-lab-starch/all-mutants-native-starch.png" /></a>


              <div class="p"
                style="text-align: left;color:#6bac74;font-weight: bolder;width:150%;justify-content:center;align-self: center;">
                <a style="width:90%;"
                  href="https://static.igem.wiki/teams/4772/wiki/website-material/final-wet-lab-starch/all-native-starch-20231012.png"><img
                    src="https://static.igem.wiki/teams/4772/wiki/website-material/final-wet-lab-starch/all-native-starch-20231012.png" /></a>

              </div>
            </div>
            <p>Figure 3.6 Qualitative and quantitive starch content of wild type and all mutants</p>
            <br>
            <p>It can be seen from the figure that the starch content of mutant <a
                style=" font-style:italic ">gwd1-1</a> and <a style=" font-style:italic ">gwd2-1</a> were higher than
              wild type, but <a style=" font-style:italic ">gwd1-1</a> was significant while <a
                style=" font-style:italic ">gwd2-1</a> was not. The starch content of mutant <a
                style=" font-style:italic ">sbe2-3</a> and <a style=" font-style:italic ">sbe2-3</a>; <a
                style=" font-style:italic ">sbe3-5</a> were significantly higher than wild type, in which <a
                style=" font-style:italic ">sbe2-3</a> was 7.91 times that of wild type. But <a
                style=" font-style:italic ">sbe3-4</a> was lower than wild type(not significant). <a
                style=" font-style:italic ">agp4</a> was significantly lower than wild type.</p>

            <p><a style="font-weight:border">Amylose content and perception</a></p>
            <p>We use the Amylose Content Assay Kit ( Solarbio, China, BC4265) to measure amylose content. The starch
              sample for measurement were from the starch we extracted from cells before.</p>

            <p><a style="font-weight:border">1.Amylose content of mutant <a
                  style=" font-style:italic ">sbe2-3/sbe3-4/sbe2-3;sbe3-5</a></a></p>
            <div class="gallery grid" style="margin-left:9vw;text-align: center;width:60%">
              <a style="width:100%;"
                href="https://static.igem.wiki/teams/4772/wiki/website-material/final-wet-lab-starch/zhi-starch-dingxing.png"><img
                  src="https://static.igem.wiki/teams/4772/wiki/website-material/final-wet-lab-starch/zhi-starch-dingxing.png" /></a>


              <div class="p"
                style="text-align: left;color:#6bac74;font-weight: bolder;width:150%;justify-content:center;align-self: center;">
                <a style="width:90%;"
                  href="https://static.igem.wiki/teams/4772/wiki/website-material/final-wet-lab-starch/zhi-starch-hanliang-20231012.png"><img
                    src="https://static.igem.wiki/teams/4772/wiki/website-material/final-wet-lab-starch/zhi-starch-hanliang-20231012.png" /></a>

              </div>
            </div>
            <p>Figure 3.7 Qualitative and quantitive amylose content of wild type and SBE mutants</p>
            <p>It can be seen from the figure that the amylose content of 3 kinds of mutants were higher than wild type.
              <a style=" font-style:italic ">sbe2-3</a> and <a style=" font-style:italic ">sbe2-3</a>; <a
                style=" font-style:italic ">sbe3-5</a> were significantly while <a
                style=" font-style:italic ">sbe3-4</a> was not. <a style=" font-style:italic ">sbe2-3</a> was <a
                style="font-weight:border">8.82 times</a> that of wild type. </p>


            <p><a style="font-weight:border">2.Amylose perception of mutant <a
                  style=" font-style:italic ">sbe2-3/sbe3-4/sbe2-3;sbe3-5</a></a></p>

            <div class="gallery rounded mx-auto d-block" style="width: 70%; height: auto;text-align:center"> <a><img
                  src="https://static.igem.wiki/teams/4772/wiki/website-material/final-wet-lab-starch/zhi-starch-ratio-20231012.png" />Figure
                3.8 Percent of Amylose to total starch </a></div>

            <p>It can be seen from the figure that amylose perception of mutant <a
                style=" font-style:italic ">sbe3-4</a> and <a style=" font-style:italic ">sbe2-3;sbe3-5</a> were
              significantly higher than wild type, and <a style=" font-style:italic ">sbe2-3;sbe3-5</a> double mutant’s
              amylose perception was about <a style="font-weight:border">twice</a> that of wild type. <a
                style=" font-style:italic ">sbe2-3</a> was also higher but not significant. The result was consistent
              with the research paper<sup>[8]</sup>.</p>


            <p><a style="font-weight:border">Phenotypic characterization of starches produced by mutant</a></p>

            <div class="gallery rounded mx-auto d-block" style="width: 70%; height: auto;text-align:center"> <a><img
                  src="https://static.igem.wiki/teams/4772/wiki/website-material/final-wet-lab-starch/zhi-starch-photo.jpg" />
                Figure 3.9 Phenotypic characterization of starches produced by mutant <a
                  style=" font-style:italic ">sbe2-2;sbe3-3</a></a></div>
            <p>The figures were observed using SEM. It can be seen that in wild type cells, the surface of starch
              particles were round and smooth like that in the previous article<sup>[8]</sup>. But in mutant cells the
              particles were folded and angular, which showed that the phenotypic characterization changed
              significantly.</p>

            <h4 class="small-title">3) Cell characteristic</h4>
            <p>In order to assess whether the gene knockout affects the normal growth of Chlamydomonas, we conducted a
              three-day growth curve experiment with several obtained mutants, using the wild-type strain as a control.
              The growth curve was measured at 8-hour intervals using optical density (OD) readings as a classic method
              for characterizing cell density. OD values of the Chlamydomonas culture were measured at 16:00, 24:00, and
              8:00, respectively. The growth curves were plotted, and the differences were calculated.</p>
            <p>By comparing the growth curves and analyzing the differences in OD values, we can evaluate the impact of
              the gene knockout on the growth of Chlamydomonas and determine if there are any significant deviations
              from the wild-type control.</p>

            <div class="gallery rounded mx-auto d-block" style="width: 70%; height: auto;text-align:center"> <a><img
                  src=" https://static.igem.wiki/teams/4772/wiki/website-material/drylab2/14.png" />Figure 3.10 data for
                measuring the OD values of Chlamydomonas<br>It can be seen that the growth of the wild type and each
                mutant basically conforms to the s-shaped curve of the logistic equation. It can be seen that the growth
                rate of gwd1 mutant was significantly faster than that of the wild type, and the growth rate of sbe3 was
                significantly slower.</a></div>

          </section>

          <section id="s2">
            <h3 class="small-title">Module
              &nbsp;2&nbsp;Extend light harvesting of Chlamy</h3>
            <p><a style="font-weight:border">1) Screening</a><br>
              To screen for positive strains for ChIF, we conducted fluorescence detection using YFP tags and screened
              in the 24-well plates. We obtained one positive strain transferred the plasmid PsaD CTP-ChIF-mVenus.</p>

            <p><a style="font-weight:border">Analytical chmistry</a><br>
              By performing Fluorescence intensity detection and Western Blot, we can verify that ChlF was successfully
              expressed in our Chlamy.</p>

            <div class="gallery rounded mx-auto d-block" style="width: 70%; height: auto;text-align:center"> <a><img
                  src="https://static.igem.wiki/teams/4772/wiki/website-material/final-wet-lab-chif/figure-5.png" />Figure
                3.11 fluorescence intensity check on YFP</a></div>
            <p>(Excitation light wavelength: 488nm<br>
              Absorption light wavelength range: 500-520nm)</p>
            <p>The first and second lines are two repeats. Samples in the same columns but different lines come from one
              strains of algae. Scale of the heat map is shown on the right. NC: Chlamy that do not express YFP; PC:
              Chlamy that express YFP; ChlF-YFP: Chlamy that express ChlF-YFP plasmid. ChlF-YFP-1 and ChlF-YFP-2 are two
              different strains of Chlamy.</p>
            <div class="gallery rounded mx-auto d-block" style="width: 70%; height: auto;text-align:center"> <a><img
                  src="https://static.igem.wiki/teams/4772/wiki/website-material/final-wet-lab-chif/figure-6.png" />
                Figure 3.12 Western blot result on Chif-YFP fused protein<br> The lane of ChlF-YFP and YFP is indicated.
                Lane 1: ChlF-YFP-1; Lane 9: ChlF-YFP-2; Lane 2-8,10: Chlamy that failed to express ChlF-YFP plasmid. NC:
                Chlamy that do not express YFP; PC: Chlamy that express YFP;<br>* The smaller lane of PC might result
                from degradation of YFP or other unknown reasons.</a></div>
            <h3 class="main-title" style="font-size:4vh">Module 3- Broaden the application scenarios of CCM</h3>
            <h4 class="small-title">1) Screening</h4>


          </section>

          <section id="s3">
            <h3 class="small-title">Module
              &nbsp;3&nbsp; Broaden the application scenarios of CCM</h3>
            <div class="gallery rounded mx-auto d-block" style="width: 70%; height: auto;text-align:center"> <a><img
                  src="https://static.igem.wiki/teams/4772/wiki/website-material/final-engineering/test-cia5.png" />Figure
                3.13 western blot screening for CIA5ΔC protein expression</a></div>
            <p>Western blot method was applied to verify the expression of the CIA5ΔC plasmid. Results showed no HA tag
              expression was observed in all 96 lines examined, which means that screening for the target phenotype
              should continue. Lane 1-12: Chlamy that fail to expression CIA5ΔC; PC: positive control; 1st Ab: Rat
              anti-HA; 2nd Ab: Goat anti-rat.</p>
            <p>Actually, before we constructed the CIA5-C-del plasmid, we had tried to knock out the CIA5 gene at 4
              different target site as well as reproduce the C-terminus truncation mutant by CRISPR method, aiming at
              confirming its CO2 responding function and transcription factor activity. A total of 1,008 algae strains
              after CRISPR operating had been tested by genotyping, with no positive result showing a successful editing
              on CIA5 gene. This suggests that: 1) CIA5 is strongly required for Chlamydomonas life activities and CIA5
              knockout may lead to cell death; 2) The chromatin status of CIA5 is not suitable for CIRSPR system for
              gene editing. </p>
            <p>Either way, we have provided a good topic for future iGEM teams to pursue Chlamydomonas related research.
            </p>





          </section>
        </section>





        <section id="optimization">
          <h2 class="main-title">Learn</h2>
          <div class="gallery rounded mx-auto d-block" style="width:20%; height: auto;text-align:left"><img
              src="https://static.igem.wiki/teams/4772/wiki/website-material/final-engineering/dbtl-3.png" /></div>
          <div class="gallery grid" style="margin-left:10vw;margin-right:3vw;text-align: center;width:70%">
            <a style="width:65%;"
              href="https://static.igem.wiki/teams/4772/wiki/website-material/final-engineering/learningcycle.png"><img
                src="https://static.igem.wiki/teams/4772/wiki/website-material/final-engineering/learningcycle.png" />Figure
              3.14 Learning-cycle</a></div>

            <div class="p"
              style="text-align: left;color:#6bac74;font-weight: bolder;width:150%;justify-content:center;align-self: center;">
              <p>During <a style="font-weight:border">Learn</a> stage, an analysis is conducted on the data from <a
                  style="font-weight:border">Test</a> to acquire principles that facilitate the more effective
                advancement of the cycle towards desired objectives. These principles serve as guidance for improving
                the design in the subsequent cycle. To achieve our <a style="font-weight:border">proof-of-concept</a>,
                we have gone through multiple DBTL cycles that encompass various aspects of our project design. Through
                <a style="font-weight:border">Learn</a>, we progressively optimized the <a
                  style="font-weight:border">Design, Build</a> and <a style="font-weight:border">Test</a>
, improving
                performance of the selected biological system and enabling “Star-Chlamy” to better serve real-world
                demands.</p>
            </div>
            
            <section id="se1">
              <h3 class="small-title">For Design</h3>
              <p>Learn provides a perspective for our future Design.</p>
              <li>pathway analysis</li>
              <p>In our experimental results, the starch content of <a style=" font-style:italic ">sbe2</a> mutant was
                significantly higher than that of the wild type, while <a style=" font-style:italic ">sbe3</a> mutant
                had less starch. Interestingly, during the mid-term of our project, a paper newly published on 31st May
                2023 reported the knockout of SBE2 and SBE3 in <a style=" font-style:italic ">Chlamydomonas
                  reinhardtii</a>, but their results were not entirely consistent with ours. According to the paper, <a style="font-weight:border">sbe3 mutant showed a reduction in starch content</a>, while the <a style="font-weight:border">sbe2 mutant showed little change</a>. In light of this, we speculate that
                    the starch accumulation in our <a style=" font-style:italic ">sbe2 mutant</a>, which is a short cilium
                      strain with impaired motility, might be due to the movement defect. This observation has inspired
                      us to consider a possible association between <a style="font-weight:border">movement defects and
                        starch accumulation</a>. It provides us with a direction for future pathway analysis,
                      considering the incorporation of genes related to movement defects in our design.</p>
              <p>Furthermore, our attempts to culture Chlamydomonas with inhibitors of lipid synthesis have shown
                significant success. This inspires us to consider genetic manipulation of the lipid synthesis
                module(Regulation module 2) in the future.</p>

              <li>Wet lab design</li>
              <p>Because of time or other reasons, our results showed no HA tag expression was observed in all 96 lines
                examined, which means that screening for the target phenotype should continue.</p>
              <p>However, it also suggests to us that CIA5 might not be easy to express in Chlamydomonas. Therefore, we
                can learn from this and plan to explore other genetic elements, such as knocking out the downstream
                binding site of CIA5, to overcome this challenge.</p>
            </section>

            <section id="se2">
              <h3 class="small-title">For Build</h3>
              <li>part assembly</li>
              <p>Based on the results from previous rounds of CIA5, we have developed an interest in the binding site
                downstream of CIA5. We have constructed an LCR1 gene expression plasmid and inserted it into
                Chlamydomonas genome, and to screen for a line with constitutively high LCR1 gene expression (relative
                to wild type). We hope that this could further enhance CCM protein expression in Chlamydomonas on the
                basis of the CIA5-C-del strain to further enhance its CO2 assimilation capacity. Relevant experiments
                are still in progress.</p>

              <div class="gallery rounded mx-auto d-block" style="width: 70%; height: auto;text-align:center"> <a><img
                    src="https://static.igem.wiki/teams/4772/wiki/website-material/final-engineering/lcr1.png " /></a>
              </div>

              <li>gene editing</li>
              <p><a style="font-weight:border">Learn</a> not only help us gain insights for Design, but also provides
                guidance for <a style="font-weight:border">Build</a>. </p>
              <p>Initially, we intended to construct double mutants such as <a style=" font-style:italic ">gwd1;
                  sbe3</a> to synthesize starch that is both abundant and linear. However, to our surprise, we found
                that the starch content in the <a style=" font-style:italic ">sbe2</a> mutant significantly increased,
                even surpassing the levels observed in the <a style=" font-style:italic ">gwd1</a> mutant and <a
                  style=" font-style:italic ">gwd2</a> mutant. As a result, we decided not to construct double mutants
                like <a style=" font-style:italic ">gwd1; sbe3</a> and instead directly constructed the <a
                  style=" font-style:italic ">sbe2; sbe3</a> double mutant. This decision was based on what we learned
                through practical experimentation.</p>



            </section>

            <section id="se3">
              <h3 class="small-title">For Test</h3>
              <li>screening</li>
              <p><a style="font-weight:border">Learn</a> can also be beneficial for optimizing <a
                  style="font-weight:border">Test</a> and generating better screening methods. In the initial design
                round, we constructed glgC G336D-HA but did not obtain positive results for the HA tag through
                screening. Learning from this failure, we introduced YFP and utilized fluorescence-assisted screening,
                which improved the efficiency of our screening process. This approach indeed guided us in obtaining
                positive strains of glgC-G336D.</p>
              <p>Besides, to find a more efficient screening method, we constructed part BBa_K4772003: <a
                  href="http://parts.igem.org/Part:BBa_K4772003">SGT1</a> using the GCaMP fragment provided by He Yue
                from Professor Junmin Pan's Lab. Chlamydomonas mutants of SGT1 have cilia-related defects and thus
                agglomerate in TAP medium and unable to move. Based on this characteristic, we are able to use SGT1 as a
                screening marker to screen Chlamydomonas reinhardtii strains that successfully express foreign proteins,
                which provided us methods for further concept validation.</p>
            </section>

            <section id="ref">
              <p> 
                <a style="font-weight:border">Reference</a>:<br>
                [1]. https://s10.lite.msu.edu/res/msu/botonl/b_online/e19_1/metabol.htm<br>
                  [2]. Xiang, Y et al. The Cia5 gene controls formation of the carbon concentrating mechanism in Chlamydomonas reinhardtii. National Academy of Sciences of the United States of America vol. 98,9 (2001): 5341-6.<br>
                  [3]. NetPhos 3.1 - DTU Health Tech - Bioinformatic Services.<br>
                  [4]. Chen, M. et al. A red-shifted chlorophyll. Science 329, 1318–1320 (2010).<br>
                  [5]. https://sites.dartmouth.edu/dujs/2021/01/24/beginning-stages-of-crispr-detection-in-athletes/<br>
                  [6]. Luis Gonzaga Heredia-Martínez, Ascensión Andrés-Garrido, Enrique Martínez-Force, María Esther
                Pérez-Pérez, José L. Crespo, Chloroplast Damage Induced by the Inhibition of Fatty Acid Synthesis
                Triggers Autophagy in Chlamydomonas, Plant Physiology, Volume 178, Issue 3, November 2018, Pages
                1112–1129, https://doi.org/10.1104/pp.18.00630<br>
                [7]. Delrue, B., Fontaine, T., Routier, F., Decq, A.,
                Wieruszeski, J. M., Van Den Koornhuyse, N., Maddelein, M. L., Fournet, B., & Ball, S. (1992). Waxy
                Chlamydomonas reinhardtii: monocellular algal mutants defective in amylose biosynthesis and granule-bound
                starch synthase activity accumulate a structurally modified amylopectin. Journal of bacteriology, 174(11),
                3612–3620. https://doi.org/10.1128/jb.174.11.3612-3620.1992<br>
                [8]. Courseaux, Adeline et al. “BE3 is the major branching enzyme isoform required for amylopectin synthesis in Chlamydomonas reinhardtii.” Frontiers in plant science vol. 14 1201386. 31 May. 2023, doi:10.3389/fpls.2023.1201386<br>

                
                </p>
            </section>
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
      currentPage: "Engineering",
      options: {
        easing: [0.25, 0.1, 0.25, 1.0],
        force: true,
        cancelable: false,
        x: false,
        y: true
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
    scrollToProtocols: function () {
      this.$router.push({ path: "experiments" });
      setTimeout(() => {
        this.$scrollTo("#protocols", 350, this.options);
      }, 1000)
    },
    scrollToAncillary: function () {
      this.$router.push({ path: "results" });
      setTimeout(() => {
        this.$scrollTo("#ancillary", 350, this.options);
      }, 1000)
    },
    scrollToBsj: function () {
      this.$router.push({ path: "results" });
      setTimeout(() => {
        this.$scrollTo("#bsj2", 350, this.options);
      }, 1000)
    },
    scrollToBsj1: function () {
      this.$router.push({ path: "results" });
      setTimeout(() => {
        this.$scrollTo("#bsj1", 350, this.options);
      }, 1000)
    }
  }
}
</script>
