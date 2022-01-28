//
//

let myLeads = [];

const inputEl = document.getElementById('input-el');

const inputBtn = document.getElementById('input-btn');
const tabBtn = document.getElementById('tab-btn');
const deleteBtn = document.getElementById('delete-btn');

const ulEl = document.getElementById('ul-el');

const leadsFromLocalStorage = JSON.parse(localStorage.getItem('leads'));

if (leadsFromLocalStorage) {
  myLeads = leadsFromLocalStorage;
  render(myLeads);
}

// const tabs = [{ url: 'https://github.com/bdog72/' }];

tabBtn.addEventListener('click', function () {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    myLeads.push(tabs[0].url);
    localStorage.setItem('leads', JSON.stringify(myLeads));
    render(myLeads);
  });
});

function render(leads) {
  let listItems = '';
  for (let i = 0; i < leads.length; i++) {
    listItems += `
    <li class='list-items'>
      <a target="_blank" href="${leads[i]}">
        ${leads[i]}
      </a>
    </l1>`;
  }
  ulEl.innerHTML = listItems;
}

deleteBtn.addEventListener('dblclick', function () {
  console.log(`Double Bozo`);
  localStorage.clear();
  myLeads = [];
  render(myLeads);
});

inputBtn.addEventListener('click', function () {
  myLeads.push(inputEl.value);
  inputEl.value = '';
  localStorage.setItem('leads', JSON.stringify(myLeads));
  render(myLeads);
});
