<template>
  <div class="container my-3">
    <h1>{{ title }}</h1>

    <Alert type="success">

      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      
      <template v-slot:links>
          <button class="btn btn-danger mr-1">Google</button>
          <button class="btn btn-warning mr-1">Bing</button>
      </template>
      
    </Alert>

    <Alert type="danger">
      {{msg2}}

      <template v-slot:links>
          <button class="btn btn-success mr-1">Click</button>
      </template>

    </Alert>

    <button class="btn btn-primary">{{totalCounter}}</button>

    <br>
    <br>

    <Counter @addTotalCounter="totalCounter++" />
    <Counter @addTotalCounter="totalCounter++" />
    <Counter @addTotalCounter="totalCounter++" />
    <Counter @addTotalCounter="totalCounter++" />
    <Counter @addTotalCounter="totalCounter++" />
    <Counter @addTotalCounter="totalCounter++" />
    <Counter @addTotalCounter="totalCounter++" />

  </div>
</template>

<script>
  import Alert from './components/Alert'
  import Counter from './components/Counter'

  export default {
    name: "App",
    components: { Alert, Counter },
    data() {
      return {
        title: "Hello Vue form JS",
        msg1: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        msg2: "Hello MSG from Data!",
        totalCounter: 0
      }
    }
  }
</script>