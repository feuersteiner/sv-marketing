<script lang="ts">
	import type { ITitleProps } from '$lib/shared/types.js';

	const { title, align = 'center' }: ITitleProps = $props();
</script>

<h1 class={align}>{title}</h1>

<style>
	h1 {
		all: unset;
		text-align: center;
		font-size: 4rem;
		width: 100%;
	}
	.left {
		text-align: left;
	}
	.right {
		text-align: right;
	}
	.center {
		text-align: center;
	}

	@media (max-width: 768px) {
		h1 {
			font-size: 3rem;
		}
	}

	@media (max-width: 480px) {
		h1 {
			font-size: 2.25rem;
		}
	}
</style>
