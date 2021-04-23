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

    <br>
    <br>

    <button class="btn btn-success" @click="statusModal1 = true">Open Modal 1</button>

    <Modal :status="statusModal1" @closeModal="statusModal1=false">
      <h1 class="text-center">Hello</h1>
      <hr>
      <p class="mb-0 text-justify">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
      quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
      consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
      cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
      proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

      <template v-slot:links>
        <button class="btn btn-success mr-1" @click="statusModal1=false">Accept</button>
        <button class="btn btn-danger" @click="statusModal1=false">Deny</button>
      </template>
    </Modal>

    <br>
    <br>

    <button class="btn btn-warning" @click="statusModal2 = true">Open Modal 2</button>

    <Modal :status="statusModal2" @closeModal="statusModal2=false">
      <h1 class="text-center">Warning</h1>
      <hr>
      <p class="mb-0 text-justify">Are You OK?</p>

      <template v-slot:links>
        <button class="btn btn-success mr-1" @click="statusModal2=false">Yes</button>
        <button class="btn btn-danger" @click="statusModal2=false">No</button>
      </template>
    </Modal>

  </div>
</template>

<script>
  import Alert from './components/Alert'
  import Counter from './components/Counter'
  import Modal from './components/Modal'

  export default {
    name: "App",
    components: { Alert, Counter, Modal },
    data() {
      return {
        title: "Hello Vue form JS",
        msg1: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        msg2: "Hello MSG from Data!",
        totalCounter: 0,
        statusModal1: false,
        statusModal2: false,
      }
    }
  }
</script>