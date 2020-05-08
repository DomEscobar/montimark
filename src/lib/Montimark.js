class Montimark {

  orginals = [];

  constructor(selector, watermarkPath) {
    const elements = document.querySelectorAll(selector);

    this.showOriginals = this.showOriginals.bind(this);
    this.markImages = this.markImages.bind(this);

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
    ctx.drawImage(img, 0, 0);
    return canvas;
  }

  watermark(canvas, img) {
    const ctx = canvas.getContext('2d');

    ctx.drawImage(img, 10, 10);
    return canvas;
  }

  dataUrl(canvas, parameters = { type: 'image/png', encoderOptions: 0.92 }) {
    return canvas.toDataURL(parameters.type, parameters.encoderOptions);
  }

  randomUid() {
    return Math.random().toString(36).substring(2) + Date.now().toString(36);
  }
}

export default Montimark;