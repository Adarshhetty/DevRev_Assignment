## Hello World Snap In

This repository contains a snap-in which prints hello world

For more reference on Snap-Ins, please refer to the [documentation](https://github.com/devrev/snap-in-docs)

### Getting started with the template
1. The first step is to initialize a starter template for creating a snap-in
Run the below command and later install the packages
```
devrev snap_in_version init
```
```
npm install
```

2. To run (*.ts) files, in case your system does not have typescript you can install it globally using following command
```
npm install -g typescript

```
3. Navigate to code/src/functions/hello_world and run index.ts file
```
tsc index.ts
```
4. Then run the generated Javascript file 

```
node index.js
```

### Testing locally
***Note: Make sure you import hello world module into the function-factory.ts***
Once you have added the event, you can test your code by running:
```
npm run start -- --functionName=hello_world --fixturePath=hello_world.json
```
