'use strict';

async function showAvatar() {
  // lire notre JSON
  // let response = await fetch('/article/promise-chaining/user.json');
  // let user = await response.json();

  // lire l'utilisateur de github
  // let githubResponse = await fetch(`https://api.github.com/users/${user.name}`);
  let githubResponse = await fetch(`https://api.github.com/users/GrCOTE7`);
  let githubUser = await githubResponse.json();

  // montrer l'avatar
  let img = document.createElement('img');
  img.src = githubUser.avatar_url;
  img.className = 'promise-avatar-example';
  document.body.append(img);

  // attendre 5 secondes
  await new Promise((resolve, reject) => setTimeout(resolve, 5000));

  img.remove();

  return githubUser;
}

showAvatar();
