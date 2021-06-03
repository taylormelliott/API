let button = document.querySelector("button");

function buttonClick() {
  console.log("button clicked!");

  axios
    .get("https://swapi.dev/api/planets/?search=Alderaan")
    .then((response) => {
      console.log(response.data);
      for (i = 0; i < response.data.results[0].residents.length; i++) {
        console.log(response.data.results[0].residents[i]);
        axios.get(response.data.results[0].residents[i]).then((res) => {
          console.log(res.data);
          let name = document.createElement("h2");
          name.textContent = res.data.name;
          document.body.appendChild(name);
        });
      }
    })
    .catch((error) => {});
}

button.addEventListener("click", buttonClick);
