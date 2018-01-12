<template lang="html">
  <div>
    <b-navbar fixed="bottom" toggeable="md" type="light" variant="light">
      <div class="mx-auto">
        <router-link to="/">
          <b-btn v-b-tooltip.hover id="dashboard"   size="sm" right class="m-1 hvr-wobble-vertical"  variant="primary">
            <icon name="dashboard" flip="horizontal" scale="1.5"></icon>
          </b-btn>
        </router-link>
        <b-btn v-b-tooltip.hover id="inventario"   size="sm" right class="m-1 hvr-wobble-vertical"  variant="primary">
          <icon name="calendar" flip="horizontal" scale="1.5"></icon>
        </b-btn>
        <b-btn v-b-tooltip.hover id="proveedores"   size="sm" right class="m-1 hvr-wobble-vertical"  variant="primary">
          <icon name="briefcase" flip="horizontal" scale="1.5"></icon>
        </b-btn>
        <b-btn v-b-tooltip.hover id="notificaciones"   size="sm" right class="m-1 hvr-buzz"  variant="primary">
          <icon name="bell" flip="horizontal" scale="1.5"></icon>
          <b-badge class="numberNotifications" variant="warning">4</b-badge>
        </b-btn>
        <router-link to="/content2">
          <b-btn  v-b-tooltip.hover id="configuracion"   size="sm" right class="m-1 hvr-wobble-vertical"  variant="primary">
            <icon name="cog" flip="horizontal" scale="1.5"></icon>
          </b-btn>
        </router-link>
      </div>
    </b-navbar>
    <b-tooltip  target="dashboard" title="Dashboard"></b-tooltip>
    <b-tooltip  target="inventario" title="Inventario"></b-tooltip>
    <b-tooltip  target="proveedores" title="Proveedores"></b-tooltip>
    <b-tooltip  target="notificaciones" title="Notificaciones"></b-tooltip>
    <b-tooltip  target="configuracion" title="Configuracion"></b-tooltip>
  </div>
</template>

<script>
export default {
  name: 'Menu2'
}
</script>

<style lang="css">
.iconoBottomNavbar{
  text-decoration: none;
  display: inline-grid;
  text-align: center;
  font-size: small;
  color: black;
  font-family: 'Open Sans', sans-serif;
  padding: 5px;
}
.iconoBottomNavbar:hover{
  background: #e2e2e2;
}
.bg-light{
  box-shadow: 1px 2px 9px 0px #0000002e;
  background-color: #f8f9facf !important;
  padding-top: 2px;
  padding-bottom: 2px;
}
.textoBoton{
  display: -webkit-box;
}
#dashboard, #inventario, #proveedores, #notificaciones, #configuracion{
  -webkit-appearance: button;
  border-radius: 10px;
  box-shadow: 0px 3px 0px #073d77;
}
.numberNotifications{
  content:attr(data-badge);
  position:absolute !important;
  top:-11px !important;
  right:-10px;
  font-size:1.2em;
  width:25px;height:25px;
  text-align:center;
  border-radius:50%;
  box-shadow: -1px 2px 1px #333;
}
</style>
