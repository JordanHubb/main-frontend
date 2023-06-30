<template>
  <div class="container-fluid">
    <partylist-overview :partyitem="this.partylist"></partylist-overview>
  </div>
</template>

<script>
import PartylistOverview from "@/components/PartylistOverview.vue";
export default {

  name: 'Partylist',
 components: { PartylistOverview},
  data() {
    return {
      partylist: []
    }
  },
  methods: {
    addParty (partyLocation) {
      const endpoint = process.env.VUE_APP_BACKEND_BASE_URL + partyLocation
      const requestOptions = {
        method: 'GET',
        redirect: 'follow'
      }
      fetch(endpoint, requestOptions)
          .then(response => response.json())
          .then(partyitem => this.partylist.push(partyitem))
          .catch(error => console.log('error', error))
    }
  },
  mounted() {
    console.log('test')
    const endpoint = process.env.VUE_APP_BACKEND_BASE_URL + '/api/v1/party'
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    }
    fetch(endpoint, requestOptions)
        .then(response => response.json())
        .then(result => result.forEach(partyitem => {
          this.partylist.push(partyitem)
        }))
        .catch(error => console.log('error', error))
  }
}
</script>
<style scoped>
</style>
