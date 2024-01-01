// initialize the count as 0
// listen for clicks on the increment button
// increment the count variable when the button is clicked
// change the count-el in the HTML to reflect the new count

const countEl = document.getElementById("count-el");
const saveEl = document.getElementById("save-el");
let count = 0;

function increment() {
  count++;
  countEl.textContent = count;
}

function save() {
  let data = ` ${count} - `;
  saveEl.textContent += data;
  count = 0;
  countEl.textContent = count;
}
