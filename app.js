
let foes = {
  name: 'Discord',
  health: 100,
}

function cooperation() {
  if (foes.health >= 0) {
    foes.health--;
    update(foes.health)
  }
}

function kindness() {
  if (foes.health >= 5) {
    foes.health = foes.health - 5;
    update(foes.health)
  }
}

function generosity() {
  if (foes.health >= 10) {
    foes.health = foes.health - 10;
    update(foes.health)
  }
}

function friction() {
  if (foes.health <= 98) {
    foes.health = foes.health + 2;
    update(foes.health)
  }
}

function disharmony() {
  if (foes.health <= 96) {
    foes.health = foes.health + 4;
    update(foes.health)
  }
}
function strife() {
  if (foes.health <= 94) {
    foes.health = foes.health + 6;
    update(foes.health)
  }
}

function update() {
  document.getElementById("foe-health").innerText = foes.health
}

