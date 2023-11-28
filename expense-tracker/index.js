// import { test } from "./calc.js";

const balanceDiv = document.getElementById("balance");
const incomeDiv = document.getElementById("income");
const expenseDiv = document.getElementById("expense");
const list = document.getElementById("list");
const transactionDesc = document.getElementById("transactionDesc");
const transactionAmt = document.getElementById("transactionAmt");
const submitBtn = document.getElementById("submit-btn");

const localStorageTransactions =
  JSON.parse(localStorage.getItem("transactions")) || [];

let balance = 0;
let transactions =
  localStorage.getItem("transactions") !== null ? localStorageTransactions : [];

// TODO: needs to be rewritten
// set default values
window.addEventListener("load", () => {
  let allTransactions = JSON.parse(localStorage.getItem("transactions"));
  let totalBal = 0;
  let arr = [];

  // total balance
  for (let i in allTransactions) {
    generateList(allTransactions[i]);

    arr.push(Number(allTransactions[i].amount));
    const sum = arr.reduce((acc, curr) => acc + curr, totalBal);

    balanceDiv.innerText = `${sum}`;
  }
});

// create list item
function generateList(transaction) {
  const item = document.createElement("li");
  item.classList.add("rounded", "border", "border-green-50", "p-2");

  item.innerHTML = `${transaction.description}: <span>${transaction.amount}</span>`;

  list.appendChild(item);
}

// income
window.addEventListener("load", () => {
  let allTransactions = JSON.parse(localStorage.getItem("transactions"));
  let bal = 0;
  let arr = [];

  // total balance
  for (let i in allTransactions) {
    if (allTransactions[i].amount[0] != "-") {
      arr.push(Number(allTransactions[i].amount));
    }
    const sum = arr.reduce((acc, curr) => acc + curr, bal);

    incomeDiv.innerText = `${sum}`;
  }
});

// expense
window.addEventListener("load", () => {
  let allTransactions = JSON.parse(localStorage.getItem("transactions"));
  let bal = 0;
  let arr = [];

  // total balance
  for (let i in allTransactions) {
    if (allTransactions[i].amount[0] == "-") {
      arr.push(-Number(allTransactions[i].amount));
    }
    const sum = arr.reduce((acc, curr) => acc - curr, bal);

    expenseDiv.innerText = `${sum}`;
  }
});

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();

  let transaction = {
    id: Math.floor(Math.random() * 1000),
    description: transactionDesc.value,
    amount: transactionAmt.value,
  };

  checkInput(transaction);
  // getTransactions();
});

function updateBalance() {
  let bal = 0;
  let total = [];

  for (let i in transactions) {
    total.push(Number(transactions[i].amount));
  }

  const sum = total.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    bal,
  );

  balanceDiv.innerText = `${Math.abs(sum)}`;
}

const addTransactions = (transaction) => {
  transactions.push(transaction);
  localStorage.setItem("transactions", JSON.stringify(transactions));

  generateList(transaction);
};

const addIncome = (transaction) => {
  let amt = Number(transaction.amount);
  balance += amt;
  let incomeBalance = Number(incomeDiv.innerText);

  incomeBalance += Number(transaction.amount);
  addTransactions(transaction);
  updateBalance(balance);

  incomeDiv.innerText = String(incomeBalance);
};

const subtractExpense = (transaction) => {
  balance -= -Number(transaction.amount);
  let expBalance = Number(expenseDiv.innerText);

  expBalance -= -Number(transaction.amount);
  addTransactions(transaction);
  updateBalance(balance);

  expenseDiv.innerText = String(expBalance);
};

// validates input
function checkInput(transaction) {
  for (let char in transaction) {
    if (transaction.amount[0] != "-") {
      addIncome(transaction);
      return;
    }

    subtractExpense(transaction);
    return;
  }
}
