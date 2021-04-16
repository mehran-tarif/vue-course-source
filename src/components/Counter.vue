<template>
	<button class="btn btn-secondary mr-1" @click="counter++">{{counter}}</button>
</template>

<script>
	export default {
		name: "Counter",
		data() {
			return {
				counter: 0
			}
		}
	}
</script>