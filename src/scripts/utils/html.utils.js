export const createHtmlElement = ({
  tag, className, id, style, text,
}) => {
  const elem = document.createElement(tag);
  if (className) {
    elem.className = className;
  }

  if (id) {
    elem.id = id;
  }

  if (style) {
    Object.keys(style).forEach((propKey) => {
      elem.style[propKey] = style[propKey];
    });
  }

  if (text) {
    const textNode = document.createTextNode(text);
    elem.appendChild(textNode);
  }

  return elem;
};

export const addClassToHtmlElement = (htmlElement, className) => {
  htmlElement.classList.add(className);
};

export const removeClassFromHtmlElement = (htmlElement, className) => {
  if (htmlElement.classList.contains(className)) {
    htmlElement.classList.remove(className);
  }
};
