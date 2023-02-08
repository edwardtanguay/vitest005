import app from './app.js';
import * as config from './config.js';

// TODO: find a way place the Vitest tests in /src, currently results in tsconfig.json errors

app.listen(config.port, () => {
	console.log(`listening on port http://localhost:${config.port}`);
});