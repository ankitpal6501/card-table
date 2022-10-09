<template>
    <div class="header-top">
      <router-link to="/">Data Table</router-link>
      <router-link to="/datacards">Data Cards</router-link>
      <ThemeButton/>
    </div>
  </template>
  
  <script>
  import ThemeButton from "@/components/ThemeButton.vue";
  export default {
    name: "Header",
    components:{
        ThemeButton 
    }
  };
  </script>
  <style scoped>
  .header-top{
    width: 100%;
    text-align: end;
    height: 47px;
    background-color: var(--header-color);
  }
 .header-top a{
    text-decoration: none;
    color: var(--text-primary-color);
    margin: 0px 20px;
 }
  </style>
  