<template>
	<div class="modal-wrapper position-fixed w-100 h-100 d-flex align-items-center justify-content-center">
		<div class="mymodal p-4">
			<slot></slot>
			<hr>
			<div class="text-center">
				<slot name="links"></slot>
			</div>
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