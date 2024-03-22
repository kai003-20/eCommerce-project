const product = [
    {
        id: 0,
        image: 'image/gg-1.jpg',
        title: 'Z Flip Foldable Mobile',
        price: 120,
    },
    {
        id: 1,
        image: 'image/hh-2.jpg',
        title: 'Air Pods Pro',
        price: 60,
    },
    {
        id: 2,
        image: 'image/ee-3.jpg',
        title: '250D DSLR Camera',
        price: 230,
    },
    {
        id: 3,
        image: 'image/aa-1.jpg',
        title: 'Head Phones',
        price: 100,
    },
    {
        id: 4,
        image: 'image/product2.jpeg',
        title: 'Smart watch',
        price: 470,
    },
    {
        id: 5,
        image: 'image/product3.jpeg',
        title: 'Glass protector',
        price: 360,
    },
    {
        id: 6,
        image: 'image/product4.jpeg',
        title: 'Data Cable',
        price: 280,
    },
    {
        id: 7,
        image: 'image/product5.jpeg',
        title: 'HDMI Cable 1M',
        price: 399,
    },
    {
        id: 8,
        image: 'image/product6.jpeg',
        title: 'Charger',
        price: 500,
    },
    {
        id: 9,
        image: 'image/product10.jpeg',
        title: 'Extension',
        price: 700,
    },
    {
        id: 10,
        image: 'image/product11.jpeg',
        title: 'Extension',
        price: 500,
    },
    {
        id: 11,
        image: 'image/product12.webp',
        title: 'LED 24G Rechearble wireless mouse',
        price: 507,
    },
    {
        id: 12,
        image: 'image/product13.jpeg',
        title: 'JBL Bluetooth Speaker',
        price: 999,
    },
];
const categories = [...new Set(product.map((item)=>
    {return item}))]
    let i=0;
document.getElementById('root').innerHTML = categories.map((item)=>
{
    var {image, title, price} = item;
    return(
        `<div class='box'>
            <div class='img-box'>
                <img class='images' src=${image}></img>
            </div>
        <div class='bottom'>
        <p>${title}</p>
        <h2>$ ${price}.00</h2>`+
        "<button onclick='addtocart("+(i++)+")'>Add to cart</button>"+
        `</div>
        </div>`
    )
}).join('')

var cart =[];

function addtocart(a){
    cart.push({...categories[a]});
    displaycart();
}
function delElement(a){
    cart.splice(a, 1);
    displaycart();
}

function displaycart(){
    let j = 0, total=0;
    document.getElementById("count").innerHTML=cart.length;
    if(cart.length==0){
        document.getElementById('cartItem').innerHTML = "Your cart is empty";
        document.getElementById("total").innerHTML = "Ksh "+0+".00";
    }
    else{
        document.getElementById("cartItem").innerHTML = cart.map((items)=>
        {
            var {image, title, price} = items;
            total=total+price;
            document.getElementById("total").innerHTML = "Ksh "+total+".00";
            return(
                `<div class='cart-item'>
                <div class='row-img'>
                    <img class='rowimg' src=${image}>
                </div>
                <p style='font-size:12px;'>${title}</p>
                <h2 style='font-size: 15px;'>Ksh ${price}.00</h2>`+
                "<i class='fa-solid fa-trash' onclick='delElement("+ (j++) +")'></i></div>"
            );
        }).join('');
    }

    
}









// Function to render products based on search query
function renderProducts(query) {
    const filteredProducts = product.filter(item =>
        item.title.toLowerCase().includes(query.toLowerCase())
    );

    const html = filteredProducts.map(item => `
        <div class='box'>
            <div class='img-box'>
                <img class='images' src=${item.image}></img>
            </div>
            <div class='bottom'>
                <p>${item.title}</p>
                <h2>$ ${item.price}.00</h2>
                <button onclick='addtocart(${item.id})'>Add to cart</button>
            </div>
        </div>
    `).join('');

    document.getElementById('root').innerHTML = html;
}

// Event listener for search form submission
document.querySelector('.search-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const searchInput = document.getElementById('search-input').value.trim();
    renderProducts(searchInput);
});

// Initial render of products
renderProducts('');

document.getElementById('proceedBtn').addEventListener('click', function() {
    window.location.href = 'order.html'; 
});