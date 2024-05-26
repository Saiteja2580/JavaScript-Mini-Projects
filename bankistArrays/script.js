'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    '2019-11-18T21:31:17.178Z',
    '2019-12-23T07:42:02.383Z',
    '2020-01-28T09:15:04.904Z',
    '2020-04-01T10:17:24.185Z',
    '2020-05-08T14:11:59.604Z',
    '2020-05-27T17:01:17.194Z',
    '2020-07-11T23:36:17.929Z',
    '2020-07-12T10:51:36.790Z',
  ],
  currency: 'EUR',
  locale: 'pt-PT', // de-DE
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    '2019-11-01T13:15:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2019-12-25T06:04:23.907Z',
    '2020-01-25T14:18:46.235Z',
    '2020-02-05T16:33:06.386Z',
    '2020-04-10T14:43:26.374Z',
    '2020-06-25T18:49:59.371Z',
    '2020-07-26T12:01:20.894Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};

const accounts = [account1, account2];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

//adding movements to the the movements container to display deposited or withdrawl
const displayMovements = function (movements, sort = false) {
  containerMovements.innerHTML = '';
  // const movs = sort ? movements.slice().sort((a,b)=> {
  //   if (a >b ) return 1;
  //   if(a < b) return -1;
  // }) : movements;
  // console.log(movs);
  movements.forEach(function (mov, i) {
    const trans = mov < 0 ? 'withdrawal' : 'deposit';
    const html = `
    <div class="movements__row">
    <div class="movements__type movements__type--${trans}">
    ${i + 1} ${trans.toUpperCase()}</div>
    <div class="movements__value">${mov.toFixed(2)}€</div>
    </div>`;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

displayMovements(account1.movements);

//computing usernames

const createUserName = function (acc) {
  acc.forEach(account => {
    account.username = account.owner
      .split(' ')
      .map(name => {
        return name[0];
      })
      .join('')
      .toLowerCase();
  });
};

createUserName(accounts);

//calculating global balance
const calcGlobalBalance = function (account) {
  account.forEach(function (acc) {
    acc.globalBalance = acc.movements.reduce((accum, value) => {
      return accum + value;
    });
  });
};
calcGlobalBalance(accounts);
const calcDisplaySummary = function (movements, interestRate) {
  const income = movements
    .filter(mov => {
      return mov >= 0;
    })
    .reduce((accum, mov) => {
      return accum + mov;
    });
  labelSumIn.textContent = `${income.toFixed(2)}€`;
  const expense = movements
    .filter(mov => {
      return mov < 0;
    })
    .reduce((accum, mov) => {
      return accum + mov;
    });
  labelSumOut.textContent = `${Math.abs(expense).toFixed(2)}€`;

  const interest = movements
    .filter(mov => {
      return mov > 0;
    })
    .map(deposit => (deposit * interestRate) / 100)
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `${Math.abs(interest).toFixed(2)}€`;
};

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

//implementing login
let uname;
let pin;
btnLogin.addEventListener('click', function (e) {
  e.preventDefault();

  uname = accounts.find(acc => acc.username === inputLoginUsername.value);
  pin = accounts.find(acc => acc.pin === Number(inputLoginPin.value));
  console.log(pin);

  if (uname.pin === Number(inputLoginPin.value)) {
    containerApp.style.opacity = '100';
    //clear input fields
    inputLoginUsername.value = '';
    inputLoginPin.value = '';
    inputLoginPin.blur();
    //welcome message
    labelWelcome.textContent = `Welcome back ${pin.owner.slice(
      0,
      uname.owner.indexOf(' ')
    )}!`;

    //displaying movements
    displayMovements(uname.movements);

    //displaybalane
    labelBalance.textContent = `${uname.globalBalance.toFixed(2)}€`;

    //displaysummary
    calcDisplaySummary(uname.movements, uname.interestRate);
  }
});

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = Number(inputTransferAmount.value);
  const transferAccount = accounts.find(
    acc => acc.username === inputTransferTo.value
  );
  console.log(transferAccount);
  inputTransferAmount.value = '';
  inputTransferTo.value = '';
  inputTransferAmount.blur();
  if (
    amount > 0 &&
    amount <= uname.globalBalance &&
    transferAccount.username !== uname.username
  ) {
    transferAccount.movements.push(amount);
    uname.movements.push(-amount);
    calcGlobalBalance(accounts);
    labelBalance.textContent = `${uname.globalBalance}€`;
    displayMovements(uname.movements);
    calcDisplaySummary(uname.movements, uname.interestRate);
  }
});

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();
  const loanAmount = Math.floor(inputLoanAmount.value);
  const loanSanction = uname.movements.some(mov => {
    return mov > 0 && mov >= (loanAmount * 10) / 100;
  });
  if (loanSanction) {
    uname.movements.push(loanAmount);
    calcGlobalBalance(accounts);
    labelBalance.textContent = `${uname.globalBalance}€`;
    displayMovements(uname.movements);
    calcDisplaySummary(uname.movements, uname.interestRate);
  }
  inputLoanAmount.value = '';
  inputLoanAmount.blur();
});

btnClose.addEventListener('click', function (e) {
  e.preventDefault();
  if (
    inputCloseUsername.value === uname.username &&
    Number(inputClosePin.value) === uname.pin
  ) {
    const cnameIndex = accounts.findIndex(acc => {
      return uname.owner == acc.owner;
    });
    accounts.splice(cnameIndex, 1);
    console.log(cnameIndex);
    containerApp.style.opacity = '0';
  }
  inputCloseUsername.value = inputClosePin.value = '';
});

let sorted = false;
btnSort.addEventListener('click', function (e) {
  let sortedarray = [...uname.movements];
  e.preventDefault();
  if (sorted === false) {
    sortedarray.sort((a, b) => {
      if (a > b) return 1;
      if (a < b) return -1;
    });
    displayMovements(sortedarray);
    sorted = true;
  } else {
    displayMovements(uname.movements);
    sorted = false;
  }
});

//Array methods practice

const movementsArray = accounts.map(
  acc =>
    function () {
      return acc.movements;
    }
);
console.log(accounts);
console.log(movementsArray);
