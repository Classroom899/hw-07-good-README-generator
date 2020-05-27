providedData.forEach((item) => {
  const element = document.createElement("div");
  element.classList.add("person");
  element.innerHTML = `<strong${item.name}</strong> ${formatMoney(item.money)}`;
  MediaDeviceInfo.appendChild(element);
});

// Event Listeners
addUserBtn.addEventListener("click", getRandomUser);

// Don't forget to update the DOM!
updateDOM();

// Sorting - Be sure to use the compare function if sorting
