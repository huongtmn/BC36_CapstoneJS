let productsService = new ProductsService();

const domId = (id) => document.getElementById(id);

let arrayProducts = [];

let cart = [];

let getProductList = () => {
  productsService.getList().then((response) => {
    renderProductList(response.data);
    renderOptions(response.data);

    for (var i = 0; i < response.data.length; i++) {
      arrayProducts.push(response.data[i]);
    }
  });
  return arrayProducts;
};

let renderProductList = (data) => {
  let content = "";
  for (let i in data) {
    content += `
        <div class="col-3 product-item">
                     <div class="product">
                        <div class="product_image center">
                            <img src="${data[i].img}" alt="">
                        </div>
                        <div class="product_info">
                            <h6 class="product_name">${data[i].name}</h6>
                             <div class="product_price">${data[i].price}</div>
                             <div class="product_screen">${data[i].screen}</div>
                             <div class="product_backCamera">${data[i].backCamera}</div>
                             <div class="product_frontCamera">${data[i].frontCamera}</div>
                             <div class="product_desc">${data[i].desc}</div>
                             <div class="product_type" style="display: none;">${data[i].type}</div>
                        </div>
                     </div>
                     <div id="btnAadd" class="red_button add_to_cart_button"><a href="#">add to cart</a></div>
                 </div>
        `;
  }
  domId("product-list").innerHTML = content;
};

// 4. FILTER PRODUCTS

function renderOptions(data) {
  var content = `<option>Chọn loại</option>
  <option value = ${data[0].type}>${data[0].type}</option>`;

  let isDuplicate = false;

  for (let i = 1; i < data.length; i++) {
    for (let j = 0; j < i; j++) {
      if (data[i].type === data[j].type) {
        isDuplicate = true;
        break;
      }
    }
    if (!isDuplicate) {
      content += `
        <option value = ${data[i].type}>${data[i].type}</option>
        `;
    }
  }
  domId("phones").innerHTML = content;
}


var filterArrayByType = (type) => {
  return arrayProducts.filter((el) => el.type === type);
};

domId("phones").onchange = (event) => {
  const value = event.target.value;
  console.log(value);
  if (value == "iphone" || value == "Samsung") {
    let data = filterArrayByType(value);

    console.log(data);

    return renderProductList(data);
  }
  return getProductList();
};

window.onload = () => {
  getProductList();
};

// 5. THÊM SẢN PHẨM VÀO GIỎ HÀNG
