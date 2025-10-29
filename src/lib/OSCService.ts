export interface OSCMessage {
	parameter?: string;
	address: string;
	message: string[] | number[];
}

export class OSCService {
	private socket: WebSocket;

	constructor(socket: WebSocket) {
		this.socket = socket;
	}

	sendMessage(OSCMessage: OSCMessage): void {
		const oscMessage: OSCMessage = {
			parameter: OSCMessage.parameter,
			address: OSCMessage.address,
			message: OSCMessage.message
		};
		try {
			this.socket.send(JSON.stringify(oscMessage));
		} catch (error) {
			console.error('Error sending OSC message:', error);
		}
	}
}
