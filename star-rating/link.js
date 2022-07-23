export default function addLink() {
  let head = document.querySelector("head");

  let link = document.createElement("link");
  link.href = "star-rating/theme.css";
  link.rel = "stylesheet";

  let linkEnd =
    head.querySelectorAll("link")[head.querySelectorAll("link").length - 1];
  linkEnd.insertAdjacentElement("afterend", link);
}
