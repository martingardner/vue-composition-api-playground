<template>
    <section>
        <h1>Drilldown View</h1>
        <div>{{ classData }}</div>
        <ul>
            <li>name: {{classData.drilldownSelected.name}}</li>            
        </ul>
        <button @click="backToTable">Back to Table</button>
    </section>
</template>

<script>
export default {
    props: {
        "classData" : Object
    },
    emits: [
        "drilldownClick",
        "drilldownData"
    ],
    setup(props, {emit}){
        

        function backToTable(){
            emit("drilldownClick", false);
            emit("drilldownData", "");
        }

        return {
            backToTable
        }
    }
    
}
</script>