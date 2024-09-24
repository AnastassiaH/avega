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

const checkServicesSliderButtons = () => {
  servicesSliderPrevButton.disabled =
    servicesSlideAll[0].classList.contains("active");
  servicesSliderNextButton.disabled =
    servicesSlideAll[servicesSlideAll.length - 1].classList.contains("active");
};

const handleActiveSlideClass = (element) => {
  servicesSlideAll.forEach((el) => {
    el.classList.remove("active");
  });
  element.classList.add("active");

  checkServicesSliderButtons();
};

servicesSliderPrevButton.addEventListener("click", () => {
  servicesSlider.scrollLeft -= 590;
  const slideIndex = Math.ceil(servicesSlider.scrollLeft / 590) - 1;
  servicesSlideCount.textContent = slideIndex + 1;
  handleActiveSlideClass(servicesSlideAll[slideIndex]);
});

servicesSliderNextButton.addEventListener("click", () => {
  servicesSlider.scrollLeft += 590;
  const slideIndex = Math.ceil(servicesSlider.scrollLeft / 590) + 1;
  servicesSlideCount.textContent = slideIndex + 1;
  handleActiveSlideClass(servicesSlideAll[slideIndex]);
});
