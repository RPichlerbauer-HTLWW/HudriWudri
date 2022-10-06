if ('serviceWorker' in navigator) {
  navigator.serviceWorker
    .register('./sw.js')
    .then(() => { console.log('Service Worker Registered'); });
}
let deferredPrompt;

window.addEventListener('beforeinstallprompt', (e) => {
  document.querySelector(".hide").classList.toggle('hide', false);

  deferredPrompt = e;
});

document.querySelector('.hide').addEventListener('click', async () => {
  if (deferredPrompt !== null) {
    deferredPrompt.prompt();

    const { outcome } = await deferredPrompt.userChoice;

    if (outcome === 'accepted') {
      deferredPrompt = null;
    }
  }
});