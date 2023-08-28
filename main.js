// ----------------------------

function Equipo(nombre, precio, stock) {
    this.nombre = nombre;
    this.precio = precio;
    this.stock = stock;
}

// -----------------------------

const BMWS1000RR = new Equipo("BMWS1000RR", 21350, 3);
const DucatiPanigaleV4 = new Equipo("Ducati Panigale V4", 38700, 2);
const Hondacbr1000 = new Equipo("Honda CBR 1000", 30700, 1);
const kawasakininjah2r = new Equipo("Kawasaki Ninja H2R", 45000, 2);

// --------------------------------------

const stockEquipos = [BMWS1000RR, DucatiPanigaleV4, Hondacbr1000, kawasakininjah2r];

// -----------------------------

document.addEventListener("DOMContentLoaded", function () {
    const searchForm = document.querySelector("form");
    const inputSearch = document.querySelector("input[type='text']");
    const cardsContainer = document.querySelector("main");

    searchForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const equipoBuscado = inputSearch.value.toLowerCase();
        const equipoEncontrado = stockEquipos.filter(equipo => equipo.nombre.toLowerCase() === equipoBuscado);

        cardsContainer.innerHTML = ""; 

        if (equipoEncontrado.length > 0) {
            equipoEncontrado.forEach(equipo => {
                const card = createCard(equipo);
                cardsContainer.appendChild(card);
            });
        } else {
            alert("No contamos con " + equipoBuscado + " en nuestro stock.");
            showAllCards();
        }
    });

    function showAllCards() {
        cardsContainer.innerHTML = "";
        stockEquipos.forEach(equipo => {
            const card = createCard(equipo);
            cardsContainer.appendChild(card);
        });
    }

    function createCard(equipo) {
        const cardDiv = document.createElement("div");
        cardDiv.className = "card";

        const img = document.createElement("img");
        img.src = `./assets/${equipo.nombre.replace(/\s/g, "")}.jpg`; // nombre sin espacios
        img.className = "card-img-top";
        img.alt = equipo.nombre;
        img.height = "300";

        const cardBody = document.createElement("div");
        cardBody.className = "card-body";

        const title = document.createElement("h5");
        title.className = "card-title";
        title.textContent = equipo.nombre;

        const description = document.createElement("p");
        description.className = "card-text";
        description.textContent = "Precio: $" + equipo.precio.toFixed(2) + " | Stock: " + equipo.stock;

        const buyButton = document.createElement("a");
        buyButton.href = "#";
        buyButton.className = "btn btn-primary";
        buyButton.textContent = "Comprar";

        cardBody.appendChild(title);
        cardBody.appendChild(description);
        cardBody.appendChild(buyButton);

        cardDiv.appendChild(img);
        cardDiv.appendChild(cardBody);

        return cardDiv;
    }
});
