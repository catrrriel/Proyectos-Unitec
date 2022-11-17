const btnsImg = [...document.querySelectorAll(".btn-upload-img")];

btnsImg.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const input = document.createElement("input");
    input.type = "file";

    input.addEventListener("change", (e) => {
      loadImage(
        input.files[0],
        document.querySelector("." + btn.dataset.imgcontainer)
      );
    });
    input.click();
  });
});

const loadImage = (file, parent) => {
  let lector = new FileReader();
  lector.readAsDataURL(file);

  lector.addEventListener("load", () => {
    parent.innerHTML = "";
    const img = document.createElement("img");
    img.src = lector.result;
    parent.appendChild(img);
  });
};
