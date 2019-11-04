<!--@author Kalanka Siyambalapitiya-->
<template>
  <div id="app">
    <AppNavBar></AppNavBar>
    <router-view />
    <AppFooter></AppFooter>
  </div>
</template>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import AppNavBar from "@/components/AppNavBar";
import AppFooter from "@/components/AppFooter";

@Component({
  components: {
    AppFooter,
    AppNavBar
  }
})
export default class App extends Vue {}
</script>