// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
// import * as P5Global from 'p5/global';
// import modeul = require('p5');

declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface Platform {}
	}
	type ArduinoData = {
		x: number;
		y: number;
	};
	// namespace p5;
}

export {};
