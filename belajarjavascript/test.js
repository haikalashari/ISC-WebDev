var section = document.getElementById("section");
const h1 = document.createElement('h1')
h1.innerHTML = "Google"
h1.style.fontSize = "100px";
h1.style.lineHeight = "120%px"
h1.style.margin = "0";
h1.style.marginBottom = "20px";
const input = document.createElement("input");
input.type = "text";
input.placeholder = "Search...";
input.style.padding = "8px 16px";
input.style.borderRadius = "24px";
input.style.border = "1px solid #bbb";
input.style.width = "50vh";
const button1 = document.createElement("button");
button1.innerHTML = "Penelusuran Google";
button1.style.backgroundColor = "#555";
button1.style.border = "1px solid #555"; 
button1.style.padding = "8px 16px";
button1.style.borderRadius = "4px";
button1.style.marginTop = "24px";
button1.style.color = "#fff";
button1.style.marginRight = "10px";
const button2 = document.createElement("button");
button2.innerHTML = "Saya Lagi Beruntung";
button2.style.backgroundColor = "#555";
button2.style.border = "1px solid #555"; 
button2.style.padding = "8px 16px";
button2.style.borderRadius = "4px";
button2.style.marginTop = "24px";
button2.style.color = "#fff";
section.style.height = "100%";
section.style.display = "flex";
section.style.flexDirection = "column";
section.style.alignItems = "center";
const divButton = document.createElement("div");
divButton.style.display = "flex";
divButton.style.flexDirection = "row";
const bahasa = document.createElement("p");
bahasa.innerHTML = "Google tersedia dalam bahasa ";
bahasa.style.marginTop = "16px";
section.append(h1);
section.append(input);
divButton.append(button1);
divButton.append(button2);
section.append(divButton);
section.append(bahasa);