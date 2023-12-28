function myMove() {
  const elem = document.querySelector(".inner");
  console.log(elem);
  let pos = 0;
  let id = setInterval(function () {
    if (pos >= 350) {
      clearInterval(id);
    }
    pos++;
    elem.style.left = pos + "px";
    elem.style.top = pos + "px";
  }, 5);
}
