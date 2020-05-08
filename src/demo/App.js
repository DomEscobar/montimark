import './css/App.css';
import Lib from './../lib';

class App {
  constructor() {
    new Lib('.test', 'watermark.png', { rect: { w: 100, h: 100 }, position: { x: 20, y: 50 } });
  }


}

export default App;
