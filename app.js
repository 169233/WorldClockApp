function clockLosAngeles(){
    let elementLosAngeles=document.querySelector("#los-angeles")
    if (elementLosAngeles){
    let elementDate=document.querySelector("#date-los-angeles")
    let elementTime=document.querySelector("#time-los-angeles")
    let elementAmerica=moment().tz("America/Los_Angeles")

  elementDate.innerHTML=elementAmerica.format("MMMM Do YYYY")
  elementTime.innerHTML=elementAmerica.format("HH:mm:ss a")
    }
}
setInterval(clockLosAngeles,1000)

function clockOslo(){
    let elementOslo=document.querySelector("#oslo")
    if(elementOslo){
    let elementDate=document.querySelector("#oslo-date")
    let elementTime=document.querySelector("#oslo-time")
    let elementSweden=moment().tz("Europe/Oslo")

    elementDate.innerHTML=elementSweden.format("MMMM Do YYYY")
  elementTime.innerHTML=elementSweden.format("HH:mm:ss a")
    }
}
setInterval(clockOslo,1000)

function clockYukon(){
    let elementYukon=document.querySelector("#yukon")
    if(elementYukon){
    let elementDate=document.querySelector("#date-yukon")
    let elementTime=document.querySelector("#time-yukon")
    let elementCanada=moment().tz("Canada/Yukon")

    elementDate.innerHTML=elementCanada.format("MMMM Do YYYY")
  elementTime.innerHTML=elementCanada.format("HH:mm:ss a")
    }
}
setInterval(clockYukon,1000)

function clockTokyo(){
    let elementTokyo=document.querySelector("#tokyo")
    if(elementTokyo){
    let elementDate=document.querySelector("#date-tokyo")
    let elementTime=document.querySelector("#time-tokyo")
    let elementJapan=moment().tz("Asia/Tokyo")

    elementDate.innerHTML=elementJapan.format("MMMM Do YYYY")
  elementTime.innerHTML=elementJapan.format("HH:mm:ss a")
    }
}
setInterval(clockTokyo,1000)


let citiesSelectElement= document.querySelector("#selectCity")
citiesSelectElement.addEventListener("change",showUpdateCity)


function showUpdateCity(event){
   let cityTimeZone = event.target.value
   if(cityTimeZone==="current"){
    cityTimeZone=moment.tz.guess()
   }
   let cityName = cityTimeZone.replace("_", " ").split("/")[1]
   let cityTime=moment().tz(cityTimeZone)
   let citiesElement=document.querySelector(".cities")
   citiesElement.innerHTML=`<div class="row">
            <div class="col">
              <div class="city">
              <h2>${cityName}</h2>
                <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
              </div>
            </div>
            <div class="col">
              <div class="time">${cityTime.format("HH:mm:ss a")}</div>
            </div>
            <hr />
         </div>
         <a href="/">All cities</a>`
}

setInterval(showUpdateCity,1000)









   