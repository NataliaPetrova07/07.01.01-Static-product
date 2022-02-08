const url = "https://kea-alt-del.dk/t7/api/products";

fetch(url)
    .then(function(res){
    return res.json();
    })
    .then(function(data){
        handleProductlist(data);
    })

function handleProductlist(data){
    // console.log(data);
    data.forEach(showProduct);
}

/* 
    <template id="productlistTemplate">
<article class="smallProduct">
    <img src="https://kea-alt-del.dk/t7/images/webp/640/1525.webp" alt="">
    <h3><span class="brandname">Puma</span> Deck Navy Blue Backpack</h3>
    <p class="price"><span>Before </span>DKK 1299,-</p>
    <div class="discounted">
        <p>Now DKK 1560,-</p>
        <p>-55%</p>
    </div>
    <a href="product.html">view item</a>
</article>
</template> 
*/

function showProduct(product) {
    console.log(product);
    // soldOut onSale
    // grab the template
    const template = document.querySelector("#productlistTemplate").content;
    // clone it
    const copy = template.cloneNode(true);
    // change image
    copy.querySelector(".smallProduct img").src=`https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp`;
    copy.querySelector(".smallProduct img").alt=product.productdisplayname;
    // change content
    copy.querySelector("h3").textContent = `${product.brandname} | ${product.productdisplayname}`;

    if (product.soldout) {
        copy.querySelector("article").classList.add("soldOut");
    }
    if (product.discount) {
        copy.querySelector("article").classList.add("onSale");
        copy.querySelector(".discount").textContent = `${product.discount} %`;
        copy.querySelector(".price").textContent = `Before DKK ${product.price},-`
        copy.querySelector(".discounted p").textContent = `Now DKK ${(product.price / 100) * (100 - product.discount)},-`;
    }
    // grab parent
    const parent = document.querySelector("#categoryAccessories");
    // append
    parent.appendChild(copy);
}