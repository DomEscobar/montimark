import './css/App.css';
import Lib from './../lib';

class App {
  constructor() {
    new Lib('.test', 'watermark.png', { loader: 'loader.gif', opacity: 1, rect: { w: 120, h: 80 }, position: { x: 'right', y: 'bottom' } });
  }


}

export default App;
