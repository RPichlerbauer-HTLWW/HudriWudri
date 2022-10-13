if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('./sw.js').then(() => {
    console.log('Service Worker Registered');
  });
}
document.getElementById('FrontBtn').style.backgroundColor = 'darkred';
document.getElementById('BackBtn').style.backgroundColor = 'darkred';
document.getElementById('leftBtn').style.backgroundColor = 'yellow';
document.getElementById('rightBtn').style.backgroundColor = 'yellow';
function Change(element) {
  if (element.style.backgroundColor == 'green') {
    element.style.backgroundColor = 'darkred';
  } else if (element.style.backgroundColor == 'darkred') {
    element.style.backgroundColor = 'green';
  }
}
function uhr() {
  const act = new Date();
  document.getElementById('clock').innerHTML =
    act.getHours() + ':' + act.getMinutes() + ':' + act.getSeconds();
  window.setTimeout('uhr()', 1000);
}
//-----------------------------------------------------------------------------------------------------------
let lastReadingTimestamp;
let accelerometer = new LinearAccelerationSensor();
accelerometer.addEventListener('reading', (e) => {
  if (lastReadingTimestamp) {
    intervalHandler(Math.round(accelerometer.timestamp - lastReadingTimestamp));
  }
  lastReadingTimestamp = accelerometer.timestamp;
  accelerationHandler(accelerometer, 'moAccel');
});
accelerometer.start();
var onDeviceMotion = function (eventData) {
  accelerationHandler(eventData.acceleration, 'moAccel');
};
function accelerationHandler(acceleration, targetId) {
  var info,
    xyz = '[X, Y, Z]';

  info = xyz.replace('X', acceleration.x && acceleration.x.toFixed(3));
  info = info.replace('Y', acceleration.y && acceleration.y.toFixed(3));
  info = info.replace('Z', acceleration.z && acceleration.z.toFixed(3));
  document.getElementById(targetId).innerHTML = info;
}
