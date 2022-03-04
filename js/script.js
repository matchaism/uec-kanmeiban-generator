function GenAndDL(){
  previewer(); // Generator refers the latest previewed content.
  generateCanvas().then(function(canvas){
    // Generate and click a virtual a-tag content to download.
    let dl = document.createElement('a');
    dl.href = canvas.toDataURL();
    dl.download = "ueckanmeiban.png";
    dl.click();
  }).catch(function(err){
    alert("Failed to generate...");
  });
}

function GenAndOpen(){
  previewer(); // Generator refers the latest previewed content.
  generateCanvas().then(function(canvas){
    // Generate and click a virtual a-tag content to open.
    let opennewtab = document.createElement('a');
    opennewtab.rel = "noopener noreferrer";
    opennewtab.target = "_blank";
    opennewtab.href = canvas.toDataURL();
    opennewtab.click();
  }).catch(function(err){
    alert("Failed to generate...");
  });
}
