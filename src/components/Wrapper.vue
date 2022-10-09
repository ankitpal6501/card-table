<template>
    <div id="container">
      <Header/>
      <router-view></router-view>
    </div>
  </template>
  
  <script>
  import Header from "./Header.vue";
  export default {
    name: "Wrapper",
    components: {
      Header,
    },
  };
  </script>
  <style scoped>
  #container {
    display: flex;
    flex-direction: column;
  }
  </style>
  