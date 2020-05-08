import './css/App.css';
import Lib from './../lib';

class App {
  constructor() {
    new Lib('.test', 'watermark.jpg');
  }
}

export default App;
