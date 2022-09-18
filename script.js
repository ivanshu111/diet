//bmi calculator

document.querySelector("#btn").addEventListener("click", function () {
  let weight = Number(document.querySelector("#inputweight").value);
  let height = Number(document.querySelector("#inputheight").value);
  let bmi = Number(weight / height ** 2);
  document.querySelector("#bmid").textContent = Math.floor(bmi);
  if (bmi <= 18.5) {
    document.querySelector(".message").textContent = "You are Under Weight";
  } else if (bmi > 18.5 && bmi <= 25) {
    document.querySelector(".message").textContent = "Your BMI is Normal";
  } else if (bmi > 25) {
    document.querySelector(".message").textContent =
      "You are Overweight need to go GYM";
  }
});

document.querySelector(".reset").addEventListener("click", function () {
  document.querySelector("#inputweight").value = " ";
  document.querySelector("#inputheight").value = " ";
  document.querySelector(".message").textContent = " ";
});
