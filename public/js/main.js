

const submitBtn = document.getElementById('submitBtn');
const cityName = document.getElementById('cityName');
const top_div = document.getElementById('top_div');
const temp = document.getElementById('temp');
const temp_status = document.getElementById('temp_status');
const middlelayer = document.querySelector('.middle_layer');


const getInfo =async (event)=>{
    event.preventDefault();
    let city = cityName.value;
    
    if(city ===""){
       alert("Please Enter the City Name.")
       middlelayer.classList.add('data_hide');
    }
    else{
        try{
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=dd77c3de734661c68c0f433781000043`

            const response = await fetch(url);
            const data =await response.json();
            const arr = [data];
            const tempp = arr[0].main.temp;
            const weather = arr[0].weather[0].main;

            top_div.innerText = `${arr[0].name},${arr[0].sys.country}`
            if(weather == "Clear"){
                temp_status.innerHTML = " <i class='fas fa-sun' style ='color:#eccc68'></i>";
            }
            else if(weather == "Clouds"){
                temp_status.innerHTML = " <i class='fas fa-cloud' style ='color:#f1f2f6'></i>";
            }
            else if(weather == "Thunderstorm"){
                temp_status.innerHTML = " <i class='fas fa-cloud-bolt' style ='color:#a4b0be'></i>";
            }
            else if(weather == "Rain"){
                temp_status.innerHTML = " <i class='fas fa-cloud-rain' style ='color:#a4b0be'></i>";
            }else{
                temp_status.innerHTML = " <i class='fas fa-cloud' style ='color:#f1f2f6'></i>";
            }
            // tempp = (tempp - 32) *5/9 ;
            temp.innerHTML = tempp;
            middlelayer.classList.remove('data_hide');

        }
        catch{
            top_div.innerText = "Please Enter The City Name Properly";
            middlelayer.classList.add('data_hide');
        }
    }
}


var day1 = document.getElementById("day");
var date = document.getElementById("today_data");          
var Days = ['Sunday', 'Monday', 'Tuesday',
        'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    
var Months = ['Jan', 'Febr', 'March', 'April',
        'May', 'June', 'July', 'Aug', 'Sept',
        'Oct', 'Nov', 'Dec'];
          
var currentDay = new Date();
          
        // Get the current day name
var day = Days[currentDay.getDay()];
          
        // Get the current month name
var month = Months[currentDay.getMonth()];
var ddd = currentDay.getMonth();
          

date.innerHTML =`${ddd} ${month}`;
day1.innerHTML = day;

submitBtn.addEventListener('click',getInfo);





// `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&appid=dd77c3de734661c68c0f433781000043`