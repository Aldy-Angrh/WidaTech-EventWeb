export const GetCurrentDate = ()=>{
    var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); 
var yyyy = today.getFullYear();

today = mm + '-' + dd + '-' + yyyy;
return today
}

export const GetCurrentTime = ()=>{
    var time = new Date();
var dd = String(time.getHours())
var mm = String(time.getMinutes())

time = dd + ':' + mm ;
return time
}
