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
    rolesNavigation: {
      Admin: [
        {
          icon: navIcons.dashboard,
          i18nTag: "dashboard",
          title: "Dashboard",
          route: "/dashboard",
          // sublinks: [
          //   {
          //     i18nTag: "seasons",
          //     title: "Seasons",
          //     route: "/seasons"
          //   }
          // ]
        },
        {
          icon: navIcons.seasons,
          i18nTag: "seasons",
          title: "Seasons",
          route: "/seasons"
        },
        {
          icon: navIcons.matchYearCategories,
          i18nTag: "matchYearCategories",
          title: "Match Categories",
          route: "/match-categories"
        },
        {
          icon: navIcons.tournaments,
          i18nTag: "tournaments",
          title: "Tournaments",
          route: "/tournaments"
        },
        {
          icon: navIcons.matchWeekends,
          i18nTag: "matchWeekends",
          title: "Match Weekends",
          route: "/match-weekends"
        },
        {
          icon: navIcons.teams,
          i18nTag: "teams",
          title: "Teams",
          route: "/teams"
        },
        {
          icon: navIcons.referees,
          i18nTag: "referees",
          title: "Referees",
          route: "/referees"
        },
        {
          icon: navIcons.players,
          i18nTag: "players",
          title: "Players",
          route: "/players"
        },
        {
          icon: navIcons.matches,
          i18nTag: "matches",
          title: "Matches",
          route: "/matches"
        },
        {
          icon: navIcons.fields,
          i18nTag: "fields",
          title: "Fields",
          route: "/fields"
        },
        {
          icon: navIcons.logout,
          i18nTag: "login",
          title: "Login",
          route: "/"
        },

      ]
    }
  }
}

const state = GetDefaultState();

const mutations = {
  ResetNaviagationState(state) {
    Object.assign(state, GetDefaultState());
  }
}

const actions = {};

const getters = {
  UserRolesNavigation: state => VM => {
    let navigation = state.rolesNavigation;
    let navTranslations = VM.$t("navigation");

    Object.entries(navigation).forEach( ([key, value]) => {
      value.forEach(link => {
        // Translate links
        link.title = navTranslations[link.i18nTag] || link.title;        
        // Translate sublinks, if any
        if (link.sublinks) { 
          link.sublinks.forEach(sublink => {
            sublink.title = navTranslations[sublink.i18nTag] || sublink.title;
          });
        }
      });
    });

    return navigation;
  }
}

export default {
  state,
  mutations,
  actions,
  getters
};