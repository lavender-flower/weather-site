const API_KEY=`c5c20c7a8c260d2df9657767065099b3`;
const searchTemperature=()=>{
    const city=document.getElementById('city-name').value;
    const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    fetch(url)
    .then(res=>res.json())
    .then(data=>displayTemperature(data));
}
const setIntext=(id,text)=>{
    document.getElementById(id).innerText=text;
}
const displayTemperature=temperature=>{
setIntext('city',temperature.name);
setIntext('temp',temperature.main.temp);
setIntext('weather',temperature.weather[0].main);
console.log(temperature);
const url=`https://openweathermap.org/img/wn/${temperature.weather[0].icon}@2x.png`;
const imgIcon=document.getElementById('w-icon');
imgIcon.setAttribute('src',url);

}