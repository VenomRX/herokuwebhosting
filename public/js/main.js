// const { localsAsTemplateData } = require("hbs");

const submitBtn=document.getElementById("submitButton");
const cityName=document.getElementById("cityName");
const city_name=document.getElementById("city_name");
const temp=document.getElementById("temp");
const temp_status=document.getElementById("temp_status");

const genrate=async(event)=>{
    event.preventDefault();
    let cityValue=cityName.value;
    if(cityValue==""){
        city_name.innerText="Please write a name before search";
    }else{
        
        try{
           
            let url=`http://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=5d5bd757c70fd0e4f3f32640d369c68c`;
            const response=await fetch(url);
            const data=await response.json();
            const arrayData=[data];
      
            city_name.innerText=`${arrayData[0].name},${arrayData[0].name}`;
            temp.innerText=parseInt(arrayData[0].main.temp-273.15);
            temp_status.innerText=arrayData[0].weather[0].main;
            const tempMoof=arrayData[0].weather[0].main;

            if(tempMoof=='Clear'){
                temp_status.innerHTML='<i class="fa fa-sun"></i>';
            }else if(tempMoof='Clouds'){
                temp_status.innerHTML='<i class="fa fa-cloud"></i>';
            }else if(tempMoof='Rain'){
                temp_status.innerHTML='<i class="fa fa-rain"></i>';
            }else{
                temp_status.innerHTML='<i class="fa fa-cloud"></i>';
            }

            

        }catch{
            city_name.innerText="Please enter city name Properly";
        }
        
    }

}
submitBtn.addEventListener("click",genrate);