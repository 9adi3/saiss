const scriptURL =
  "https://script.google.com/macros/s/AKfycbzDrfrvAm9ZzjWFPlmhPyiWnFhn18eRGxfgDAzU1DMReQOxGEtQru8Z81H42vGPuuxs/exec";

let form = document.getElementById("form_contact");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  fetch(scriptURL, {
    method: "POST",
    body: new FormData(form),
  })
    .then((response) => {
      setTimeout(() => {
        localStorage.removeItem("cart");
        window.location.reload();
      }, 3000);
    })
    .catch((error) => console.error("error!", error.message));
});
