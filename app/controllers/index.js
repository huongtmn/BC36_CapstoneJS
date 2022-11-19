// Data hardcode cần thay thế bằng API
let prod = new Products (
    "iphoneX",
    "$1000",
    "screen 68",
    "2 camera 12 MP",
    "7 MP",
    "https://cdn.tgdd.vn/Products/Images/42/114115/iphone-x-64gb-hh-600x600.jpg",
    "Thiết kế mang tính đột phá",
    "iphone",
);

// Test data
let prodArr = [prod,prod,prod,prod,prod,prod,prod,prod]

const domId = (id) => document.getElementById (id);

const renderProductList = (prodArr) => {
    let content = "";
    
    for(let i in prodArr) {
        content +=`
        <div class="col-3 product-item">
                    <div class="product">
                        <div class="product_image center">
                            <img src="${prodArr[i].img}" alt="">
                        </div>
                        <div class="product_info">
                            <h6 class="product_name">${prodArr[i].name}</h6>
                            <div class="product_price">${prodArr[i].price}</div>
                            <div class="product_screen">${prodArr[i].screen}</div>
                            <div class="product_backCamera">${prodArr[i].backCamera}</div>
                            <div class="product_frontCamera">${prodArr[i].frontCamera}</div>
                            <div class="product_desc">${prodArr[i].desc}</div>
                            <div class="product_type" style="display: none;">${prodArr[i].type}</div>
                        </div>
                    </div>
                    <div id="btnAđ" class="red_button add_to_cart_button"><a href="#">add to cart</a></div>
                </div>
        `
    }
    
    domId("product-list").innerHTML = content;
}

window.onload = () => {
    renderProductList(prodArr);
}