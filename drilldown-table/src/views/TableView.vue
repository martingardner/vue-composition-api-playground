<template>    
    <table>
        <thead>
            <tr>
                <th>Class Name</th>                
            </tr>
        </thead>
        <tbody>
            <tr v-for="data in TDATA" :key="data.class" @click="drilldownClick(data)" class="table-row">
                <td>{{ data.name }}</td>
            </tr>
        </tbody>
    </table>
</template>

<script>
import { reactive } from "vue";
import state from '@/state';
import tableData from '@/data/tableData';

export default {

    setup(){
        const TDATA = reactive(tableData);
        const STATE = reactive(state);

        function drilldownClick(data){
            STATE.drilldown = true;
            STATE.drilldownData.populateData(data);
        }

        return {
            TDATA,
            drilldownClick
        }
    }

    
}
</script>

<style>
 table {
     width:100%;
     height:100%;
 }
 table tr:even {
         background-color:rgb(170, 167, 167);
     }

 table tr:hover {
         background-color:#eee;
     }
 
</style>