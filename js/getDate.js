const date = new Date();
const day = date.getDate();
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const month = months[date.getMonth()];
const year = date.getFullYear();
const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursdya', 'Friday', 'Saturday'];
const weekday = weekdays[date.getDay()];

document.querySelector('.day').innerText = day;
document.querySelector('.month').innerText = month;
document.querySelector('.year').innerText = year;
document.querySelector('.weekday').innerText = weekday;