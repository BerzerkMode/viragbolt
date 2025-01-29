const urlCateg = 'https://viragbolt-backend.onrender.com/api/categories'
const urlProd = 'https://viragbolt-backend.onrender.com/api/flowers'

let products = []

getData (urlCateg, renderCateg);
getData (urlProd, getProducts);

function getProducts(data) {
   /* console.log(data);*/
    products = data;
}

function renderCateg(data) {
   /* console.log(data);*/
    data.forEach(obj => {
        document.querySelector('.btnHolder').innerHTML += `
        <button type="button" class="text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">${obj.nev}</button>
        `
        
    });
}

function getCateg(event){
    console.log(event.target.textContent);
    console.log(products);
    const ctg = event.target.textContent
    const filteredProducts = products.filter(obj => obj.kategoria_nev==ctg)
    console.log(filteredProducts);

    let card = document.querySelector('.cards');
    card.innerHTML ='';

    filteredProducts.forEach(obj =>{
        card.innerHTML +=`
        <div class="">
            <div class="max-w-sm bg-white rounded-lg shadow-sm dark:bg-gray-800">
                <a href="#">
                    <img class="rounded-t-lg" src="${obj.kepUrl}" alt="" />
                </a>
                <div class="p-5">
                    <a href="#">
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">${obj.nev}</h5>
                    </a>                

                    
                    <button class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" popovertarget="my-popover-${obj.id}">
                        Read more
                        <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                        </svg>
                    </button>

                </div>
            </div>
            <div class="mypopover" popover id="my-popover-${obj.id}">
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 ">"${obj.leiras}</p>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Ár: ${obj.ar} Ft.</p>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Készleten: ${obj.keszlet} db.</p>
            </div>
        </div>
        `
    })
}