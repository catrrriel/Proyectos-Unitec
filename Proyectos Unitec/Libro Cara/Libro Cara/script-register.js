const btn = document.querySelector("#btn-volver")

btn.addEventListener("click", (e) => {
    e.preventDefault();
    console.log(e);
    window.location.href = "index.html"
  });