function displayTime(){
    let time = new Date();
    let hr = time.getHours();
    let min = time.getMinutes();
    let sec = time.getSeconds();
        
    document.querySelector('.hour-time').innerHTML = hr;
    document.querySelector('.minute-time').innerHTML = min;
    document.querySelector('.second-time').innerHTML = sec;
}
// this predefined () will call passed function in every 1000 ms
setInterval(displayTime , 1000);