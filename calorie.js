document.getElementById("calobtn").addEventListener("click", function () {
  let bmi1 = Number(document.querySelector("#inputbmi").value);
  var select = document.getElementById("floatingSelect");
  var value = select.options[select.selectedIndex].value;
  if (value === "1") {
    let ans = bmi1 * 120;
  } else if (value === "2") {
    ans = bmi1 * 137;
  } else if (value === "3") {
    ans = bmi1 * 155;
  } else if (value === "4") {
    ans = bmi1 * 174;
  }
  document.getElementById("infoSpan").textContent = ans;
});
