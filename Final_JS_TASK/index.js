// Featured Categories display

// const categoryList=document.getElementById('category-list');

// async function categoryListData() {
//     try{
//         const response=await fetch("https://dummyjson.com/products/category-list");

//         if (!response.ok) {
//             throw new Error(`HTTP error! Status: ${response.status}`);
//         }

//         const data=await response.json();
//         console.log(data)
//         categoryList.innerHTML=data.map(d =>(
//             `<span class="bg-[#FFF3EB] text-sm mx-2 px-4 py-2 items-center text-center justify-center rounded-md">${d}</span>`
//         )).join('')
//     }catch(error){
//         console.log(error);
//     }
// }

// categoryListData()




// Slider for category

// const backbtn=document.getElementById('backbtn');
// const forwardbtn=document.getElementById('forwardbtn')
 
// forwardbtn.addEventListener("click", () => { 
//     categoryList.scrollLeft += 200;  
// }); 
// backbtn.addEventListener("click", () => { 
//     categoryList.scrollLeft -= 200;  
// });




// Popular Products Display

// const productList=document.getElementById('product-list');

// async function productListData() {
//     try{
//         const response=await fetch("https://dummyjson.com/products");

//         if (!response.ok) {
//             throw new Error(`HTTP error! Status: ${response.status}`);
//         }

//         const data=await response.json();
//         console.log(data)
//         const products=data.products;
//         console.log(products)
//         productList.innerHTML=products.map(d =>(
//             `<div class="max-w-sm rounded-xl overflow-hidden mx-1 mt-5 border-[#ECECEC] border">
//                 <img class="w-full px-2 py-2 items-center justify-center" src="${d.images}" alt="Sunset in the mountains">
//                 <div class="px-3 py-4">
//                     <div class="font-bold text-sm mb-2">${d.title}</div>
//                     <p class="text-[#ADADAD] text-sm font-medium mt-1">
//                         ${d.description}
//                     </p>
//                     <p class="text-[#AEAEAE] text-sm font-bold mt-1">${d.category}</p>
//                     <p class="text-[#3BB77E] font-medium mt-1">${d.brand}</p>
//                     <p class="text-[#AEAEAE] flex text-sm font-medium mt-1">${d.rating}<span><img src="assets/ratings.svg"></span></p>
//                     <div class="flex items-center justify-between gap-1">
//                         <div class="flex items-center justify-center mt-1 gap-2">
//                             <p class="text-[#3BB77E] text-xl underline font-bold">$${d.price}</p>
//                             <p class="text-[#ADADAD] text-sm line-through font-semibold ">${d.discountPercentage}</p>
//                         </div>
//                         <div class="flex items-center justify-center">
//                             <button class="bg-[#DEF9EC] flex py-1 rounded-sm font-bold text-[#3BB77E] cursor-pointer">
//                             <span class="py-1 mx-1"><img src="assets/addcart.svg"></span>
//                             <span class="mx-1">Add</span></button>
//                         </div>
//                     </div>
//                 </div>
        
//             </div>`
//         )).join('')
//     }catch(error){
//         console.log(error);
//     }
// }

// productListData()







// const productList1=document.getElementById('product-list-1');

// async function productListData1() {
//     try{
//         const response=await fetch("https://dummyjson.com/products");

//         if (!response.ok) {
//             throw new Error(`HTTP error! Status: ${response.status}`);
//         }

//         const data=await response.json();
//         console.log(data)
//         const products=data.products;
//         console.log(products)
//         productList1.innerHTML=products.map(d =>(
//             `<div class="max-w-xs rounded-xl mx-5 border-[#ECECEC] border flex-shrink-0">
//                     <img class="w-full px-2 py-2 items-center justify-center" src="${d.images}">
//                     <div class="px-6 py-4">
//                         <div class="font-bold text-xl mb-2">${d.title}</div>
//                         <p class="text-[#ADADAD] text-sm font-medium mt-1">
//                             ${d.description}
//                         </p>
//                         <p class="text-[#AEAEAE] text-sm font-medium mt-1">${d.category}</p>
//                         <p class="text-[#3BB77E] font-medium mt-1">${d.brand}</p>
//                         <p class="text-[#AEAEAE] flex text-sm font-medium mt-1">${d.rating}<span><img src="assets/ratings.svg"></span></p>
//                         <div class="flex items-center justify-between">
//                             <div class="flex items-center justify-center mt-1 gap-3">
//                                 <p class="text-[#3BB77E] text-xl underline font-bold">$${d.price}</p>
//                                 <p class="text-[#ADADAD] text-sm line-through font-semibold ">${d.discountPercentage}</p>
//                             </div>
//                         </div>
//                         <div class="flex items-center justify-center">
//                             <button
//                                 class="bg-[#3BB77E] w-full justify-center items-center flex px-2 py-3 mt-3 rounded-sm font-bold text-white cursor-pointer">
//                                 <span class="py-1 mx-1"><img src="assets/addtocart.svg"></span><span class="mx-1">Add to
//                                     cart</span></button>
//                         </div>
//                     </div>
            
//                 </div>`
//         )).join('')
//     }catch(error){
//         console.log(error);
//     }
// }

// productListData1()



// const backbtn1=document.getElementById('backbtn1');
// const forwardbtn1=document.getElementById('forwardbtn1')
 
// forwardbtn1.addEventListener("click", () => { 
//     productList1.scrollLeft += 200;  
// }); 
// backbtn1.addEventListener("click", () => { 
//     productList1.scrollLeft -= 200;  
// });







// shop page display

const productList2=document.getElementById('product-list-2');

async function productListData2() {
    try{
        const response=await fetch("https://dummyjson.com/products");

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data=await response.json();
        console.log(data)
        const products=data.products;
        console.log(products)
        productList2.innerHTML=products.map(d =>(
            `<div class="max-w-sm rounded-xl overflow-hidden mx-1 mt-5 border-[#ECECEC] border">
                <img class="w-full px-2 py-2 items-center justify-center" src="${d.images}" alt="Sunset in the mountains">
                <div class="px-3 py-4">
                    <div class="font-bold text-sm mb-2">${d.title}</div>
                    <p class="text-[#ADADAD] text-sm font-medium mt-1">
                        ${d.description}
                    </p>
                    <p class="text-[#AEAEAE] text-sm font-bold mt-1">${d.category}</p>
                    <p class="text-[#3BB77E] font-medium mt-1">${d.brand}</p>
                    <p class="text-[#AEAEAE] flex text-sm font-medium mt-1">${d.rating}<span><img src="assets/ratings.svg"></span></p>
                    <div class="flex items-center justify-between gap-1">
                        <div class="flex items-center justify-center mt-1 gap-2">
                            <p class="text-[#3BB77E] text-xl underline font-bold">$${d.price}</p>
                            <p class="text-[#ADADAD] text-sm line-through font-semibold ">${d.discountPercentage}</p>
                        </div>
                        <div class="flex items-center justify-center">
                            <button class="bg-[#DEF9EC] flex py-1 rounded-sm font-bold text-[#3BB77E] cursor-pointer">
                            <span class="py-1 mx-1"><img src="assets/addcart.svg"></span>
                            <span class="mx-1">Add</span></button>
                        </div>
                    </div>
                </div>
        
            </div>`
        )).join('')
    }catch(error){
        console.log(error);
    }
}

productListData2()





const categoryList1=document.getElementById('category-list-1');

async function categoryListData1() {
    try{
        const response=await fetch("https://dummyjson.com/products/category-list");

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data=await response.json();
        console.log(data)
        categoryList1.innerHTML=data.map(d =>(
            `<h2 class="text-xs border border-[#F2F3F4] px-4 py-2 mt-3 mx-2 rounded-sm">${d}</h2>`
        )).join('')
    }catch(error){
        console.log(error);
    }
}

categoryListData1()