<template>
  <div id="header">

    <slot/>
  </div>
</template>

<script>
export default {
  props: {
    title: String
  },
  head() {
    return {
      title: this.title + " | Tsinghua-TFL - iGEM 2023"
    }
  },
  mounted() {
    const link = document.querySelector("link[rel~='icon']");
    link.href = "https://static.igem.wiki/teams/4772/wiki/website-material/team-logo-version-2.ico";
  }
}
</script>
