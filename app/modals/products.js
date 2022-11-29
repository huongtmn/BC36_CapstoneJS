// Khai báo lớp đối tượng
function Products(name, price, screen, backCamera, frontCamera, img, desc, type) {
    this.name = name,
    this.price = price,
    this.screen = screen,
    this.backCamera = backCamera,
    this.frontCamera = frontCamera,
    this.img = img,
    this.desc = desc,
    this.type = type
}

let product = new Products;

function CartItem(product, quantity) {
    this.product = product,
    this.quantity = quantity
}
