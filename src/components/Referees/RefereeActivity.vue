<template>
  <v-row>
  <v-col sm="12">
    <v-data-table
      class="elevation-3"
      :items="refereeActivities"
      :headers="headers"
      :options="tableOptions"
      hide-default-footer
    >
    </v-data-table>
  <!-- <v-card>
    <v-card-text>
      Activity
    </v-card-text>
  </v-card> -->
  </v-col>
  </v-row>
</template>

<script>
export default {
  name: "RefereeActivity",
  props: ["referee"],
  data(){
    return {
      tableOptions: {
        itemsPerPage: -1,
        sortBy: ["date"]
      },
      refereeActivities: [
        {
          role: "Referee",
          date: "02/10/2019",
          teamA: "Promitheas",
          teamB: "Chrysomilia",
          score: "2-5"
        },
        {
          role: "Linesman",
          date: "05/08/2019",
          teamA: "Kouklia",
          teamB: "Saint George",
          score: "5-5"
        },
        {
          role: "Referee",
          date: "14/07/2019",
          teamA: "Anagennisi",
          teamB: "Geroskipou",
          score: "1-1"
        },
        {
          role: "Referee",
          date: "07/09/2019",
          teamA: "Mandria",
          teamB: "Timi",
          score: "3-0"
        }
      ],
      headers: [
      {
        text: 'Date',
        align: 'left',
        value: 'date',
        sortable: true,
        class: "body-1 font-weight-bold light-blue lighten-5"
      },
      {
        text: 'Role',
        align: 'left',
        value: 'role',
        sortable: true,
        class: "body-1 font-weight-bold light-blue lighten-5"
      },      
      {
        text: 'Home',
        align: 'left',
        value: 'teamA',
        sortable: true,
        class: "body-1 font-weight-bold light-blue lighten-5"
      },
      {
        text: 'Away',
        align: 'left',
        value: 'teamB',
        sortable: true,
        class: "body-1 font-weight-bold light-blue lighten-5"
      },
      {
        text: 'Score',
        align: 'left',
        value: 'score',
        sortable: false,
        class: "body-1 font-weight-bold light-blue lighten-5"
      },
    ]

    }
  }
}
</script>

<style>

</style>