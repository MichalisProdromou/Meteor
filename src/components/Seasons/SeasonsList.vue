<template>
  <v-data-table
    :key="1"
    :items="seasons"
    :headers="headers"
    :items-per-page="-1">
  </v-data-table>
</template>

<script>
export default {
  name: "SeasonsList",
  props: ["seasons"],
  data: () => ({
    headers: [
      {
        text: 'Full name',
        align: 'left',
        value: 'name',
      },
      {
        text: 'Phone no.',
        align: 'left',
        value: 'phone',
      },
      {
        text: 'Email',
        align: 'left',
        value: 'email',
      },
    ]
  })
  

}
</script>

<style>

</style>