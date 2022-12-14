export const dropdownMaker = async function () {
  const url =
    "https://api.nytimes.com/svc/books/v3/lists/names.json?api-key=P8pcb2dgnGF9YiOs6vGO2ATSlJvDl78Z";
  fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Networking issue...couldn't make dropdown menu :/");
      }
      return response.json();
    })
    .then((data) => {
      for (let i = 0; i < data.results.length; i++) {
        
        // ONLY INCLUDE BOOK AS AN OPTION IF IT WAS PUBLISHED THIS YEAR
        let newestPublishedDate = data.results[i].newest_published_date;
        let newestPublishedYear = parseInt(newestPublishedDate.slice(0, 4));

        if (newestPublishedYear >= 2022) {
          // MAKING OPTION
          const option = document.createElement("option");
          option.setAttribute("class", "list-option");
          option.setAttribute("value", data.results[i].list_name_encoded);
          option.textContent = data.results[i].display_name;

          // APPENDING OPTION TO SELECT
          const listSelector = document.getElementById("list-selector");
          listSelector.appendChild(option);
        }
      }
    })
    .catch((error) => {
      console.error(error);
    });
};

// function to set default date as today on date form

export const defaultDateSetter = async function () {
  document.getElementById("date-picker").valueAsDate = new Date();
  document.getElementById("date-picker").max = new Date()
    .toISOString()
    .split("T")[0];
};
