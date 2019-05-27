function edit(productId){
    document.getElementsByClassName('edit')[0].style.display = 'block';
    document.getElementById('productidd').value = productId;
    products = JSON.parse(localStorage.getItem('products'));
    document.getElementById('name').value = products[productId].name;
    document.getElementById('description').value = products[productId].description;
    document.getElementById('price').value = products[productId].price;
    document.getElementById('sale').value = products[productId].sale;
    document.getElementById('author').value = products[productId].author;
    document.getElementById('picture').value = products[productId].picture;
}

function editItem(){
    products = JSON.parse(localStorage.getItem('products'));
    id = document.getElementById('productidd').value;

    product = {}
    product.name = document.getElementById('name').value;
    product.description = document.getElementById('description').value;
    product.price = document.getElementById('price').value;
    product.sale = document.getElementById('sale').value;
    product.author = document.getElementById('author').value;
    product.picture = document.getElementById('picture').value;
    

    products[id] = product;
    localStorage.setItem('products',JSON.stringify(products));
    location.reload();

}


products = JSON.parse(localStorage.getItem('products'));
keys = Object.keys(products);
for (let i=0;i<keys.length;i++){
    section = document.querySelector('products');
    div = document.createElement('div');
    div.className = 'gallery';
    div.innerHTML = `<a target="_blank" href="https://www.w3schools.com/css/img_5terre.jpg">
    <img src="${products[keys[i]].picture}" alt="Cinque Terre" width="600" height="400">
    
    </a>
    <div class='desc'>Name: ${products[keys[i]].name}</div>
    <div class='desc'>Author:${products[keys[i]].author} </div>
    <div class='desc'>Price: ${products[keys[i]].price}</div>
    <div class="desc">${products[keys[i]].description}</div>
    <input type='button' value='Edit' onclick='edit("${keys[i]}")'>`
    
    section[0].appendChild(div);
}

// li = document.createElement('li');
// li.innerHMTL = `						<li><img src="${products[keys[i]].picture}"> <p>გზა</p><br><p>კორმაკ მაკარტი</p> <p><b> 10.99 ლ</b>- <span style="text-decoration:line-through;">15.00 ლ </span></p></li>
// `
// document.getElementsByClassName('uli')[0].appendChild(li);
