<template lang="html">
  <div>
    <div class="col-12">
      <h3>Agenda</h3>
      <center>
        <div v-if="envioCorrectamente" class="col-4 envioCorrectamente">
          <b-alert show variant="success">Datos insertados correctamente</b-alert>
        </div>
      </center>
    </div>
  <hr>
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-4 col-sm-12 ">
        <b-form>
          <label class="mr-sm-2" for="inlineFormCustomSelectPref">Input con mongoDB</label>
          <b-form-group>
            <label class="sr-only" for="inlineFormInputName2">Name</label>
            <b-input class="mb-2 mr-sm-2 mb-sm-0" id="inlineFormInputName2" placeholder="Ingresa el nombre" v-model="Usuario.name" />
          </b-form-group>
          <b-form-group>
            <label class="sr-only" for="inlineFormInputName2">Last Name</label>
            <b-input class="mb-2 mr-sm-2 mb-sm-0" id="inlineFormInputName2" placeholder="Ingresa el apellido" v-model="Usuario.lastName"/>
          </b-form-group>
          <b-button variant="primary" @click.prevent="insertDatos">Guardar</b-button>
        </b-form>
      </div>
      <div class="col-md-4 col-sm-12">
        <label class="mr-sm-2">Preview de Insert VueRosource</label>
        <p>Nombre: {{ Usuario.name}}</p>
        <p>Apellido: {{ Usuario.lastName}}</p>
      </div>
      <div class="col-md-4 col-sm-12">
        <b-table striped small hover bordered :fields="fields" :items="personas">
          <template slot="first_name" slot-scope="data">
            {{data.item.name.first}}
          </template>
          <template slot="last_name" slot-scope="data">
            {{data.item.name.last}}
          </template>
        </b-table>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
export default {
  name: 'Agenda',
  data () {
    return {
      envioCorrectamente: null,
      Usuario: {
        name: '',
        lastName: '',
        envioCorrectamente: false
      },
      fields: {
        first_name: {
          key: 'first_name',
          label: 'Nombre',
          sortable: true
        },
        last_name: {
          key: 'last_name',
          label: 'Apellido',
          sortable: true
        },
        editar: {
          key: 'editar',
          label: 'Editar'
        }
      },
      personas: []
    }
  },
  created: function () {
    this.obtenerAPI()
  },
  methods: {
    insertDatos () {
      this.$http.post('https://jsonplaceholder.typicode.com/posts/', {
        name: this.Usuario.name,
        lastName: this.Usuario.lastName
      })
      .then(function (respuesta) {
        console.log(respuesta)
        this.$toastr('add', {
          title: 'Operacion realizada',
          msg: 'Datos insertados correctamente' + ' ' + this.Usuario.name,
          clickClose: false,
          timeout: 3000,
          position: 'toast-top-center',
          type: 'success'
        })
      })
    },
    obtenerAPI () {
      this.$http.get('https://randomuser.me/api/?results=10')
        .then(function (respuesta) {
          this.personas = respuesta.body.results
        })
    }
  }
}
</script>

<style lang="css">
.envioCorrectamente {
  transition: opacity .5s;
}
</style>
