export default class Hello {
  soundEuphonium: () => void;

  constructor() {
    this.soundEuphonium = () => console.log('Sound! Euphonium');
  }
}
