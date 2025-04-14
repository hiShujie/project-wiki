<template>
    <div>
        <Header :title="currentPage">
            <div class="bg"
                style="background: url('https://static.igem.wiki/teams/4772/wiki/website-material/plantaward/back.png') center center no-repeat; background-size: cover;">
                <h1 class="head-title">Best Plant Synthetic Biology</h1>
            </div>
        </Header>

        <section class="intro">
            <div class="container">
                <div class="row">
                    <div class="gallery rounded mx-auto d-block" style="width: 70%; height: auto;text-align:center">
                        <a href="https://static.igem.wiki/teams/4772/wiki/website-material/final-best-plant/head.png"><img
                                src="https://static.igem.wiki/teams/4772/wiki/website-material/final-best-plant/head.png" /></a>
                    </div>
                </div>
            </div>
        </section>

        <Scrollspy :currentPage="currentPage" initialSection="section1">
            <div class="row">
                <div class="col-lg-3">
                    <nav class="section-nav">
                        <div class="row">
                            <progress min="0" max="100" value="0"></progress>
                            <ol>
                                <li><a :href="`${currentPage}/#section1`" v-scroll-to="'#section1'">0 "Star-Chlamy"</a>
                                </li>
                                <li><a :href="`${currentPage}/#section2`" v-scroll-to="'#section2'">1 Our chassis
                                        Organism</a></li>

                                <li><a :href="`${currentPage}/#section3`" v-scroll-to="'#section3'">2 Engineering in
                                        Chlamy</a></li>
                                <ul>
                                    <li class="sub"><a :href="`${currentPage}/#section2-2`" v-scroll-to="'#section3-3'"
                                            parent="section3">2.1 Starch Synthesis</a></li>
                                    <li class="sub"><a :href="`${currentPage}/#section2-1`" v-scroll-to="'#section3-1'"
                                            parent="section3">2.2 ChlF</a></li>
                                    <li class="sub"><a :href="`${currentPage}/#section2-2`" v-scroll-to="'#section3-2'"
                                            parent="section3">2.3 CCM</a></li>

                                </ul>

                                <li><a :href="`${currentPage}/#section4`" v-scroll-to="'#section4'">3 Contributions to Plant
                                        Synthetic Biology</a></li>
                                <ul>
                                    <li class="sub"><a :href="`${currentPage}/#section2-1`" v-scroll-to="'#section4-1'"
                                            parent="section4">3.1 Our Favourite Part - SGT1</a></li>
                                    <li class="sub"><a :href="`${currentPage}/#section2-2`" v-scroll-to="'#section4-2'"
                                            parent="section4">3.2 More Possibilities - Other Parts</a></li>
                                </ul>
                                <li><a :href="`${currentPage}/#section7`" v-scroll-to="'#section7'">References</a>
                                </li>
                            </ol>
                        </div>

                    </nav>
                </div>

                <div class="col-lg-9 main-content" id="main-content">
                    <section id="section1">
                        <h2 class="main-title">"Star-Chlamy"</h2>
                        <p>Due to natural hazards such as desertification, salinization, and soil erosion, a large amount of
                            arable land loses its productivity every year around the world. However, although arable land is
                            constantly decreasing, the rate of global population growth is accelerating, and the demand for
                            food is constantly rising. Against this backdrop, the food crisis is spreading everywhere, and
                            it is urgent to solve the global arable land crisis.</p>
                        <a  href="https://2023.igem.wiki/tsinghua-tfl/">Go
                            to Homepage for More Detailed Background</a><br>
                        <div class="gallery grid" style="text-align:center;width:80%;">
                            <a
                                href="https://static.igem.wiki/teams/4772/wiki/website-material/plantaward/plant-figure-1-1-1-1.png"><img
                                    src="https://static.igem.wiki/teams/4772/wiki/website-material/plantaward/plant-figure-1-1-1-1.png" />
                                Figure 0.1.1 Schematic diagram of the cultivated land crisis.</a>

                        </div><br>
                        <p>In the picture above, we can see due to the continuous expansion of urbanization, a large amount
                            of arable land has been requisitioned or converted to other uses, resulting in a continuous
                            decrease in the area of arable land. In addition, due to the lack of environmental protection
                            awareness and over-exploitation, cultivated land in some areas has also been seriously polluted
                            and damaged, resulting in a decline in the quality of cultivated land and making it impossible
                            to continue farming.</p>


                        <p>Based on this, our Tsinghua-TFL team proposed the Star-Chlamy solution - using synthetic
                            biology methods to transform Chlamydomonas reinhardtii into a possible alternative source of
                            food in the future. <br><a style="font-weight: bolder;">The name "Star-Chlamy" has two
                                meanings:<br></a> for one thing, we aim to cultivate a super<a
                                style="font-weight: bolder;">star</a> in food production, for another, the production we
                            choose is starch (also broken as Starch-lamy). <br><br>Our goals are:</p>
                        <div>
                            <div class="gallery grid"
                                style="margin-left:10vw;margin-right:3vw;text-align: center;width:70%">
                                <a style="width:65%;"
                                    href="https://static.igem.wiki/teams/4772/wiki/website-material/plantaward/plant-figure-re.png"><img
                                        src="https://static.igem.wiki/teams/4772/wiki/website-material/plantaward/plant-figure-re.png" />Figure
                                    0.1.2 An overview of Our Project“Star-Chlamy”</a>

                                <div class="p"
                                    style="text-align: left;color:#6bac74;font-weight: bolder;width:150%;justify-content:center;align-self: center;">
                                    <li>To change the traditional agricultural paradigm by
                                        reducing the dependence of agricultural production on land resources</li>
                                    <li>To increase grain production by improving the efficiency of photosynthesis</li>
                                    <li>To improve nutritional value by changing the composition ratio of food.</li>
                                </div>
                            </div>
                        </div>
                    </section>








                    <section id="section2">
                        <h2 class="main-title">Our chassis Organism: Chalmydomonas Reinhardtii</h2>
                        <div>
                            <div class="gallery grid" style="margin-left:10vw;margin-right:3vw;text-align: center;">
                                <a style="width:55%;"
                                    href="https://static.igem.wiki/teams/4772/wiki/website-material/plantaward/plant-figure-3.png"><img
                                        src="https://static.igem.wiki/teams/4772/wiki/website-material/plantaward/plant-figure-3.png" />Figure
                                    1.1.1</a>
                                <div class="p" style="text-align: left;align-self: center;">Chlamydomonas reinhardtii, <a
                                        style="font-weight: bolder;">chlamy</a> in short, is a unicellular <a
                                        style="font-weight: bolder;">eukaryotic photosynthetic</a> algae and a
                                    well-established model organism with <a style="font-weight: bolder;">a clear genetic
                                        background</a>. <br>In our project, we aim to propose a potential solution to the
                                    <a style="font-weight: bolder;">eukaryotic photosynthetic</a> global land crisis by
                                    exploring a potential food source with this chassis. <br>Chlamydomonas
                                    reinhardtii has many
                                    advantages:<br>
                                    <div style="color:#6bac74;font-weight: bolder;">
                                        <li>Does not occupy arable land</li>
                                        <li>High photosynthetic efficiency</li>
                                        <li>High carbon sequestration efficiency based on CCM mechanism</li>
                                        <li>Growth cycle is shorter than higher plants </li>
                                    </div>

                                </div>
                            </div><br>
                            <p>Therefore, we chose Chlamydomonas reinhardtii as our chassis organism. We designed a series
                                of genetic operations based on the characteristics of the metabolism pathways in
                                Chlamydomonas reinhardtii to make it a more ideal food source, the modified strains called
                                Star-Chlamy.</p>
                        </div>
                    </section>




                    <section id="section3">
                        <h2 class="main-title">Engineering-A Superstar in Food Production</h2>

                        <section id="section3-3">
                            <h3 class="main-title">Modification of Starch Metabolic Pathway</h3>
                            <h4 class="small-title">Chlamy with High Output of Starch</h4>
                            <div class="gallery grid" style="margin-left:10vw;text-align: center;">
                                <a style="width:55%;"
                                    href="https://static.igem.wiki/teams/4772/wiki/website-material/plantaward/plant-figure-6.png"><img
                                        src="https://static.igem.wiki/teams/4772/wiki/website-material/plantaward/plant-figure-6.png" />Figure
                                    2.1.1 An overview of starch metabolic pathway design</a>

                                <div class="p" style="text-align: left;align-self: center;margin-right:4vw;width:100%;">

                                    By genetic manipulation, we have genetically edited several <a
                                        style="font-weight: bolder;">key enzyme genes in the starch metabolic pathway</a> of
                                    Chlamydomonas reinhardtii, thereby achieving an <a style="font-weight: bolder;">increase
                                        in starch production</a> in the algae:
                                    <div style="color:#6bac74;">
                                        <li> According to the principle of "broaden the source of income and economize on
                                            expenditure", we introduce <a style="font-weight: bolder;">a more efficient modified AGPase(G336D) encoded by glgC from Escherichia coli as the target point in the starch
                                            synthesis pathway.</li>
                                        <li>We knock out <a style="font-weight: bolder;">the key enzyme genes GWD1 and
                                                GWD2</a> in the starch decomposition pathway.</li>
                                        <li>Besides, We established <a style="font-weight: bolder;">a reliable method</a>
                                            for detecting starch content in Chlamydomonas reinhardtii.</li>
                                    </div>
                                </div>
                            </div><br>
                            <p>At the same time, the starch metabolism pathway and the lipid metabolism pathway have
                                significant crosstalk. Since starch synthesis and lipid synthesis compete with each other,
                                we cultured Chlamydomonas in the presence of cerulenin, a lipid inhibitor.</p>
                            <div class="gallery grid"
                                style="margin-left:10vw;margin-right:3vw;text-align: center;width:70%">
                                <a style="width:85%;"
                                    href="https://static.igem.wiki/teams/4772/wiki/website-material/plantaward/66666.png"><img
                                        src="https://static.igem.wiki/teams/4772/wiki/website-material/plantaward/66666.png" />Figure
                                    2.1.2 An overview of metabolic engineering design for starch metabolic pathways</a>
                            </div><br>


                         

                            <div class="gallery grid" style="margin-left:4vw;margin-right:3vw;text-align: center;width:70%">
                                <a style="width:65%;"
                                    href="https://static.igem.wiki/teams/4772/wiki/website-material/final-best-plant/48739e554728ea6468f445becaa06b8.png"><img
                                        src="https://static.igem.wiki/teams/4772/wiki/website-material/final-best-plant/48739e554728ea6468f445becaa06b8.png" /></a>


                                <div class="p"
                                    style="text-align: left;color:#6bac74;font-weight: bolder;width:150%;justify-content:center;align-self: center;">
                                    <a style="width:90%;"
                                        href="https://static.igem.wiki/teams/4772/wiki/website-material/final-best-plant/figure-6-3-2.png"><img
                                            src="https://static.igem.wiki/teams/4772/wiki/website-material/final-best-plant/figure-6-3-2.png" /></a>
                                    
                                </div>

                            </div><br><p>Figure 2.1.3 Qualitative and quantitive starch content of control and cerulenin treatment
                                        group</p>
                            <p>It can be seen from the figure that the starch content of cerulenin treatment group was
                                significantly higher than the control group, which meant that the inhibition of oil
                                synthesis pathway is effective to improve starch yield in the future.
                            </p>






                            <br>
                            <h4 class="small-title">2-Chlamy with High Ratio of Amylose</h4>
                            <p>When we initially embarked on our project focused on starch synthesis, we conducted an
                                interview with a member [ The speaker requested anonymity.] of the China Starch Industry
                                Association [ a national, cross-regional, and cross-sector industry organization, also a
                                non-profit social organization]. He emphasized the importance of not only producing a
                                product with social value but also enhancing its economic viability. In light of this
                                valuable guidance, we made the decision to optimize the amylose and amylopectin ratio, which
                                holds greater commercial potential.<br><br>Actually, with the continuous emergence of cheap
                                fast food, people's diet is becoming more and more unhealthy all over the world. And the
                                incidence rate of obesity, hyperglycemia and other diseases is rising. Due to difficult
                                digestion of amylose, it can avoid the rapid rise of blood sugar and reduce the absorption
                                of energy, without significantly changing the taste of food. Thus, amylose is more friendly
                                to people's blood sugar and blood lipids, and therefore has higher nutritional value and
                                greater commercial potential.</p>

                            <div class="gallery grid" style="text-align:center;width:150%;margin-left:18vw">
                                <a style="width:30%;"
                                    href=" https://static.igem.wiki/teams/4772/wiki/website-material/plantaward/plant-figure-78.png"><img
                                        src=" https://static.igem.wiki/teams/4772/wiki/website-material/plantaward/plant-figure-78.png" />Figure
                                    2.1.4 The prevalence of fast food with unbalanced nutrition has posed an increasingly
                                    serious challenge to people's health</a>
                            </div>
                            <br>
                            <p>In order to make our Star-Chlamy a <a style="font-weight: bolder;">healthier food source</a>,
                                we regulated the metabolic pathway of starch by <a style="font-weight: bolder;">knocking out
                                    the key enzyme genes SBE2 and SBE3</a> that are <a
                                    style="font-weight: bolder;">responsible for the conversion of amylose to
                                    amylopectin</a>, thereby <a style="font-weight: bolder;">increasing the proportion of
                                    amylose in starch</a> and thus improving the nutritional value of Star-Chlamy strains.
                            </p>
                            <div class="gallery grid" style="text-align:center;width:150%;margin-left:18vw">
                                <a style="width:30%;"
                                    href=" https://static.igem.wiki/teams/4772/wiki/website-material/plantaward/plant-figure-87-new.png"><img
                                        src=" https://static.igem.wiki/teams/4772/wiki/website-material/plantaward/plant-figure-87-new.png" />Figure
                                    2.1.5 Knockout of <a style="font-style:italic">SBE</a> results in efficient accumulation
                                    of amylose in Chlamy.</a>
                            </div><br>




                            <p>We have performed different kinds of experiments to verify the increase of amylose content
                                and proportion in our mutants:</p>
                                <div class="gallery grid" style="margin-left:4vw;margin-right:3vw;text-align: center;width:90%">
                                <a style="width:107%;"
                                    href="https://static.igem.wiki/teams/4772/wiki/website-material/final-best-plant/figure8-1-666.png"><img
                                        src="https://static.igem.wiki/teams/4772/wiki/website-material/final-best-plant/figure8-1-666.png" /></a>


                                <div class="p"
                                    style="text-align: left;color:#6bac74;font-weight: bolder;width:100%;justify-content:center;align-self: center;">
                                    <a style="width:60%;"
                                        href="https://static.igem.wiki/teams/4772/wiki/website-material/final-best-plant/figure-8-1.png"><img
                                            src="https://static.igem.wiki/teams/4772/wiki/website-material/final-best-plant/figure-8-1.png" /></a>
                                    <br>
                                </div>

                            </div><br><p style="align-self:center">Figure
                                        2.1.6 Qualitative and quantitive starch content of control and cerulenin treatment
                                        group</p>
<br><p>It can be seen from the figure above that the amylose content of 3 kinds of mutants were higher than wild type:</p>
<div class="gallery rounded mx-auto d-block" style="width: 70%; height: auto;text-align:center">
<a ><img src="https://static.igem.wiki/teams/4772/wiki/website-material/final-best-plant/figure8-3.png"/>Figure 2.1.7  Percent of Amylose to total starch</a></div><br>




<p>It can be seen from the figure above that amylose perception of all mutant were higher than wild type:</p><div class="gallery rounded mx-auto d-block" style="width: 70%; height: auto;text-align:center">
<a ><img src="https://static.igem.wiki/teams/4772/wiki/website-material/final-best-plant/figure8-4.jpg"/>Figure 2.1.8   Phenotypic characterization of starches produced by mutant sbe2-2;sbe3-3</a></div><br>
<p>In wild type cells, the surface of starch particle was round and smooth like that in the previous article[ Deletion of BSG1 in Chlamydomonas reinhardtii leads to abnormal starch granule size and morphology
]. But in mutant cells the particle was folded and angular, which may show that the perception of amylose produced by the mutants we got increased significantly.</p><br>  
<div class="gallery grid" style="margin-left:4vw;margin-right:3vw;text-align: center;width:90%">
                                <a style="width:100%;"
                                    href="https://static.igem.wiki/teams/4772/wiki/website-material/final-best-plant/figure-8-2.png"><img
                                        src="https://static.igem.wiki/teams/4772/wiki/website-material/final-best-plant/figure-8-2.png" /></a>


                                <div class="p"
                                    style="text-align: left;color:#6bac74;font-weight: bolder;width:150%;justify-content:center;align-self: center;">
                                    <a style="width:90%;"
                                        href="https://static.igem.wiki/teams/4772/wiki/website-material/final-best-plant/figure8-2.png"><img
                                            src="https://static.igem.wiki/teams/4772/wiki/website-material/final-best-plant/figure8-2.png" /></a>
                                    
                                </div>
<br>
                            </div><br>
                            <p style="align-self:center">Figure 2.1.9  Phenotypic characterization of starches produced by mutant sbe2-2;sbe3-3</p><br>
<p>It can be seen from the figure above that the starch content of mutant gwd1-1 and gwd2-1 were higher than wild type, but gwd1-1 was significant while gwd2-1 was not. sbe2-3 and sbe2-3;sbe3-5 were significantly higher than wild type. Sbe3-4 was lower than wild type but not significant. Agp4 was significantly lower than wild type.</p>

                        </section>
                        <h4 class="small-title">Transition of Our Ideas</h4>
                        <p>At the same time, in order to adapt our Star-Chlamy to industrialization and improve the
                            efficiency of industrial transformation, we targeted the engineering cell's photosynthesis
                            (light reaction and carbon fixation reaction) for regulation, further improving the efficiency
                            of Chlamydomonas photosynthesis.</p>
                        <section id="section3-1">
                            <h3 class="main-title">ChlF: Extended light harvesting of Chlamy</h3>

                            <p>Terrestrial cyanobacteria lives in an environment under near-infrared light(720nm) because of
                                shading by plants or because of their associations with soil crusts, benthic mat
                                communities, or dense cyanobacterial blooms. For evolution pressure, these cyanobacteria
                                have evolved <a style="font-weight:border">a novel far-red light photoacclimation
                                    (FaRLiP)</a> that enable them to use far-red light (FRL) for photosynthesis.
                                <br>Chlamydomonas only uses
                                <a style="font-weight: bolder;">near-red light but not far red light </a> for
                                photosynthesis.
                                </li><br>Therefore, the <a style="font-weight: bolder;">near-red light attenuation</a> in
                                the depth of runway ponds, similar to the living environment of <a
                                    style="font-weight: bolder;">terrestrial
                                    cyanobacteria</a>,
                                becomes a serious problem for Chlamy, which leads to decrease of the
                                photosynthetic efficiency.<br> In order to solve this problem, we adopted the means of
                                synthetic
                                biology by expressing ChlF, <a style="font-weight: bolder;">the chlorophyll F synthetic
                                    enzyme from cyanobacteria</a> to introduce FaRLiP-absorbing chlorophyll into
                                Chlamydomonas, trying to check <a style="font-weight: bolder;">whether the
                                    far-red-light-absorbing chlorophyll will extend the light harvesting spectrum of Chalmy
                                    into far red area (700 to 800 nm) </a>and
                                improve their photosynthetic efficiency.
                            </p>

                            <div class="gallery grid" style="text-align:center;width:150%">
                                <a style="width:60%;"
                                    href=" https://static.igem.wiki/teams/4772/wiki/website-material/plantaward/plant-figure-4.png"><img
                                        src=" https://static.igem.wiki/teams/4772/wiki/website-material/plantaward/plant-figure-4.png" />Figure
                                    2.1.1 Introduce of FaRLiP in Chlamy by expressing ChlF.<br>
                                    RLiP: Red light photoacclimation; FaRLiP:Far-red light photoacclimation</a>
                            </div>
                        </section>





                        <section id="section3-2">
                            <h3 class="main-title"> Broaden Application Scenarios of CCM</h3>
                            <p>The photosynthetic process of Chlamydomonas reinhardtii in aquatic ecosystems must overcome
                                the <a style="font-weight: bolder;">low availability of carbon dioxide</a> due to slow
                                diffusion of carbon dioxide in water. <br><br>The enzyme <a
                                    style="font-weight: bolder;">RuBisCO</a>, which fixes carbon dioxide, has <a
                                    style="font-weight: bolder;">low affinity</a> for it, and therefore the photosynthetic
                                efficiency of algae is <a style="font-weight: bolder;"> highly dependent on the CCM (Carbon
                                    dioxide-Concentrating Mechanism)</a>.<br> <br>The algal CCM involves sequential actions
                                of
                                <a style="font-weight: bolder;">inorganic carbon (Ci) transporter proteins</a> and <a
                                    style="font-weight: bolder;">carbonic anhydrase enzymes</a> located in different cell
                                regions, which results in active accumulation of carbon dioxide at the RuBisCO level. <br>
                                Carbon dioxide concentration is one of the main <a
                                    style="font-weight: bolder;">environmental factors</a> that affect the response of the
                                CCM mechanism, which regulates its response by affecting the expression of proteins related
                                to the CCM mechanism. Specifically, <a style="font-weight: bolder;">high concentration</a>
                                of this gas <a style="font-weight: bolder;">inhibits</a> the expression of CCM genes, while
                                <a style="font-weight: bolder;">low concentration</a> of it <a
                                    style="font-weight: bolder;">promotes</a> the expression of CCM-related genes.
                                Therefore, in actual industrial production, the CCM mechanism <a
                                    style="font-weight: bolder;">does not continuously function</a> due to the high
                                concentration of carbon dioxide provided.<br>
                                In practical industrial production, we often try to increase the concentration of carbon
                                dioxide artificially (this can be done at low cost by using carbon dioxide waste gas from
                                other factories) to increase production. So we need to modify the regulatory mechanism of
                                CCM pathway in Chlamydomonas reinhardtii to contact inhibition under high concentrations of
                                carbon dioxide<a class="link-ref" v-scroll-to="'#refs'">[1]</a>.

                            <div class="gallery grid" style="text-align:center;width:150%">
                                <a style="width:65%;"
                                    href=" https://static.igem.wiki/teams/4772/wiki/website-material/plantaward/plant-figure-5.png"><img
                                        src=" https://static.igem.wiki/teams/4772/wiki/website-material/plantaward/plant-figure-5.png" />Figure
                                    2.2.1 Schematic diagram of CCM pathway</a>
                            </div><br>
                            Our project selects <a style="font-weight: bolder;">the major transcription factor CIA5</a>
                            as the target, which undergoes phosphorylation modification at the <a
                                style="font-weight: bolder;">C-terminus</a> under high carbon dioxide concentrations,
                            thereby <a style="font-weight: bolder;">activating its transcriptional activity and up
                                regulating the expression</a> of over 90%
                            of CCM-related genes. By overexpressing CIA5 in Chlamydomonas reinhardtii, we allow the CCM
                            mechanism to <a style="font-weight: bolder;">continuously respond to even high concentration
                                carbon
                                dioxide </a>, thereby greatly increasing carbon fixation efficiency.</p>

                        </section>



                    </section>







                    <section id="section4">
                        <h3 class="main-title">Contributions to Plant Synthetic Biology</h3>
                        <section id="section4-1">
                            <h4 class="main-title">3.1 Our Favourite Part - SGT1</h4>
                            <p>Unlike chassis such as E coli, which have high expression efficiency for exogenous proteins,
                                <a style="font-weight: bolder;">the low expression efficiency of exogenous proteins</a> and
                                the resulting <a style="font-weight: bolder;">low screening efficiency</a> for exogenous
                                protein expression have been a <a style="font-weight: bolder;">disadvantage</a> of using
                                Chlamydomonas reinhardtii as chassis. <br>Many iGEM teams that use Chlamydomonas reinhardtii
                                as chassis <a style="font-weight: bolder;">have been plagued by this issue</a>, and many of
                                their experimental designs have <a style="font-weight: bolder;">failed to proceed to
                                    subsequent verification</a> due to screening failure.<br>
                                To address this issue, we propose our solution: <a style="font-weight: bolder;">Our
                                    favourite basic part SGT1</a>. SGT1 provides a <a style="font-weight: bolder;">more
                                    efficient method for screening exogenous protein expression</a>, greatly reducing the
                                workload, and can largely help future iGEM teams that want to use Chlamydomonas reinhardtii
                                as chassis.
                            </p>
                            <div class="gallery grid" style="text-align:center">
                                <a
                                    href="https://static.igem.wiki/teams/4772/wiki/website-material/plantaward/plant-figure-99-new.png"><img
                                        src="https://static.igem.wiki/teams/4772/wiki/website-material/plantaward/plant-figure-99-new.png">Figure
                                    3.1.1 Design of our favourite part SGT1</a>
                            </div><br><br>
                            <p>In traditional methods for screening exogenous protein expression,<a
                                    style="font-weight: bolder;"> WB is commonly performed</a> after labeling the target
                                exogenous protein with a tag (such as YFP, HA) to confirm whether the exogenous protein is
                                expressed.<br> However, due to the <a style="font-weight: bolder;">low efficiency of
                                    expressing exogenous genes</a> in Chlamydomonas reinhardtii, this process often requires
                                a significant amount of effort and cost. <br>Therefore, we urgently need <a
                                    style="font-weight: bolder;">a simpler method to screen for exogenous gene
                                    expression</a> in Chlamydomonas reinhardtii.<br><br>
                                To address the problem of <a style="font-weight: bolder;">screening for exogenous gene
                                    expression</a> in Chlamydomonas reinhardtii, we utilize sgt1 as a screening marker and
                                construct a plasmid for efficient screening of exogenous gene expression in Chlamydomonas
                                reinhardtii. <br><a style="font-weight: bolder;">SGT1/SUGT1, a co-chaperone of HSP90</a>, is
                                involved in multiple cellular activities including cullin E3 ubiquitin ligase
                                activity，multiple protein folding and complex formation process. What’s more, it is
                                hypothesized that this co-chaperone might play an auxiliary role in the synthesis of foreign
                                protein.<a style="font-weight: bolder;">Chlamydomonas mutants of sgt1 have cilia-related
                                    defects,
                                    thus they are agglomerated in TAP medium and unable to move. </a></p>
                            <div class="gallery grid" style="text-align:center;width:50%;margin-left:17vw">
                                <a
                                    href="https://static.igem.wiki/teams/4772/wiki/website-material/plantaward/plant-figure101.png"><img
                                        src="https://static.igem.wiki/teams/4772/wiki/website-material/plantaward/plant-figure101.png">Figure
                                    3.1.2 Chlamydomonas mutants of SGT1 are agglomerated in medium and unable to
                                    move<br>GOI: Gene of interest;</a>
                            </div><br>

                            <p>In our design, SGT1-mutated Chlamydomonas reinhardtii exhibits a non-motile phenotype. The
                                target foreign gene(GOI, gene of interest) and SGT1 share the same promoter and initiation
                                codon, ensuring that the expression levels of the target foreign protein(POI, protein of
                                interest) and SGT1 are equivalent. Finally, by performing microscopic examination of the
                                SGT1 motility phenotype complementation, we achieve efficient screening for foreign protein
                                expression in Chlamydomonas reinhardtii.
                            </p>
                            <div class="gallery grid" style="text-align:center;width:80%;margin-left:5vw">
                                <a
                                    href="https://static.igem.wiki/teams/4772/wiki/website-material/plantaward/plant-figure-111-new-png.png"><img
                                        src="https://static.igem.wiki/teams/4772/wiki/website-material/plantaward/plant-figure-111-new-png.png">Figure
                                    3.1.3 An overview of principle of foreign protein expression screening by SGT1
                                    marker<br>
                                    GOI: gene of interest; POI: protein of interest</a><br>
                                <p>All in all, our Basic Part SGT1 provides a more efficient method for screening foreign
                                    protein expression, greatly reducing the workload and greatly assisting iGEM teams that
                                    want to use Chlamydomonas reinhardtii as a chassis organism in the future. We hope that
                                    through our efforts, more teams will use Chlamydomonas reinhardtii as a chassis
                                    organism, and tap into its unlimited potential in iGEM, which was limited by the
                                    expression efficiency of foreign proteins in the past.</p>
                            </div><br><br><a 
                                href="https://2023.igem.wiki/parts">Click here to see more about "our favourite part
                                SGT1"</a>
                        </section>





                        <section id="section4-2">
                            <h4 class="main-title">3.2 More Possibilities - Other Parts</h4>
                            <p>To achieve the synthetic biological transformation of Chlamydomonas reinhardtii, we also
                                constructed <a style="font-weight: bolder;">multiple parts of Chlamydomonas reinhardtii
                                    photosynthesis</a>, including <a style="font-weight: bolder;">the light
                                    reaction, carbon fixation reaction, and downstream carbon flow distribution</a>. These
                                parts meet the standardized part requirements of the iGEM official website. Future iGEM
                                teams interested in Chalmydomonas Reinhardtii can further learn about and obtain guidance
                                for
                                using these parts in our <a href="https://2023.igem.wiki/parts">part pages</a>.</p>
                            
                        </section>
                    </section>





                <section id="section7">
                    <ul class="acc">
                        <li class="acc-item references">
                            <input id="s1" class="hide" type="checkbox">
                            <label for="s1" class="acc-label icon">References</label>
                            <div class="acc-child">
                                <p>[1].Burlacot, A., Dao, O., Auroy, P. et al. Alternative photosynthesis pathways drive
                                    the algal CO2-concentrating mechanism. Nature 605, 366–371 (2022).
                                    <a class="link-ref"
                                        href="https://www.nature.com/articles/s41586-022-04662-9">https://www.nature.com/articles/s41586-022-04662-9</a>
                                    <br>
                                    [2].Yohei Niikura, Katsumi Kitagawa. Functions of SGT1, a Co-chaperone. Heat Shock
                                    Protein 90 in Human Diseases and Disorders(2019).<a class="link-ref"
                                        href="https://link.springer.com/content/pdf/10.1007/978-3-030-23158-3.pdf?pdf=button">https://link.springer.com/content/pdf/10.1007/978-3-030-23158-3.pdf?pdf=button</a>
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
            currentPage: "Best Plant Synthetic Biology",
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
