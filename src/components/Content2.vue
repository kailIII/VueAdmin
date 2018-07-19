<template lang="html">
  <div>
    <div class="col-12">
      <h3>Configuracion</h3>
    </div>
    <hr>
    <ul v-for="(user, userIndex) in users" :key="userIndex">
      <li>{{ user.name.first + " " + user.name.last }} </li>
    </ul>
    <pre>{{ $data }}</pre>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Content2',
  data () {
    return {
      users: []
    }
  },
  mounted () {
    axios.get('https://randomuser.me/api/?results=5').then(response => (this.users = response.data.results))
  }
}
</script>

<style lang="css">
</style>
