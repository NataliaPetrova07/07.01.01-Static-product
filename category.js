const url = "https://kea-alt-del.dk/t7/api/categories";

fetch(url)
  .then(function (res) {
    return res.json();
  })
  .then(function (data) {
    handleProductlist(data);
  });

function handleProductlist(data) {
  // console.log(data);
  data.forEach(showCategory);
}

function showCategory(category) {
  console.log(category);
  // grab the template
  const template = document.querySelector("#categoryListTemplate").content;
  // clone it
  const copy = template.cloneNode(true);
  // change content
  copy
    .querySelector("a")
    .setAttribute("href", `productlist.html?category=${category.category}`);
  copy.querySelector("h2").textContent = `${category.category}`;
  // grab parent
  const parent = document.querySelector("#CL");
  // append
  parent.appendChild(copy);
}
