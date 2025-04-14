<template>
  <div>
    <Header :title="currentPage">
      <div class="bg"
        style="background: url('https://static.igem.wiki/teams/4772/wiki/website-material/dry-lab1.png') center center no-repeat; background-size: cover;">
        <h1 class="head-title">Dry Lab</h1>
      </div>
    </Header>

    <Scrollspy :currentPage="currentPage" initialSection="design">
      <div class="row">
        <div class="col-lg-3">
          <nav class="section-nav">
            <div class="row">
              <progress min="0" max="100" value="0"></progress>
              <ol>
                <li><a :href="`${currentPage}/#design`" v-scroll-to="'#design'">Promoter Generation</a></li>
                <ul>
                  <li class="sub"><a :href="`${currentPage}/#optimization`" v-scroll-to="'#optimization'"
                      parent="design">Background</a></li>
                  <li class="sub"><a :href="`${currentPage}/#validation`" v-scroll-to="'#validation'"
                      parent="design">Methods</a></li>
                  <li class="sub"><a :href="`${currentPage}/#cross`" v-scroll-to="'#cross'" parent="design">Results</a>
                  </li>
                  <li class="sub"><a :href="`${currentPage}/#wcross`" v-scroll-to="'#wcross'"
                      parent="design">Conclusion</a></li>
                </ul>
               

                <li><a :href="`${currentPage}/#synthesis`" v-scroll-to="'#synthesis'">Modeling of Starch Metabolism</a></li>
                <ul>
                  <li class="sub"><a :href="`${currentPage}/#first`" v-scroll-to="'#first'"
                      parent="synthesis">Growth </a></li>
                  <li class="sub"><a :href="`${currentPage}/#second`" v-scroll-to="'#second'"
                      parent="synthesis">Starch Amount</a></li>
                  <li class="sub"><a :href="`${currentPage}/#third`" v-scroll-to="'#third'" parent="synthesis">Branching</a>
                  </li>
                  <li class="sub"><a :href="`${currentPage}/#fourth`" v-scroll-to="'#fourth'" parent="synthesis">Discussion</a>
                  </li>
                </ul>

 <li><a :href="`${currentPage}/#refs`" v-scroll-to="'#refs'">References</a></li>


              </ol>
            </div>
          </nav>
        </div>

        <div class="col-lg-9 main-content" id="main-content">
          <section id="design">
            <h2 class="main-title">Promoter Generation</h2>
            <section id="optimization">
              <h3 class="main-title">Background</h3>
              <p>A promoter is a region of DNA that initiates the transcription of a particular gene. It is located upstream(towards the 5’ end) of the gene and provides a binding site for RNA polymerase, the enzyme responsible for transcribing DNA into RNA. Promoters play a crucial role in gene expression as they regulate the rate at which genes are transcribed and control when and where gene expression occurs.</p>
              <p>Since <a style ="font-style:italic">Chlamydomonas reinhardtii</a> is not an easy chassis to deal with, optimizing promoters in <a style ="font-style:italic">Chlamydomonas reinhardtii</a> can have following purposes and benefits:</p>
                <ul class="bullets">
              <li>Enhancing gene expression: <br><br>by optimizing the promoter sequence, the rate of transcription initiation can be increased, leading to higher levels of protein production from the target gene. This is particularly important when trying to achieve high levels of expression for specific genes of interest.</li>
              <li>Fine-tuning gene expression:<br><br>Promoters can be optimized to allow precise conrtol over the timing, location, and level of gene expression. This is beneficial for applications where gene expression needs to be regulated or modulated, such as in metabolic engineering or synthetic biology.</li>
             
            </ul>
          </p>

            </section>

            <section id="validation">
              <h3 class="main-title">Methods</h3>
              <p>Actually, there are no accurate gene annotation of promoters in<a style ="font-style:italic"> Chlamydomonas reinhardtii</a>, so we refer to a method mentioned in the previous published article (Novel cis-regulatory elements as synthetic promoters to drive recombinant protein expression from the <a style ="font-style:italic"> Chlamydomonas reinhardtii</a> nuclear genome).</p>
<p>Firstly, the 500bp upstream sequence of each <a style ="font-style:italic"> Chlamydomonas reinhardtii</a> gene was extracted from the database and stored in excel file. Next, we try to train all the data with two generation models, GAN and VAE. Their overall structure can be seen in Figure 1.2.1 and Figure 1.2.2.</p>
 <div class="gallery rounded mx-auto d-block" style="width: 50%; height: auto;text-align:center">
          <a href="https://static.igem.wiki/teams/4772/wiki/website-material/dry-lab/a2.png"><img
                  src="https://static.igem.wiki/teams/4772/wiki/website-material/dry-lab/a2.png" /> Figure 1.2.1 GAN
                 </a>
                </div> 
                <div class="gallery rounded mx-auto d-block" style="width: 50%; height: auto;text-align:center">
          <a href="https://static.igem.wiki/teams/4772/wiki/website-material/dry-lab/a3.png"><img
                  src="https://static.igem.wiki/teams/4772/wiki/website-material/dry-lab/a3.png" style="margin-left:3vw"/> Figure 1.2.2 VAE
                 </a>
                </div><br>
                <p>Next, we would like to elaborate the principle of GAN specifically.
Now, we have a generator and a discriminator. To learn the generator pgo over data x, we define a prior on input noise variables pz(z)={z(1),...,z(m)}, then represent a mapping to data space as G(z;θ<sub>g</sub>), where G is a differentiable function represented by a multilayer perceptrion with parameters θg. We also define a second multilayer perceptron D(x;θ<sub>d</sub>) that outputs a single scalar. D(x) represents the probability that x came from the data rather than pg. And we update the discriminator by ascending its stochastic gradient:</p><div class="gallery rounded mx-auto d-block" style="width: 50%; height: auto;text-align:center">
          <a href="https://static.igem.wiki/teams/4772/wiki/website-material/dry-lab/a42.png"><img
                  src="https://static.igem.wiki/teams/4772/wiki/website-material/dry-lab/a42.png" /> 
                 </a>
                </div><br>
                <p>We train D to maximize the probability of assigning the correct label to both training examples and samples from G. We update the generator by ascending its stochastic gradient:<br></p>
                <div class="gallery rounded mx-auto d-block" style="width: 50%; height: auto;text-align:center">
          <a href="https://static.igem.wiki/teams/4772/wiki/website-material/dry-lab/a5.png"><img
                  src="https://static.igem.wiki/teams/4772/wiki/website-material/dry-lab/a5.png" /> 
                 </a>

                </div><br>

                <p>We simultaneously train G to minimize log(1-D(G(z))). In other words, D and G play the following two-player minimax game with value function V(G,D):<br></p>
                <div class="gallery rounded mx-auto d-block" style="width: 80%; height: auto;text-align:center">
          <a href="https://static.igem.wiki/teams/4772/wiki/website-material/drylab2/6a7.png"><img
                  src="https://static.igem.wiki/teams/4772/wiki/website-material/drylab2/6a7.png" /> 
                 </a>

                </div><br>

                <p>However, how to make discriminator and generator fit each other is exactly a thorny problem. Based on experiments, for G fixed, the optimal discriminator D is<br></p>
                <div class="gallery rounded mx-auto d-block" style="width: 50%; height: auto;text-align:center">
          <a href="https://static.igem.wiki/teams/4772/wiki/website-material/dry-lab/a8.png"><img
                  src="https://static.igem.wiki/teams/4772/wiki/website-material/dry-lab/a8.png" /> 
                 </a>

                </div><br>

                <p>Besides, if G and D have enough capacity, and at each step of Algorithm, the discriminator is allowed to reach its optimum given G, and pg is updated so as to improve the criterion<br></p>
                <div class="gallery rounded mx-auto d-block" style="width: 80%; height: auto;text-align:center">
          <a href="https://static.igem.wiki/teams/4772/wiki/website-material/dry-lab/a9.png"><img
                  src="https://static.igem.wiki/teams/4772/wiki/website-material/dry-lab/a9.png" /> 
                  </a>
                </div><br><p>Then p<sub>g</sub> converges to p<sub>data</sub>.</p>

            </section>

            <section id="cross">
              <h3 class="main-title">Results</h3>
              <p>Despite the gene sequences we extracted are not well correlated and the Pearson correlation coefficient is only 0.21. We firstly trained our adversarial nets on the extracted datasets with the setting of epochs = 1000, learning rate=1e-3. Results are shown in Figure 1.3.1.<br></p>
                <div class="gallery rounded mx-auto d-block" style="width: 50%; height: auto;text-align:center">
          <a href="https://static.igem.wiki/teams/4772/wiki/website-material/drylab2/6a10.png"><img
                  src="https://static.igem.wiki/teams/4772/wiki/website-material/drylab2/6a10.png" />Figure 1.3.1 
          </a></div><br>

          <p>It is obviously seen that in the early stage of training, the ability of the generator is relatively weak, and the discriminator is also weak at this time, but it can still distinguish the generated samples from the real samples with sufficient accuracy, so that D(x) performs really well and G(x)’s accuracy is within acceptable limits too. However, as we continue training, the discriminator gets too successful that the generator gradient vanishes and learns nothing, the generator collapses! Actually, in many applications, GAN is hard to tune parameters due to the unavoidable unbalance between the generator and discriminator causing overfitting and their highly sensitivity to the hyperparameter selections. Therefore, we adjust model’s parameters and reduce the training epoch to 20. The loss of our model can be seen in the Figure 1.3.2.<br></p>
                <div class="gallery rounded mx-auto d-block" style="width: 50%; height: auto;text-align:center">
          <a href="https://static.igem.wiki/teams/4772/wiki/website-material/drylab2/6a1.png"><img
                  src="https://static.igem.wiki/teams/4772/wiki/website-material/drylab2/6a1.png" />Figure 1.3.2 
          </a></div><br>
            </section>
            <section id="wcross">
              <h3 class="main-title">Conclusion</h3><p>Generally, here we introduce two generative model, VAE and GAN to optimize promoter design. As there is no accurate gene annotation in <a style ="font-style:italic">Chlamydomonas reinhardtii</a> , we adopt a new method to cut the promoter sequence out, then run the VAE and GAN to generate new sequences, which achieve a desirable performance.</p><a href="https://static.igem.wiki/teams/4772/wiki/website-material/dry-lab/promoter-generation.js" style="color:#6bac74">Source Code</a>
            </section>
          </section>






          <section id="synthesis">
            <h2 class="main-title">Modeling of Starch Metabolism</h2>
            <h3 class="main-title">Necessity</h3>
            <p>In the part of starch metabolism modification, wet experiments knocked out enzymes such as SBE, AGPase, and GWD. But the results of the wet experiment were qualitative, we recognize the need to <a style="font-weight:border">predict outcomes under conditions that cannot be controlled</a> through wet experiments. For example, how the growth rate of the mutant Chlamydomonas varies, how the activity of different enzymes affects the amount of starch accumulated, and how enzymes in the starch branching process affect starch branching. To address this, we intend to employ modeling techniques to anticipate results and optimize our approach.
            </p>
            <div class="gallery rounded mx-auto d-block" style="width: 50%; height: auto;text-align:center">
          <a href="https://static.igem.wiki/teams/4772/wiki/website-material/drylab2/1222.png"><img
                  src="https://static.igem.wiki/teams/4772/wiki/website-material/drylab2/1222.png" />Figure 2.1.1 Starch metabolism in <a style="font-style:italic">Chlamydomonas reinhardtii</a>
          </a></div><br>


        <section id="first">
              <h3 class="main-title">Growth of Mutants of Relevant Genes</h3>
              <h4 class="small-title">Methods</h4>
              <p>With limited resources, the growth and reproduction curves of organisms generally conform to the logistic growth equation, a differential equation, in the case of limited resources:<br></p>
              <div class="gallery rounded mx-auto d-block" style="width: 50%; height: auto;text-align:center;margin-left:2vw">
          <a href="https://static.igem.wiki/teams/4772/wiki/website-material/drylab2/2.png"><img
                  src="https://static.igem.wiki/teams/4772/wiki/website-material/drylab2/2.png" /></a></div><br>


                  <p>There N is the total number of individuals in the population, t is time, r is the population growth potential index, and K is the environmental maximum holding capacity. </p>
                  <p>The meaning of this equation is that when a species moves into a new ecosystem, its population will change. Assuming that the starting population of the species is less than the maximum holding capacity of the environment, the population will grow. This equation is one of the best mathematical models for describing the pattern of population growth under conditions of limited resources. <br></p>
              <div class="gallery rounded mx-auto d-block" style="width: 50%; height: auto;text-align:center">
          <a href="https://static.igem.wiki/teams/4772/wiki/website-material/drylab2/3.png"><img
                  src="https://static.igem.wiki/teams/4772/wiki/website-material/drylab2/3.png" /> Figure 2.1.2 Logistic growth curve<a class="link-ref" v-scroll-to="'#refs'">[2]</a></a></div><br>


                  <p>The laboratory conditions for culturing <a style ="font-style:italic"> Chlamydomonas reinhardtii</a> are theoretically consistent with the applicability of the logistic equation. The objective of gene editing is to enhance starch accumulation. Therefore, this part of the study assesses the growth and reproduction of mutant <a style ="font-style:italic"> Chlamydomonas reinhardtii</a>. Ideally, the goal is to obtain mutants with growth rates no lower than that of the wild type, facilitating increased starch production.<br><br>
Data collection in the laboratory involved the following methods:<br></p>
              <div>
                <li>Daily sampling of both the wild type (srt) and different mutants of Chlamydomonas cultures, followed by dilution and measurement of their OD (optical density) values.</li><br>
                <li>Samples were taken every eight hours for a total of ten times.</li></div><br>

          <p>These data, in conjunction with Matlab's lsqcurvefit function, were used to fit a nonlinear curve to the growth data and calculate the r-value of the logistic equation under these conditions.<br></p>
            <br>

            <h4 class="small-title">Results</h4>
            <p>The data for measuring the OD values of Chlamydomonas are shown below: <br></p>
              <div class="gallery rounded mx-auto d-block" style="width: 50%; height: auto;text-align:center">
          <a href="https://static.igem.wiki/teams/4772/wiki/website-material/drylab2/14.png"><img
                  src="https://static.igem.wiki/teams/4772/wiki/website-material/drylab2/14.png" /> Figure 2.1.3 Logistic growth curve<a class="link-ref" v-scroll-to="'#refs'">[2]</a></a></div><br>

                  <p>Due to the limitation of the maximum OD value that can be measured by the spectrophotometer, it can be seen that the growth of the wild type and each mutant basically conforms to the first half of the s-shaped curve of the logistic Steele's equation, and most of them have not yet reached the plateau period. We therefore fitted the lsqurvefit function in matlab to calculate the growth rates of the different mutants and predict the growth afterwards. The results are as follows:<br></p>
              <div class="gallery rounded mx-auto d-block" style="width: 50%; height: auto;text-align:center">
          <a href="https://static.igem.wiki/teams/4772/wiki/website-material/drylab2/15.png"><img
                  src="https://static.igem.wiki/teams/4772/wiki/website-material/drylab2/15.png" /> Figure 2.1.4 Logistic equation fitting results: Above the icon are the r-values for the different mutations.</a></div><br>

                  <p>After calculating the r values for the wild type as well as for the different mutants by fitting, the difference in growth rate between the mutants and the wild type was tested for significance by t-test, which can be calculated for the mutants respectively as below:<br></p>
              <div class="gallery rounded mx-auto d-block" style="width: 50%; height: auto;text-align:center">
          <a href="https://static.igem.wiki/teams/4772/wiki/website-material/drylab2/16.png"><img
                  src="https://static.igem.wiki/teams/4772/wiki/website-material/drylab2/16.png" /> </a></div><br>
                  
                  <p>When the degree of freedom is 5 and a is taken as 0.05, the table is checked to get the p-value of 2.571 for two-sided t-test, which shows that there is a significant difference in the growth rate of <a style ="font-style:italic"> sbe3</a> and <a style ="font-style:italic"> gwd1</a> mutants. <a style ="font-style:italic"> gwd1</a> mutant has a significantly faster growth rate than the wild type and has an increase in the starch yield, which is a very compliant mutant. <a style ="font-style:italic"> gwd2</a>, <a style ="font-style:italic"> agp4</a>, and <a style ="font-style:italic"> sbe2</a> mutants do not have any significant difference, which indicates that the growth rate is not slower than the wild type, also ideal mutant. <a style ="font-style:italic"> sbe3</a> growth rate was significantly slowed down, which may affect the starch yield.<br></p>
            </section>

            <section id="second">
              <h3 class="main-title">Modeling of Starch Amount in Mutants</h3>
              <h4 class="small-title">Methods</h4>
              <p>This model is based on the Michaelis-Menten equation for enzymatic reaction rate compliance.<br></p>
              <div class="gallery rounded mx-auto d-block" style="width: 50%; height: auto;text-align:center">
          <a href="https://static.igem.wiki/teams/4772/wiki/website-material/drylab2/4.png"><img
                  src="https://static.igem.wiki/teams/4772/wiki/website-material/drylab2/4.png" /> </a></div><p>
Here y is the product concentration, x is the substrate concentration, v_max is the maximum rate of the enzymatic reaction, which is determined by a combination of the enzyme concentration and enzyme activity, and k_m represents the affinity of the enzyme, and the greater the affinity of the enzyme for the substrate, the smaller the value of k_m.</p><br>

<p>In this simplified model, we narrow our focus to the two primary variables that drive changes in starch accumulation: GWD (Glucan-Water Dikinase) and AGPase (ADP-Glucose Pyrophosphorylase) activity. The model encompasses two central metabolic processes:<br>

<li>Starch Synthesis: AGPase plays a pivotal role by converting glucose monophosphate, a precursor of starch synthesis, into ADP-glucose.</li><br>

<li>Starch Catabolism: This process involves phosphorylated degradation catalyzed by GWDase (Glucan-Water Dikinase). 
To streamline the model, we simplify the representation of branching from glucose hexaphosphate to glucose monophosphate, starch branching, and other degradation pathways, as these processes are considered constant and do not significantly impact the overall starch accumulation outcome within the scope of this mode.</li><br>
Using the Michaelis-Menten equation, with values for the enzyme's key parameters k_m and v_maxx obtained from Brenda's website, the following equations can be listed to represent the catalytic rates of the two enzymes.<br></p>
              <div class="gallery rounded mx-auto d-block" style="width: 50%; height: auto;text-align:center">
          <a href="https://static.igem.wiki/teams/4772/wiki/website-material/drylab2/5.png"><img
                  src="https://static.igem.wiki/teams/4772/wiki/website-material/drylab2/5.png" /> </a></div><br>

                  <p>We establish the temporal changes in the concentrations of glucose ([G]) and starch ([S]) as two separate arrays, with GAPase and GWD acting independently. To simulate the ongoing production of three-carbon sugars through photosynthesis, we introduce the variable 'P' to represent the steady growth of glucose. This approach allows us to formulate two distinct sets of differential equations.<br></p>
              <div class="gallery rounded mx-auto d-block" style="width: 50%; height: auto;text-align:center">
          <a href="https://static.igem.wiki/teams/4772/wiki/website-material/drylab2/6.png"><img
                  src="https://static.igem.wiki/teams/4772/wiki/website-material/drylab2/6.png" /> </a></div><br>


                  <p>We employed the ode45 function in Matlab to solve the differential equations until the concentrations of starch and glucose reached a steady state. At that juncture, we recorded the cumulative amount of starch and created a corresponding plot.
<br></p>
<h4 class="small-title">Results</h4> <p>Starch accumulation was predicted according to the model as follows. The horizontal axis is the activity of GWD and AGPase, respectively, and the vertical axis is the amount of starch accumulation.<br></p>
              <div class="gallery rounded mx-auto d-block" style="width: 50%; height: auto;text-align:center">
          <a href="https://static.igem.wiki/teams/4772/wiki/website-material/drylab2/17.png"><img
                  src="https://static.igem.wiki/teams/4772/wiki/website-material/drylab2/17.png" />Figure 2.2.1 Effect of GWD and AGPase activity on starch yield
 </a></div><br>

                  <p>Observed from the gwd and agpase axes, respectively：<br></p>
              <div class="gallery rounded mx-auto d-block" style="width: 50%; height: auto;text-align:center">
          <a href="https://static.igem.wiki/teams/4772/wiki/website-material/drylab2/18.png"><img
                  src="https://static.igem.wiki/teams/4772/wiki/website-material/drylab2/18.png" /> </a></div><br>
                  <div class="gallery rounded mx-auto d-block" style="width: 50%; height: auto;text-align:center">
          <a href="https://static.igem.wiki/teams/4772/wiki/website-material/drylab2/19.png"><img
                  src="https://static.igem.wiki/teams/4772/wiki/website-material/drylab2/19.png" />Figure 2.2.2 & 2.2.3 Effect of GWD and AGPase activity on starch yield, respectively </a></div><br>

                  <p>From the resultant graphs, it can be seen that the lower the AGPase activity, the smaller the starch accumulation; the lower the GWD activity, the larger the starch accumulation. This matches with the qualitative results of starch detection in the wet experiment. At the same time, the effects of AGPase and GWD on the amount of starch accumulation were similar because the two enzymes had similar Km values and similar affinity for the substrate.<br></p>
              <div class="gallery rounded mx-auto d-block" style="width: 50%; height: auto;text-align:center">
          <a href="https://static.igem.wiki/teams/4772/wiki/website-material/drylab2/20.png"><img
                  src="https://static.igem.wiki/teams/4772/wiki/website-material/drylab2/20.png" />Figure 2.2.4 Starch production in different mutants </a></div><br>
            </section>

            <section id="third">
              <h3 class="main-title">Modeling of Starch Branching in Mutants</h3>
              <h4 class="small-title">Methods</h4>
              <p>The starch branching process consists of three primary stages. Initially, activated ADP-glucose is added to the ends of starch chains, a reaction catalyzed by starch synthase (SS). Subsequently, starch branching enzyme (SBE) intervenes by removing a portion of the starch chain under specific criteria, including the cut chain length and the remaining chain length, to create branches within the starch structure. Lastly, starch debranching enzyme (DBE) catalyzes a more intricate reaction, responsible for cutting the starch branches and removing them.
<br><br>
It's worth noting that the process governed by starch debranching enzymes is somewhat intricate. This is because starch branching in plants adheres to certain conditions: the length of the truncated branched chain must not be shorter than a defined value, Xmin, and the length of the starch chain remaining in the cut should not be shorter than X0. In homologous organisms, this value tends to remain relatively constant.</p>
              <div class="gallery rounded mx-auto d-block" style="width: 50%; height: auto;text-align:center">
          <a href="https://static.igem.wiki/teams/4772/wiki/website-material/drylab2/7.png"><img
                  src="https://static.igem.wiki/teams/4772/wiki/website-material/drylab2/7.png" />Figure 2.3.1 Starch branching process <a class="link-ref" v-scroll-to="'#refs'">[1]</a></a></div><br>

                  <p>From the literature, we learn about a model used to represent plant starch branching systems. In this model, starch branching is depicted through an infinite-dimensional vector, denoted as N(x). This vector represents the number of branched chains with straight-chain starch branching chain lengths of x. For instance, N(5) indicates the count of branched chains with a branch length of 5.<br><br>
The catalytic average rates of the other three enzymes are a_SS , a_DBE , and a_SBE, focusing on the effect of the three processes on N(x), respectively.<br><br>
SS can extend a starch chain of length x-1 by x or a starch chain of length x by x+1, so for length x the effect is:<br></p>
              <div class="gallery rounded mx-auto d-block" style="width: 50%; height: auto;text-align:center">
          <a href="https://static.igem.wiki/teams/4772/wiki/website-material/drylab2/8.png"><img
                  src="https://static.igem.wiki/teams/4772/wiki/website-material/drylab2/8.png" /> </a></div><br>

                  <p>DBE catalyzes the removal of starch branches, therefore a chain of length x the action is<br></p>
              <div class="gallery rounded mx-auto d-block" style="width: 50%; height: auto;text-align:center">
          <a href="https://static.igem.wiki/teams/4772/wiki/website-material/drylab2/9.png"><img
                  src="https://static.igem.wiki/teams/4772/wiki/website-material/drylab2/9.png" /> </a></div><br>

                  <p>The role of SBE is rather intricate. To represent this complexity, we introduce a step function H(x), where H(x) equals 1 when x is greater than 0 and 0 when x is less than 0.<br><br>
On one hand, when x exceeds X_min + X_0, SBE cuts the longer starch strands, thereby reducing the number of branches with a length of x.<br><br>
On the other hand, when SBE cuts chains of a length greater than X, all sites are cut with equal probability. This results in both the chains being cut down to form new branches and the chains left behind likely having a length of x. This process corresponds to the second and third terms in the following equation.<br></p>
              <div class="gallery rounded mx-auto d-block" style="width: 50%; height: auto;text-align:center">
          <a href="https://static.igem.wiki/teams/4772/wiki/website-material/drylab2/101.png"><img
                  src="https://static.igem.wiki/teams/4772/wiki/website-material/drylab2/101.png" /> </a></div><br>

                  <p>The rate of change in starch chain length is obtained by summing the three enzymes acting together, i.e.<br></p>
              <div class="gallery rounded mx-auto d-block" style="width: 50%; height: auto;text-align:center">
          <a href="https://static.igem.wiki/teams/4772/wiki/website-material/drylab2/11.png"><img
                  src="https://static.igem.wiki/teams/4772/wiki/website-material/drylab2/11.png" /> </a></div><br>

                  <p>Chemical reactions in organisms generally reach a steady state condition. Thus when the rate of change of starch chain length is zero, <br></p>
              <div class="gallery rounded mx-auto d-block" style="width: 50%; height: auto;text-align:center">
          <a href="https://static.igem.wiki/teams/4772/wiki/website-material/drylab2/12.png"><img
                  src="https://static.igem.wiki/teams/4772/wiki/website-material/drylab2/12.png" /> </a></div><br>


                  <p>Shift the terms and combine to get <a class="link-ref" v-scroll-to="'#refs'">[4]</a><br></p>
              <div class="gallery rounded mx-auto d-block" style="width: 70%; height: auto;text-align:center">
          <a href="https://static.igem.wiki/teams/4772/wiki/website-material/drylab2/133.png"><img
                  src="https://static.igem.wiki/teams/4772/wiki/website-material/drylab2/133.png" /> </a></div><br>
                  <p>At this point the equation changes from three parameters to two, with β representing the activity of the SBE with respect to the SS, i.e., the branching capacity of the system, and γ representing the activity of the DBE with respect to the SS, i.e., the capacity of the system for starch degradation pathways.</p>

              <h4 class="small-title">Results</h4>

              <p>The starch branching situation is shown below, the horizontal axis is the value of beta and gamma, respectively, setting the parameters: <a style="font-style:italic">x<sub>min</sub>=7, x<sub>0</sub>=6</a><br></p>
              
       

                  <p>With the longest starch branch length set to N=20, we establish a threshold value of threshold=5. In this context, starch chains with lengths exceeding five monomers are identified as biased straight chains. The sum of the number of branched chains with lengths surpassing the threshold serves as the y-value on the vertical axis. This value effectively characterizes the starch branching, where a higher y-value indicates a greater orientation towards straight-chain starch.<br></p>
              <div class="gallery rounded mx-auto d-block" style="width: 70%; height: auto;text-align:center">
          <a href="https://static.igem.wiki/teams/4772/wiki/website-material/drylab2/22.png"><img
                  src="https://static.igem.wiki/teams/4772/wiki/website-material/drylab2/22.png" />Figure 2.3.2 Parameter effects on starch branching </a></div><br>


                  <p>Observing the effect of beta on the y-value when the gamma value is constant:<br></p>
              <div class="gallery rounded mx-auto d-block" style="width: 70%; height: auto;text-align:center">
          <a href="https://static.igem.wiki/teams/4772/wiki/website-material/drylab2/23.png"><img
                  src="https://static.igem.wiki/teams/4772/wiki/website-material/drylab2/23.png" />Figure 2.3.3 Effect of branching enzyme activity on starch branching </a></div><br>


                  <p>It can be seen that the larger the relative activity of SBE, the smaller the amount of straight-chain starch. When the relative activity of DBE is large enough, the effect of SBE on the amount of straight-chain starch becomes smaller because degradation dominates at this point compared to branching. The model is not supported by wet experimental data for technical reasons, but it is consistent with common sense.</p>
              
            </section>
        <section id="fourth">
          <h3 class="main-title">Discussion</h3>
          <h4 class="small-title">Wet Lab Data Issues</h4>
          <p>Due to insufficient wet experimental data, the results of some models could not be verified, e.g., only qualitative data were available for starch accumulation, and there was a complete lack of data for starch branching. Therefore, if the wet experimental data can be improved to obtain more accurate quantitative data, the existing model can be fitted to form a closed loop. At the same time, the model can be improved under the guidance of the wet experimental data, such as adding or subtracting terms and adjusting parameters in the modeling equation.</p>
          <h4 class="small-title">Parameter Selection Issues</h4>
          <p>The issue of parameter selection is fundamentally linked to the availability of wet experimental data. In the starch metabolism model, enzyme-related parameters ideally should be derived from rigorous wet experimental measurements conducted under specific culture conditions. However, due to technical constraints, these parameters were instead sourced from a database integrated into the model. Nevertheless, it's important to note that the enzyme kinetics of the specific organism, <a style ="font-style:italic"> Chlamydomonas reinhardtii</a>, are not extensively studied, and data are relatively limited. Consequently, the model relies on enzyme data from species as closely related as possible, which can introduce potential sources of error.
</p>
</section>
        </section>

        <section id="refs">
          <ul class="acc">
            <li class="acc-item references">
              <input id="s1" class="hide" type="checkbox">
              <label for="s1" class="acc-label icon">References</label>
              <div class="acc-child">
                <p>[1]Radakovits, R., Jinkerson, R. E., & Darzins, A. Posewitz,. MC. (2010). Genetic engineering of algae for enhanced biofuel production. Eukaryotic Cell, 9(4), 486-501<br>
[2]<a
class="link-ref"
 href="https://image.baidu.com/search/detail?ct=503316480&z=0&ipn=d&word=%E9%80%BB%E8%BE%91%E6%96%AF%E8%92%82%E5%A2%9E%E9%95%BF&step_word=&hs=0&pn=12&spn=0&di=7264239678558044161&pi=0&rn=1&tn=baiduimagedetail&is=0%2C0&istype=0&ie=utf-8&oe=utf-8&in=&cl=2&lm=-1&st=undefined&cs=3784032125%2C2859427437&os=1377905754%2C2230537260&simid=3784032125%2C2859427437&adpicid=0&lpn=0&ln=328&fr=&fmq=1696899581964_R&fm=&ic=undefined&s=undefined&hd=undefined&latest=undefined&copyright=undefined&se=&sme=&tab=0&width=undefined&height=undefined&face=undefined&ist=&jit=&cg=&bdtype=15&oriquery=&objurl=https%3A%2F%2Fpic1.zhimg.com%2Fv2-05e22a89726468d38833b82ada389050_r.jpg&fromurl=ippr_z2C%24qAzdH3FAzdH3Fzi7wgswg_z%26e3Bziti7_z%26e3Bv54AzdH3FrAzdH3F889aac9nm&gsm=1e&rpstart=0&rpnum=0&islist=&querylist=&nojc=undefined&dyTabStr=MTEsMCwyLDUsNCwxLDYsMyw3LDgsOQ%3D%3D&lid=11475121820698992628">https://image.baidu.com/search/detail?ct</a><br>
[3]Chi A W,G R G. Molecular weight distributions of starch branches reveal genetic constraints on biosynthesis.[J]. Biomacromolecules,2010,11(12).<br>
 [4]Chi A W,G R G. Molecular weight distributions of starch branches reveal genetic constraints on biosynthesis.[J]. Biomacromolecules,2010,11(12).<br>

                </p>
              </div>
            </li>
          </ul>
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
      currentPage: "Dry Lab",
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
