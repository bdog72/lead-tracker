//
//

let myLeads = [];

const inputEl = document.getElementById('input-el');
const inputBtn = document.getElementById('input-btn');
const ulEl = document.getElementById('ul-el');

const leadsFromLocalStorage = JSON.parse(localStorage.getItem('leads'));

if (leadsFromLocalStorage) {
  console.log('Leads in LS');
  myLeads = leadsFromLocalStorage;
  renderLeads();
}

inputBtn.addEventListener('click', function () {
  myLeads.push(inputEl.value);
  inputEl.value = '';
  localStorage.setItem('leads', JSON.stringify(myLeads));
  renderLeads();
});

function renderLeads() {
  let listItems = '';
  for (let i = 0; i < myLeads.length; i++) {
    listItems += `
    <li class='list-items'>
      <a target="_blank" href="${myLeads[i]}">
        ${myLeads[i]}
      </a>
    </l1>`;
  }
  ulEl.innerHTML = listItems;
}
