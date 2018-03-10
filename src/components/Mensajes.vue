<template lang="html">
  <div>
    <div class="col-12">
      <h3>Mensajes</h3>
    </div>
    <hr>
    <div class="container col-md-12 col-sm-12">
        <b-tabs pills lazy small>
          <b-dropdown-divider></b-dropdown-divider>
          <b-tab title="CHAT"  head-html='' active>
              <b-tabs pills card vertical nav-wrapper-class="w-50">
                <b-tab title="Saul Espinoza">
                  Tab Contents 1
                </b-tab>
                <b-tab title="Raul Martinez"  v-if="active">
                  Tab Contents 2
                </b-tab>
                <b-tab title="Oscar Santana">
                  Tab Contents 3
                </b-tab>
              </b-tabs>
          </b-tab>
          <b-tab title="CONTACTOS"  head-html='' >
            <div class="row">
              <div class="col-sm-4">
                <b-list-group>
                  <b-list-group-item v-for="(contacto, contactoIndex) in contactos" :key="contactoIndex">
                    {{ contactoIndex }} {{ contacto.name.first}}
                    <b-img right rounded="circle" :src="contacto.picture.thumbnail" alt="right image" />
                  </b-list-group-item>
                </b-list-group>
              </div>
              <div class="col-sm-8">
                <pre>{{ $data.contactos }}</pre>
              </div>
            </div>
          </b-tab>
          <b-tab title="LLAMADAS" head-html=''>
            Llamadas
          </b-tab>
        </b-tabs>
    </div>
    <div class="espaciador"></div>
  </div>
</template>

<script>
export default {
  name: 'Mensajes',
  data () {
    return {
      active: true,
      contactos: []
    }
  },
  created: function () {
    this.obtenerContactosAPI()
  },
  methods: {
    obtenerContactosAPI: function () {
      this.$http.get('https://randomuser.me/api/?results=5').then(function (mostrarContactos) {
        this.contactos = mostrarContactos.body.results
      })
    }
  }
}
</script>

<style lang="css">
/* Tabs Styles */
.nav{
  display: flex;
  justify-content: center;
}
/* Tabs message Styles*/
.w-50 {
    width: 30% !important;
}
.espaciador{
  margin-top: 60px;
}
</style>
