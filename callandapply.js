
const lufthansa = {
    airline : 'Lufthansa',
    iatacode : 'LH',
    booking : [],
    book(flightNum,name){
        console.log(`${name} booked a seat on ${this.airline} flight ${this.iatacode}${flightNum}`);
        this.booking.push(
            {
                flight : `${this.iatacode}${flightNum}`,
                name
            }
        );
    },
    
};

const eurwings = {
    airline:'eurwings',
    iatacode:'EW',
    booking : [],
};

lufthansa.book(239,'Sai Teja');
console.log(lufthansa);

//this wont be posiible because book is just a normal function and thsi points to undefined int the book function so we will use call and apply methods
const book = lufthansa.book;
//book(239,'Jonas');



book.call(lufthansa,239,'Jonas');
book.call(eurwings,256,'Sai Teja');
book.apply(eurwings,[239,'Sai Teja']);
console.log(lufthansa);
console.log(eurwings);
