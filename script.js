generate.addEventListener("click", function () {
  let url = orginal.value;
  let shortenContainer = document.getElementById("shorten-container");

  fetch(`https://is.gd/create.php?format=json&url=${encodeURIComponent(url)}`)
    .then((resp) => resp.json())
    .then((data) => {
      shorten.value = data.shorturl;
      shortenContainer.style.display = "flex"; // Show the input field and copy button
    })
    .catch((error) => {
      console.log(error);
      shorten.value = "Something went wrong!";
    });
});

copy.addEventListener("click", function () {
  shorten.select(); // Select the text in the "shorten" input field
  document.execCommand("copy"); // Copy the selected text to the clipboard
});
