<template>
	<div class="alert alert-dismissible" :class="`alert-` + type" v-show="status">
	
		<slot></slot>

		<div class="links mt-3">
			<slot name="links"></slot>
		</div>

		<button class="close" @click="status=false">
			<span>&times;</span>
		</button>
	</div>
</template>

<script>
  export default {
    name: "Alert",
    props: ["type"],
    data () {
    	return {
    		status: true
    	}
    }
  }
</script>