<script lang="ts">
	import { PUBLIC_DOMAIN } from '$env/static/public';
	import * as THREE from 'three';

	import { T } from '@threlte/core';
	import { AutoColliders } from '@threlte/rapier';

	let rotation = [0, 0, 0];

	let colliders;

	setInterval(async () => {
		const data = await fetch(`${PUBLIC_DOMAIN}/api/data`).then((res) => res.json());
		rotation = [data.x / 1000, 0, -data.y / 1000];

		const quaternion = new THREE.Quaternion().setFromEuler(new THREE.Euler(...rotation, 'XYZ'));

		colliders.forEach((collider) => {
			collider.setRotation(quaternion);
		});
	}, 1000 / 60);
</script>

<T.Group position={[0, -0.5, 0]}>
	<AutoColliders shape={'cuboid'} bind:colliders>
		<T.Mesh receiveShadow {rotation}>
			<T.BoxGeometry args={[6, 0.5, 15]} />
			<T.MeshStandardMaterial color="yellow" />
		</T.Mesh>
	</AutoColliders>
</T.Group>
