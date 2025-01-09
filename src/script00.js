// import { log } from './tools/helpers.js'

const element1 = {
  // le type qui peut être un élément du DOM (h1, div)
  // ou un élément custom React
  type: 'h1',
  // Les props incluant children !
  props: {
    name: 'BeginReact',
    children: 'Hello World',
  },
  ref: null, // un ref React
  key: null, // une clé React
};
// console.table(element1);

const createElement = (type, props, ...children) => {
  // 🦁 Retourne un objet qui ressemble à celui défini juste au dessus !
  return {
    type: type,
    props: {
      ...props,
      children: children.map((child) =>
        typeof child === 'object' ? child : createTextElement(child)
      ),
    },
  };
  // 🦁 BONUS : Si un des children est une string, il faudra créer un élément du type "TEXT" !
};

// Si le type est un TEXT_ELEMENT, on crée un textNode
function createTextElement(text) {
  return {
    type: 'TEXT_ELEMENT',
    props: {
      nodeValue: text,
      children: [],
    },
  };
}

// 🦁 Crée un élément HTML
// const elements = createElement(
//   'h1',
//   { className: 'm-3', contentEditable: true },
//   'BeginReact !'
// );

const elements = createElement(
  'div',
  {
    style: {
      background: "gray"
    },
  },
  createElement('h1', null, 'BeginReact'),
  createElement('input', {placeholder: 'Your message'}, 'BeginReact'),
  createElement('button', null, 'Submit', ' oki')
);

// element : un élément défini grâce aux fonctions précédentes
// container : un élément HTML qui existe déjà dans le DOM
const render = (element, container) => {
  const dom =
    element.type === 'TEXT_ELEMENT'
      ? document.createTextNode('')
      : document.createElement(element.type);

  // 🦁 Ajoute les props
  // 💡 Utiliser Object.keys pour récupérer les clés d'un objet
  // 💡 Filtrer la liste pour supprimer les clés "children"
  // 💡 Utiliser dom[clé] = valeur pour ajouter une props
  Object.keys(element.props)
    .filter((name) => name !== 'children')
    .forEach((name) => {
      dom[name] = element.props[name];
    });

  // 🦁 Pour tous les children, refait la même chose !
  element.props.children.forEach((child) => {
    render(child, dom);
  });
  // 🦁 Ajoute l'élément dans le container
  container.appendChild(dom);
};

const container = document.querySelector('#result');
console.log(elements);
render(elements, container);
