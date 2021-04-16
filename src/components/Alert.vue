<template>
	<div class="alert alert-dismissible" :class="`alert-` + type" v-show="status">
		{{msg}}
		<button class="close" @click="status=false">
			<span>&times;</span>
		</button>
	</div>
</template>

<script>
  export default {
    name: "Alert",
    props: ["msg", "type"],
    data () {
    	return {
    		status: true
    	}
    }
  }
</script>