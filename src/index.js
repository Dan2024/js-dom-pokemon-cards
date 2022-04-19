const cardList = document.getElementById("class--list");

function createCard(card) {
  const officialArtworkLink =
    card.sprites.other["official-artwork"].front_default;

  let gameString = "";
  card.game_indices.forEach((element) => {
    gameString += element.version.name + ", ";
  });

  const cardLi = `
    <li class="card">
        <h2 class="card--title">${card.name}</h2>
        <img
            width="256"
            class="card--img"
            src="${officialArtworkLink}"
        />
        <ul class="card--text">
            <li>HP: ${card.stats[0].base_stat}</li>
            <li>ATTACK: ${card.stats[1].base_stat}</li>
            <li>DEFENSE: ${card.stats[2].base_stat}</li>
            <li>SPECIAL-ATTACK: ${card.stats[3].base_stat}</li>
            <li>SPECIAL-DEFENSE: ${card.stats[4].base_stat}</li>
            <li>SPEED: ${card.stats[5].base_stat}</li>
        </ul>
        <p>Games Appeared In: ${gameString}</p>
    </li>
    `;

  cardList.insertAdjacentHTML("afterbegin", cardLi);
}

data.forEach((card) => createCard(card));
