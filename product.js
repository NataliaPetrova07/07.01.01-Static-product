const urlParams = new URLSearchParams(window.location.search);
const query = urlParams.get("id");

const url = "https://kea-alt-del.dk/t7/api/products/" + query;

fetch(url)
.then(res => res.json())
.then(data => showProduct(data));
 
function showProduct(product){
    console.log(product);
    document.querySelector(".breadcrumbs .category").setAttribute("href", `productlist.html?category=${product.category}`);
    document.querySelector(".breadcrumbs .category").textContent=product.category;
    document.querySelector(".breadcrumbs .productname").textContent=product.productdisplayname;
    document.querySelector(".purchaseBox h3").textContent=`${product.brandname} ${product.productdisplayname}`;
    document.querySelector(".purchaseBox p").textContent=product.articletype;
    document.querySelector(".productprice").textContent=`DKK ${product.price},-`;
    document.querySelector(".info dd").textContent=product.id;
    document.querySelector("img.productimage").src=`https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp`;
    document.querySelector("img.productimage").alt=product.productdisplayname;
    // if (product.soldout) {
    //     copy.querySelector("article").classList.add("soldOut");
    // }
    // if (product.discount) {
    //     copy.querySelector("article").classList.add("onSale");
    //     copy.querySelector(".discount").textContent = `${product.discount}%`;
    //     copy.querySelector(".price").textContent = `DKK ${product.price},-`
    //     copy.querySelector(".discounted p").textContent = `DKK ${Math.floor(product.price - (product.price * (product.discount/100)))},-`;
        
    // }
}
