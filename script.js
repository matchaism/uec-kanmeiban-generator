function previewer() {
  $("#JPlabel").html(document.Request.buildingJP.value);
  $("#JPlabel").css("font-size", document.Request.fontsizeJP.value+"px");
  $("#JPlabel").css("margin-top", document.Request.TpositionJP.value+"px");
  $("#JPlabel").css("margin-left", document.Request.LpositionJP.value+"px");
  $("#ENlabel").html(document.Request.buildingEN.value);
  $("#ENlabel").css("font-size", document.Request.fontsizeEN.value+"px");
  $("#ENlabel").css("margin-top", document.Request.TpositionEN.value+"px");
  $("#ENlabel").css("margin-left", document.Request.LpositionEN.value+"px");
}

function generator(){
  previewer()
  html2canvas(document.querySelector('#square')).then(function(canvas) {
    let element = document.querySelector('#Display');
    while(element.firstChild){
      element.removeChild(element.firstChild);
    }
    element.appendChild(canvas);
  });
}

function downloader(){
  let canvas = document.getElementsByTagName('canvas');
  let dl = document.createElement('a');
  dl.href = canvas[0].toDataURL();
  dl.download = "uec_kanmeiban.png";
  dl.click();
}

function OpenImgNewTab() {
  let canvas = document.getElementsByTagName('canvas');
  let opennewtab = document.createElement('a');
  opennewtab.href = canvas[0].toDataURL();
  opennewtab.click();
}
