<template>
  <div class="home">
    <HelloWorld msg="Zeit für eine Party!!!"/>
    <p></p>
    <p></p>
    <p></p>
    <p></p>
    <div class="partyLogo">
      <img src="../assets/party.png" className="head-img-top" alt="animals" align="middle">
    </div>


  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
export default {
  name: 'Home',
  components: {HelloWorld}
}
</script>
<style>
</style>
