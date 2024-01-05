let myLeads = [];
const inputBtn = document.getElementById("input-btn");
const deleteBtn = document.getElementById("delete-btn");
const tabBtn = document.getElementById("tab-btn");
const inputEl = document.getElementById("input-el");
const ulEl = document.getElementById("ul-el");
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));

if (leadsFromLocalStorage) {
  myLeads = leadsFromLocalStorage;
  render(myLeads);
}

tabBtn.addEventListener("click", function () {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    console.log(tabs);
    myLeads.push(tabs[0].url);
    localStorage.setItem("myLeads", JSON.stringify(myLeads));
    render(myLeads);
  });
});

function render(leads) {
  let listItems = "";
  for (let i = 0; i < leads.length; i++) {
    listItems += `
        <li>
        <a href="${leads[i]}" target="_blank">${leads[i]}</a>
        </li>
    `;
  }
  ulEl.innerHTML = listItems;
}

deleteBtn.addEventListener("dblclick", function () {
  localStorage.clear();
  myLeads = [];
  render(myLeads);
});

inputBtn.addEventListener("click", function () {
  myLeads.push(inputEl.value);
  inputEl.value = " ";
  localStorage.setItem("myLeads", JSON.stringify(myLeads));
  render(myLeads);
});

// challenge
const imgs = ["images/hip1.jpg", "images/hip2.jpg", "images/hip3.jpg"];

const containerEl = document.getElementById("container");

function renderImages() {
  for (let i = 0; i < imgs.length; i++) {
    containerEl.innerHTML += `<img src="${imgs[i]}" class="team-img">`;
  }

  // better performence
  // function renderImages() {
  //   let imgsDOM = "";
  //   for (let i = 0; i < imgs.length; i++) {
  //     imgsDOM += `<img alt="Employee in the company" class="team-img" src="${imgs[i]}">`;
  //   }
  //   containerEl.innerHTML = imgsDOM;
  // }
}

renderImages();
