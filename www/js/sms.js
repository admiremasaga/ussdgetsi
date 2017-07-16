function receiveSMS(){
SmsReceiver.isSupported((supported) => {
  if (supported) {
    alert("SMS supported!")
  } else {
    alert("SMS not supported")
  }
}), function() => {
  alert("Error while checking the SMS support")
})

function startReceiving{
SmsReceiver.startReception(({messageBody, originatingAddress}) => {
  alert(messageBody)
}, () => {
  alert("Error while receiving messages")
})
}

function stopReceiving{
SmsReceiver.stopReception(() => {
  alert("Correctly stopped")
}, () => {
  alert("Error while stopping the SMS receiver")
})
}

}