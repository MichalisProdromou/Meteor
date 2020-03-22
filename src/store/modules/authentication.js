import { Get, Post } from "../api.js";

const GetDefaultState = () => {
  return {
    //loggedInUser: null,
    //TODO: Put the normal functionality back when the login works...
    user: {
      loggedIn: false,
      data: null
    },
    backendURL: process.env.VUE_APP_BACKEND_URL//"http://phplaravel-356521-1164109.cloudwaysapps.com/api"
  }
}

const state = GetDefaultState();

const mutations = {  
  ResetAuthenicationState(state) {
    Object.assign(state, GetDefaultState());
  },
  SetLoggedIn(state, value){
    state.user.loggedIn = value;
  },
  SetLoggedInUser(state, userObj) {
    state.user.data = userObj;    
  }
}

const actions = {
  async Login({state}, authObj){
    //console.log(state.backendURL);
    let url = `${state.backendURL}/login?`;
    let response = await Post(url, authObj);
    return response;
  },
  SetUser({ commit }, user) {
    commit("SetLoggedIn", user !== null);
    if (user) {
      commit("SetLoggedInUser", {
        displayName: user.displayName,
        email: user.email
      });
    } else {
      commit("SetLoggedInUser", null);
    }
  }
};

const getters = {
  LoggedInUser: state => {
    return state.user;
  }
}

export default {
  state,
  mutations,
  actions,
  getters
};