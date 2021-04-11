<template>
	<div class="alert" :class="`alert-` + type">
		{{msg}}
	</div>
</template>

<script>
  export default {
    name: "Alert",
    props: ["msg", "type"],
  }
</script>