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

function GenAndDL(){
  previewer();
  html2canvas(document.querySelector('#square')).then(function(canvas){
    let dl = document.createElement('a');
    dl.href = canvas.toDataURL();
    dl.download = "ueckanmeiban.png";
    dl.click();
  }).catch(function(err){
    alert("Failed to generate...");
  });
}

function GenAndOpen(){
  previewer();
  html2canvas(document.querySelector('#square')).then(function(canvas){
    let opennewtab = document.createElement('a');
    opennewtab.rel = "noopener noreferrer";
    opennewtab.target = "_blank";
    opennewtab.href = canvas.toDataURL();
    opennewtab.click();
  }).catch(function(err){
    alert("Failed to generate...");
  });
}
