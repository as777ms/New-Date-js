const date1 = new Date();
const options = {
    weekday: 'long', // День недели полностью
    year: 'numeric', // Год числом
    month: 'long', // Месяц полностью
    day: 'numeric', // День числом
    hour: 'numeric', // Час числом
    minute: 'numeric', // Минуты числом
    second: 'numeric', // Секунды числом
    hour12: false // 24-часовой формат
};
console.log(date1.toLocaleString('tg-TJ', options));//Якшанбе, 2 Июн 2024 10:35:41
