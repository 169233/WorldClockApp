function clockLosAngeles(){
document.querySelector(".date").innerHTML=moment().tz("America/Los_Angeles").format("MMMM Do YYYY")


document.querySelector(".time").innerHTML=moment().tz("America/Los_Angeles").format("HH:MM:SS a")
}

clockLosAngeles()
setInterval(clockLosAngeles,1000)
