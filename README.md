 <div align="center">

  <h2>MontiMark</h2>
  <blockquote>Watermark your images + Web Monetization for payment</blockquote>

</div>

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

## Todo
Clean th code


## Contributing

PR's and issues are welcome:
[https://github.com/domEscobar/montimark/issues](https://github.com/domEscobar/montimark/issues)