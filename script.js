var weatherSearchBtn = document.querySelector("#weather-search");
var geoLocateApi= `http://api.openweathermap.org/geo/1.0/direct?q=${userInput}&limit=5&appid={76dea1d2eaa53c39fea214a799bab840}`;
var weatherApiKey='76dea1d2eaa53c39fea214a799bab840';
var forcastApiCall= `https://api.openweathermap.org/data/3.0/onecall?lat=${latitude}&lon=${longitude}&exclude={part}&appid={76dea1d2eaa53c39fea214a799bab840}`
var userInput = document.querySelector('#search-input');


var weatherSearch= function(){
    fetch(geoLocateApi)
    .then (function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data)
        for (var i=0; i<data.length; i++){
            var latitude= data[i].lat
            var longitude=data[i].lon
        }
    .then (function(){
        fetch(weatherApiCall)
        .then (function(response){
                return response.json();
        .then (function(data){
         for (var i=0; i<data.length; i++){
         var currentWeather= doctument.createElement('');
         var fiveDayForcast = document.createElement('');
                    };
                });
            }
            );
        });  
    });
};

function searchHistory(){
    var prevSearch =JSON.parse(localStorage.getItem('Previous Search'));
    then (function(){
        document.createElement('')
    })
}


localStorage.setItem('Previous Search', userInput);
window.onload=function(){
weatherSearchBtn.addEventListener('click', weatherSearch)};
console.log(geoLocateApi);