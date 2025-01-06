// https://www.youtube.com/watch?v=WNFNEe4bc5A&ab_channel=DevTheory

// BASIS
let log = (v) => console.log(v);
let func2 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // resolve('test');
      reject(new Error ('Super error'));
    }, 1000);
  });
};
let func = async () => {
  log('Hello World');
  let text;
  try {
    text = await func2();
  } catch (error) {
    text=error.message;
    // log(error);
  }
  return text;
};

func().then((text) => log(text));

// Façon usuelle d'écrire les await
//let log = (v) => console.log(v);
(async ()=>{
  let func2 = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('test');
      }, 1000);
    });
  };
  
  let text = await func2()
  log(text);
})()


// Very simple example :

async function loadJson(url) {
  return await fetch(url).then((response) => {
    if (response.status == 200) {
      return response.json();
    } else {
      throw new Error(response.status);
    }
  });
}

// try {
//   await loadJson('https://javascript.info/no-such-user.json');
// } catch (error) {
//   console.log('Error', error.message); // Error: 404
// }
loadJson('https://javascript.info/no-such-user.json').catch((error) =>
  console.log('Error', error.message)
);



