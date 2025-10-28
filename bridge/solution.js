class OSWindows {
    renderFormat(format) {
        console.log(`Reproduzindo ${format} no Windows`)
    }
}

class OSLinux {
    renderFormat(format) {
        console.log(`Reproduzindo ${format} no Linux`)
    }
}

class Format {
  constructor(renderer) {
    this.renderer = renderer;
  }
}


class Audio extends Format {
    play() {
        this.renderer.renderFormat("Audio")
    }
}

class Video extends Format {
    play() {
        this.renderer.renderFormat("Video")
    }
}

const windows = new OSWindows();
const linux = new OSLinux();

const audioWindows = new Audio(windows)
audioWindows.play()
const audioLinux = new Audio(linux)
audioLinux.play()

const videoWindows = new Video(windows)
videoWindows.play()

const videoLinux = new Video(linux)
videoLinux.play()