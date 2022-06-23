document.querySelector("button").addEventListener("click", me);

function me() {
  let Name = document.querySelector("input").value;

  document.querySelector(
    "p"
  ).innerText = ` Hello ${Name},Welcome To The Apprentice Cloud`;
}