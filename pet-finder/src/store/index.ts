/**
 * @author Kalanka Siyambalapitiya
 */
import { API_URL } from '@/common/config';
import axios from 'axios';
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    dogs: [],
    cats: []
  },
  mutations: {
    SET_DOGS(state, dogs) {
      state.dogs = dogs;
    },
    SET_CATS(state, cats) {
      state.cats = cats;
    }
  },
  actions: {
    findAllDogs({ commit }) {
      axios.get(API_URL + "dogs")
        .then(r => r.data)
        .then(dogs => {
          commit('SET_DOGS', dogs)
        }) // findAllDogs
    },
    findAllCats({ commit }) {
      axios.get(API_URL + "cats")
        .then(r => r.data)
        .then(cats => {
          commit('SET_CATS', cats)
        }) // findAllCats
    }
  },
  // modules: {
  //   dog
  // }

});
