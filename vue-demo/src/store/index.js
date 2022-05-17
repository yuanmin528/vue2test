import Vue from "vue"
import Vuex from "vuex"
 
Vue.use(Vuex);
 
const actions = {
    save(context,value){
        context.commit("saveData",value);
    }
}
const mutations = {
    saveData(state,value){
        state.list = value;
    }
}
const state  = {
    list:"",
}
export default new Vuex.Store({
    actions,
    mutations,
    state
})