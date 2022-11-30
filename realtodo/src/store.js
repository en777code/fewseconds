import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state:{
        viewIndex:null,
        viewData:null,
        forData:null,
        updateRef:null,
    }
})