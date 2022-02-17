<template>
  <Navbar/>
  <router-view></router-view>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Navbar from "./components/Navbar";
import UserList from "./components/UserList";

export default {
  name: 'App',
  components: {
    UserList,
    Navbar,
    HelloWorld
  }
}
</script>

