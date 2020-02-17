<template>
  <v-container fill-height id="login-container" class="pa-0 ma-0">
    <v-row
      no-gutters
      class="fill-height"
      align="center"
      >
      <v-col
        class="fill-height pa-4"
        cols="12"
        md="6"
        order="2"
        order-sm="2"
        order-md="1"
      >
        <img src="@/assets/illustrations/welcome_cats.svg">
      </v-col>
      <v-col
        cols="12"
        md="6"
        order="1"
        order-sm="1"
        order-md="2"
      >
        <v-card elevation-12>
          <v-card-title class="display-1 font-weight-medium">
            Welcome back
          </v-card-title>
          <!-- <v-toolbar
            color="primary"
            dark
            flat
          >
          <v-toolbar-title>Login form</v-toolbar-title>
          </v-toolbar> -->
          <v-card-text>
            <v-form ref="loginForm">
              <v-text-field
              class="my-1"
                autofocus
                outlined
                :value="username"
                :label="$t('login.username')"
                name="login"
                prepend-icon="mdi-account-circle"
                type="text"
                :rules="[rules.required]"
              ></v-text-field>

              <v-text-field
                class="my-1"
                :value="password"
                outlined
                :label="$t('login.password')"
                name="password"
                prepend-icon="mdi-lock"
                :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                :type="showPassword ? 'text' : 'password'"
                @click:append="showPassword = !showPassword" 
                :rules="[rules.required]"               
              ></v-text-field>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn 
              color="primary"
              @click.prevent="Login"
              :loading="loading"
              >{{ $t('login.login') }}
              </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
      
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Login",
  components: {},
  data: () => ({
    username: "",
    password: "",
    showPassword: false,
    loading: false,
    rules: {
      required: value => !!value || 'Required.',
      counter: value => value.length <= 20 || 'Max 20 characters',
      email: value => {
        const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        return pattern.test(value) || 'Invalid e-mail.'
      },
    },
  }),
  methods: {
    Login: function(){
      //console.log('login');
      const VM = this;
      if(!VM.$refs.loginForm.validate()){
        return;
      }
      VM.loading = true;
      VM.SimulateNetworkRequest()
        .then( () => {
          VM.loading = false;
        })

    },
    SimulateNetworkRequest: function(){
      return new Promise((resolve) => {
        setTimeout(function() {
          resolve('foo');
        }, 1000);
      })
    }
  },
  created: function(){
    
    console.log(this.$route);
  }

}
</script>

<style>
#login-container{
  width: 100% !important;
  max-width: 100% !important;
}

</style>