import { BLURRED_STATE_CLASS } from '../../data/global-classes.data.js';
import ViewManager from './ViewManager.js';

export default class MainContainerViewManager extends ViewManager {
  blur() {
    this.htmlElem.classList.add(BLURRED_STATE_CLASS);
  }

  unblur() {
    if (this.htmlElem.classList.contains(BLURRED_STATE_CLASS)) {
      this.htmlElem.classList.remove(BLURRED_STATE_CLASS);
    }
  }
}
