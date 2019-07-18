
let foes = {
  name: 'Discord',
  health: 100,
  items: [],

}

let modifiers = {
  friction: { name: 'friction', modifier: 2 },
  disharmony: { name: 'disharmony', modifier: 4 },
  strife: { name: 'strife', modifier: 6 },
}

function addMods() {
  let modHealth = 0
  for (let i = 0; i < foes.items.length; i++) {
    let item = foes.items[i]
    modHealth += item.modifier
  }
  return modHealth
}

function friction() {
  foes.items.push(modifiers.friction)
}

function disharmony() {
  foes.items.push(modifiers.disharmony)
}

function strife() {
  foes.items.push(modifiers.strife)
}

function update() {
  document.getElementById("foe-health").innerText = foes.health.toString()
}

function generosity() {
  foes.health = foes.health - 1 + addMods();
  update()
}

function kindness() {
  foes.health = foes.health - 5 + addMods();
  update()
}

function generosity() {
  foes.health = foes.health - 10 + addMods();
  update()
}
