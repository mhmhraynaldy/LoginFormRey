async function fetchAndDisplayUsers() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();

    const users = data.slice(0, 5);

    const usersDiv = document.getElementById("users");

    users.forEach((user) => {
      const name = user.name;
      const phone = user.phone;
      const zipcode = user.zipcode;
      const imageSrc = "https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Stick_Figure.svg/1451px-Stick_Figure.svg.png";

      const cardView = document.createElement("div");
      cardView.classList.add("card-view");

      const userImage = document.createElement("img");
      userImage.src = imageSrc;
      userImage.alt = name;
      userImage.style.maxWidth = "30px";
      cardView.appendChild(userImage);
      cardView.innerHTML = `
          <img src="${imageSrc}" alt="${name}" style="max-width: 150px;">
            <h2>${name}</h2>
            <p>Phone: ${phone}</p>
          `;

      usersDiv.appendChild(cardView);
    });
  } catch (error) {
    console.error("Error fetching data:", error);
    const nameElement = document.getElementById("name");
    nameElement.textContent = "Error fetching data:";
  }
}

fetchAndDisplayUsers();
