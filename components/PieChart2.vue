<template>
  <div id="piechart2" class="col-lg-6" data-aos="slide-left" data-aos-duration="1000">
    <Pie :chart-options="chartOptions" :chart-data="chartData"/>
  </div>
</template>

<script>
import AOS from 'aos'
import 'aos/dist/aos.css'
import { Pie } from 'vue-chartjs/legacy'
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  CategoryScale
} from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, ArcElement, CategoryScale)

export default {
  name: 'PieChart2',
  components: { Pie },
  data() {
    return {
      offset: 60,
      spacing: 30,
      rotation: 0,
      duration: 4000,
    }
  },
  computed: {
    chartData() { return {
        labels: ['Lung', 'Colorectum', 'Liver', 'Stomach', 'Breast', 'Oesophagus', 'Pancreas', 'Prostate', 'Other cancers'],
        datasets: [
          {
            backgroundColor: ["#3417c6", "#735ce6", "#58646c", "#a2e8cc", "#2ae89b", "#7ca9f7", "#1e6cf7", "#7d8d99", "#2a2f33"],
            data: [{label: 'Lung ', value: 18, count: "1,796,144"}, {label: 'Colorectum', value: 9.4, count: "935,173"}, {label: 'Liver', value: 8.3, count: "830,180"}, {label: 'Stomach', value: 7.7, count: "768,793"}, {label: 'Breast', value: 6.9, count: "684,996"}, {label: 'Oesophagus', value: 5.5, count: "544,076"}, {label: 'Pancreas', value: 4.7, count: "466,003"}, {label: 'Prostate', value: 3.8, count: "375,304"}, {label: 'Other cancers', value: 35.7, count: "3,557,464"}],
            hoverOffset: 40,
            spacing: this.spacing,
            offset: this.offset, 
            rotation: this.rotation
          }
        ]
      } 
    },
    chartOptions() { return {
      responsive: true,
      maintainAspectRatio: false,
      layout: {
          padding: 20
      },
      animation: {
        duration: this.duration,
        easing: "easeOutQuart"
      },
      plugins: {
        legend: {
            title: {text: "Total: 9,958,133 deaths", display: true, font: {size: 12, weight: "bold"}},
            position: "right"
        },
        tooltip: {
            callbacks: {
                label: function (tooltipItem) {
                    return tooltipItem.raw.count + " (" + tooltipItem.raw.value + "%)"
                },
                title: function (tooltipItem) {
                    return tooltipItem[0].raw.label 
                }
            }
        }
      }
    }}
  },
  mounted() {
    AOS.init({});
    window.addEventListener("scroll", this.onScrollPie);
    window.addEventListener("load", () => {
      this.onScrollPie();
    });
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.onScrollPie);
  },
  methods: {
    onScrollPie: function () {
      const y = document.getElementById("piechart2").getBoundingClientRect().y;
      const height = document.getElementById("piechart2").getBoundingClientRect().height;
      if (y - window.innerHeight < -50 && y - window.innerHeight > -(height+window.innerHeight - 50)) {
        this.offset = 4;
        this.spacing = 4;
        this.rotation = -35;
        this.duration = 50;
      } else {
        this.duration = 4000;
        this.offset = 50;
        this.spacing = 30;
        this.rotation = 0;
      }
    }
  }
}
</script>
