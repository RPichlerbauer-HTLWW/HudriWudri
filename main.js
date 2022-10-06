if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('./sw.js').then(() => {
    console.log('Service Worker Registered');
  });
}
document.getElementById('FrontBtn').style.backgroundColor = 'darkred';
document.getElementById('BackBtn').style.backgroundColor = 'darkred';
function Change(element) {
  if (element.style.backgroundColor == 'green') {
    element.style.backgroundColor = 'darkred';
  } else if (element.style.backgroundColor == 'darkred') {
    element.style.backgroundColor = 'green';
  }
}