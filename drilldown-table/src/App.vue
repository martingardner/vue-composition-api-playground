<template>  
  <main>
    <h1>{{ title }}</h1>
    <table-view />
    <drilldown-view /> 
  </main> 
</template>

<script>
import { ref } from 'vue';
import TableView from '@/views/TableView';
import DrilldownView from '@/views/DrilldownView';

export default {
  components: {
    TableView,
    DrilldownView
  },
  setup(){
    const title = ref("Drilldown table");

    return {
      title
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
