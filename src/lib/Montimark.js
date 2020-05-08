class Montimark {

  configurations = {
    rect: {
      w: null,
      h: null,
    },
    position: {
      x: 10,
      y: 10,
    }
  }

  orginals = [];

  /**
   * Creates an instance of Montimark.
   * @param {string} selector css selector to the image element
   * @param {string} watermarkPath image path
   * @param {watermarkSpec} [param=null] configurations, lookup on top
   * @memberof Montimark
   */
  constructor(selector, watermarkPath, param = null) {
    const elements = document.querySelectorAll(selector);

    param && this.handleParams(param);

    this.showOriginals = this.showOriginals.bind(this);
    this.markImages = this.markImages.bind(this);
    this.watermark = this.watermark.bind(this);

    this.loadImage(watermarkPath).then(watermarkImg => {
      this.markImages(elements, watermarkImg);
    })


    if (document.monetization) {
      document.monetization.addEventListener('monetizationstart', () => {
        this.showOriginals(elements);
      })
    }
  }

  showOriginals(elements) {
    const me = this;

    elements.forEach(img => {
      const originalImg = me.orginals.find(o => o.id === img.getAttribute('markId'))

      if (originalImg) {
        img.src = originalImg.src;
      }
    })
  }

  markImages(elements, watermarkImg) {
    const me = this;

    elements.forEach(img => {
      if (img instanceof HTMLImageElement) {
        const uid = this.randomUid();

        me.orginals.push({ id: uid, src: img.src });
        let canvas = this.drawImage(img);
        canvas = this.watermark(canvas, watermarkImg);
        img.src = this.dataUrl(canvas);
        img.setAttribute('markId', uid);
      }
    })
  }

  loadImage(url) {
    const img = new Image();
    return new Promise(resolve => {
      img.onload = () => resolve(img)
      img.src = url;
    });
  }

  drawImage(img) {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = img.width;
    canvas.height = img.height;
    ctx.drawImage(img, 0, 0, img.width, img.height);
    return canvas;
  }

  watermark(canvas, img) {
    const ctx = canvas.getContext('2d');

    ctx.drawImage(img,
      this.configurations.position.x,
      this.configurations.position.y,
      this.configurations.rect.w || img.width,
      this.configurations.rect.h || img.height);
    return canvas;
  }

  dataUrl(canvas, parameters = { type: 'image/png', encoderOptions: 0.92 }) {
    return canvas.toDataURL(parameters.type, parameters.encoderOptions);
  }

  randomUid() {
    return Math.random().toString(36).substring(2) + Date.now().toString(36);
  }

  handleParams(newconfig) {
    this.configurations.rect = newconfig.rect || this.configurations.rect;
    this.configurations.position = newconfig.position || this.configurations.position;
  }
}

export default Montimark;