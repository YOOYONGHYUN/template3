// do something!
function StarRating($container) {
  //   let link = document.createElement("link");
  //   link.href = "star-rating/theme.css";
  //   link.rel = "stylesheet";
  //   document.querySelector("head").append(link);
  //   document
  //     .querySelector("head")
  //     .insertAdjacentHTML(
  //       "beforeEnd",
  //       `<link href="star-rating/theme.css" rel="stylesheet" />`
  //     );

  let div = document.createElement("div");
  div.classList.add("star-rating-container");
  $container.appendChild(div);

  console.log($container.dataset.maxRating);
  let starNum = $container.dataset.maxRating;

  let count = 0;
  for (let i = 0; i < starNum; i++) {
    let icon = document.createElement("i");
    //클래스 한번에 주는 방법 찾아보기.
    icon.classList.add("bx");
    icon.classList.add("bxs-star");
    $container.querySelector(".star-rating-container").appendChild(icon);

    $container
      .querySelectorAll(".bx")
      [i].addEventListener("mouseover", function () {
        //5번째에 마우스를 올리면 5번째까지 다 색칠되어야 한다... 흐음....
        console.log(i);
        for (let j = 0; j < i + 1; j++) {
          $container.querySelectorAll(".bx")[j].classList.add("hovered");
        }
      });

    $container
      .querySelectorAll(".bx")
      [i].addEventListener("mouseout", function () {
        for (let j = 0; j < i + 1; j++) {
          $container.querySelectorAll(".bx")[j].classList.remove("hovered");
        }
      });

    $container
      .querySelectorAll(".bx")
      [i].addEventListener("click", function () {
        //4번째걸 클릭헸다가 2번째걸 클릭하면 2번째까지만 색칠되어야.,,, 이건 또 어찌할꼬.. 흠...
        for (let j = 0; j <= i; j++) {
          while (count > i) {
            $container
              .querySelectorAll(".bx")
              [count].classList.remove("selected");
            count--;
          }

          $container.querySelectorAll(".bx")[j].classList.add("selected");
          count = j;
        }

        let currentRating = String(i + 1);
        let change = new CustomEvent("rating-change", {
          detail: currentRating,
        });
        $container.dispatchEvent(change);
      });
  }
}

export default StarRating;
