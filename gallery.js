function filterGallery(category) {
  // Get all gallery pictures
  const items = document.querySelectorAll(".gallery-item");

  // Get all filter buttons
  const buttons = document.querySelectorAll(".filter-btn");

  // Show or hide pictures
  items.forEach(function (item) {
    if (category === "all") {
      item.style.display = "block";
    } else if (item.classList.contains(category)) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
  // Change active button
  buttons.forEach(function (button) {
    button.classList.remove("active");
  });
  // Make clicked button active
  event.target.classList.add("active");
}
function openGuide(type) {
  const popup = document.getElementById("guidePopup");
  const title = document.getElementById("guideTitle");
  const content = document.getElementById("guideContent");

  if (type === "packing") {
    title.innerHTML = "What to Pack";

    content.innerHTML = `
            <p>
                Packing the right things can make your trip
                more comfortable and convenient.
            </p>

            <p>
                Bring clothes suitable for the weather,
                comfortable shoes, personal hygiene items,
                identification, chargers, and other important
                travel essentials.
            </p>

            <p>
                It is also helpful to bring a small bag for
                important items that you may need during the day.
            </p>
        `;
  } else if (type === "budget") {
    title.innerHTML = "Budget Travel Tips";

    content.innerHTML = `
            <p>
                Traveling does not always have to be expensive.
                Planning your expenses before your trip can help
                you stay within your budget.
            </p>

            <p>
                Compare transportation and accommodation prices,
                prepare a daily budget, and prioritize the places
                and activities you really want to experience.
            </p>

            <p>
                You can also save money by choosing affordable
                local food and avoiding unnecessary expenses.
            </p>
        `;
  } else if (type === "transportation") {
    title.innerHTML = "Transportation";

    content.innerHTML = `
            <p>
                Learn about the available transportation options
                before visiting a destination.
            </p>

            <p>
                Depending on the location, you may use buses,
                trains, taxis, ferries, private vehicles, or
                other local transportation.
            </p>

            <p>
                Check routes, schedules, fares, and travel time
                before leaving your accommodation.
            </p>
        `;
  } else if (type === "accommodation") {
    title.innerHTML = "Accommodation";

    content.innerHTML = `
            <p>
                Choosing the right place to stay can make your
                trip more comfortable.
            </p>

            <p>
                Consider the location, price, available facilities,
                cleanliness, and reviews when choosing your
                accommodation.
            </p>

            <p>
                Staying near important attractions or transportation
                areas can also make it easier to explore your
                destination.
            </p>
        `;
  } else if (type === "best-time") {
    title.innerHTML = "Best Time to Travel";

    content.innerHTML = `
            <p>
                The best time to visit a destination depends on
                its weather, seasons, activities, and local events.
            </p>

            <p>
                Check the weather conditions before your trip and
                consider whether you prefer sunny, cool, or rainy
                seasons.
            </p>

            <p>
                Planning ahead can also help you avoid extremely
                crowded periods and make your trip more enjoyable.
            </p>
        `;
  } else if (type === "photography") {
    title.innerHTML = "Photography Tips";

    content.innerHTML = `
            <p>
                Take photos that capture the beauty and experience
                of your destination.
            </p>

            <p>
                Try different angles, use natural lighting, and
                keep your subject clear. You can also take photos
                of local food, culture, architecture, landscapes,
                and memorable moments.
            </p>

            <p>
                Remember to enjoy the experience instead of
                spending the entire trip behind your camera.
            </p>
        `;
  }

  popup.style.display = "flex";
}

function closeGuide() {
  document.getElementById("guidePopup").style.display = "none";
}

document.addEventListener("DOMContentLoaded", function () {
  const popup = document.getElementById("guidePopup");

  if (popup) {
    popup.addEventListener("click", function (event) {
      if (event.target === popup) {
        closeGuide();
      }
    });
  }
});
