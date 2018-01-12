<template>
  <div id="app">
    <Navbar/>
    <br>
    <br>
    <br>
    <vue-progress-bar></vue-progress-bar>
    <router-view>
      <Content/>
      <Content2/>
    </router-view>
    <Menu2/>
  </div>
</template>

<script>
import Navbar from './components/Navbar'
import Menu2 from './components/Menu2'
import Content from './components/Content'
import Content2 from './components/Content2'
export default {
  name: 'app',
  components: {
    Navbar,
    Menu2,
    Content,
    Content2

  },
  methods: {
    start () {
      this.$Progress.start()
    }
  }
}
</script>

<style>
#app {

}
footer{
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  padding: 0px;
  text-align: center;
  background-color: #f8f9fa;
  box-shadow: 1px -3px 7px 0px #0000002e;
}

</style>
