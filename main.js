if (document.domain.includes("myvue.cascadetech.org")) {
  document.getElementsByClassName("mark").forEach((schoolClass, index) => {
    schoolClass.innerText = "A";
    console.log("fixed element" + index);
  })
}
alert(document.domain);
