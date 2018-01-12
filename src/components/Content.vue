<template lang="html">
  <div>
    <div class="col-12">
      <h3>Dashboard</h3>
    </div>
    <hr>
    <div class="container-fluid">
      <div class="row">
        <div class="col-lg-4 col-md-4 col-sm-12">
          <b-list-group>
            <b-list-group-item active class="d-flex justify-content-between align-items-center">
              Tareas pendientes
            </b-list-group-item>
            <b-list-group-item class="d-flex justify-content-between align-items-center">
              Mantenimientos pendientes
              <b-badge variant="info" pill>{{mantenimientosPendientes}}</b-badge>
            </b-list-group-item>
            <b-list-group-item class="d-flex justify-content-between align-items-center">
              Consumibles pendientes
              <b-badge variant="danger" pill>{{consumiblesPendientes}}</b-badge>
            </b-list-group-item>
            <b-list-group-item  class="d-flex justify-content-between align-items-center">
              Tickets pendientes
              <b-badge variant="warning" pill>{{ticketsPendientes}}</b-badge>
            </b-list-group-item>
          </b-list-group>
        </div>
        <div class="col-lg-4 col-md-4 col-sm-12">

        </div>
      </div>
    </div>
  </div>

</template>

<script>

export default {
  name: 'Content',
  data () {
    return {
      mantenimientosPendientes: '2',
      consumiblesPendientes: '10',
      ticketsPendientes: '5'

    }
  }
}
</script>

<style lang="css">
.list-group-item.active {
    z-index: 2;
    color: #000;
    background-color: #dcdcdc;
    border-color: #dcdcdc;
}

.list-group-item{
  padding-top: 2px;
  padding-bottom: 2px;
}
</style>
