import Vue from "vue";
import Vuex from "vuex";

import navigation from "./modules/navigation.js";
import seasons from "./modules/seasons.js";
import players from "./modules/players.js";

Vue.use(Vuex);

const GetDefaultState = () => {
  return {
    showDisplayModeButtons: false,
    displayModeSelection: 0
  }
};

const state = GetDefaultState();

const mutations = {
  SetDisplayModeButtons(state, bool) {
    state.showDisplayModeButtons = bool;
  },
  SetDisplayModeSelection(state, value) {
    state.displayModeSelection = value;
  }
}

const getters = {
  ShowDisplayModeButtons: state => {
    return state.showDisplayModeButtons;
  },
  DisplayModeSelection: state => {
    return state.displayModeSelection;
  }
}

export default new Vuex.Store({
  state,
  mutations,
  actions: {},
  getters,
  modules: {
    navigation,
    seasons,
    players
  }
});
