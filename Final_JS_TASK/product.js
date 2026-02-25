// // single product view
const productview=document.getElementById("product-view");
// window.location.href = `product.html?id=${id}`;
    // const params = new URLSearchParams(window.location.search); 
    // const id =params.get("id"); 
    // console.log(id)

function getProductId(id) {
    window.location.href = `product.html?id=${id}`;
}
async function getProduct() {
    try {
        const params = new URLSearchParams(window.location.search);
        const id = params.get("id");
        console.log(id)

        const response = await fetch(`https://dummyjson.com/products/${id}`);

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data=await response.json();
        // console.log(data)
        // const products=data;
        console.log(data)
        console.log(id)
        // productview.innerHTML = data.map(d =>(
            productview.innerHTML =
            `<div class="border border-[#ECECEC] rounded-xl">
                            <img src="${data.images[0]}" alt="product">
                        </div>
                        <div class="items-center">
                            <span class="font-bold text-[#F74B81] text-xs bg-[#FDE0E9] rounded-sm px-2 py-1">Sale Off</span>
                            <h1 class="font-bold text-4xl mt-5">${data.title}</h1>
                            <p class="text-[#B6B6B6] text-sm font-medium mt-3">${data.rating}</p>
                            <div class="flex items-center mt-5 gap-3">
                                <p class="font-bold text-[#3BB77E] text-5xl">$${(data.price * (1 - data.discountPercentage / 100)).toFixed(2)}</p>
                                <div class="items-center justify-center">
                                    <p class="font-semibold text-[#FDC040] text-xs">${data.discountPercentage}% Off</p>
                                    <p class="font-bold text-[#B6B6B6] text-xl line-through">$${data.price}</p>
                                </div>
                            </div>
                            <p class="text-[#7E7E7E] text-sm mt-5">${data.description}</p>
                            <p class="flex items-center gap-3 mt-5"><span
                                    class="font-semibold text-[#7E7E7E] text-xs">Weight:</span><span
                                    class="text-[#7E7E7E] text-xs">${data.weight}</span></p>
                            <div class="flex items-center gap-2 mt-5">
                                <input type="number" class="outline-2 outline-[#3BB77E] rounded-sm px-2 py-2">
                                <button onclick="addtocart(${data.id})"
                                    class="bg-[#3BB77E] justify-center items-center px-2 py-2.5 flex rounded-sm font-bold text-white cursor-pointer">
                                    <span class="py-1 mx-1"><img src="assets/addtocart.svg"></span><span class="mx-1 text-sm">Add to
                                        cart</span></button>
                                <img src="assets/productwhishlist.svg" class="px-3 py-3 rounded-sm border border-[#F1F1F1]">
                                <img src="assets/shuffle.svg" class="px-3 py-3 rounded-sm border border-[#F1F1F1]">
                            </div>
                            <p class="flex items-center gap-2 mt-5"><span class="text-[#7E7E7E] text-xs">Stock:</span><span
                                    class="text-[#3BB77E] text-xs">${data.stock}</span></p>
                            <p class="flex items-center gap-2 mt-2"><span class="text-[#7E7E7E] text-xs">SKU:</span><span
                                    class="text-[#3BB77E] text-xs">${data.sku}</span></p>
                        </div>`
        // )).join('');
    } catch (error) {
        console.log(error);
    }
}

getProduct()