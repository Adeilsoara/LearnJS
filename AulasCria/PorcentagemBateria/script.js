const BattryLevel = document.querySelector(".bateria");  
    navigator.getBattery().then(function (battery) {  
     const level = battery.level;  
     const status = level * 100 + "%";  
     BattryLevel.innerHTML = status;  
    }); 

    let isBatterySupported = 'getBattery' in navigator;
    if(!isBatterySupported) {
        console.log("Battery not supported");
     }