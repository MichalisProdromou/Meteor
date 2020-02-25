<template>
  <v-container fill-height id="login-container" class="pa-0 ma-0">
    <v-row
      no-gutters
      class="fill-height"
      align="center"
      justify="center"
      >
      <v-col
        v-if="$vuetify.breakpoint.mdAndUp"
        class="fill-height px-4 text-center"
        cols="12"
        md="6"
        order="2"
        order-sm="2"
        order-md="1"
      >
        <img 
          src="@/assets/illustrations/goal.svg"
          :style="{
            'max-height' : loginImgDimensions.height + 'px',
            'margin-top' : loginImgDimensions.marginY + 'px'
            }"
        >
      </v-col>
      <v-col
        :class="{
          'fill-height' : $vuetify.breakpoint.mdAndUp
        }"
        class="px-4 text-center"
        cols="12"
        sm="8"
        md="6"
        order="1"
        order-sm="1"
        order-md="2"
      >
        <v-card 
        flat
        :style="{
          'margin-top' : loginImgDimensions.marginY + 'px'
          }"
        >
          <v-card-title class="display-1">
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
                outlined
                autofocus                
                v-model="username"
                :label="$t('login.username')"
                name="login"
                type="text"
                :rules="[rules.required]"
              ></v-text-field>

              <v-text-field
                class="my-1"
                outlined
                 v-model="password"                
                :label="$t('login.password')"
                name="password"
                :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                :type="showPassword ? 'text' : 'password'"
                @click:append="showPassword = !showPassword" 
                :rules="[rules.required]"               
              ></v-text-field>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-btn 
              color="primary"
              block
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
import { mapActions } from 'vuex'

export default {
  name: "Login",
  components: {},
  data: () => ({
    
    username: "mike@gmail.com",
    password: "123456",
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
  computed: {
    loginImgDimensions(){
      let dimensions = {
        height: 0,
        marginY: 0
      };
      switch (this.$vuetify.breakpoint.name) {
        case 'xs':
          dimensions.height = 200;
          break;
        case 'sm':
          dimensions.height = 250;
          break;
        case 'md':
          dimensions.height = 300;
          dimensions.marginY = (window.innerHeight - dimensions.height) / 2;
          break;
        case 'lg':
          dimensions.height = 350;
          dimensions.marginY = (window.innerHeight - dimensions.height) / 2;
          break;      
        default:
          dimensions.height = 400;
          dimensions.marginY = (window.innerHeight - dimensions.height) / 2;
          break;
      }
      
      console.log(this.$vuetify.breakpoint.name, dimensions);
      return dimensions;
    }
  },
  methods: {
    async Login(){
      //console.log('login');
      const VM = this;
      if(!VM.$refs.loginForm.validate()){
        return;
      }
      VM.loading = true;
      try {
        const payload = {
          email: VM.username,
          password: VM.password
        }
        let loginRes = await VM.$store.dispatch("Login", payload);
        console.log(loginRes);
      } catch (err) {
        console.log(err);
      }
      VM.loading = false;
      
      // VM.SimulateNetworkRequest()
      //   .then( () => {
      //     VM.loading = false;
      //   })

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