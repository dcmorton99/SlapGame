
let foes = {
  name: 'Discord',
  health: 100,
  modifier: [],
}

function attack() {
  document.getElementById("cooperation-button").onclick =
    foes.health = foes.health - 1;

  update()

}



// function addHealth() {
//   foes.health = foes.health + foes.modifier
//   update(foes.health)
// }

// function cooperation() {
//   foes.health--;
//   update(foes.health)
// }

// function kindness() {
//   foes.health = foes.health - 5;
//   update(foes.health)
// }

// function generosity() {
//   foes.health = foes.health - 10;
//   update(foes.health)
// }

function update() {
  document.getElementById("foe-health").innerText = foes.health
}