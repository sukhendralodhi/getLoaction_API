const btn = document.getElementById('getBtn');
let locationContainer = document.getElementById('location');


const getLocation = ()=> {
    if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        locationContainer = "Location Not Found";
    }
}



const showPosition = (position)=>  {
    locationContainer.innerHTML = "Latitude: " + position.coords.latitude + 
      "<br>Longitude: " + position.coords.longitude;
}

btn.addEventListener('click', () => {
    console.log('Hello');
    getLocation();
});




