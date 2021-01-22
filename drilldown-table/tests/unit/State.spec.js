import state from "../../src/state/";
import { reactive , nextTick } from "vue";

describe("Test state", ()=> {    
    const STATE = reactive(state);

    afterEach( ()=> {
        STATE.drilldown = false;
        STATE.drilldownData.resetData();
    });

    test("Test that STATE has drilldown param", ()=> {
        expect(STATE.hasOwnProperty("drilldown")).toBe(true);
    });

    test("Test that STATE can be changed to true", ()=> {
        STATE.drilldown = true;
        expect(STATE.drilldown).toBe(true);
    });

    test("Test that STATE has drilldownData param", ()=> {
        expect(STATE.hasOwnProperty("drilldownData")).toBe(true);
    });

    test("Test that drilldownData populateData works with name of 'wizard'", ()=> {
        const data = { name: 'wizard'};
        STATE.drilldownData.populateData(data);
        expect(STATE.drilldownData.name).toBe('wizard');
    });

    test("Test that drilldownData is reset with resetData", ()=> {
        const data = { name: 'wizard' };
        STATE.drilldownData.populateData(data);
        expect(STATE.drilldownData.name).toBe('wizard');
        STATE.drilldownData.resetData();
        expect(STATE.drilldownData.name).toBe('');
    });
});