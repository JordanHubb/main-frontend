<template>
  <div class="partyLogo">
  <img src="../assets/dance.jpeg" className="head-img-top">
  </div>
  <div class="container">
    <h1 class="title"> Erstelle deine Partyliste </h1>
  <table className="table" bgcolor="#D4DDD3">
    <table className="col"></table>
    <thead>
    <tr>
      <th scope="col"><font color="#E1B772">Name</font></th>
      <th scope="col"><font color="#E1B772">Getränk</font></th>
      <th scope="col"><font color="#E1B772">Speise</font></th>
      <th scope="col"><font color="#E1B772">Track</font></th>
      <th scope="col"><font color="#E1B772">Party Zubehör</font></th>
      <th scope="col"><font color="#E1B772">Preis</font></th>
      <th scope="col"><font color="#E1B772">Besorgt?</font></th>
    </tr>
    </thead>
    <tbody>
    <tr v-for="partyItem in partylist" :key="partyItem.id">
      <td>{{ partyItem.name }}</td>
      <td>{{ partyItem.drinks }}</td>
      <td>{{ partyItem.food }}</td>
      <td>{{ partyItem.track }}</td>
      <td>{{ partyItem.supplies }}</td>
      <td>{{ partyItem.price }}</td>
      <td>{{ partyItem.brought ? 'Got it' : 'Still pending' }}</td>
      <button class="btn" type="submit"  @click="deletePartyitem(partyItem.id)" :key="partyItem.id" style="font-size: small">
        <i class="fas fa-trash"></i>
      </button>
    </tr>
    </tbody>
  </table>
    <partylist-create-form> </partylist-create-form>
  </div>
</template>

<script>
import PartylistCreateForm from "@/components/PartylistCreateForm"
export default {
  components: {PartylistCreateForm},
  name: "PartylistOverview",
  data () {
    return {
      partylist:[]
    }
  },
  mounted() {
    console.log('partyitem')
    const endpoint = process.env.VUE_APP_BACKEND_BASE_URL + '/api/v1/party'
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    }

    fetch(endpoint, requestOptions)
        .then(response => response.json())
        .then(result => result.forEach(partyItem => {
          this.partylist.push(partyItem)
        }))
        .catch(error => console.log('error', error))
  },
  methods: {
    deletePartyitem (id) {
      const requestOptions = {
        method: 'DELETE',
        redirect: 'follow'
      }

      fetch('http://localhost:8080/api/v1/party/' + id, requestOptions)
          .then(response => response.text())
          .then(result => console.log(result))
          .then(() => location.reload())
          .catch(error => console.log('error', error))
    }
  }

}
</script>

<style scoped>
.container {
  border-style: solid;
  border-width: 10px;
  border-color: #B6B8AD;
  display: flex;
  flex-direction: column;
}
.title{
  padding-top: 50px;
  padding-bottom: 50px;
  font-family: "Helvetica";
}
.ballonLogo{
  display: flex;
  width: 400px;
  height: 240px;
}

</style>
