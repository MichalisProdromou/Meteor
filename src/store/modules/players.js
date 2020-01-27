import { Get } from "../api.js";

const GetDefaultState = () => {
  return {
    fetchingData: false,
    players: []
  }
}

const state = GetDefaultState();

const mutations = {
  ResetPlayersState(state) {
    Object.assign(state, GetDefaultState());
  },
  SetPlayers(state, players) {
    state.players = players;
  },
  SetPlayersFDS(state, bool) {
    state.fetchingData = bool;
  }
};

const actions = {
  async FetchPlayers() {
    let players = await Get("https://jsonplaceholder.typicode.com/users");
    // console.log("[Action - FetchPlayers]", players);
    return players.data;

  }
};

const getters = {
  AllPlayers: state => {
    return state.players;
  },
  FetchingPlayers: state => {
    return state.fetchingData;
  }
}

export default {
  state,
  mutations,
  actions,
  getters
};