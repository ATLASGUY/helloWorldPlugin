# Hello World Plugin

## Install & Usage
You can directly download it through KeeeX Plugins Manager.
It's the KeeeX Hello World plugin.

This is a simple plugin. It will request authorisation for the API, then display your name.

## Development setup

You'll need :
* nodejs 4.X
* nw.js 0.12.3
* Grunt

```bash
git clone https://github.com/KeeeX/helloWorldPlugin.git
cd helloWorldPlugin
npm install
cd src
npm install
```

Now you workspace should be ready. The source code of the plugin sits in the src folder.
For your tests, you can start the plugin by giving the `src` folder directly to nwjs

When you're happy with your work, you can then `grunt build`, keeex the zip file and publish it on the plugin manager


