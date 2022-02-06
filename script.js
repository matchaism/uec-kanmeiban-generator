function generate() {
  $("#JPlabel").html(document.Request.buildingJP.value);
  $("#JPlabel").css("font-size", document.Request.fontsizeJP.value+"px");
  $("#JPlabel").css("margin-top", document.Request.TpositionJP.value+"px");
  $("#JPlabel").css("margin-left", document.Request.LpositionJP.value+"px");
  $("#ENlabel").html(document.Request.buildingEN.value);
  $("#ENlabel").css("font-size", document.Request.fontsizeEN.value+"px");
  $("#ENlabel").css("margin-top", document.Request.TpositionEN.value+"px");
  $("#ENlabel").css("margin-left", document.Request.LpositionEN.value+"px");
}

function capture(){
  html2canvas(document.querySelector('#square')).then(function(canvas) {
    var element = document.querySelector('#DL');
    while(element.firstChild){
      element.removeChild(element.firstChild);
    }
    element.appendChild(canvas);
  });
}
