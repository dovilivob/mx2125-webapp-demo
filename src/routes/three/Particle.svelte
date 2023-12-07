<script lang="ts">
	import { T } from '@threlte/core';
	import { PositionalAudio } from '@threlte/extras';
	import { Collider, RigidBody, type ContactEvent, AutoColliders } from '@threlte/rapier';
	import { writable } from 'svelte/store';
	import type { Euler, Vector3 } from 'three';
	import { SphereGeometry, MeshStandardMaterial } from 'three';
	import { clamp } from 'three/src/math/MathUtils';

	const colorlist = ['red', 'blue', 'green', 'orange', 'purple', 'pink', 'cyan'];

	function get_material() {
		return new MeshStandardMaterial({
			color: colorlist[Math.floor(Math.random() * colorlist.length)]
		});
	}

	function get_geometry() {
		return new SphereGeometry(Math.random() / 2 + 0.7, 32, 32);
	}

	export let position: Vector3 | undefined = undefined;
	export let rotation: Euler | undefined = undefined;

	$: rotationCasted = rotation?.toArray() as [x: number, y: number, z: number];
</script>

<T.Group position={position?.toArray()} rotation={rotationCasted}>
	<RigidBody type={'dynamic'}>
		<AutoColliders shape={'ball'} restitution={0.4} contactForceEventThreshold={30}>
			<T.Mesh castShadow receiveShadow geometry={get_geometry()} material={get_material()} />
		</AutoColliders>
	</RigidBody>
</T.Group>
