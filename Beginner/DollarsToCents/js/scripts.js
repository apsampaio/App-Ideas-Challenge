const input = document.querySelector("input");
const btn = document.querySelector("button");
const form = document.querySelector("form");
const table = document.querySelector("table");

form.addEventListener("submit", (ev) => {
  ev.preventDefault();

  console.clear();
  let dollarInput = parseFloat(input.value).toFixed(2) * 100;
  if (isNaN(dollarInput)) return;
  console.log(dollarInput);
  const half = parseInt(dollarInput / 50);
  dollarInput = dollarInput % 50;

  const quarter = parseInt(dollarInput / 25);
  dollarInput = dollarInput % 25;

  const dime = parseInt(dollarInput / 10);
  dollarInput = dollarInput % 10;

  const nickel = parseInt(dollarInput / 5);
  dollarInput = dollarInput % 5;

  const penny = parseInt(dollarInput / 1);

  const valueTable = {
    half: half,
    quarter: quarter,
    dime: dime,
    nickel: nickel,
    penny: penny,
  };

  table.innerText = "";

  const header = document.createElement("tr");
  const nameHeader = document.createElement("th");
  const qtdHeader = document.createElement("th");

  nameHeader.innerText = "Name";
  qtdHeader.innerText = "Quantity";

  header.appendChild(nameHeader);
  header.appendChild(qtdHeader);
  table.appendChild(header);

  if (valueTable.half) {
    const tr = document.createElement("tr");
    const tdt = document.createElement("td");
    const tdv = document.createElement("td");
    tdt.innerText = "Half";
    tdv.innerText = valueTable.half;

    tr.appendChild(tdt);
    tr.appendChild(tdv);
    table.appendChild(tr);
  }

  if (valueTable.quarter) {
    const tr = document.createElement("tr");
    const tdt = document.createElement("td");
    const tdv = document.createElement("td");
    tdt.innerText = "Quarter";
    tdv.innerText = valueTable.quarter;

    tr.appendChild(tdt);
    tr.appendChild(tdv);
    table.appendChild(tr);
  }

  if (valueTable.dime) {
    const tr = document.createElement("tr");
    const tdt = document.createElement("td");
    const tdv = document.createElement("td");
    tdt.innerText = "Dime";
    tdv.innerText = valueTable.dime;

    tr.appendChild(tdt);
    tr.appendChild(tdv);
    table.appendChild(tr);
  }
  if (valueTable.nickel) {
    const tr = document.createElement("tr");
    const tdt = document.createElement("td");
    const tdv = document.createElement("td");
    tdt.innerText = "Nickel";
    tdv.innerText = valueTable.nickel;

    tr.appendChild(tdt);
    tr.appendChild(tdv);
    table.appendChild(tr);
  }
  if (valueTable.penny) {
    const tr = document.createElement("tr");
    const tdt = document.createElement("td");
    const tdv = document.createElement("td");
    tdt.innerText = "Penny";
    tdv.innerText = valueTable.penny;

    tr.appendChild(tdt);
    tr.appendChild(tdv);
    table.appendChild(tr);
  }
});
