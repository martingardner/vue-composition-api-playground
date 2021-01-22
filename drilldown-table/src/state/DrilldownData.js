import { reactive } from "vue";

export default class DrilldownData {
    name = reactive("");
    spells = reactive("");

    populateData(data){
        data.name ? this.name = data.name : this.name = "";
        data.spells ? this.spells = data.spells : this.spells = "";
    }

    resetData(){
        this.name = "";
        this.spells = "";
    }
}