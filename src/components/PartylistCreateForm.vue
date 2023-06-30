<template>
  <button class="btn btn-muted" type="button"
          style="margin-left:auto;margin-right:auto;"
          data-bs-toggle="offcanvas"
          data-bs-target="#partylist-create-offcanvas"
          aria-controls=#partylist-create-offcanva>
    <i class="partylist-plus-fill"></i>
    +
  </button>
  <div class="offcanvas offcanvas-bottom" tabindex="-1" id="partylist-create-offcanvas" aria-labelledby="offcanvasBottomLabel">
  <div class="offcanvas-header">
    <h5 class="offcanvas-title" id="offcanvasBottomLabel">Create another Party..</h5>
    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body small">
    <form @submit.prevent="createParty" class="row g-3">
      <div class="col-md-2">
        <label for="inputDrinks" class="form-label">Drink</label>
        <input type="drink" class="form-control" id="inputDrinks" v-model="drinks" placeholder="Write your drink here..." required>
      </div>
      <div class="col-md-2">
        <label for="inputFood" class="form-label">Food</label>
        <input type="food" class="form-control" id="inputFood" v-model="food" placeholder="Write your food here...">
      </div>
      <div class="col-md-2">
        <label for="inputTrack" class="form-label">Track</label>
        <input type="text" class="form-control" id="inputTrack" v-model="track" placeholder="Write your track here...">
      </div>
      <div class="col-md-1">
        <label for="inputSupplies" class="form-label">Supplies</label>
        <input type="text" class="form-control" id="inputSupplies" v-model="supplies" placeholder="Write your party supplie here...">
      </div>
      <div class="col-md-1">
        <label for="inputPrice" class="form-label">Price</label>
        <input type="text" class="form-control" id="inputPrice" v-model="price" placeholder="How much did it cost?">
      </div>
      <div class="col-md-2">
        <label for="inputBrought" class="form-label">Brought?</label>
        <select id="inputBrought" v-model="brought" required class="form-select">
          <option selected>Choose...</option>
          <option>Still pending</option>
          <option>Got it</option>
        </select>
      </div>
      <div class="col-12">
        <button type="button" @click="createParty" class="btn btn-dark me-3" >add to party</button>
      </div>
    </form>
  </div>
  </div>
</template>

<script>
export default {
  name: "PartylistCreateForm",
  data () {
    return {
      drinks: '',
      food: '',
      track: '',
      supplies: '',
      price:'',
      brought: false
    }
  },
  methods: {
    createParty(){
      console.log("Button pressed")
      const endpoint = process.env.VUE_APP_BACKEND_BASE_URL + '/api/v1/party'
      const headers = new Headers()
      headers.append('Content-Type', 'application/json')

      const payload = JSON.stringify({
        drinks: this.drinks,
        food: this.food,
        track: this.track,
        supplies: this.supplies,
        price:this.price,
        brought: this.brought === "Got it" ? true : false
      })

      const requestOptions = {
        method: 'POST',
        //headers: headers,
        mode: 'cors',
        headers: {
        'Content-Type': 'application/json'
        },
        body: payload
       // redirect: 'follow'
      };

      fetch(endpoint, requestOptions)
          .then((res)=> {
            console.log(payload)
            console.log("Endpoint " +endpoint)
          console.log("Res " + res)
        return res
      }).then((data)=>console.log(data))
          .catch(error => console.log('error', error))
    }
  }
}
</script>

<style scoped>

</style>
