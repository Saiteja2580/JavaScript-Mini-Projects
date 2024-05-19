const lufthansa = {
  airline: "Lufthansa",
  iatacode: "LH",
  booking: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iatacode}${flightNum}`
    );
    this.booking.push({
      flight: `${this.iatacode}${flightNum}`,
      name,
    });
  },
};

const eurwings = {
  airline: "eurwings",
  iatacode: "EW",
  booking: [],
};

// using bind method it wll return a new function and stored in the variable
//so new book function is specifically set for lufthansda and eurwings
const book = lufthansa.book;
const bookluf = book.bind(lufthansa);
const bookEf = book.bind(eurwings);
bookluf(239,'Ramu');
bookEf(240,'Seshu');
bookluf(550,'Raja');

//we can add it to event listemer also
lufthansa.planes = 300;
lufthansa.buyPlane = function(){
    console.log(this);
    this.planes++;
    console.log(this.planes);
}
document.body.append(document.createElement('button'));
const button = document.querySelector('button');
button.style.width = '100px';
button.style.height = '50px';
button.textContent = 'Buy new plane';

button.addEventListener('click',lufthansa.buyPlane.bind(lufthansa));

//partial application - setting paramets default or preset parameters 
const addTax = (rate,value) => value + value*rate;
console.log(addTax(0.1,200));

// const addVat = addTax.bind(null,0.23);
// console.log(addVat(200));


const tax = function (rate){
    const funcr =  (value) => value + value *rate;
    return funcr;
}

const addVat = tax(0.1);
console.log(addVat(200));