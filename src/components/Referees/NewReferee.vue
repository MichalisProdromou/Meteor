<template>
  <v-card
  >
    <!-- <v-card-title>
      <h1 class="text-center headline ma-auto">Create new referee</h1>
    </v-card-title>
    <v-card-subtitle>
      <h2 class="text-center subtitle-1">Please fill in the required information</h2>
    </v-card-subtitle>
    <v-card-text>
      <v-form 
        ref="new-season-form"
      >
        <v-row>
          <v-col cols="12" sm="12" md="6">
            <v-text-field
              v-model="name"
              :counter="50"
              :rules="rules.name"
              label="Name"
              required
              outlined
            ></v-text-field>
          </v-col>

          <v-col cols="12" sm="12" md="6">
            <v-text-field
              v-model="surname"
              :counter="50"
              :rules="rules.surname"
              label="Surname"
              required
              outlined
            ></v-text-field>
          </v-col>

          <v-col cols="12" sm="6">
            <v-dialog
              ref="startDateDialog"
              v-model="startDatePicker"
              :return-value.sync="startDate"
              persistent
              width="290px"
            >
              <template v-slot:activator="{ on }">
                <v-text-field
                  v-on="on"
                  v-model="startDate"
                  label="Start date"
                  prepend-icon="mdi-calendar"
                  readonly
                  required                  
                  outlined
                ></v-text-field>
              </template>
              <v-date-picker v-model="startDate" scrollable>
                <v-spacer></v-spacer>
                <v-btn text color="primary" @click="startDatePicker = false">Cancel</v-btn>
                <v-btn text color="primary" @click="$refs.startDateDialog.save(startDate)">OK</v-btn>
              </v-date-picker>
            </v-dialog>
          </v-col>  

          <v-col cols="12" sm="6" >
            <v-dialog
              ref="endDateDialog"
              v-model="endDatePicker"
              :return-value.sync="endDate"
              persistent
              width="290px"
            >
              <template v-slot:activator="{ on }">
                <v-text-field
                  v-on="on"
                  v-model="endDate"
                  label="End date"
                  prepend-icon="mdi-calendar"
                  readonly
                  required
                  outlined
                ></v-text-field>
              </template>
              <v-date-picker v-model="endDate" scrollable :min="startDate">
                <v-spacer></v-spacer>
                <v-btn text color="primary" @click="endDatePicker = false">Cancel</v-btn>
                <v-btn text color="primary" @click="$refs.endDateDialog.save(endDate)">OK</v-btn>
              </v-date-picker>
            </v-dialog>
          </v-col>            

          <v-col cols="12" sm="12">
            
            <v-textarea
              v-model="description"
              :counter="250"
              :rules="rules.description"
              label="Description"
              outlined
            ></v-textarea>
          </v-col>
        </v-row>
        

      </v-form>
    </v-card-text>
    <v-card-actions>
      <v-spacer/>
      <v-btn 
        color="red"
        outlined
      >Cancel</v-btn>
      <v-btn 
        color="success"
      >Save</v-btn>
    </v-card-actions> -->
  </v-card>
</template>

<script>
export default {
  name: "NewSeason",
  data: () => ({
    name: "",
    description: "",
    startDate: new Date().toISOString().substr(0, 10),
    endDate: new Date().toISOString().substr(0, 10),
    startDatePicker: false,
    endDatePicker: false,
    rules: {
      name: [
        v => !!v || 'Name is required',
        v => (v && v.length <= 50) || 'Name must be less than 50 characters',
      ],
      description: [
        v => (v.length <= 250) || 'Description must be less than 50 characters',
      ]
    }

  }),

}
</script>

<style>

</style>