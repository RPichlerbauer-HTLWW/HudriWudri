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
