 <div align="center">

<img src="demo/watermark.png" />
  <h2>MontiMark</h2>
  <h3>Watermark your images and include Web Monetization for payment</h3>

  https://webmonetization.org/

  <h2>
    <a href="https://nokol.net/montimark/">View Demo</a>
    </h2>

</div>

## Requirement

A Monetization provider like Coil and the Chrome plugin e.g
https://chrome.google.com/webstore/detail/coil/locbifcbeldmnphbgkdigjmkbfkhbnca/related?hl=en


## Install
````
npm install montimark --save
````


## Usage

```
new Montimark('.selector', 'watermarkpath.jpg');

// or with options

var options = { 
    rect: { w: 100, h: 100 }, // boundaries of the watermark
    position: { x: 20, y: 50 } // watermark position
  };

new Montimark('.selector', 'watermarkpath.jpg', options);
```

## Options


| Property    | Default               | Usage                                                                           |
| ----------- | --------------------- | ------------------------------------------------------------------------------- |
| rect        | w: null, h: null      | {  rect: { w: 100, h: 100 } }                                                   |
| position    | X: 10 , y: 10         | {  position: { x: 100, y: 100 } } OR  {  position: { x: 'left', y: 'bottom' } } |
| opacity     | 1                     | -                                                                               |
| crossOrigin | '*'                   | -                                                                               |
| loader      | Gray ghost background | { loader : 'loader.gif' }                                                       |

## Run code
You can test demonetizion on the demo Page
```
git clone https://github.com/domEscobar/montimark
npm run install
npm run start
```

## Todo
Clean the code


## Contributing

PR's and issues are welcome:
[https://github.com/domEscobar/montimark/issues](https://github.com/domEscobar/montimark/issues)
