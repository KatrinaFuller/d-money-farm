
let farm = {
  money: 0,
  corn: {
    name: " Just Corn",
    worth: 100,
    waterCount: 0,
  },
  celery: {
    name: " Celery",
    worth: 5,
    waterCount: 0,
  },
  animals: [
    {
      name: "Bar",
      type: "Cow"
    },
    {
      name: "Bee",
      type: "Cow"
    },
    {
      name: "Que",
      type: "Cow"
    }
  ]
}



function drawAnimals() {
  //we need three things fo this function to work:
  //element to inject into
  //template to inject
  //data to create template
  let animalsElement = document.querySelector("#animals");
  let template = ""
  for (let i = 0; i < farm.animals.length; i++) {
    let animal = farm.animals[i];
    template += `<div class="col-6">
                    <h1>Name: ${animal.name}</h1>
                    <p>Itsa ${animal.type}</p>
                    <p>Watered: 0</p>
                    <div class="row">
                      <button class="btn btn-success" onclick="harvest('celery')">Harvest</button>
                      <button class="btn btn-info" onclick="feed('celery')">Feed</button>

                    </div>
                 </div>`
  }
  animalsElement.innerHTML = template;

}

function water(cropName) {
  let crop = farm[cropName];
  crop.waterCount++
  draw();
}

function harvest(cropName) {
  let crop = farm[cropName];
  farm.money += crop.worth * crop.waterCount;
  crop.waterCount = 0;

  // if (crop === "corn") {
  //   money += justCorn.worth * justCorn.waterCount;
  //   justCorn.waterCount = 0;
  // } else {
  //   money += celery.worth * celery.waterCount;
  //   celery.waterCount = 0;
  // }
  draw();
}

function draw() {
  let moneyFieldElement = document.querySelector("#money-field");
  let cornWaterElement = document.querySelector("#corn-water");
  let celeryWaterElement = document.querySelector("#celery-water");

  moneyFieldElement.textContent = `Money: $ ${farm.money}`;
  cornWaterElement.textContent = `Watered: ${farm.corn.waterCount}`;
  celeryWaterElement.textContent = `Watered: ${farm.celery.waterCount}`;
}

drawAnimals();