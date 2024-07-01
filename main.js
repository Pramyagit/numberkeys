const view1 = document.querySelector(".view1");
view1.style.alignItems = "center";
view1.style.backgroundColor = "blue";
view1.style.display = "flex";
view1.style.flexDirection = "row";
view1.style.flexWrap = "wrap";
view1.style.height = "100vh";
view1.style.minHeight = "300px";
view1.style.justifyContent = "center";
view1.style.width = "100vw";
view1.style.gap = "10px";
const nav = (parent, iter) => {
  const createDiv = document.createElement("div");
  createDiv.style.alignItems = "center";
  createDiv.style.backgroundColor = "white";
  createDiv.style.color = "black";
  createDiv.style.display = "flex";
  createDiv.style.height = "70px";
  createDiv.style.justifyContent = "center";
  createDiv.style.width = "70px";
  createDiv.style.borderRadius = "10px";
  createDiv.style.boxShadow = "5px 3px";
  createDiv.textContent = iter;
  parent.append(createDiv);
};
for (let i = 1; i <= 10; i++) {
  nav(view1, i);
}
