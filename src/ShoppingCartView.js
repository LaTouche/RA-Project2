export default class ShoppingCartView {
    constructor(){
function popup(){
        $(document).onclick('.cartView', this, function(event){
            console.log(event.data);
            let theApp = event.data;
            theApp.shoppingCartView.showCartPopup(theApp.products);
            $(".cartView").fadeIn();
        })
         $(document).on('click', '.close', this, function(event){
            $(".cartView").fadeOut();
        });
}

    }
    showCartPopup(products) {

        //onCartView(theApp){

        return function(e){
        // console.log(theApp);
        // console.log(e.target.getAttribute("data-sku"));
        let theSku = e.target.getAttribute("data-sku");
        theApp.shoppingCartView.addItemToCart(theSku);
    }

        console.log(products);
        let output = "";
        let CartView = $('.cartView');

            for (let i = 0; i < sessionStorage.length; i++) {
                let currentSku = sessionStorage.key(i);
                let currentQuantity = sessionStorage.getItem(currentSku);
                for (let p = 0; p < products.length; p++) {
                    let currentProduct = products[p];
                    let productSku = currentProduct.sku;
                        productSku = productSku.toString();
                    if (productSku == currentSku) {
                        let image = currentProduct.image;
                        let name = currentProduct.name;
                        let price = currentProduct.price;
                        output = output + `<img class="cart-image" src= "${image}" alt= "${name}">
                                        <p class="cart-price"> ${price} </p>
                                        <form class="cart-quantity"> ${currentQuantity} </form>
                                         </div>`;

                                         return function(e){
                                            newDiv.appendChild(output);
                                            $('.cartView').output;
                    }

                }
            }
            // $('.cartView').appendChild(output);
    }
    // $('#myModal').modal(showCartPopup)
// function (myFunction() {
//     var popup = document.getElementsByClassName(".viewCart");
//     popup.classList.toggle("show");
// })

}
}
