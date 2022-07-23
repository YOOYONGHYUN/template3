import StarRating from "./star-rating/index.js";

document
  .querySelector("head")
  .insertAdjacentHTML(
    "beforeEnd",
    `<link href="star-rating/theme.css" rel="stylesheet" />`
  );

let children = document.querySelector("head").children;
for (let i = 0; i < children.length; i++) {
  if (children[i].localName == "link")
    console.log(`${i}번째 바로 다음에 링크를 만들어야 하는데 어케 만들지`);
}

console.log(document.querySelector("head").querySelectorAll("link")[1]);
console.log(HTMLCollection.arguments);
console.log(document.querySelector("head"));
console.log(document.querySelector("head").children);

console.log(document.querySelector("head").children.length);

const $containers = [...document.querySelectorAll(".star-rating")];
const $currentRatings = document.querySelectorAll(".current-rating > span");

$containers.forEach(($container, i) => {
  // star-rating 컨테이너 요소의 참조를 StarRating 함수에 전달해 star 요소들로 구성된 star-rating 요소를 동적 생성한다.
  StarRating($container);
  console.log(i);
  // 이벤트 'rating-change'를 캐치해 화면에 표시한다.
  $container.addEventListener("rating-change", (e) => {
    const rating = e.detail;
    $currentRatings[i].textContent = rating;
  });
});
