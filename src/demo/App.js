import './css/App.css';
import Lib from './../lib';

class App {
  constructor() {
    new Lib('.test', 'watermark.png', { rect: { w: 220, h: 80 }, position: { x: 20, y: 50 } });
  }


}

export default App;
