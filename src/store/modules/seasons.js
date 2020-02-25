import { Get, Post } from "../api.js";

const GetDefaultState = () => {
  return {
    fetchingData: false,
    seasons: []
  }
}

const state = GetDefaultState();

const mutations = {
  ResetSeasonState(state) {
    Object.assign(state, GetDefaultState());
  },
  SetSeasons(state, seasons) {
    state.seasons = seasons;
  },
  SetSeasonsFDS(state, bool) {
    state.fetchingData = bool;
  }
}

const actions = {
  async FetchSeasons() {
    let seasons = await Get("https://jsonplaceholder.typicode.com/users");
    console.log("[Action - FetchSeasons]", seasons);
    return seasons.data;
  }
};

const getters = {
  AllSeasons: state => {
    return state.seasons;
  },
  FetchingSeasons: state => {
    return state.fetchingData;
  }
}

export default {
  state,
  mutations,
  actions,
  getters
};