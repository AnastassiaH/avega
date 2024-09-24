import "./style.css";

const servicesSlider = document.querySelector(".servicesSlider");
const servicesSliderPrevButton = document.querySelector(
  ".servicesSliderPrevButton"
);
const servicesSliderNextButton = document.querySelector(
  ".servicesSliderNextButton"
);
const servicesSlideAll = document.querySelectorAll(".servicesSlide");
const servicesSlideCount = document.querySelector(".servicesSlideCount");

const checkSliderButtonsDisability = (prev, next, collection) => {
  prev.disabled = collection[0].classList.contains("active");
  next.disabled =
    collection[collection.length - 1].classList.contains("active");
};

const handleActiveSlideClass = (collection, element) => {
  collection.forEach((el) => {
    el.classList.remove("active");
  });
  element.classList.add("active");

  checkSliderButtonsDisability(
    servicesSliderPrevButton,
    servicesSliderNextButton,
    servicesSlideAll
  );
};

servicesSliderPrevButton.addEventListener("click", () => {
  servicesSlider.scrollLeft -= 590;
  const slideIndex = Math.ceil(servicesSlider.scrollLeft / 590) - 1;
  servicesSlideCount.textContent = slideIndex + 1;
  handleActiveSlideClass(servicesSlideAll, servicesSlideAll[slideIndex]);
});

servicesSliderNextButton.addEventListener("click", () => {
  servicesSlider.scrollLeft += 590;
  const slideIndex = Math.ceil(servicesSlider.scrollLeft / 590) + 1;
  servicesSlideCount.textContent = slideIndex + 1;
  handleActiveSlideClass(servicesSlideAll, servicesSlideAll[slideIndex]);
});
