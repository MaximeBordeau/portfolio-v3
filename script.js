// Hover ajoute la class .--hover sur .portfolio__card

const portfolioCardElements = document.querySelectorAll(".portfolio__card");

portfolioCardElements.forEach((card) => {
  card.addEventListener("mouseover", function () {
    card.classList.replace("portfolio__card", "portfolio__card--hover");

    if (card.classList.contains("portfolio__card")) {
        console.log(portfolioCardElements);

    }
  });
});

portfolioCardElements.forEach((card) => {
  card.addEventListener("mouseout", () =>
    card.classList.replace("portfolio__card--hover", "portfolio__card")
  );
});

// function checkIfHover() {
//   if (portfolioCardElements.classList.contains.forEach("portfolio__card"))
//   {
//     console.log("YES");
//     return
//   }
// }

// function checkIfHover() {
// if(portfolioCardElements.forEach((card) => )

// }
