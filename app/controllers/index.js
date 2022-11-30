let productsService = new ProductsService();

const domId = (id) => document.getElementById(id);

let arrayProducts = [];

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
                             <div class="product_price">${data[i].price}<sup>$</sup></div>
                             <div class="product_screen">${data[i].screen}</div>
                             <div class="product_backCamera">${data[i].backCamera}</div>
                             <div class="product_frontCamera">${data[i].frontCamera}</div>
                             <div class="product_desc">${data[i].desc}</div>
                             <div class="product_type" style="display: none;">${data[i].type}</div>
                        </div>
                     </div>
                     <buton onclick=addCart(${data[i].id}) id="btnAdd${data[i].id}" class="red_button add_to_cart_button"><a href="#/">add to cart</a></buton>
                 </div>
        `;
  }
  domId("product-list").innerHTML = content;
};

// 4. FILTER PRODUCTS
const renderOptions = (data) => {
  let arrType = [...new Set(data.map(prod => prod.type))];

  let content = `<option value="ALL">All type</option>`;

  for (let i in arrType) {
    content += `<option value="${arrType[i]}">${arrType[i]}</option>`;
  }
  domId("phones").innerHTML = content;
}
  
let filterArrayByType = (type) => {
  return arrayProducts.filter((el) => el.type === type);
};

domId("phones").onchange = (event) => {
  const value = event.target.value;

  if (value == "ALL") {
    return renderProductList(arrayProducts);
  } else {
    return renderProductList(filterArrayByType(value));
  }
};

/**CART */
// 5-6-7. THÊM SẢN PHẨM VÀO GIỎ HÀNG
let cart = [];

const addCart = (id) => {
  let product = arrayProducts.find(product => product.id == id);
  let cartItem = new CartItem (
    product,
    1,
  ); 
  
  let isExited = false;

  if(cart.length == 0) {
    cart.push(cartItem);
    renderCart();
  } else {
    for(let i in cart) {
      if(cart[i].product.id == cartItem.product.id){
        if(cart[i].quantity > 9) {
          isExited = true;
          alert("Bạn chỉ được chọn tối đa 10 đơn vị sản phẩm cho một loại mặt hàng!");
        } else {
          isExited = true;
          cart[i].quantity += 1;   
          renderCart();
          return cart;
        }
      } 
    }
    if(!isExited) {
      cart.push(cartItem);
      renderCart();
      return cart;
    }
  }
};

// 9. CHỈNH SỬA SỐ LƯỢNG TRONG GIỎ HÀNG. MAX 10 ĐƠN VỊ MỘT LOẠI SẢN PHẨM
// Tăng SL
const plusItem = (id) => {
  for(let i in cart) {
    if(cart[i].product.id == id){
      if(cart[i].quantity > 9) {
        alert(`Bạn chỉ được chọn tối đa 10 đơn vị sản phẩm ${cart[i].product.name}!!`);
      } else {
        cart[i].quantity += 1;
      }
    }
  }
  renderCart();
  saveData();
}

// Giảm SL
const minusItem = (id) => {
  for(let i in cart) {
    if(cart[i].product.id == id){
      if(cart[i].quantity < 2) {
        alert(`Sản phẩm ${cart[i].product.name} đã xóa khỏi giỏ hàng!!`);
        cart.splice(i, 1); 
      } else {
        cart[i].quantity -= 1;
      }
    }   
  }
  renderCart();
  saveData();
}

// 8-10. IN GIỎ HÀNG RA MÀN HÌNH, DUYỆT MẢNG CART. IN TỔNG TIỀN RA GIAO DIỆN

// In giỏ hàng ra màn hình
const renderCart = () => {
  let content1 = "";
  let sum = [];

  for(var i=0; i < cart.length; i++) {
    // Tổng tiền thanh toán cho một mặt hàng
    payPerItem = cart[i].product.price * cart[i].quantity;

    content1 += `
      <tr>
        <td class="tdName">
          <img src="${cart[i].product.img}" alt="">
          <P>${cart[i].product.name}</P>
        </td>
        <td>
          <p><span>$${cart[i].product.price}</span></p>
        </td>
        <td>
          <div class="wrapper">
            <span onclick="minusItem(${cart[i].product.id})" id="minusBtn${cart[i].product.id}" class="minus">-</span>
            <span class="num">${cart[i].quantity}</span>
            <span onclick="plusItem(${cart[i].product.id})" id="plusBtn${cart[i].product.id}" class="plus">+</span>
          </div>
        </td>
        <td>
          <p><span>$${payPerItem}</span></p>
        </td>
        <td>
          <i class="fa-solid fa-trash-can"></i>
        </td>
      </tr>
    `
    sum.push(payPerItem);
  }

  // Tổng tiền cần thanh toán cho tất cả mặt hàng
  const totalPay = sum.reduce((partialSum, a) => partialSum + a, 0);
  let content2 = `
    <div class="price-total">
      <p>Tổng tiền:<span> $${totalPay}</span></p>
    </div>
  `;

  domId("cartBody").innerHTML = content1;
  domId("totalPay").innerHTML = content2;

  saveData();
};

// 11. LƯU MẢNG CART, LẤY DATA NGƯỢC LẠI TỪ LOCAL STORAGE
// Lưu data xuống local storage
const saveData = () => {
  let cartJSON = JSON.stringify(cart);
  
  localStorage.setItem("CL", cartJSON);
}

// Lấy data từ local storage
const getData = () => {
  let cartJSON = localStorage.getItem("CL");
  
  if (!cartJSON) return;
  
  // chuyển chuỗi JSON thành mảng
  let cartLocal = JSON.parse(cartJSON); 
  cart = mapData(cartLocal);
  
  renderCart();
}

const mapData = (cartLocal) =>{
  let result = [];
  for(var i=0; i < cartLocal.length; i++){
    var oldCart = cartLocal[i];
    var newCart = new CartItem(
      oldCart.product,
      oldCart.quantity
    );
    result.push(newCart); 
  }
  return result;
}

// Onload page
window.onload = () => {
  getProductList();
  getData();
};

