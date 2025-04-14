<template>
    <div v-if="loading" class="loading-page">
      <div class="centered">
        <img src="https://static.igem.wiki/teams/4772/wiki/website-material/team-logo-version-2.ico" width="100%" alt=""/>
      </div>
    </div>
  </template>
  
  <script>
    export default {
      data: () => ({
        loading: false
      }),
      methods: {
        start() {
          this.loading = true
        },
        finish() {
          this.loading = false
        }
      }
    }
  </script>
  
  <style scoped>
  .loading-page {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #000;
    z-index: 10001;
  }
  .centered {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  </style>
  