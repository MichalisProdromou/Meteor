<template>
  <v-card flat>
    <v-card-text>
      <v-form ref="newRefereeRoleInfoForm">
        <v-row>
          <v-col>
            <v-menu
              v-model="showRoleMenu"
              :close-on-content-click="false"
              :nudge-right="40"
              transition="scale-transition"
              offset-y
              min-width="290px"
            >
              <template v-slot:activator="{ on }">
                <v-text-field
                  v-model="healthCertEndDate"
                  label="Health certificate expiry date"
                  outlined
                  append-icon="mdi-calendar"
                  readonly
                  v-on="on"
                ></v-text-field>
              </template>
              <v-date-picker 
                v-model="healthCertEndDate"
                @input="showRoleMenu = false">
              </v-date-picker>
            </v-menu>
          </v-col>
        </v-row>
      </v-form>
    </v-card-text>
  </v-card>
</template>

<script>
const moment = require("moment");

export default {
  name: "Role_Info_Referee",
  data(){
    return {
      healthCertEndDate: moment(new Date()).format("YYYY-MM-DD"),
      showRoleMenu: false
    }
  }

}
</script>

<style>

</style>