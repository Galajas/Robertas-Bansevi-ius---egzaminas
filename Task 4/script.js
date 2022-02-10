/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, vartotjui atėjus į tinkaį kreipsis į cars.json failą
ir iš atvaizduos visus automobilių gamintojus ir pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.


Pastaba: Informacija apie automobilį (brand) (jo kortelė) bei turi turėti 
bent minimalų stilių;
-------------------------------------------------------------------------- */

const ENDPOINT = "./cars.json";

function getcarsBrand() {
  fetch(ENDPOINT)
    .then((res) => res.json())
    .then((data) => {
      for (i = 0; i < data.length; i++) {
        const brand = data[i].brand;
        const brandId = brand.replace(/ /g, "");
        const models = data[i].models;

        resultTemplateForBrand(brand, brandId);

        // console.log(brand);
        // console.log(models);

        for (j = 0; j < models.length; j++) {
          const modelsName = models[j];

          resultTemplateForcars(modelsName, brandId);

          //   console.log(modelsName);
        }
      }
    });
}

getcarsBrand();

function resultTemplateForBrand(carsBrands, id) {
  const outputContainer = document.querySelector("#output");

  const brandContainer = document.createElement("div");

  const brandName = document.createElement("h4");
  brandName.textContent = `Car Brand: ${carsBrands}`;

  const carsList = document.createElement("ul");
  carsList.setAttribute("id", `brandContainer${id}`);
  carsList.setAttribute("class", `carsList`);

  brandContainer.append(brandName);
  brandContainer.append(carsList);

  outputContainer.append(brandContainer);
}

function resultTemplateForcars(carName, id) {
  const carsList = document.querySelector(`#brandContainer${id}`);

  const car = document.createElement("li");
  car.textContent = `car name: ${carName}`;

  carsList.append(car);
}
