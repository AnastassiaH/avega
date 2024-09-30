import "./style.css";

// header

const languageDropdownTrigger = document.querySelector(
  ".languageDropdownTrigger"
);
const dropdownArrow = document.querySelector(".dropdownArrow");
const languageList = document.querySelector(".languageList");
languageDropdownTrigger.addEventListener("click", () => {
  languageList.classList.toggle("open");
  dropdownArrow.classList.toggle("open");
});

document.addEventListener("click", (event) => {
  if (
    languageList.classList.contains("open") &&
    event.target !== languageDropdownTrigger &&
    event.target !== dropdownArrow
  ) {
    languageList.classList.remove("open");
    dropdownArrow.classList.remove("open");
  }
});

// services section

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
};

const serviceSlideWidth = servicesSlideAll[0].clientWidth;
servicesSliderPrevButton.addEventListener("click", () => {
  servicesSlider.scrollLeft -= serviceSlideWidth;
  const slideIndex =
    Math.ceil(servicesSlider.scrollLeft / serviceSlideWidth) - 1;
  servicesSlideCount.textContent = slideIndex + 1;
  handleActiveSlideClass(servicesSlideAll, servicesSlideAll[slideIndex]);
  checkSliderButtonsDisability(
    servicesSliderPrevButton,
    servicesSliderNextButton,
    servicesSlideAll
  );
});
servicesSliderNextButton.addEventListener("click", () => {
  servicesSlider.scrollLeft += serviceSlideWidth;
  const slideIndex =
    Math.ceil(servicesSlider.scrollLeft / serviceSlideWidth) + 1;
  servicesSlideCount.textContent = slideIndex + 1;
  handleActiveSlideClass(servicesSlideAll, servicesSlideAll[slideIndex]);
  checkSliderButtonsDisability(
    servicesSliderPrevButton,
    servicesSliderNextButton,
    servicesSlideAll
  );
});

// technologies section

const technologiesList = document.querySelector(".technologiesList");
const technologiesItemAll = document.querySelectorAll(".technologiesItem");
const technologiesInfoList = document.querySelector(".technologiesInfoList");
const technologiesInfoItem = document.querySelector(".technologiesInfoItem");
const technologiesInfoItemWidth = technologiesInfoItem.clientWidth;

technologiesList.addEventListener("click", (event) => {
  const technology = event.target;
  const technologyIndex = [...technologiesItemAll].findIndex(
    (elem) => elem === technology
  );
  technologiesInfoList.scrollLeft =
    (technologiesInfoItemWidth + 48) * technologyIndex;
  handleActiveSlideClass(technologiesItemAll, technology);
});

// blog section

const blogList = document.querySelector(".blogList");
const blogItemAll = document.querySelectorAll(".blogItem");
const blogSliderPrevButton = document.querySelector(".blogSliderPrevButton");
const blogSliderNextButton = document.querySelector(".blogSliderNextButton");
const blogSlideCount = document.querySelector(".blogSlideCount");
const blogItemWidth = blogItemAll[0].clientWidth + 24;

blogSliderNextButton.addEventListener("click", () => {
  blogList.scrollLeft += blogItemWidth;
  const slideIndex = Math.ceil(blogList.scrollLeft / blogItemWidth) + 1;
  blogSlideCount.textContent = slideIndex + 1;
  handleActiveSlideClass(blogItemAll, blogItemAll[slideIndex]);
  checkSliderButtonsDisability(
    blogSliderPrevButton,
    blogSliderNextButton,
    blogItemAll
  );
});

blogSliderPrevButton.addEventListener("click", () => {
  blogList.scrollLeft -= blogItemWidth;
  const slideIndex = Math.ceil(blogList.scrollLeft / blogItemWidth) - 1;
  blogSlideCount.textContent = slideIndex + 1;
  handleActiveSlideClass(blogItemAll, blogItemAll[slideIndex]);
  checkSliderButtonsDisability(
    blogSliderPrevButton,
    blogSliderNextButton,
    blogItemAll
  );
});

// review section

const reviewsSlider = document.querySelector(".reviewsSlider");
const reviewsItemAll = document.querySelectorAll(".reviewsItem");
const reviewSliderPrevButton = document.querySelector(
  ".reviewSliderPrevButton"
);
const reviewSliderNextButton = document.querySelector(
  ".reviewSliderNextButton"
);
const reviewsSlideCount = document.querySelector(".reviewsSlideCount");
const reviewItemWidth = 1224;

reviewSliderNextButton.addEventListener("click", () => {
  reviewsSlider.scrollLeft += reviewItemWidth;
  const slideIndex = Math.ceil(reviewsSlider.scrollLeft / reviewItemWidth) + 1;
  reviewsSlideCount.textContent = slideIndex + 1;
  handleActiveSlideClass(reviewsItemAll, reviewsItemAll[slideIndex]);
  checkSliderButtonsDisability(
    reviewSliderPrevButton,
    reviewSliderNextButton,
    reviewsItemAll
  );
});

reviewSliderPrevButton.addEventListener("click", () => {
  reviewsSlider.scrollLeft -= reviewItemWidth;
  const slideIndex = Math.ceil(reviewsSlider.scrollLeft / reviewItemWidth) - 1;
  reviewsSlideCount.textContent = slideIndex + 1;
  handleActiveSlideClass(reviewsItemAll, reviewsItemAll[slideIndex]);
  checkSliderButtonsDisability(
    reviewSliderPrevButton,
    reviewSliderNextButton,
    reviewsItemAll
  );
});

// FAQ section

const FAQCardAll = document.querySelectorAll(".FAQCard");
const questionTriggerAll = document.querySelectorAll(".questionTrigger");
const FAQSectionContent = document.querySelector(".FAQSectionContent");

questionTriggerAll.forEach((trigger, index) => {
  trigger.addEventListener("click", () => {
    FAQCardAll.forEach((card, idx, array) => {
      if (card.classList.contains("open") && index === idx) {
        card.classList.remove("open");
        if (array[index + 2]) {
          array[index + 2].style.marginTop = "0px";
        }
        FAQSectionContent.style.paddingBottom = "80px";
        return;
      }
      if (index === idx) {
        card.classList.toggle("open");
        if (array[index + 2]) {
          array[index + 2].style.marginTop = "100px";
          FAQSectionContent.style.paddingBottom = "80px";
          return;
        } else {
          FAQSectionContent.style.paddingBottom = "180px";
        }
        return;
      } else {
        card.classList.remove("open");
      }
    });
  });
});

// feedback section

const feedbackSubmitButton = document.querySelector(".feedbackSubmitButton");
feedbackSubmitButton.addEventListener("click", (event) => {
  event.preventDefault();
});