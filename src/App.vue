<template>
  <div class="container my-3">
    <h1>{{ title }}</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

    <Alert />
    <Alert />
    <Alert />
    <Alert />
    <Alert />
  </div>
</template>

<script>
  import Alert from './components/Alert'

  export default {
    name: "App",
    components: { Alert },
    data() {
      return {
        title: "Hello Vue form JS"
      }
    }
  }
</script>