<template>
  <v-card flat>
    <v-card-text>
      <v-form ref="newRefereeAboutForm">
        <!-- Personal info -->
        <v-row>
          <v-col cols="12" sm="12" md="6">
            <v-text-field
              label="First name"
              outlined
              append-icon="mdi-account-circle"
            >
            </v-text-field>
          </v-col>
          <v-col cols="12" sm="12" md="6">
            <v-text-field
              label="Last name"
              outlined
              append-icon="mdi-account-circle"
            >
            </v-text-field>
          </v-col>
          <v-col cols="12" sm="12" md="6">
            <v-text-field
              label="ID Number"
              outlined
              append-icon="mdi-card-account-details"
            >
            </v-text-field>
          </v-col>
        </v-row>

        <v-row>
          <v-col cols="12" sm="12">
            <v-divider class="mb-6" />
          </v-col>
        </v-row>

        <!-- Contact info -->
        <v-row>            
          <v-col cols="12" sm="12" md="6">
            <v-text-field
              label="Mobile"
              outlined
              append-icon="mdi-phone"
            >
            </v-text-field>
          </v-col>
          <v-col cols="12" sm="12" md="6">
            <v-text-field
              label="Landline"
              outlined
              append-icon="mdi-phone-classic"
            >
            </v-text-field>
          </v-col>
          <v-col cols="12" sm="12" md="6">
            <v-text-field
              label="Fax"
              outlined
              append-icon="mdi-fax"
            >
            </v-text-field>
          </v-col>
          <v-col cols="12" sm="12">
            <v-text-field
              label="Email"
              outlined
              append-icon="mdi-at"
            >
            </v-text-field>
          </v-col>
        </v-row>
      </v-form>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: "About_New_Referee"

}
</script>

<style>

</style>