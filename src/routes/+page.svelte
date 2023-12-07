<script lang="ts">
	import { PUBLIC_DOMAIN } from '$env/static/public';
	import p5 from 'p5';

	let current_spot: ArduinoData = { x: 0, y: 0 };
	let last_spot: ArduinoData = { x: 0, y: 0 };

	const sketch = (p: p5) => {
		p.setup = () => {
			const canvas = p.createCanvas(p.windowWidth, p.windowHeight);
			p.colorMode(p.HSB);
			p.background(0);
			p.stroke(255);
			p.strokeWeight(20);
		};

		p.draw = async () => {
			await update_data();

			const hue = (Math.sin(p.frameCount / 40) + 1) * 125;
			p.stroke(hue, 255, 127);
			const line_length = p.dist(last_spot.x, last_spot.y, current_spot.x, current_spot.y);
			// if (line_length < 20) current_spot = last_spot;
			p.strokeWeight(350 / line_length);

			const { x: x1, y: y1 } = convert_cor(last_spot.x, last_spot.y);
			const { x: x2, y: y2 } = convert_cor(current_spot.x, current_spot.y);

			p.fill(255);
			p.line(x1, y1, x2, y2);
			// p.background(0, 0.002);
		};

		const convert_cor = (x: number, y: number) => {
			return { x: p.windowWidth / 2 - x, y: y + p.windowHeight / 2 };
		};

		async function update_data() {
			last_spot = current_spot;
			const data = await fetch(`${PUBLIC_DOMAIN}/api/data`).then((res) => res.json());
			current_spot = data;
			console.log(data);
		}
	};

	new p5(sketch);
</script>
