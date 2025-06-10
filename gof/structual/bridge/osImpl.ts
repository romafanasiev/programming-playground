// Abstraction
interface OS {
  runApp(app: string): void;
}

// Concrete Abstractions
class MacOS implements OS {
  runApp(app: string) {
    console.log(`Running ${app} on macOS.`);
  }
}

class Windows implements OS {
  runApp(app: string) {
    console.log(`Running ${app} on Windows.`);
  }
}

// Bridge
interface Device {
  os: OS;
  openApp(app: string): void;
}

// Concrete Implementations
class Desktop implements Device {
  os: OS;

  constructor(os: OS) {
    this.os = os;
  }

  openApp(app: string) {
    this.os.runApp(app);
  }
}

class Laptop implements Device {
  os: OS;

  constructor(os: OS) {
    this.os = os;
  }

  openApp(app: string) {
    this.os.runApp(app);
  }
}

// Usage
const macos = new MacOS();
const windows = new Windows();

const desktop = new Desktop(macos);
desktop.openApp('Photoshop');

const laptop = new Laptop(windows);
laptop.openApp('Notepad');
