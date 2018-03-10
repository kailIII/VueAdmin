<template lang="html">
  <div>
    <b-navbar  fixed="top" toggleable="md" type="light" variant="light">
        <b-navbar-brand class="nameEnterprice" href="#">
          {{empresa}}
        </b-navbar-brand>
        <b-navbar-nav class="ml-auto">
          <b-nav-form>
            <b-form-input size="sm" class="m-1 searchButton" type="text" placeholder="Buscar"></b-form-input>
          </b-nav-form>
          <b-dropdown size="sm" left id="ddown-divider" variant="primary"  class="m-1">
            <template slot="button-content">
              <icon name="user" scale="1.2" flip="horizontal"></icon>
            </template>
            <b-dropdown-item-button v-on:click="saludar(usuario)">Perfil</b-dropdown-item-button>
            <b-dropdown-divider></b-dropdown-divider>
            <b-dropdown-item-button>Cerrar sesion</b-dropdown-item-button>
          </b-dropdown>
        </b-navbar-nav>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
  data () {
    return {
      empresa: 'JournalERP',
      usuario: 'Saul Espinoza',
      notificaciones: '15'
    }
  },
  methods: {
    saludar (name) {
      alert('Hola' + ' ' + name)
    }
  }
}
</script>

<style lang="css">
@import url('https://fonts.googleapis.com/css?family=Asap');
.nameEnterprice{
  font-family: 'Asap', bold, sans-serif;
}
.dropdown-menu{
will-change: transform;position: absolute;transform: translate3d(1201px, 43px, 0px);top: 12px;left: -11px;
}
.bg-light{
  box-shadow: 1px 2px 9px 0px #0000002e;
  background-color: #f8f9facf !important;
}

.navbar-nav{
  display: -webkit-box;
}

.searchButton{
  background-color: #e8e8e8;
  border-color: #e8e8e8;
  border-radius: 10px;
}
.dropdown-toggle::after {
    display:none
}
.dropdown-toggle{
  border-radius: 20px;
  padding-top: 4px;
  padding-left: 10px;
  padding-right: 10px;
}
</style>
