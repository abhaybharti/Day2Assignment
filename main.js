function convertDollarToRupee() {
  const getDollarAmount = document.querySelector("#dollarinput");

  console.log(getDollarAmount.value);

  if (getDollarAmount.value.trim() === "") {
    alert("Pls enter a value!!");
    return;
  }

  //
  const displayRupee = document.querySelector("#convertedamount");
  displayRupee.innerHTML = getDollarAmount.value * 79.56 + " Rupee";
}

const convertButton = document.querySelector("#convert");
convertButton.addEventListener("click", convertDollarToRupee);
