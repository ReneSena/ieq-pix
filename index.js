var clipboard = new ClipboardJS(".pix__button");

clipboard.on("success", function (e) {
  console.info("Action:", e.action);
  console.info("Text:", e.text);
  console.info("Trigger:", e.trigger);

  const $alert = document.querySelector(".alert");
  $alert.classList.add("show");

  setTimeout(() => {
    $alert.classList.remove("show");
  }, 2000);
});
