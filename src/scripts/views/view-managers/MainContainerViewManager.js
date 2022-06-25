import { BLURRED_STATE_CLASS } from '../../data/global-classes.data.js';
import { addClassToHtmlElement, removeClassFromHtmlElement } from '../../utils/html.utils.js';
import ViewManager from './ViewManager.js';

export default class MainContainerViewManager extends ViewManager {
  blur() {
    addClassToHtmlElement(this.htmlElem, BLURRED_STATE_CLASS);
  }

  unblur() {
    removeClassFromHtmlElement(this.htmlElem, BLURRED_STATE_CLASS);
  }
}
