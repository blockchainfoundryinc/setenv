const fs = require('fs');

if (!process.env.CONF_JSON) {
    throw new Error('No CONF_JSON environmental variable set! Exiting.');
}
console.log('Creating env file from JSON file:', process.env.CONF_JSON);
let rawdata = fs.readFileSync(process.env.CONF_JSON, {}).toString('utf8');
console.log(rawdata);
let data = JSON.parse(rawdata);
let env = `CONFIG="${JSON.stringify(data)}"`;
console.log('Writing .env:');
console.log(env);
fs.writeFileSync('.env', env);
