# svelte-osc

A lightweight Svelte library for sending OSC (Open Sound Control) messages over WebSocket connections. Designed for use with TouchDesigner and other OSC-compatible applications.

## Installation

```bash
npm install svelte-osc
```

## Features

- Simple, type-safe OSC message sending over WebSocket
- Built for Svelte 5+
- Minimal dependencies
- TypeScript support included

## Usage

### Basic Example

```typescript
import { OSCService } from 'svelte-osc';

// Create a WebSocket connection
const socket = new WebSocket('ws://localhost:7000');

// Initialize the OSC service
const oscService = new OSCService(socket);

// Wait for connection to open
socket.addEventListener('open', () => {
	// Send an OSC message
	oscService.sendMessage({
		address: '/synth/frequency',
		message: [440]
	});
});
```

### With Parameters

```typescript
oscService.sendMessage({
	parameter: 'volume',
	address: '/audio/mixer',
	message: [0.75, 0.85]
});
```

## API

### `OSCService`

The main class for sending OSC messages.

#### Constructor

```typescript
constructor(socket: WebSocket)
```

Creates a new OSCService instance with the provided WebSocket connection.

#### Methods

##### `sendMessage(message: OSCMessage): void`

Sends an OSC message through the WebSocket connection.

### `OSCMessage`

Interface for OSC messages.

```typescript
interface OSCMessage {
	parameter?: string; // Optional parameter name
	address: string; // OSC address (e.g., '/synth/frequency')
	message: string[] | number[]; // Message payload (array of strings or numbers)
}
```

## TouchDesigner Integration

This library is particularly useful when working with TouchDesigner's WebSocket DAT. Configure TouchDesigner to receive WebSocket messages in JSON format matching the OSCMessage structure.

## Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Run tests
npm test

# Build library
npm run build
```

## Requirements

- Svelte 5.0.0 or higher

## License

MIT
