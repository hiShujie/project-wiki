<template>
  <div>
    <Header :title="currentPage">
      <div class="bg"
        style="background: url('https://static.igem.wiki/teams/4772/wiki/website-material/attributionsb.png') center center no-repeat; background-size: cover;">
        <h1 class="head-title">Attribution</h1>
      </div>
    </Header>
    <div class="row mt-4">
      <script type="text/javascript">
        // Listen to size change and update form height
        window.addEventListener('message', function (e) {
          const { type, data } = JSON.parse(e.data);
          if (type === 'igem-attribution-form') {
            const element = document.getElementById('igem-attribution-form')
            element.style.height = data + 50 + 'px'
          }
        });
      </script>
      <iframe style='width: 100%' id="igem-attribution-form" src="https://attributions.igem.org?team=Tsinghua-TFL&year=2023">
      </iframe>
      <!-- ^^^^^^^^^^^^^^^^^^^^^^singhua-TFL^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ -->

    </div>

  </div>
</template>

<script>
import SimpleLightbox from "simplelightbox";

export default {
  data() {
    return {
      currentPage: "Attribution",
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
