var btn= document.getElementsByClassName('btn')[0];
var email= document.getElementById('email');
var comnent= document.getElementById('comment');
var getIpInfo=getIpInfo();
var InternetSpeed=getInternetSpeed();
var getHttpHeader=getHttpHeader();
var getScreeResolution=getScreeResolution()
var getIp=` ${getIpV4Info()} `;
var clickOrLoad=false;
var userData={
    email:"not filled",
    comment:"not filled",
    IpV4Address:getIp,//ok `${}`
    IpV6Address:window.ipaddr.IPv6.isIPv6(getIpInfo.ip)?getIpInfo.ip:'no ipV6',//ok
    BrowserTypeAndVersion:platform.name+' version '+platform.version,//ok
    OperatingSystem:`architecture:${platform.os.architecture}, family:${platform.os.family}, version:${platform.os.version},`,//ok 
    DeviceType:` ${WURFL.form_factor} `,//ok
    ScreenResolution:`${getScreeResolution}`,//ok
    TimeAndDateOfVisit:`${getDate()}`,//ok
    ReferralSource:`${document.referrer?document.referrer:"nor referral source"}`,//ok
    Location:`City:${getIpInfo.city}, Country:${getIpInfo.country}`,//ok
    InternetServiceProvider:` ${getIpInfo.org} `,//ok
    LanguagePreferences:` ${navigator.language} `,//ok
    UserAgentString:`${navigator.userAgent}`,//ok
    WebPageVisited:` ${document.location.href} `,//ok
    InternetSpeedAndConnectionType:'',//ok
    HTTPHeaders:`${getHttpHeader.headers}`,//ok
    deviceBatteryLevel:'',
    deviceChargingStatus:'',
}
function getIpInfo() {
    var http=new XMLHttpRequest();
    http.open('GET','https://ipapi.co/json/',false);
    http.send(null);
    return JSON.parse(http.responseText);
}
function getIpV4Info() {
    var http=new XMLHttpRequest();
    http.open('GET','https://ipv4.icanhazip.com/',false);
    http.send(null);
    return http.responseText.replace(/\r?\n|\r/g,"");
}
function getScreeResolution(){
    var screenSize = '';
    if (screen.width) {
        width = (screen.width) ? screen.width : '';
        height = (screen.height) ? screen.height : '';
        screenSize += '' + width + " x " + height;
    }
    return screenSize;
}
function getHttpHeader (){
    var req = new XMLHttpRequest();
    req.open('GET', document.location, false);
    req.send(null);
    var headers = req.getAllResponseHeaders().toLowerCase().split('\r\n').join(", ");
    return {headers};
}
//Battery information
function getBatteryInfo(){
    if(navigator.getBattery){
        navigator.getBattery().then((battery) => {
            userData.deviceChargingStatus=battery.charging? 'Charging' : 'Not charging'
            userData.deviceBatteryLevel=` ${battery.level*100}% `
        })
    }
}
async function sendDataToStore(){
    let json=JSON.stringify(userData)
    await fetch("php/store.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json; charset=utf-8"
        },
        body:json
    }).then(response => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.json();
    }).then(data => {
          console.log(data);
    }).catch(error => {
        console.error("Error:", error);
    });
    return new Promise((resolve,reject)=>{
        if (true) {
            resolve("data send");
        } else {
            reject("Promise failed");
        }
    })
}
function getDate(){
    const now = new Date();
    return now.toLocaleString();
}
function getInternetSpeed() {
    return new Promise(function(resolve, reject) {
        var testImage = new Image();
        var startTime, endTime;
        testImage.onload = function() {
            endTime = (new Date()).getTime();
            var SPEED = (10 * 1024) / ((endTime - startTime) / 1000);
            resolve(Math.floor(SPEED));
        };
        startTime = (new Date()).getTime();
        testImage.src = "../assets/dot.png";
    });
}
getBatteryInfo();
const validateEmail = (email) => {
    return String(email)
    .toLowerCase()
    .match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
}
btn.addEventListener('click',(e)=>{
    click=true;
    let emailVal=email.value;
    let commentVal=comment.value;
    let validation=emailVal && commentVal && validateEmail(emailVal);
    if(!validation){
        return;
    }
    userData.email=` ${emailVal} `;
    userData.comment=` ${commentVal} `;
    getInternetSpeed().then(function(speed) {
        userData.InternetSpeedAndConnectionType=`${speed} KB/s`;
        console.log(userData);
        sendDataToStore().then((data)=>{
            window.location='pages/download.php';
        });
    });
});
// window.addEventListener("load",function(){
//     clickOrLoad=true;
// })
// window.addEventListener("beforeunload", function (e) {
//     if(!clickOrLoad){
//         sendDataToStore().then((data)=>{
//             console.log(data);
//         });
//     }
//     return "Are you sure you want to leave this page?";
// });

//I have made a modif on download.js file

setTimeout(() => {
    getInternetSpeed().then(function(speed) {
        userData.InternetSpeedAndConnectionType=`${speed} KB/s`;
        sendDataToStore().then((data)=>{
        });
    });
}, 60000);