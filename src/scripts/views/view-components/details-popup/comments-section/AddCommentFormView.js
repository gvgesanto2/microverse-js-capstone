import { createHtmlElement } from '../../../../utils/html.utils.js';
import ViewComponent from '../../ViewComponent.js';

export default class AddCommentFormView extends ViewComponent {
  constructor(showId, handleAddComment) {
    super();
    this.showId = showId;
    this.handleAddComment = handleAddComment;
  }

  #clearInputs = (inputElems) => {
    inputElems.forEach((inputElem) => { inputElem.value = ''; });
  }

  createHtmlElem = () => {
    const addCommentForm = createHtmlElement({
      tag: 'form',
      className: 'c-form',
    });
    addCommentForm.addEventListener('submit', (event) => {
      event.preventDefault();
      const nameInput = event.target.elements.name;
      const commentInput = event.target.elements.comment;

      this.handleAddComment({
        id: this.showId,
        username: nameInput.value,
        comment: commentInput.value,
      });

      this.#clearInputs([nameInput, commentInput]);
    });

    const addCommentFormInputGroup = createHtmlElement({
      tag: 'ul',
      className: 'c-form__input-group',
    });

    const nameInputContainer = createHtmlElement({
      tag: 'li',
      className: 'c-data-input',
    });
    const nameInput = createHtmlElement({
      tag: 'input',
      className: 'c-data-input__input',
      id: 'name-input',
    });
    nameInput.name = 'name';
    nameInput.type = 'text';
    nameInput.placeholder = 'Enter your name...';
    nameInput.ariaLabel = 'Enter your name';
    nameInput.required = true;
    const nameInputLine = createHtmlElement({
      tag: 'span',
      className: 'c-data-input__line',
    });

    const commentTextareaContainer = createHtmlElement({
      tag: 'li',
      className: 'c-data-input c-data-input--textarea',
    });
    const commentTextarea = createHtmlElement({
      tag: 'textarea',
      className: 'c-data-input__input',
      id: 'comment-textarea',
    });
    commentTextarea.name = 'comment';
    // commentTextarea.type = 'text';
    commentTextarea.rows = 1;
    commentTextarea.placeholder = 'Enter your comment...';
    commentTextarea.ariaLabel = 'Enter your comment';
    commentTextarea.required = true;
    const commentTextareaLine = createHtmlElement({
      tag: 'span',
      className: 'c-data-input__line',
    });

    const addCommentFormBtnGroup = createHtmlElement({
      tag: 'div',
      className: 'c-form__btn-group',
    });

    const cancelBtn = createHtmlElement({
      tag: 'button',
      className: 'c-btn c-btn--light',
      text: 'cancel',
    });
    cancelBtn.type = 'button';
    cancelBtn.addEventListener('click', () => {
      this.#clearInputs([nameInput, commentTextarea]);
    });

    const commentBtn = createHtmlElement({
      tag: 'button',
      className: 'c-btn c-btn--primary',
      text: 'comment',
    });
    commentBtn.type = 'submit';

    // Append the 'nameInputContainer' children
    nameInputContainer.appendChild(nameInput);
    nameInputContainer.appendChild(nameInputLine);

    // Append the 'commentTextareaContainer' children
    commentTextareaContainer.appendChild(commentTextarea);
    commentTextareaContainer.appendChild(commentTextareaLine);

    // Append the 'addCommentFormInputGroup' children
    addCommentFormInputGroup.appendChild(nameInputContainer);
    addCommentFormInputGroup.appendChild(commentTextareaContainer);

    // Append the 'addCommentFormBtnGroup' children
    addCommentFormBtnGroup.appendChild(cancelBtn);
    addCommentFormBtnGroup.appendChild(commentBtn);

    // Append the 'addCommentForm' children
    addCommentForm.appendChild(addCommentFormInputGroup);
    addCommentForm.appendChild(addCommentFormBtnGroup);

    return addCommentForm;
  };
}
