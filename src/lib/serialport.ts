import { SerialPort } from 'serialport';
import { ReadlineParser } from '@serialport/parser-readline';
import { data } from '$lib/data';
import { SP_PATH as path, SP_RATE } from '$env/static/private';

const baudRate = parseInt(SP_RATE);

const parser = new ReadlineParser('\n');

export const port = new SerialPort({
	path,
	baudRate,
	parser
});

port.on('open', () => {
	console.log('serial port open');
});

port.on('data', (input_data: Buffer) => {
	const data_string: string = input_data.toString();
	// console.log(data_string);
	const [x, y] = data_string.split(',').map((value) => {
		return parseInt(value, 10);
	});
	data.x = x;
	data.y = y;
});
