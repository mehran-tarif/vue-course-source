<template>
	<button class="btn btn-secondary mr-1" @click="addCounter">{{counter}}</button>
</template>

<script>
	export default {
		name: "Counter",
		data() {
			return {
				counter: 0
			}
		},
		methods: {
			addCounter() {
				this.counter++
				this.$emit("addTotalCounter")
			}
		}
	}
</script>