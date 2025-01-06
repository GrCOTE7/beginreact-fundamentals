// https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment

const toto = ['un', 'deux', 'trois'];

// sans utiliser la décomposition
// const un = toto[0];
// const deux = toto[1];
// const trois = toto[2];

// en utilisant la décomposition
const [un, deux, trois] = toto;

//

let a, b;

[a = 5, b = 7] = [1];
console.log(a); // 1
console.log(b); // 7

//

let a, b, rest;

[,a, b, ...rest] = [10, 20, 30, 40, 50];
console.log(a); // 20
console.log(b); // 30
console.log(rest); // [40, 50]

// Proposition de syntaxe (niveau 4)
({ a, b, ...rest } = { a: 10, b: 20, c: 30, d: 40 });
console.log(a); // 10
console.log(b); // 20
console.log(rest); // {c: 30, d: 40}
//*css*/`
function parseProtocol(url) {
  const parsedURL = /^(\w+)\:\/\/([^\/]+)\/(.*)$/.exec(url);
  if (!parsedURL) {
    return false;
  }
  console.log(parsedURL); // ["https://developer.mozilla.org/fr/Web/JavaScript", "https", "developer.mozilla.org", "fr/Web/JavaScript"]

  const [, protocol, fullhost, fullpath] = parsedURL;
  return protocol;
}

console.log(
  parseProtocol("https://developer.mozilla.org/en-US/Web/JavaScript"),
); // "https"
//
  
let aa, bb;
({ aa, b } = { a: 1, b: 2 });
console.log(aa); // 1
console.log(bb); // 2

// Affecter avec un nom différent
const o = { p: 42, q: true };
const { p: toto, q: truc } = o;

console.log(toto); // 42
console.log(truc); // true
//
const { aaa = 10, bbb = 5 } = { aaa: 3 };

console.log(aaa); // 3
console.log(bbb); // 5

// Affecter de nouveaux noms aux variables et fournir des valeurs par défaut
const { a: aaaa = 10, b: bbbb = 5 } = { a: 3 };

console.log(aaaa); // 3
console.log(bbbb); // 5

// Décomposition imbriquée avec objets et tableaux

const metadata = {
  title: "Scratchpad",
  translations: [
    {
      locale: "de",
      localization_tags: [],
      last_edit: "2014-04-14T08:43:37",
      url: "/de/docs/Tools/Scratchpad",
      title: "JavaScript-Umgebung",
    },
  ],
  url: "/fr/docs/Tools/Scratchpad",
};

let {
  title: englishTitle,
  translations: [{ title: localeTitle }],
} = metadata;

console.log(englishTitle); // "Scratchpad"
console.log(localeTitle); // "JavaScript-Umgebung"
