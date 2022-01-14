var names = ['iphone10', 'iphone12', 'iphpne13', 'iphone 13 pro max', 'ipad pro', 'samsung galaxy s21', 'cable type c ', 'cashe iphone']
var prices = [100, 300, 400, 500, 600, 700, 800, 900]

var description = ['intik', 'bien', 'khalwi', 'merci', 'bonjour', 'samedi', 'dimanche', 'remerci']

var products = []

var carte = []



var produitinhtml = "";

for (var index = 0; index < names.length; index++ ) {
    var name = names[index];
    var price = prices[index];
    var desc = description[index];
    var product = {
        id :  index,
        name :  names,
        price :  prices,
        desc:  description,
        quantity: 1,
    }
    products.push(product)
    //html
    produitinhtml += `<div class="col-md-4"><div class="card" style="width: 18rem;">
    <img src="..." class="card-img-top" alt="...">
    <div class="card-body">
    <h5 class="card-title">${name}</h5>
    <p class="card-text">${desc}</p>
    <div>
    <h3>${price}</h3>
    <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
    </div>
    </div>
    </div>`


}

document.getElementById('product').innerHTML = produitinhtml;







