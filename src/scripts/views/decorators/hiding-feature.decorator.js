/* eslint-disable func-names */
import { HIDDEN_STATE_CLASS } from '../../data/global-classes.data.js';
import { addClassToHtmlElement, removeClassFromHtmlElement } from '../../utils/html.utils.js';

const addHidingFeatureToView = (viewObj) => {
  viewObj.hide = function () {
    if (this.htmlElem) {
      addClassToHtmlElement(this.htmlElem, HIDDEN_STATE_CLASS);
    }
  };
  viewObj.show = function () {
    if (this.htmlElem) {
      removeClassFromHtmlElement(this.htmlElem, HIDDEN_STATE_CLASS);
    }
  };
};

export default addHidingFeatureToView;
