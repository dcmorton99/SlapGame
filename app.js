
let foes = {
  name: 'Discord',
  health: 100,
}

function cooperation() {
  foes.health--;
  update(foes.health)
}

function kindness() {
  foes.health = foes.health - 5;
  update(foes.health)
}

function generosity() {
  foes.health = foes.health - 10;
  update(foes.health)
}

function friction() {
  foes.health = foes.health + 2;
  update(foes.health)
}

function disharmony() {
  foes.health = foes.health + 4;
  update(foes.health)
}
function strife() {
  foes.health = foes.health + 6;
  update(foes.health)
}

function update() {
  document.getElementById("foe-health").innerText = foes.health
}

