/**
 * Abstract Class ViewComponent
 * Used as a type of interface for the view components
 *
 * @class ViewComponent
 */
export default class ViewComponent {
  constructor() {
    if (this.constructor === ViewComponent) {
      throw new Error("Abstract classes can't be instantiated.");
    }
    this.htmlElem = null;
  }

  createHtmlElem = () => {
    throw new Error('Method "createElem()" must be implemented.');
  };

  render = (parentElemId) => {
    this.appendToParent(document.getElementById(parentElemId));
  };

  appendToParent = (parentElem) => {
    if (!this.htmlElem) {
      this.htmlElem = this.createHtmlElem();
      parentElem.appendChild(this.htmlElem);
    }
  };

  remove = () => {
    this.htmlElem?.remove();
    this.htmlElem = null;
  };
}
