function downloadData(safe) {
  var toSave = JSON.stringify(safe)

  var date = new Date().toISOString()
  var day = date.substr(0, 10)
  var time = date.substr(11, 8)

  var hiddenElement = document.createElement('a');
  hiddenElement.href = 'data:text/json;charset=utf-8,' + encodeURI(toSave);
  hiddenElement.target = '_blank';
  hiddenElement.download = 'symlit-prag-' + train.subid + '-' + data.task + '-' + day + '-' + time + '.json';
  hiddenElement.click();
}