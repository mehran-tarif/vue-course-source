<template>
	<div class="modal-wrapper position-fixed w-100 h-100 d-flex align-items-center justify-content-center">
		<div class="mymodal p-4">
			<h1 class="text-center">Hello</h1>
			<hr>
			<p class="mb-0 text-justify">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
			tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
			quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
			consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
			cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
			proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
		</div>
	</div>
</template>

<script>
	export default {
		name: "Modal",
	}
</script>

<style>
	.modal-wrapper {
		top: 0;
		left: 0;
		background-color: #00000082;
		z-index: 2;
	}

	.mymodal {
		background: #fff;
		width: 500px;
		border-radius: 5px;
		margin-bottom: 200px;
	}
</style>