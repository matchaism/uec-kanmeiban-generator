function previewer() {
  $("#JPlabel").html(document.Request.buildingJP.value);
  $("#JPlabel").css("font-size", document.Request.fontsizeJP.value+"px");
  $("#ENlabel").html(document.Request.buildingEN.value);
  $("#ENlabel").css("font-size", document.Request.fontsizeEN.value+"px");
}

async function generateCanvas(){
  // Set --scale-ratio to 1 so that html2canvas will work properly.
  $(":root").css("--scale-ratio", "1");

  const canvas = await html2canvas(document.querySelector('#panel'))

  // Restore the original ratio.
  $(":root").css("--scale-ratio", "");

  return canvas;
}
