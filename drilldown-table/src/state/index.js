import { ref , reactive } from "vue";
import DrilldownData from "@/state/DrilldownData";

export default {
    drilldown: ref(false),
    drilldownData: reactive( new DrilldownData() )
};