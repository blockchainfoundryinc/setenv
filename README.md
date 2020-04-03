
# setenv
  
A node script for converting a .json file into a single-line string for use with 
[dotenv](https://www.npmjs.com/package/dotenv). 

The script will take the path to the JSON file as a parameter and will then stringify it, and write
it to a `.env` file adjacent to where the script was run. The contents of the file will be `CONFIG="...json"`.
You can use `JSON.parse(process.env.CONFIG)` to access the config as a JS object.

## Installation  

`npm i -s https://github.com/blockchainfoundryinc/setenv` 
  
## Usage 

1. Create a JSON config file you wish to use as the basis for your environmental variable. ie: `./my_config.json`.
2. (recommended) Create a npm script to make using `setenv` easy. `"setenv": "node node_modules/setenv"`.
3. Run the script passing a `CONFIG_JSON` environmental variable so the script knows which JSON file to convert
and write to `.env`: `CONFIG_JSON='./my_config.json' npm run setenv`.
  
**Environmental Parameters:**  
`CONFIG_JSON` - Path to the JSON file to stringify and write to `.env` as env var `CONFIG`.

## Contributing  
  
Please submit all updates and improvements via pull request.
