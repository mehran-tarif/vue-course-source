<template>
  <div class="container my-3">
    <h1>{{ title }}</h1>

    <Alert :msg="msg1" type="success" />
    <Alert :msg="msg2" type="warning" />
  </div>
</template>

<script>
  import Alert from './components/Alert'

  export default {
    name: "App",
    components: { Alert },
    data() {
      return {
        title: "Hello Vue form JS",
        msg1: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        msg2: "Hello MSG from Data!",
      }
    }
  }
</script>