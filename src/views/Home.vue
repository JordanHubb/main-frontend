<template>
  <div class="home">
    <HelloWorld msg="Partytime!"/>
    <p></p>
    <p></p>
    <p></p>
    <p></p>
    <div class="animalsLogo">
      <img src="../assets/animals.png" className="head-img-top" alt="animals" align="middle">
    </div>


  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
export default {
  name: 'Home',
  components: {
    HelloWorld
  }
}
</script>
<style>
</style>
