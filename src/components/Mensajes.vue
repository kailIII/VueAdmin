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
                <div v-for="(chat, chatIndex) in chats" :key="chatIndex">
                  <b-tab  :title="chat.name.first">
                    {{ chat.location.street }}
                  </b-tab>
                </div>
              </b-tabs>
          </b-tab>
          <b-tab title="CONTACTOS"  head-html='' >
            <div class="row">
              <div class="col-md-4 col-sm-12">
                <b-list-group>
                  <b-list-group-item v-for="(contacto, contactoIndex) in contactos" :key="contactoIndex">
                    {{ contactoIndex }} {{ contacto.name.first}}
                    <b-img right rounded="circle" :src="contacto.picture.thumbnail" alt="right image" />
                  </b-list-group-item>
                </b-list-group>
              </div>
              <div class="col-sm-12 col-md-8">
                <div class="row">
                  <div class="card w-25 p-3" v-for="(contacto, contactoIndex) in contactos" :key="contactoIndex">
                    <img class="card-img-top" :src="contacto.picture.thumbnail" alt="Card image cap">
                    <div class="card-body">
                      <p class="card-text">{{ contacto.name.first}}</p>
                    </div>
                  </div>
                </div>
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
      contactos: [],
      chats: []
    }
  },
  created: function () {
    this.obtenerContactosAPI()
    this.mostrarContactosChat()
  },
  methods: {
    obtenerContactosAPI: function () {
      this.$http.get('https://randomuser.me/api/?results=5').then(function (mostrarContactos) {
        this.contactos = mostrarContactos.body.results
      })
    },
    mostrarContactosChat: function () {
      this.$http.get('https://randomuser.me/api/?results=5').then(function (chatContactos) {
        this.chats = chatContactos.body.results
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

/* Contact styles */
.w-25 {
    width: 140px !important;
}
</style>
