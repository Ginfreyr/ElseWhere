document.addEventListener("DOMContentLoaded", function () {

    const galleryImages = document.querySelectorAll(
        ".destination-gallery-grid img"
    );

    const modal = document.getElementById("imageModal");
    const modalImage = document.getElementById("modalImage");
    const closeModal = document.querySelector(".close-modal");

    galleryImages.forEach(function (image) {

        image.addEventListener("click", function () {
            modalImage.src = image.src;
            modal.style.display = "flex";
        });

    });

    closeModal.addEventListener("click", function () {
        modal.style.display = "none";
    });

    modal.addEventListener("click", function (event) {

        if (event.target === modal) {
            modal.style.display = "none";
        }

    });

});