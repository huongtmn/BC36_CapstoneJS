let productsService = new ProductsService();

const domId = (id) => document.getElementById(id);

let arrayProducts = [];

let getProductList = () => {
  productsService.getList().then((response) => {
    renderProductList(response.data);
    
    for(var i = 0; i < response.data.length; i++){
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
                     <div id="btnAđ" class="red_button add_to_cart_button"><a href="#">add to cart</a></div>
                 </div>
        `;
  }
  domId("product-list").innerHTML = content;

};

// FILTER SẢN PHẨM

// let arrayPhoneList = [];

// for (let i in getProductList) {
//   if (getProductList.hasOwnProperty(i)) {
//     arrayPhoneList.push(i);
//   }
// }

// filterPhoneList = (type) => {
//   let data = this.arrayPhoneList.filter((element) => {
//     if (element.type === type) {
//       return true;
//     }

//     return false;
//   });

//   return data;
// };

// domId("phones").onchange = (event) => {
//   const value = event.target.value;

//   let data = filterPhoneList(value);

//   renderProductList(data);
// };

// FILTER SẢN PHẨM

filterArrayByType = (type) => {
  return arrayProducts.filter(el => el.type === type);
};

domId("phones").onchange = (event) => {
  const value = event.target.value;
  if(value == "iphone" || value == "Samsung") {
    let data = filterArrayByType(value);

    return renderProductList(data);
  }
  return getProductList();
};

window.onload = () => {
  getProductList();
};




