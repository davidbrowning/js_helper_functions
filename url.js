function getValueFromUrlKey(key){
  var url = document.URL.split('?');
  for (var i = 1; i < (url.length); i++){
    keyValArr = url[i].split('=');
    if(keyValArr[0] === key){
      return keyValArr[1]
    }
  }
}
