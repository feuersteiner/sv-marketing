<script lang="ts">
	import type { ITitleProps } from '../types.js';

	const { title, align = 'center' }: ITitleProps = $props();
</script>

<h2 class={align}>{title}</h2>

<style>
	h2 {
		all: unset;
		width: 100%;
		font-size: 3rem;
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
		h2 {
			font-size: 2.5rem;
		}
	}

	@media (max-width: 480px) {
		h2 {
			font-size: 2rem;
		}
	}
</style>
