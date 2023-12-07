<script lang="ts">
	import { Canvas } from '@threlte/core';
	import { World } from '@threlte/rapier';
	import Scene from './Scene.svelte';
</script>

<div id="main">
	<Canvas>
		<World>
			<Scene />
		</World>
	</Canvas>
</div>

<style>
	#main {
		width: 100vw;
		height: 100vh;
		background-color: black;
	}
</style>
