const form = document.querySelector("form");

form.addEventListener("input", function (event) {
  console.log(event.target.name + ":", event.target.value);
});

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const formObject = {
    inputValue: form.querySelector("input").value,
    selectValue: form.querySelector("select").value,
    textareaValue: form.querySelector("textarea").value
  };

  console.log(formObject);
});
