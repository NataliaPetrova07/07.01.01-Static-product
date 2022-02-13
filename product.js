const urlParams = new URLSearchParams(window.location.search);
const query = urlParams.get("id");

const url = "https://kea-alt-del.dk/t7/api/products/" + query;

fetch(url)
  .then((res) => res.json())
  .then((data) => showProduct(data));

function showProduct(product) {
  console.log(product);
  document
    .querySelector(".breadcrumbs .category")
    .setAttribute("href", `productlist.html?category=${product.category}`);
  document.querySelector(".breadcrumbs .category").textContent =
    product.category;
  document.querySelector(".breadcrumbs .productname").textContent =
    product.productdisplayname;
  document.querySelector(
    ".purchaseBox h3"
  ).textContent = `${product.brandname} ${product.productdisplayname}`;
  document.querySelector(".purchaseBox p").textContent = product.articletype;
  document.querySelector(
    ".price"
  ).textContent = `DKK ${product.price},-`;
  document.querySelector(".info dd").textContent = product.id;
  document.querySelector(
    ".productImg img"
  ).src = `https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp`;
  document.querySelector("img.productimage").alt = product.productdisplayname;
  
  if (product.soldout) {
    document.querySelector(".productImg").classList.add("soldOut");
  }

  if (product.discount) {
    document.querySelector("p.discounted").classList.add("discountp");
    document.querySelector("p.discounted").textContent = `${product.discount}%`;
    document.querySelector("p.price").textContent = `Before DKK ${product.price},-`;
    document.querySelector(".discounted p").textContent = `Now DKK ${Math.floor(
      product.price - product.price * (product.discount / 100)
      )},-`;
  }
}
