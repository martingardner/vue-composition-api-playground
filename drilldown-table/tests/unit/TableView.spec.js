import { shallowMount , mount } from "@vue/test-utils";
import TableView from '../../src/views/TableView.vue';
import tableData from '../../src/data/tableData';

describe("TableView view", ()=> {

    test("TableWrapper.vue is a vue instance", ()=> {
        const wrapper = shallowMount(TableView);
        expect(wrapper.vm).toBeTruthy();
    });

    test("Test that table exists", () => {
        const wrapper = mount(TableView);
        expect(wrapper.find("table")).toBeTruthy();
    });

    test("Table contains a number of rows of data equal to length of tableData", ()=> {
        const wrapper = mount(TableView);
        const tdLen = tableData.length;
        expect(wrapper.findAll(".table-row").length).toBe(tdLen);
    });

});