<script lang="ts">
	import Button from './button.svelte';
	import type { IButtonRowProps } from './types.js';

	const {
		primaryButton,
		secondaryButton,
		size = 'small',
		align = 'center',
		snug = false
	}: IButtonRowProps = $props();
	const shouldRenderPrimaryButton = primaryButton !== undefined;
	const shouldRenderSecondaryButton = secondaryButton !== undefined;
	const shouldRenderButtons = shouldRenderPrimaryButton || shouldRenderSecondaryButton;
</script>

{#if shouldRenderButtons}
	<div class={align} class:snug>
		{#if shouldRenderPrimaryButton}
			<Button {...primaryButton} type="primary" {size} />
		{/if}
		{#if shouldRenderSecondaryButton}
			<Button {...secondaryButton} type="secondary" {size} />
		{/if}
	</div>
{/if}

<style>
	div {
		display: flex;
		gap: 1rem;
		width: 100%;
		max-width: 100%;
	}

	.center {
		justify-content: center;
	}
	.left {
		justify-content: flex-start;
	}
	.right {
		justify-content: flex-end;
	}

	@media (max-width: 640px) {
		div {
			flex-direction: column;
			justify-content: center;
		}
	}
	.snug {
		width: fit-content;
		min-width: fit-content;
	}
</style>
