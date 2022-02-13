const urlParams = new URLSearchParams(window.location.search);
const query = urlParams.get("category");

const url = "https://kea-alt-del.dk/t7/api/products?limit=24&category=" + query;

fetch(url)
  .then(function (res) {
    return res.json();
  })
  .then(function (data) {
    handleProductlist(data);
  });

function handleProductlist(data) {
  data.forEach(showProduct);
}

function showProduct(product) {
  console.log(product);
  // soldOut onSale
  // grab the template
  const template = document.querySelector("#productlistTemplate").content;
  document.querySelector("#categoryH2").textContent = query;
  document.querySelector(".liCurrent").textContent = query;
  // document.querySelector(".littleHeadline p").textContent = `${groupedData} products found`;
  // clone it
  const copy = template.cloneNode(true);
  // change image
  copy.querySelector(
    ".smallProduct img"
  ).src = `https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp`;
  copy.querySelector(".smallProduct img").alt = product.productdisplayname;
  // change content
  copy
    .querySelector(".viewitem")
    .setAttribute("href", `product.html?id=${product.id}`);
  copy.querySelector(
    "h3"
  ).textContent = `${product.brandname} ${product.productdisplayname}`;

  if (product.soldout) {
    copy.querySelector("article").classList.add("soldOut");
  }
  if (product.discount) {
    copy.querySelector("article").classList.add("onSale");
    copy.querySelector(".discount").textContent = `${product.discount}%`;
    copy.querySelector(".price").textContent = `DKK ${product.price},-`;
    copy.querySelector(".discounted p").textContent = `DKK ${Math.floor(
      product.price - product.price * (product.discount / 100)
    )},-`;
  }
  // grab parent
  const parent = document.querySelector("#categoryAccessories");
  // append
  parent.appendChild(copy);
}
const more = function load12more(product) {
  const parent = document.querySelector("#categoryAccessories");
  parent.appendChild(more);
};
