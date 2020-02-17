import { Get } from "../api.js";

const GetDefaultState = () => {
  return {
    fetchingData: false,
    referees: []
  }
}

const state = GetDefaultState();

const mutations = {
  ResetRefereesState(state) {
    Object.assign(state, GetDefaultState());
  },
  SetReferees(state, referees) {
    state.referees = referees;
  },
  SetRefereesFDS(state, bool) {
    state.fetchingData = bool;
  }
};

const actions = {
  async FetchReferees() {
    let referees = await Get("https://jsonplaceholder.typicode.com/users");
    // console.log("[Action - FetchPlayers]", players);
    return referees.data;

  }
};

const getters = {
  AllReferees: state => {
    return state.referees;
  },
  FetchingReferees: state => {
    return state.fetchingData;
  }
}

export default {
  state,
  mutations,
  actions,
  getters
};