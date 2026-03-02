const loader=document.getElementById('loader');
const loader1=document.getElementById('loader1');
const productList=document.getElementById('product-list');
const productList1=document.getElementById('product-list-1');
const productList2=document.getElementById('product-list-2');
const categoryList1=document.getElementById('category-list-1');
// // Featured Categories display

const categoryList=document.getElementById('category-list');

async function categoryListData() {
    showloader()
    try{
        const response=await fetch(`https://dummyjson.com/products/categories`);

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data=await response.json();
        console.log(data)
        categoryList.innerHTML=data.map(d =>(
            `<span onclick="getProductCategory('${d.slug}')" class="bg-[#FFF3EB] text-sm mx-2 px-4 py-2 items-center text-center justify-center rounded-md cursor-pointer">${d.name}</span>`
        )).join('')
    }catch(error){
        console.log(error);
    }
    finally{
        hideloader()
    }
}

categoryListData()

document.addEventListener("DOMContentLoaded", () => {
    productListData();
    productListData2()  
    displaycart()
});


// // Slider for category

// const backbtn=document.getElementById('backbtn');
// const forwardbtn=document.getElementById('forwardbtn')
 
// forwardbtn.addEventListener("click", () => { 
//     categoryList.scrollLeft += 200;  
// }); 
// backbtn.addEventListener("click", () => { 
//     categoryList.scrollLeft -= 200;  
// });

function forward(){
    categoryList.scrollLeft += 200;
}

function backward(){
    categoryList.scrollLeft -= 200;
}




// Popular Products Display

// const productList=document.getElementById('product-list');

async function productListData() {
    showloader()
    try{
        const response=await fetch(`https://dummyjson.com/products`);

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data=await response.json();
        console.log(data)
        const products=data.products;
        console.log(products)
        window.allProducts = products;
        productList.innerHTML=products.map(d =>(
            `<div class="max-w-sm rounded-xl overflow-hidden mx-1 mt-5 border-[#ECECEC] border">
                <img onclick="getProductId(${d.id})" class="w-full px-2 py-2 items-center justify-center" src="${d.images[0]}" alt="Sunset in the mountains">
                <div class="px-3 py-4">
                    <div class="font-bold text-sm mb-2">${d.title}</div>
                    <p class="text-[#AEAEAE] text-sm font-bold mt-1">${d.category}</p>
                    <p class="text-[#3BB77E] font-medium mt-1">${d.brand}</p>
                    <p class="text-[#AEAEAE] flex text-sm font-medium mt-1">${d.rating}<span><img src="assets/ratings.svg"></span></p>
                    <div class="flex items-center justify-between">
                        <div class="flex items-center justify-center mt-1 gap-1">
                            <span class="text-[#3BB77E] text-xl underline font-bold">$${(d.price * (1 - d.discountPercentage / 100)).toFixed(2)}</span>
                            <span class="text-[#ADADAD] text-sm line-through font-semibold ">$${d.price}</span>
                        </div>
                        <div class="flex items-center justify-center">
                            <button onclick="addtocart(${d.id})" class="bg-[#DEF9EC] flex py-1 px-1 items-center rounded-sm font-bold text-[#3BB77E] cursor-pointer">
                            <span class="py-1 "><img src="assets/addcart.svg"></span>
                            <span class="">Add</span></button>
                        </div>
                    </div>
                </div>
            </div>`
        )).join('')
    }catch(error){
        console.log(error);
    }
    finally{
        hideloader()
    }
}

productListData()







// const productList1=document.getElementById('product-list-1');

async function productListData1() {
    showloader()
    try{
        const response=await fetch(`https://dummyjson.com/products`);

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data=await response.json();
        console.log(data)
        const products=data.products;
        console.log(products)
        productList1.innerHTML=products.map(d =>(
            `<div class="w-64 rounded-xl border-[#ECECEC] border flex-shrink-0">
                    <img class="w-full px-2 py-2 items-center justify-center" src="${d.images[0]}">
                    <div class="px-4 py-2">
                        <h2 class="font-bold text-xl mb-2">${d.title}</h2>
                        
                        <p class="text-[#AEAEAE] text-sm font-medium mt-1">${d.category}</p>
                        <p class="text-[#3BB77E] font-medium mt-1">${d.brand}</p>
                        <p class="text-[#AEAEAE] flex text-sm font-medium mt-1">${d.rating}<span><img src="assets/ratings.svg"></span></p>
                        <div class="flex items-center gap-2">
                            <span class="text-[#3BB77E] text-xl underline font-bold">$${(d.price * (1 - d.discountPercentage / 100)).toFixed(2)}</span>
                            <span class="text-[#ADADAD] text-sm line-through font-semibold ">$${d.price}</span>
                        </div>
                        <div class="flex items-center justify-center">
                            <button onclick="addtocart(${d.id})"
                                class="bg-[#3BB77E] w-full justify-center items-center flex px-2 py-3 mt-3 rounded-sm font-bold text-white cursor-pointer">
                                <span class="py-1 mx-1"><img src="assets/addtocart.svg"></span><span class="mx-1">Add to
                                    cart</span></button>
                        </div>
                    </div>
            
                </div>`
        )).join('')
    }catch(error){
        console.log(error);
    }
    finally{
        hideloader()
    }
}

productListData1()



// const backbtn1=document.getElementById('backbtn1');
// const forwardbtn1=document.getElementById('forwardbtn1')
 
// forwardbtn1.addEventListener("click", () => { 
//     productList1.scrollLeft += 200;  
// }); 
// backbtn1.addEventListener("click", () => { 
//     productList1.scrollLeft -= 200;  
// });

function forward1(){
    productList1.scrollLeft += 200;
}

function backward1(){
    productList1.scrollLeft -= 200;
}





// shop page display

// const productList2=document.getElementById('product-list-2');

async function productListData2() {
    showloader1()
    try{
        const response=await fetch(`https://dummyjson.com/products`);

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data=await response.json();
        console.log(data)
        const products=data.products;
        console.log(products)
        window.allProducts = products;
        productList2.innerHTML=products.map(d =>(
            `<div class="max-w-sm rounded-xl overflow-hidden mx-1 mt-5 border-[#ECECEC] border">
                <img onclick="getProductId(${d.id})" class="w-full h-40 px-2 py-2 items-center justify-center" src="${d.images[0]}" alt="img">
                <div class="px-3 py-4">
                    <h2 class="font-bold text-sm mb-2">${d.title}</h2>
                    <p class="text-[#AEAEAE] text-sm font-bold mt-1">${d.category}</p>
                    <p class="text-[#3BB77E] font-medium mt-1">${d.brand}</p>
                    <p class="text-[#AEAEAE] flex text-sm font-medium mt-1">${d.rating}<span><img src="assets/ratings.svg"></span></p>
                    <div class="flex items-center justify-between">
                        <div class="flex items-center justify-center mt-1 gap-1">
                            <span class="text-[#3BB77E] text-xl underline font-bold">$${(d.price * (1 - d.discountPercentage / 100)).toFixed(2)}</span>
                            <span class="text-[#ADADAD] text-sm line-through font-semibold ">$${d.price}</</span>
                        </div>
                        <div class="flex items-center justify-center">
                            <button onclick="addtocart(${d.id})" class="bg-[#DEF9EC] flex py-1 px-1 rounded-sm font-bold text-[#3BB77E] cursor-pointer">
                            <span class="py-1"><img src="assets/addcart.svg"></span>
                            <span class="">Add</span></button>
                        </div>
                    </div>
                </div>
            </div>`
        )).join('')
    }catch(error){
        console.log(error);
    }
    finally{
        hideloader1()
    }
}

productListData2()





// const categoryList1=document.getElementById('category-list-1');
// let selectedcategory;
async function categoryListData1() {
    showloader1()
    try{
        const response=await fetch(`https://dummyjson.com/products/categories`);

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data=await response.json();
        console.log(data)

           const params = new URLSearchParams(window.location.search);
        const categorySlug = params.get("slug");

        categoryList1.innerHTML=data.map(d =>(
            `<h2 onclick="getProductCategory('${d.slug}')" class="text-xs border border-[#F2F3F4] px-4 py-2 mt-3 mx-2 rounded-sm cursor-pointer    ${categorySlug === d.slug && "text-green-500"} ">${d.name}</h2>`
        )).join('')
    }catch(error){
        console.log(error);
    }
    finally{
        hideloader1()
    }
}

categoryListData1()






// cart items

function addtocart(productid){
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    console.log(window.allProducts,'all product')
    const product = window.allProducts.find(p => p.id === productid);
    const exist=cart.find(i => i.id===product.id);
    console.log(productid)
    const productqty=document.getElementById('product-qty');
    let quantity;
    // console.log(productqty.value)
    if(quantity<1){
        // alert('Enter valid number')
        Toastify({
            text: "Enter Valid Number",
            duration: 3000,
            style: {
                background: "red",
            }
        }).showToast()
        return;
    }

    if(productqty){
        quantity=parseInt(productqty.value)
    }else{
        quantity=1;
    }
    
    if(exist){
        // exist.quantity+=1;
        exist.quantity+=quantity;
    }else{
        // product.quantity=1;
        product.quantity=quantity;
        cart.push(product);
    }

    localStorage.setItem("cart",JSON.stringify(cart));
    Toastify({
        text: "Item Added to Cart",
        duration: 3000,
        style: {
            background: "green",
        }
    }).showToast()

    displaycart()
}



function displaycart() {
    // cartitem.innerHTML=`<h2 class="text-3xl flex items-center justify-center mt-5 py-5">Cart is Empty...</h2>`
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let cartitem = document.getElementById('cart-item');
    let cartinfo=document.getElementById('cart-info');
    let emptycart=document.getElementById('empty-cart')

    if(cart.length!==0){
        emptycart.classList.add('hidden')
    }

    cartitem.innerHTML=cart.map((d,i) =>( 
        `<div class="grid grid-cols-6 items-center justify-center gap-6 mb-5 pb-10 border-b border-b-[#BEBCBD]">
                <div class="flex items-center">
                    <img class="w-20 h-24" src="${d.images[0]}">
                    <div class="items-center">
                        <h1 class="font-bold text-sm">${d.title}</h1>
                        <p class="text-[#807D7E] text-xs">${d.brand}</p>
                        <p class="text-[#807D7E] text-xs">${d.rating}</p>
                    </div>
                </div>
                <p class="font-bold text-sm text-center">$${d.price}</p>
                <div class="flex items-center justify-center">
                    <div class="flex gap-2 bg-[#F6F6F6] text-sm rounded-xl px-2 py-1">
                        <img onclick="decreaseqty(${i})" class="cursor-pointer w-3" src="assets/minus.svg"><span>${d.quantity}</span><img onclick="increaseqty(${i})" class="cursor-pointer w-3" src="assets/plus.svg">
                    </div>
                </div>
                <p class="font-bold text-sm text-center">${d.discountPercentage}%</p>
                <p class="font-bold text-sm text-center">$${(d.price * d.quantity).toFixed(2)}</p>
                <div class="flex justify-center">
                    <img onclick="remove(${i})" class="w-4 cursor-pointer" src="assets/delete.svg">
                </div>
            </div>
        `
    )).join('')

    let subtotal = cart.reduce((sum, i) => sum + (i.price * i.quantity), 0);
    let shipping;
    if(subtotal>500){
        shipping=70;
    }else{
        shipping=0
    }
    let grandtotal = subtotal + shipping;

    cartinfo.innerHTML=
        `<div class="mt-5">
                <h1 class="font-semibold text-xl">Discount  Codes</h1>
                <p class="text-[#807D7E] text-xs mt-1">Enter your coupon code if you have one</p>
                <div class="mt-7 flex w-auto">
                    <input type="text" class="w-full sm:w-50 border border-[#BEBCBD] rounded-l-xl py-2 px-4">
                    <button
                        class="font-semibold text-white text-xs bg-[#3BB77E] border border-[#BEBCBD] rounded-r-xl cursor-pointer py-2 px-6 outline-none">Apply
                        Coupon</button>
                </div>
                <button class="font-semibold text-center text-xs border border-[#BEBCBD] rounded-xl py-2 px-4 mt-5 cursor-pointer">Continue Shopping</button>
            </div>

            <div class="max-w-sm bg-[#F4F6FA] px-7 py-5 justify-center">
                <div class="border-b border-b-[#BEBCBD]">
                    <div class="flex justify-between">
                        <span class="font-medium text-sm">Sub Total</span>
                        <span class="font-medium text-sm">$${subtotal.toFixed(2)}</span>
                    </div>
                    <div class="flex justify-between mt-2">
                        <span class="font-medium text-sm">Shipping</span>
                        <span class="font-medium text-sm">$${shipping}</span>
                    </div>
                    <div class="flex justify-between mt-5 mb-5">
                        <span class="font-bold text-sm">Grand Total</span>
                        <span class="font-bold text-sm">$${grandtotal.toFixed(2)}</span>
                    </div>
                </div>
                <button class="bg-[#3BB77E] w-full mt-5 rounded-[10px] py-2 px-3 text-white text-xs cursor-pointer">Proceed To Checkout</button>
            </div>`
    // )).join('')
}

// displaycart()

function increaseqty(i){
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart[i].quantity+=1
    localStorage.setItem("cart",JSON.stringify(cart));
    displaycart()
}

function decreaseqty(i){
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    if(cart[i].quantity>1){
        cart[i].quantity-=1;
    }
    localStorage.setItem("cart",JSON.stringify(cart));
    displaycart()
}


function remove(i){
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    // cart.splice(i,1)
    // localStorage.setItem("cart",JSON.stringify(cart));

    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
    }).then((result) => {
        if (result.isConfirmed) {
            cart.splice(i, 1)
            localStorage.setItem("cart", JSON.stringify(cart));
            Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success"
            });
            displaycart()
        }
    });
    
    // displaycart()
}







// category filter
// getCategorySlug
function getProductCategory(slug){
    window.location.href = `shopsidebar.html?slug=${slug}`;
}


// getProductByCategory
async function getcategoryitem() {
    showloader1()
    try {
        const params = new URLSearchParams(window.location.search);
        const slug = params.get("slug");
        // console.log(slug)

        if (slug) {
            const response = await fetch(`https://dummyjson.com/products/category/${slug}`);
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            const data=await response.json();
            console.log(data) 
            products=data.products;
            console.log(products)
            window.allProducts = products;
        } else {
            const response = await fetch(`https://dummyjson.com/products`);
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            const data=await response.json();
            console.log(data) 
            products=data.products;
            console.log(products)  
            window.allProducts = products; 
        }
        // const response = await fetch(`https://dummyjson.com/products/category/${slug}`);

        // if (!response.ok) {
        //     throw new Error(`HTTP error! Status: ${response.status}`);
        // }
        // catname.classList.add('bg-green-400')
        // const data=await response.json();
        // console.log(data)   
        // const products=data.products;
        // console.log(products)
        productList2.innerHTML=products.map(d =>(
            // productList.innerHTML=
            `<div class="max-w-sm rounded-xl overflow-hidden mx-1 mt-5 border-[#ECECEC] border">
                <img onclick="getProductId(${d.id})" class="w-full h-40 px-2 py-2 items-center justify-center" src="${d.images[0]}" alt="img">
                <div class="px-3 py-4">
                    <h2 class="font-bold text-sm mb-2">${d.title}</h2>
                    
                    <p class="text-[#AEAEAE] text-sm font-bold mt-1">${d.category}</p>
                    <p class="text-[#3BB77E] font-medium mt-1">${d.brand}</p>
                    <p class="text-[#AEAEAE] flex text-sm font-medium mt-1">${d.rating}<span><img src="assets/ratings.svg"></span></p>
                    <div class="flex items-center justify-between">
                        <div class="flex items-center justify-center mt-1 gap-1">
                            <span class="text-[#3BB77E] text-xl underline font-bold">$${(d.price * (1 - d.discountPercentage / 100)).toFixed(2)}</span>
                            <span class="text-[#ADADAD] text-sm line-through font-semibold ">$${d.price}</</span>
                        </div>
                        <div class="flex items-center justify-center">
                            <button onclick="addtocart(${d.id})" class="bg-[#DEF9EC] flex py-1 px-1 rounded-sm font-bold text-[#3BB77E] cursor-pointer">
                            <span class="py-1"><img src="assets/addcart.svg"></span>
                            <span class="">Add</span></button>
                        </div>
                    </div>
                </div>
            </div>`
        )).join('')

        // productList2.innerHTML=products.map(d =>(
        //     `<div class="max-w-sm rounded-xl overflow-hidden mx-1 mt-5 border-[#ECECEC] border">
        //         <img onclick="getProductId(${d.id})" class="w-full h-40 px-2 py-2 items-center justify-center" src="${d.images[0]}" alt="img">
        //         <div class="px-3 py-4">
        //             <h2 class="font-bold text-sm mb-2">${d.title}</h2>
        //             <p class="text-[#ADADAD] text-sm mt-1">
        //                 ${d.description}
        //             </p>
        //             <p class="text-[#AEAEAE] text-sm font-bold mt-1">${d.category}</p>
        //             <p class="text-[#3BB77E] font-medium mt-1">${d.brand}</p>
        //             <p class="text-[#AEAEAE] flex text-sm font-medium mt-1">${d.rating}<span><img src="assets/ratings.svg"></span></p>
        //             <div class="flex items-center justify-between gap-1">
        //                 <div class="flex items-center justify-center mt-1 gap-2">
        //                     <span class="text-[#3BB77E] text-xl underline font-bold">$${(d.price * (1 - d.discountPercentage / 100)).toFixed(2)}</span>
        //                     <span class="text-[#ADADAD] text-sm line-through font-semibold ">$${d.price}</span>
        //                 </div>
        //                 <div class="flex items-center justify-center">
        //                     <button onclick="addtocart(${d.id})" class="bg-[#DEF9EC] flex py-1 rounded-sm font-bold text-[#3BB77E] cursor-pointer">
        //                     <span class="py-1 mx-1"><img src="assets/addcart.svg"></span>
        //                     <span class="mx-1">Add</span></button>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>`
        // )).join('')
    } catch (error) {
        console.log(error);
    }
    finally{
        hideloader1()
    }
}

getcategoryitem()



// loader 

// const loader=document.getElementById('loader');

function showloader(){
    loader.classList.remove('hidden')
    // loader.classList.add("flex")
    categoryList.classList.add('hidden')
    productList.classList.add('hidden')
    productList1.classList.add('hidden')
    // productList2.classList.add('hidden')
    // categoryList1.classList.add('hidden')
    
}
function hideloader(){
    loader.classList.add('hidden')
    categoryList.classList.remove('hidden')
    productList.classList.remove('hidden')
    productList1.classList.remove('hidden')
    // productList2.classList.remove('hidden')
    // categoryList1.classList.remove('hidden')
    // loader.classList.remove("flex")
}

function showloader1(){
    loader1.classList.remove('hidden')
    productList2.classList.add('hidden')
    categoryList1.classList.add('hidden')
}

function hideloader1(){
    loader1.classList.add('hidden')
    productList2.classList.remove('hidden')
    categoryList1.classList.remove('hidden')
}




// counter animation

// let upto = 0;
// let counts = setInterval(updated, 300);

// function updated() {
//     let aboutcounter1 = document.getElementById("about-counter1");
//     aboutcounter1.innerHTML = ++upto;
//     if (upto === 10) {
//         clearInterval(counts);
//     }
//     let aboutcounter2 = document.getElementById("about-counter2");
//     aboutcounter2.innerHTML = ++upto;
//     if (upto === 1000) {
//         clearInterval(counts);
//     }
//     let aboutcounter3 = document.getElementById("about-counter3");
//     aboutcounter3.innerHTML = ++upto;
//     if (upto === 50) {
//         clearInterval(counts);
//     }
//     let aboutcounter4 = document.getElementById("about-counter4");
//     aboutcounter4.innerHTML = ++upto;
//     if (upto === 100) {
//         clearInterval(counts);
//     }
//     let aboutcounter5 = document.getElementById("about-counter5");
//     aboutcounter5.innerHTML = ++upto;
//     if (upto === 60) {
//         clearInterval(counts);
//     }
// }







// function countertimer() {
//     // Getting formated date from date string
//     let deadline = new Date("feb 28, 2026 15:37:25").getTime();

//     // Calling defined function at certain interval
//     let x = setInterval(function () {
//         // Getting current date and time in required format
//         let now = new Date().getTime();

//         // Calculating difference
//         let t = deadline - now;

//         // Getting values of days,hours,minutes, seconds
//         let days = Math.floor(t / (1000 * 60 * 60 * 24));
//         let hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//         let minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
//         let seconds = Math.floor((t % (1000 * 60)) / 1000);

//         // Show the output time
//         document.getElementById("days").innerHTML = days;
//         document.getElementById("hours").innerHTML = hours;
//         document.getElementById("minutes").innerHTML = minutes;
//         document.getElementById("seconds").innerHTML = seconds;

//         // Show overtime output
//         if (t < 0) {
//             clearInterval(x);
//             document.getElementById("demo").innerHTML = "TIME UP";
//             document.getElementById("day").innerHTML = "0";
//             document.getElementById("hour").innerHTML = "0";
//             document.getElementById("minute").innerHTML = "0";
//             document.getElementById("second").innerHTML = "0";
//         }
//     }, 1000);
// }
// countertimer()