/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Pateikiamas informacijos atvaizdavimas <div id="output"></div> bloke
1.1. Infrmacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;
"
Pastaba: Informacija apie user'į (jo kortelė) bei turi turėti bent minimalų stilių;
-------------------------------------------------------------------------- */

const ENDPOINT = "https://api.github.com/users";

const message = document.querySelector("#message");
const button = document.querySelector("#btn");

function getUserData() {
  fetch(ENDPOINT)
    .then((res) => res.json())
    .then((data) => {
      //   console.log(data);
      message.remove();
      for (i = 0; i < data.length; i++) {
        const accName = data[i].login;
        const accLogo = data[i].avatar_url;

        resultTemplate(accName, accLogo);
      }
    });
}

button.addEventListener("click", () => getUserData());

function resultTemplate(login, avatarUrl) {
  const outputContainer = document.querySelector("#output");

  const resultCont = document.createElement("div");
  resultCont.setAttribute("class", "resultContainer");

  const div = document.createElement("div");
  const nickName = document.createElement("h4");
  nickName.textContent = "User name:";
  const loginResult = document.createElement("p");
  loginResult.textContent = login;

  const avatarResult = document.createElement("img");
  avatarResult.src = avatarUrl;

  div.append(nickName);
  div.append(loginResult);
  resultCont.append(div);
  resultCont.append(avatarResult);

  outputContainer.append(resultCont);
}
