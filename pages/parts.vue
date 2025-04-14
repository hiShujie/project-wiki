<template>
  <div>
    <Header :title="currentPage"></Header>

    <div class="bg" style="background: url('https://static.igem.wiki/teams/4772/wiki/website-material/partback.png') center center no-repeat; background-size: cover;">
      <h1 class="head-title">{{currentPage}}</h1>
    </div>

    <section class="intro">
      <p>First, we would like to introduce our favourite Basic Part SGT1 <a href="http://parts.igem.org/Part:BBa_K4772003" style="color:#6bac74">(BBa_K4772003)</a> to you. SGT1 provides a more efficient method for screening foreign protein expression, greatly reducing the workload and greatly assisting iGEM teams that want to use Chlamydomonas reinhardtii as a chassis organism in the future. We hope that through our efforts, more teams will use Chlamydomonas reinhardtii as a chassis organism, and tap into its unlimited potential in iGEM, which was limited by the expression efficiency of foreign proteins in the past.<br>

Meanwhile, to achieve the synthetic biological engineering of Chlamydomonas reinhardtii, we also constructed multiple other parts of Chlamydomonas reinhardtii. They are realated to different processes of photosynthesis, including the light reaction <a href="http://parts.igem.org/Part:BBa_K4772001" style="color:#6bac74">(BBa_K4772001, ChlF)</a>, carbon fixation <a href="http://parts.igem.org/Part:BBa_K4772002" style="color:#6bac74">(BBa_K4772002, CIA5)</a>, and downstream carbon flow distribution <a href="http://parts.igem.org/Part:BBa_K4772000" style="color:#6bac74">(BBa_K4772000, glgC-G336D)</a>. These parts all meet the standardized part requirements of the iGEM official . iGEM teams with needs can further learn about and obtain guidance for using these parts in our Parts.</p>
      <div class="table-responsive">
        <table class="table table-hover">
          <thead class="table-dark">
            <tr>
              <th scope="col">Part</th>
              <th scope="col">Part Name</th>
              <th scope="col">Type</th>
              <th scope="col">Designed by</th>
              <th scope="col">Registry link</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">Part:BBa_K4772000</th>
              <td>glgC-G336D</td>
              <td>DNA</td>
              <td>Jinghan Zhao/赵靖涵</td>
              <td><a  href="http://parts.igem.org/Part:BBa_K4772000" style="color:white">http://parts.igem.org/Part:BBa_K4772000</a></td>
            </tr>
            <tr>
              <th scope="row">Part:BBa_K4772001</th>
              <td>ChlF</td>
              <td>DNA</td>
              <td>Shujie Zhang/张淑杰</td>
              <td><a  href="http://parts.igem.org/Part:BBa_K4772001" style="color:white">http://parts.igem.org/Part:BBa_K4772001</a></td>
            </tr>
            <tr>
              <th scope="row">Part:BBa_K4772002</th>
              <td>CIA5</td>
              <td>DNA</td>
              <td>Minglong Shen/沈铭龙</td>
              <td><a href="http://parts.igem.org/Part:BBa_K4772002" style="color:white">http://parts.igem.org/Part:BBa_K4772002</a></td>
            </tr>
            <tr>
              <th scope="row">Part:BBa_K4772003</th>
              <td>SGT1</td>
              <td>DNA</td>
              <td>Wenxi Wu/吴文曦</td>
              <td><a href="http://parts.igem.org/Part:BBa_K4772003" style="color:white">http://parts.igem.org/Part:BBa_K4772003</a></td>
            </tr>
            
          </tbody>
        </table>
      </div>
    </section>

  </div>
</template>

<script>
export default {
    data() {
        return {
            currentPage: "Parts",
        };
    }, 
}
</script>