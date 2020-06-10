class Montimark {

  configurations = {
    opacity: 1,
    crossOrigin: '*',
    rect: {
      w: null,
      h: null,
    },
    position: {
      x: 10,
      y: 10,
    },
    loader : 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACUAAAAmCAIAAADMaMX6AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAzSURBVFhH7c1BEQAwEAOh+lcZKTXB3GsxwNutPqvP6rP6rD6rz+qz+qw+q8/qs/qs22/7cqJrk6NNXs8AAAAASUVORK5CYII='
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
    this.showGhostImage = this.showGhostImage.bind(this);
    this.loadImage = this.loadImage.bind(this);

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

    for (let img of elements) {
      if (img instanceof HTMLImageElement) {
        const uid = this.randomUid();
        img.crossOrigin = '*';

        const toAdd = { id: uid, src: img.src };
        me.orginals.push(toAdd);

        this.showGhostImage(img);

        this.loadImage(toAdd.src).then(imgres => {
          img.src = toAdd.src;
          let canvas = this.drawImage(img);
          canvas = this.watermark(canvas, watermarkImg);
          img.src = this.dataUrl(canvas);
          img.setAttribute('markId', uid);
        });
      }
    }
  }

  showGhostImage(img) {
    const h = img.height;
    const w = img.width;
    img.src = this.configurations.loader;
    img.height = h;
    img.width = w;
  }

  loadImage(url) {
    const img = new Image();
    img.crossOrigin = this.configurations.crossOrigin;
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
    ctx.globalAlpha = this.configurations.opacity;

    let x = this.configurations.position.x;
    let y = this.configurations.position.y;
    const w = this.configurations.rect.w || img.width;
    const h = this.configurations.rect.h || img.height

    if (typeof this.configurations.position.x === 'string' && typeof this.configurations.position.y === 'string') {
      const height = canvas.height;
      const width = canvas.width;

      x = this.configurations.position.x === 'left' ? 10 : (width - w);
      y = this.configurations.position.y === 'top' ? 10 : (height - h);
    }

    ctx.drawImage(img, x, y, w, h);
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
    this.configurations.crossOrigin = newconfig.crossOrigin || this.configurations.crossOrigin;
    this.configurations.opacity = newconfig.opacity || this.configurations.opacity;
    this.configurations.loader = newconfig.loader || this.configurations.loader;
  }
}

export default Montimark;