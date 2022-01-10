//the assync key word

async function x() {
  return 1;
}
// x().then(alert); //1

//await

// let value = await promise;

//an example of a promise that resolves in 1 second
async function a() {
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("done"), 1000);
  });
  let result = await promise;
  alert(result);
}
// a();

//showAvatar
async function showAvatar() {
  let response = await fetch("/article/promise-chaining/user.json");
  let user = await response.json();

  //read github user
  let githubResponse = await fetch(`https://api.github.com/users/${user.name}`);
  let githubUser = await githubResponse.json;

  //show image
  let image = document.createElement("img");
  image.src = githubUser.avatar_url;
  image.className = "promise-avatar-example";
  document.body.append(image);

  //wait 3 seconds
  await new Promise((resolve, reject) => setTimeout(resolve, 3000));

  image.remove();

  return githubUser;
}

// showAvatar();

//error handling
async function k() {
  try {
    let response = await fetch("https://no-such-url");
  } catch (err) {
    alert(err);
  }
}
k();
