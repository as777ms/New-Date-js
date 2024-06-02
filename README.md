![newdate2](./newdate2)
# new Date()
#### In JavaScript, new Date() is a constructor that creates a new Date object. This object represents a specific point in time, including the date and time.
#### Here are some common ways to use new Date():
### Get the current date and time:
``` bash
let today = new Date();
console.log(today);
```
![photo](./newdate)
#### Set a specific date and time:
``` bash
let specificDate = new Date(2024, 3, 5);  // Year, month (0-indexed), day
console.log(specificDate);
```
#### There are many other ways to work with dates and times in JavaScript using the Date object and its methods. If you're interested in learning more, I can provide you with some resources.
#### The Date object in JavaScript offers a variety of methods for working with dates and times. Here's a summary of some common methods for getting and setting date and time components:

# Getting information:
>[!TIP]
>getDate() -
``` bash
Returns the day of the month (1-31).
```
``` bash
const today = new Date();
let day = today.getDate();
console.log("Day of the month:", day);
```
>[!TIP]
>getDay() - 
``` bash
Returns the day of the week (0-6, where 0 is Sunday).
```
>[!TIP]
>getMonth() - 
``` bash
Returns the month (0-11, where 0 is January).
```
``` bash
const today = new Date();
let month = today.getMonth();
const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
console.log("Month:", monthNames[month]);
```
>[!TIP]
>getFullYear() - 
``` bash
Returns the full year (e.g., 2024).
```
``` bash
const today = new Date();
let year = today.getFullYear();
console.log("Year:", year);
```
>[!TIP]
>getHours() - 
``` bash
Returns the hours (0-23).
```
>[!TIP]
>getMinutes() - 
``` bash
Returns the minutes (0-59).
```
>[!TIP]
>getSeconds() - 
``` bash
Returns the seconds (0-59).
```
>[!TIP]
>getMilliseconds() - 
``` bash
Returns the milliseconds (0-999).
```
>[!TIP]
>getTime() - 
``` bash
Returns the number of milliseconds since midnight, January 1, 1970, UTC.
```
![hereyoyare](./newdate3)
# Setting information:

>[!TIP]
>setDate(day) -
``` bash
Sets the day of the month (1-31).
```
``` bash
const myBirthday = new Date();
myBirthday.setDate(15); // Set day to 15th
console.log("Birthday (after setting date):", myBirthday);
```
>[!TIP]
>setMonth(month) - 
``` bash
Sets the month (0-11).
```
``` bash
const christmas = new Date();
christmas.setMonth(11); // December (11)
christmas.setDate(25);  // Set day to 25th
console.log("Christmas (after setting month and date):", christmas);
```
>[!TIP]
>setFullYear(year) - 
``` diff
+Sets the full year.
```
>[!TIP]
>setHours(hour) - 
``` diff
+Sets the hours (0-23).
```
>[!TIP]
>setMinutes(minutes) -
```diff
+Sets the minutes (0-59).
```
>[!TIP]
>setSeconds(seconds) - 
```diff
+Sets the seconds (0-59).
```
>[!TIP]
>setMilliseconds(milliseconds) - 
``` diff
+Sets the milliseconds (0-999).234567890-=
```
>[!TIP]
>setTime(milliseconds) - 
``` diff
-Sets the date and time based on the number of milliseconds since midnight, January 1, 1970, UTC.
```

>[!TIP]
>Other methods:
![HERERER](./newdate4)
>[!TIP]
> toString() - 
> Converts the Date object to a human-readable string.



>[!TIP]
>toLocaleString() 
>Converts the Date object to a string according to the locale.`krch stringw mekna vobasta ba xamu lokal i 1 methodi objectai Метод toLocaleString() экземпляров Date возвращает строку с языковым представлением этой даты в местном часовом поясе. В реализациях с поддержкой API Intl.DateTimeFormat этот метод просто вызывает Intl.DateTimeFormat `





>[!NOTE]
>`What is the difference between toString and toLocaleString?`
>`It shows how toString() won't format the variable but toLocaleSting() will format it based on locale setting of the geography. It is a great help for programmer in order to avoid to write extra function to format the string or Date. toLocaleString() will take care of this.`
```js
let date1 = new Date(Date.UTC(2012, 11, 20, 3, 0, 0));

console.log(date1.toLocaleString('ar-EG'));
// Expected output: "٢٠‏/١٢‏/٢٠١٢ ٤:٠٠:٠٠ ص"
```

```js
let testArray = [4, 7, 10];

let euroPrices = testArray.toLocaleString("fr", {
  style: "currency",
  currency: "EUR",
});
// "4,00 €,7,00 €,10,00 €"
```
>[!TIP]
>valueOf() 
>Returns the primitive value of the Date object (milliseconds since epoch).`krch xozi i ai  (January 1, 1970, 00:00:00 UTC) inami soli Unix to vaqti komputeri ma ba millisecond brovard aga bo runw kni milisecond aliw mewava`
```js
const d = new Date();
let ms = d.valueOf();
console.log(ms);//1717305329714
```
#### For a complete reference on all Date object methods, you can refer to the JavaScript documentation: