function phone() { 
    if( navigator.userAgent.match(/Android/i)
    || navigator.userAgent.match(/webOS/i)
    || navigator.userAgent.match(/iPhone/i)
    || navigator.userAgent.match(/iPad/i)
    || navigator.userAgent.match(/iPod/i)
    || navigator.userAgent.match(/BlackBerry/i)
    || navigator.userAgent.match(/Windows Phone/i)
    ){
       return true;
     }
    else {
       return false;
     }
}

var ln = navigator.language || navigator.userLanguage;
if (ln == 'en-US') {
  window.location.href = 'https://verselinux.github.io/'
} else if (ln == 'pt-BR') {
  
} else {
  window.location.href = 'https://verselinux.github.io/'
}
