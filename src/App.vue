<template>
  <img alt="Vue logo" src="./assets/logo.png" />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapActions } from "vuex";

export default defineComponent({
  name: "App",
  components: {},
  methods: {
    ...mapActions([
      "fetchWeatherData", // map `this.increment()` to `this.$store.dispatch('increment')`
    ]),
    handleFetchWeather() {
      return this.fetchWeatherData();
    },
  },
  mounted() {
    console.log(this.handleFetchWeather());
  },
});
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
