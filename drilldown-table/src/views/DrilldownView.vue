<template>
    <section>
        <h1>Drilldown View</h1>
        
        <ul>
            <li>name: {{classData.name}}</li>
            <li>spells: {{ classData.spells }}</li>            
        </ul>
        
        <button @click="backToTable">Back to Table</button>
    </section>
</template>

<script>
import { reactive } from "vue";
import state from '@/state';

export default {

    setup(){        
        const STATE = reactive(state);

        function backToTable(){
            STATE.drilldown = false;
            STATE.drilldownData.resetData();
        }

        return {
            backToTable,
            classData : STATE.drilldownData
        }
    }
    
}
</script>