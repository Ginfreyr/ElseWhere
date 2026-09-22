document.addEventListener("DOMContentLoaded", function () {
  const searchInputs = document.querySelectorAll(".destination-search input");

  searchInputs.forEach(function (input) {
    input.addEventListener("input", function () {
      const searchText = input.value.toLowerCase();

      const cards = document.querySelectorAll(".destination-card");

      cards.forEach(function (card) {
        const cardText = card.textContent.toLowerCase();

        if (cardText.includes(searchText)) {
          card.style.display = "";
        } else {
          card.style.display = "none";
        }
      });
    });
  });
});
