import {
  action,
  makeObservable,
  observable,
  runInAction,
} from 'mobx';

class ImageSliderStore {
  currentIndex = 0;

  constructor() {
    this.currentIndex = 0;
    makeObservable(this, {
      currentIndex: observable,
      setCurrentIndex: action,
    });
  }

  setCurrentIndex(index) {
    runInAction(() => {
      this.currentIndex = index;
    });
  }
}

export default ImageSliderStore;
