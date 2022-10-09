<template>
    <Wrapper />
</template>

<script>
import Wrapper from './components/Wrapper.vue'

export default {
  name: 'App',
  components: {
    Wrapper
  },
   
}
</script>

<style>

#app {
  max-width: 1600px;
  margin: 0% auto;
  background-color: var(--background-color-primary);
}
:root {
  --header-color: #7963e9;
  --loader-color: #0d0522;
  --background-color-primary: #ebebeb;
  --background-color-secondary: #fafafa;
  --accent-color: #cacaca;
  --text-primary-color: #222;
  --element-size: 4rem;
}

/* Define styles for the root window with dark - mode preference */
:root.dark-theme {
  --header-color: #130943;
  --background-color-primary: #1e1e1e;
  --background-color-secondary: #2d2d30;
  --accent-color: #3f3f3f;
  --loader-color: #c5b0f4;
  --text-primary-color: #ddd;
}
</style>
