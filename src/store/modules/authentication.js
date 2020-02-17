const navIcons = {
  dashboard: "mdi-view-dashboard",
  seasons: "mdi-calendar",
  matchYearCategories: "mdi-format-list-bulleted-type",
  tournaments: "mdi-trophy",
  matchWeekends: "mdi-calendar-weekend",
  teams: "mdi-soccer",
  players: "mdi-account-group",
  referees: "mdi-whistle",  
  matches: "mdi-television-classic",
  fields: "mdi-soccer-field",
  logout: "mdi-logout"
}

const GetDefaultState = () => {
  return {
    loggedInUser: null
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

const actions = {};

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