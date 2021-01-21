<template>  
  <main>
    <span>drilldown value: {{ drilldown }}</span>
    <br />
    <span>drilldownSelected value: {{ drilldownSelected }}</span>
    <table-view v-if="!drilldown" @drilldownClick="changeDrilldown" @drilldownData="activeDrilldownData" />
    <drilldown-view v-if="drilldown" :classData={drilldownSelected} @drilldownClick="changeDrilldown" @drilldownData="activeDrilldownData" /> 
  </main> 
</template>

<script>
import { ref  } from 'vue';
import state from '@/state/index.js';
import TableView from '@/views/TableView';
import DrilldownView from '@/views/DrilldownView';

export default {
  components: {
    TableView,
    DrilldownView
  },
  setup(){
    let drilldownSelected = ref();

    function changeDrilldown(bool){
      state.drilldown.value = bool;
    }

    function activeDrilldownData(data){
      drilldownSelected.value = data;
    }
  
    return {
      drilldown: state.drilldown,
      drilldownSelected,
      changeDrilldown,
      activeDrilldownData
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
