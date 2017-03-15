/**
 * Created by Edward_J_Apostol on 2017-01-28.
 */

// this class is responsible for displaying the product data...
// Perhaps in a carousel.
export default class CatalogView{

    constructor(){
        // this.initCarousel(); // do the function initCarousel, which is written below around lines 132-133
         this.carousel=document.getElementsByClassName("owl-carousel");
         this.theApp = null; //this.theApp refers to THIS catalogView file which has the property theApp, which refers to the app.js
    }

    initCarousel(){
        // this.carousel=document.getElementsByClassName("owl-carousel");
        /*
        You should initialize the flickicity carousel here.
        Right now this code just adds the div tags you would need to add
        inside the carousel 'container'.
        Note that this.carousel refers to the div by its class attribute.
        Since more than one tag can belong to the same class,
        you either have to give the carousel tag an id as well...or
        refer to the carousel div tag as this.carousel[0] using bracket
        notation (since classes mean their *could* be more than one tag
        belonging to that class) - see line 88 below.
         */

$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1240:{
            items:4
        }
    }
});
 });
    }

//rmb we made the add to cart button, we made the function for on click, this is the empty function's function
//the onClickCartButton receives theApp, also rmb that e always has to have a function (e) {}
    onClickCartButton(theApp) {

        return function (e){
            console.log(theApp);
             console.log(e.target.getAttribute("data-sku"));
             /*e.target.getAttribute ("data-sku") is the button with the sku value that we saw in the console. you can also write it like
             console.log(e.target .attribute["data-sku"];
             now that we know the data sku works, we need to pass it to the shopping cart, which the code below*/
             let theSku = e.target.getAttribute("data-sku");
             theApp.shoppingCart.addItemToCart(theSku); /*addItemToCart is a function that should be in the shoppingcart.js file.
             note that theSku is a variable with the value "data-sku" which is essentially the same as (shu) in the shoppingcart.js file*/
             theApp.shoppingCart.removeItemFromCart(theSku);
             theApp.shoppingCart.initShoppingCart(theSku);
    }
}


//realize that theApp is refering to 'this' from App.js on line 51
    addProductsToCarousel(products, theApp){

        this.theApp = theApp; //this line tells the carousel of theApp's exsistance??

// if product is nothing or undefined, dont show anything
        if (products === undefined || products == null){
            return ; // do not do anything! there is no data
        };

        /* the loop creates all the elements for each item in the carousel.
         * it recreates the following structure
         * <div class="product-wrapper">
         * <img src="images/stretch-knit-dress.jpg" alt="Image of stretch knit dress" />
         * <p class="product-type">Dresses</p>
         * <h3>Stretch Knit Dress</h3>
         * <p class="price">$169.00</p>
         * </div>
          * */
          //p is just the counter
        for (let p=0; p<products.length; p++){
            //let the product we're looking at be in the product's array
            let product = products[p];
            console.log(product);
            // each product is a product object
            // use it to create the element

            // create the DIV tag with class 'product-wrapper''
            //we make a new div bc rmb inside the owl carosel we had more divs inside it holding each product's name, image, price in it
            let newDiv = document.createElement("div");
            newDiv.setAttribute("class","product-wrapper");
                // this just makes a new div, but we didnt place it anywhere yet. <div class='product-wrappe'r></div>

            // create a new IMG tag. Suggest to add data-sku attribute here too
            // so that if you 'click' on the image, it would pop up a quick-view
            // window and you can use the sku.
            let newImg = document.createElement("div");
           // use the image's property 'image'
            newImg.setAttribute("style",`background-image: url('${product.image}'); background-size:contain; bckground-repeat:no-repeat; position:center; height:250px;`);
            newImg.setAttribute("alt", `${product.name}`); // this works too
            //set the data-sku for the image
            newImg.setAttribute("data-sku",product.sku);

            //this is a line break
            let newHr= document.createElement("hr");

             // create a new H3 tag to show the name
            let newH3Tag = document.createElement("h3");
            newH3Tag.setAttribute("class", "greyText uppercase");
            let newH3TagTextNode = document.createTextNode(product.manufacturer); //this creates the text that will go btwn the <h3> tags
            newH3Tag.appendChild(newH3TagTextNode); //appendchild means it will insert the text between the h3 tags
            //<h3></h3>

            // create a new Paragraph to show a description
            let newPara = document.createElement("p");
            newPara.setAttribute("class","product-type text-center");
            let newParaTextNode = document.createTextNode(product.department);
            newPara.appendChild(newParaTextNode);

            //create new paragraph to show price
            let newPricePara = document.createElement("p");
            newPricePara.setAttribute("class","price greenText");
            let newPriceParaTextNode = document.createTextNode(product.regularPrice); //2.99
            newPricePara.appendChild(newPriceParaTextNode);
            //<p class='price'>2.99</p>

            /* you will need similar code to create
            an add to cart and a quick view button
            remember that each button you create should have
            a data-sku attribute that corresponds to the sku
            of each product.
            */

            //make the quickview buttons
            let quickViewButton = document.createElement("button");
            quickViewButton.setAttribute("id",`qv_${product.sku}`);  /* this is for the id note that the ${product.sku} is just a placeholder for the product sku. back ticks are used bc this is ES6 */
            quickViewButton.setAttribute("data-sku",product.sku); // this is for the data-sku;
            quickViewButton.setAttribute("type", "button");
            quickViewButton.setAttribute("style", "border: 1px solid green; background-color:white; color: grey; font-family:roboto; padding:2%;");
            let quickViewTextNode = document.createTextNode("Quick View");
            quickViewButton.appendChild(quickViewTextNode);

            //make the add to cart button
             let addToCartButton = document.createElement("button");
            addToCartButton.setAttribute("id",`cart_${product.sku}`);  /* this is for the id note that the ${product.sku} is just a placeholder for the product sku. back ticks are used bc this is ES6 */
            addToCartButton.setAttribute("data-sku",product.sku); // this is for the data-sku;
            addToCartButton.setAttribute("type", "button");
            addToCartButton.setAttribute("style", "border: 1px solid green; background-color:green; color:white; font-family:roboto; padding:2%;");
            let addToCartTextNode = document.createTextNode("Add to Cart");
            addToCartButton.appendChild(addToCartTextNode);
            addToCartButton.addEventListener("click", this.onClickCartButton(this.theApp), false);
             // addToCartButton.addEventListener("click", fuction(e) {console.log('click')}, false); // listens for a click, and everytime its clicked, it runs the function. notice the function is emtpy and nly has console log. this is a sanity check



            //we need to append these to the Div
            newDiv.appendChild(newImg);
            newDiv.appendChild(newHr);
            newDiv.appendChild(newH3Tag);
            newDiv.appendChild(newPara);
            newDiv.appendChild(newPricePara);
            newDiv.appendChild(quickViewButton); // this adds new quickViewButton
            newDiv.appendChild(addToCartButton); // this adds new add to cart buttons
            // this produces your div tags with you img, paragraph h3, and price tags
            /*<div>
                <img src="somepic.jpg"></img>
                <p>Buy me</p>
                <h3>Dell inspirion 12"</h3>
                <p>299.99</p>
                add the buttons and quickview in the same manner
                <button type= "button" id ="qv_${product.sku}" data-sku=" " >Quickview</button>
                <button type= "button" id="cart_${product.sku}" data-sku=" ">Add to Cart</button>
             </div> */
            /*at the end of the loop, your telling it to go to the first carousel (bc you may have more than 1 div tag with the same class
            name)  to append/add that child--> so everytime around the loop, it will add a new div tag containing all
            you img, h3, p tags to each of your products (each div is each of your images*/
            this.carousel[0].appendChild(newDiv);
        }
        //now that we made and appended the add to cart button and quickview button, we can now use the eventlistener or click functions

        //this line will initate the carousel so all your things for the carousel actually works
        this.initCarousel();

    }


}
