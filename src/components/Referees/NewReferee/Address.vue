<template>
  <v-card flat>
    <v-card-text>
      <v-form ref="newRefereeAddressForm">
        <v-row>
          <v-col cols="12" sm="12" md="9">
            <v-text-field
              label="Street"
              outlined
              append-icon="mdi-routes"
            >
            </v-text-field>
          </v-col>
          <v-col cols="12" sm="12" md="3">
            <v-text-field
              label="Number"
              outlined
              append-icon="mdi-road-variant"
            >
            </v-text-field>
          </v-col>
          <v-col cols="12" sm="12" md="6">
            <v-text-field
              label="Post code"
              outlined
              append-icon="mdi-map"
            >
            </v-text-field>
          </v-col>
          <v-col cols="12" sm="12" md="6">
            <v-text-field
              label="Area"
              outlined
              append-icon="mdi-tooltip-text"
            >
            </v-text-field>
          </v-col>
          <v-col cols="12" sm="12" md="6">
            <v-text-field
              label="City"
              outlined
              append-icon="mdi-city"
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
  name: "Address_New_Referee"

}
</script>

<style>

</style>