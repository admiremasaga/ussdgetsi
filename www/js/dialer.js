function dialNum(){
window.plugins.CallNumber.callNumber(onSuccess, onError, "0773384458", bypassAppChooser);
function onSuccess(result){
  alert ('calling');
  console.log("Success:"+result);
}

function onError(result) {
  console.log("Error:"+result);
  alert ('calling');
}
}
