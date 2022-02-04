const url = "https://kea-alt-del.dk/t7/api/products/1525";

fetch(url)
.then(res => res.json())
.then(data => showProduct(data));
 
function showProduct(product){
    console.log(product);
    document.querySelector(".breadcrumbs .category").textContent=product.category;
    document.querySelector(".breadcrumbs .productname").textContent=product.productdisplayname;
    document.querySelector("img.productimage").src=`https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp`;
    document.querySelector("img.productimage").alt=product.productdisplayname;
}
