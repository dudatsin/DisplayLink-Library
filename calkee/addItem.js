window.onload = (function (){
//     if (localStorage.getItem('products') === null){
//         localStorage.setItem('products','{}');
//     }
// })();

// function makeid() {
//     var text = "";
//     var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  
//     for (var i = 0; i < 5; i++)
//       text += possible.charAt(Math.floor(Math.random() * possible.length));
  
//     return text;
  }


// function addItem(){
//     products = JSON.parse(localStorage.getItem('products'));
    product = {}
    product.name = document.getElementById('name').value;
    product.description = document.getElementById('description').value;
    product.price = document.getElementById('price').value;
    product.sale = document.getElementById('sale').value;
    product.author = document.getElementById('author').value;
    product.picture = document.getElementById('picture').value;
    product.addBtn = document.getElementById('add-product-btn')
    addBtn.addEventListener('click', () => {
      let newProduct = {

        title: description,

      }
    })
    
    // products[makeid()] = product;
    // localStorage.setItem('products',JSON.stringify(products));
}