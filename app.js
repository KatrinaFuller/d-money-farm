
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
