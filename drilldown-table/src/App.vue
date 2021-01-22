<template>  
  <main>
    <table-view v-if="!drilldown"  />
    <drilldown-view v-if="drilldown"  /> 
  </main> 
</template>

<script>
import state from '@/state/index.js';
import TableView from '@/views/TableView';
import DrilldownView from '@/views/DrilldownView';

export default {
  components: {
    TableView,
    DrilldownView
  },
  setup(){  
    return {
      drilldown: state.drilldown,
    }
  }
}
</script>

<style>
#app {
  text-align: center;
  border:1px solid #ccc;
  width:800px;
  height:600px;
  margin:0 auto;
}
</style>
