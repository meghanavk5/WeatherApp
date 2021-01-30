// api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}
//app key = 9036a86ec73164228accc4ccf00afdcf

const api = '9036a86ec73164228accc4ccf00afdcf';

window.addEventListener('load', ()=>{
    let long;
    let lat;
    if (navigator.geolocation){
        navigator.geolocation.getCurrentPosition((position)=>{
            long = position.coords.longitude;
            lat = position.coords.latitude;
            const baseUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${api}&units=metric`;
            console.log(baseUrl);
            fetch(baseUrl).then((response) =>{
                return response.json();
            })
            .then((data) => {
                const { temp } = data.main;
                const place = data.name;
                const {description} = data.weather[0];
                //DOM
                locationEle.textContent = `${place}`;
                tempElement.textContent = `${temp} °C`;
                decsElement.textContent = `${description}`;
                if(decsElement.textContent =="clear sky"){

                    document.body.style.backgroundImage = "url('image/clear_sky.jpeg')";
                } else if(decsElement.textContent =="few clouds"){

                    document.body.style.backgroundImage = "url('image/cloud.jpg')";
                } else if(decsElement.textContent =="rain"){

                    document.body.style.backgroundImage = "url('image/rain.jpeg')";
                } else if(decsElement.textContent =="snow"){

                    document.body.style.backgroundImage = "url('image/snow.jpeg')";
                } else if(decsElement.textContent =="sunny"){

                    document.body.style.backgroundImage = "url('image/sunny.jpg')";
                } else if(decsElement.textContent =="thunderstorm"){

                    document.body.style.backgroundImage = "url('image/thunderstorm.jpg')";
                }
                })   
        });
    }
});
const locationEle = document.querySelector('.city');
const tempElement = document.querySelector('.temp');
const decsElement = document.querySelector('.description');
 