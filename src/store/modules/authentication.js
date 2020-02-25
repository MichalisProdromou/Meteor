import { Get, Post } from "../api.js";

const GetDefaultState = () => {
  return {
    //loggedInUser: null,
    //TODO: Put the normal functionality back when the login works...
    loggedInUser: {
      name: "Mike",
      pass: "root"
    },
    backendURL: process.env.VUE_APP_BACKEND_URL//"http://phplaravel-356521-1164109.cloudwaysapps.com/api"
  }
}

const state = GetDefaultState();

const mutations = {
  ResetAuthenicationState(state) {
    Object.assign(state, GetDefaultState());
  },
  SetLoggedInUser(state, userObj) {
    state.loggedInUser = userObj;    
  }
}

const actions = {
  async Login({state}, authObj){
    console.log(state.backendURL);
    let url = `${state.backendURL}/login?`;
    let response = await Post(url, authObj);
    return response;
  }
};

const getters = {
  LoggedInUser: state => {
    return state.loggedInUser;
  }
}

export default {
  state,
  mutations,
  actions,
  getters
};