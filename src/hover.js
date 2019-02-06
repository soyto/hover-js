
const DOM_QUERYSELECTOR = '[data-hover][data-hover-target]';

class HoverPlugin {


  constructor() {
    this.mouseoverHandler = null;
    this.mouseoutHandler = null;
  }

  /**
   * Starts watching changes on the document
   */
  start() {

    //That's the mouseover handler
    this.mouseoverHandler = (evt) => {
      let elements = ancestorsMatch(evt.target, DOM_QUERYSELECTOR);

      for(let element of elements) {
        this.doMouseoverEffect(element);
      }
    };

    this.mouseoutHandler = (evt) => {
      let elements = ancestorsMatch(evt.target, DOM_QUERYSELECTOR);

      for(let element of elements) {
        this.doMouseoutEffect(element);
      }
    };

    document.addEventListener('mouseover', this.mouseoverHandler);
    document.addEventListener('mouseout', this.mouseoutHandler);
  }

  /**
   * Stop watching changes on the body
   */
  stop() {
    document.removeEventListener('mouseover', this.mouseoverHandler);
    document.removeEventListener('mouseout', this.mouseoutHandler);
  }

  /**
   * Makes that the argument element does the hover effect
   * @param element
   */
  doMouseoverEffect(element) {
    let className = element.dataset.hover;
    let selector = element.dataset.hoverTarget;

    let targets = document.querySelectorAll(selector);

    for(let target of targets) {
      target.classList.add(className);
    }
  }

  /**
   * Makes that the argument element removes the hover effect
   * @param element
   */
  doMouseoutEffect(element) {
    let className = element.dataset.hover;
    let selector = element.dataset.hoverTarget;

    let targets = document.querySelectorAll(selector);

    for(let target of targets) {
      target.classList.remove(className);
    }
  }
}

/**
 * Look through ancestors and find elements that matches the query
 * @param element
 * @param query
 * @returns {Array}
 */
function ancestorsMatch(element, query) {

  let results = [];
  let parentElement = element;

  do {

    if(parentElement.matches(query)) { results.push(parentElement); }
    parentElement = parentElement.parentElement;
  } while(parentElement && parentElement.nodeName != 'BODY');

  return results;
}

//Singleton mode
let instance = new HoverPlugin();


export const hoverPlugin = instance;
