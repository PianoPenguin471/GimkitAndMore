if (document.domain.includes("myvue.cascadetech.org")) {
  for (var i=0;i<document.getElementsByClassName("mark").length;i++) {
    document.getElementsByClassName("mark")[i].innerText = "A"
    console.log("fixed grade for " + i)
  }
}
