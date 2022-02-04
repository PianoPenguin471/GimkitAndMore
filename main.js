if (document.domain.includes("myvue.cascadetech.org")) {
  grades = document.getElementsByClassName("mark")
  for (var i=0;i<grades.length;i++) {
    if (grades[i].innerText === "N/A") continue;
    grades[i].innerText = "A"
    console.log("fixed grade for " + i)
  }
} else {
  alert(eval(prompt("Code:")))
}
