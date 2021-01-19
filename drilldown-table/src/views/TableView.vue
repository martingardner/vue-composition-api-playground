<template>    
    <table>
        <thead>
            <tr>
                <th>Class Name</th>                
            </tr>
        </thead>
        <tbody>
            <tr v-for="data in tdata" :key="data.class" @click="drilldownClick(data)">
                {{ data.name }}
            </tr>
        </tbody>
    </table>
</template>

<script>
import { reactive } from "vue";
import tableData from '@/data/tableData';

export default {
    emits: [
        "drilldownClick",
        "drilldownData"
    ],
    setup(props, {emit}){
        const tdata = reactive(tableData);

        function drilldownClick(data){
            emit('drilldownClick', true);
            emit('drilldownData', data);
        }

        return {
            tdata,
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