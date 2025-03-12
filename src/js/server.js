/* Cuando la usuaria haga "click" en Crear tarjeta, enviar los datos del formulario al servidor (petición de tipo POST).
El servidor responde con:
1. OK
2. id
Recoger id para poner en el enlace que se muestra a la usuaria.
Mostrar enlace a la usuaria. */

const createCardButton = document.querySelector(".js-createCard-btn");
const linkCard = document.querySelector(".js-linkCard");

function handleCreateCard(ev) {
  ev.preventDefault();
  // console.log(JSON.stringify(formData));
  fetch("https://dev.adalab.es/api/info/data", {
    method: "POST",
    body: JSON.stringify(formData),
    headers: { "Content-type": "application/json" },
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      const idCard = data.infoId;
      // console.log(idCard);
      linkCard.classList.remove("hidden");
      linkCard.href = `./card.html?id=${idCard}`;
    });
}

createCardButton.addEventListener("click", handleCreateCard);
