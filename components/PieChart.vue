<template>
  <div id="piechart" class="col-lg-6" data-aos="slide-left" data-aos-duration="1000">
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
  name: 'PieChart',
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
        labels: ['Cereals', 'Sugar Crops', 'Vegetables', 'Oil Crops', 'Fruit', 'Roots and Tubers', 'Others'],
        datasets: [
          {
            backgroundColor: ["#818673", "#a05f9b", "#6dd179", "#d1c986", "#5bbdea","#5a439e","#ffffff"],
            data: [{label: 'Cereals ', value: 32, count: "2.976"}, {label: 'Sugar Crops', value: 23, count: "2.139"}, {label: 'Vegetables', value: 12, count: "1.116"}, {label: 'Oil Crops', value: 12, count: "1.116"}, {label: 'Fruit', value: 10, count: "0.93"}, {label: 'Roots and Tubers', value: 9, count: "0.837"}, {label: 'Others', value: 1, count: "0.093"}],
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
            title: {text: "Total: 9.3 billion ton in 2022", display: true, font: {size: 12, weight: "bold"}},
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
      const y = document.getElementById("piechart").getBoundingClientRect().y;
      const height = document.getElementById("piechart").getBoundingClientRect().height;
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
