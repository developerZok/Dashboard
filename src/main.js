// vertical navbar js codes

// button addEventListener
const menuBtn = document.querySelector('#menu-btn')
const dropdown = document.querySelector('#dropdown')
const menuBtnTwo = document.querySelector('#menu-btnTwo')
const dropdownTwo = document.querySelector('#dropdownTwo')
const menuBtnThree = document.querySelector('#menu-btnThree')
const dropdownThree = document.querySelector('#dropdownThree')
const menuBtnMessage = document.querySelector('#menu-btnFour')

const dropdownImg = document.querySelector('#bg__img--dropdown')
const dropdownImgTwo = document.querySelector('#bg__img--dropdownTwo')
const dropdownImgThree = document.querySelector('#bg__img--dropdownThree')
const dropdownImgFour = document.querySelector('#bg__img--dropdownFour')

let menuIsHiddenOne = false;
let menuIsHiddenTwo = false;
let menuIsHiddenThree = false;
let menuIsHiddenFour = false;

// one menu btn

function menuButtonOpen(button, dropDownImage) {
    button.classList.add('bg-gray-100', 'rounded-xl')
    dropDownImage.classList.add('bg__img--dropdownActive')
}

function menuButtonHide(button, dropDownImage) {
    button.classList.remove('bg-gray-100')
    dropDownImage.classList.remove('bg__img--dropdownActive')
}

menuBtn.addEventListener('click', () => {
    dropdown.classList.toggle('hidden')
    dropdown.classList.toggle('flex')

    menuIsHiddenOne ? menuButtonHide(menuBtn, dropdownImg) : menuButtonOpen(menuBtn, dropdownImg)
    menuIsHiddenOne = !menuIsHiddenOne
})
// two menu btn
menuBtnTwo.addEventListener('click', () => {
    dropdownTwo.classList.toggle('hidden')
    dropdownTwo.classList.toggle('flex')

    menuIsHiddenTwo ? menuButtonHide(menuBtnTwo, dropdownImgTwo) : menuButtonOpen(menuBtnTwo, dropdownImgTwo)
    menuIsHiddenTwo = !menuIsHiddenTwo
})
// three menu btn
menuBtnThree.addEventListener('click', () => {
    dropdownThree.classList.toggle('hidden')
    dropdownThree.classList.toggle('flex')

    menuIsHiddenThree ? menuButtonHide(menuBtnThree, dropdownImgThree) : menuButtonOpen(menuBtnThree, dropdownImgThree)
    menuIsHiddenThree = !menuIsHiddenThree
})
//  four menu btn
menuBtnMessage.addEventListener('click', () => {
    
    if (menuIsHiddenFour === false) {
        menuBtnMessage.classList.add('bg-gray-100', 'rounded-xl')
        menuIsHiddenFour = true
    } else {
        menuBtnMessage.classList.remove('bg-gray-100')
        menuIsHiddenFour = false
    }

})
// end off vertical navbar js codes

// chart js codes

const ctx = document.querySelector('#myChart').getContext("2d");

const labels = [
    "01 Apr",
    "02 Apr",
    "03 Apr",
    "04 Apr",
    "05 Apr",
    "06 Apr",
    "07 Apr",
    "08 Apr",
    "09 Apr",
    "10 Apr",
];

const data = {
    labels,
    datasets: [{
        data: [30, 40, 50, 45, 60, 40, 50, 45, 50, 40],
        label: "Sales",
        fill: true,
        borderColor: "green",
        tension: 0.4,
    }, ],
};

const config = {
    type: "line",
    data: data,
    options: {
        responsive: true,
        scales: {
            y: {
                ticks: {
                    callback: function (value) {
                        return value + "K";
                    },
                },
            },
        },
    },
};

const myChart = new Chart(ctx, config);
// end off chart js codes

// customers date
const customerBox = document.querySelector("#customer__box");

function Customerdata(data, customerBox) {
    data.map(elem => {

        // createlemts
        let ul = document.createElement("ul");
        let li = document.createElement("li");
        let div = document.createElement("div");
        let img = document.createElement("img");
        let divNE = document.createElement("div");
        let pName = document.createElement("p");
        let pEmail = document.createElement("p");
        let divPrice = document.createElement("div");

        // add classlists
        ul.classList.add("divide-y", "divide-gray-200", "dark:divide-gray-700")
        li.classList.add("py-3", "sm:py-4")
        div.classList.add("flex", "items-center", "space-x-4");
        img.classList.add("w-8", "h-8", "rounded-full");
        divNE.classList.add("flex-1", "min-w-0");
        pName.classList.add("text-sm", "font-medium", "text-gray-900");
        pEmail.classList.add("text-sm", "text-gray-500", "dark:text-gray-400");
        divPrice.classList.add("inline-flex", "items-center", "text-base", "font-semibold", "text-gray-900")

        // attachs
        pName.textContent = elem.name;
        pEmail.textContent = elem.email;
        divPrice.textContent = elem.price;
        img.setAttribute("src", elem.img)

        // appends
        customerBox.appendChild(ul);
        ul.appendChild(li);
        li.appendChild(div);
        div.appendChild(img);
        div.appendChild(divNE);
        divNE.appendChild(pName);
        divNE.appendChild(pEmail);
        div.appendChild(divPrice)
    })
}
Customerdata(customers, customerBox);

// top product date

const topProducts = document.querySelector("#top__product");

function products(data, topProducts) {
    data.map(elem => {
        // createlements
        let ul = document.createElement("ul");
        let li = document.createElement("li");
        let div = document.createElement("div");
        let divNE = document.createElement("div");
        let pName = document.createElement("p");
        let pEmail = document.createElement("p");
        let divPrice = document.createElement("div");
        let sales = document.createElement("p");

        // add classlists
        ul.classList.add("divide-y", "divide-gray-200", "dark:divide-gray-700")
        li.classList.add("py-3", "sm:py-4")
        div.classList.add("flex", "items-center", "space-x-4");
        divNE.classList.add("flex-1", "min-w-0");
        pName.classList.add("text-sm", "font-medium", "text-gray-900");
        pEmail.classList.add("text-sm", "text-gray-500", "dark:text-gray-400");
        divPrice.classList.add("inline-flex", "items-center", "text-base", "font-semibold", "text-gray-900")
        sales.classList.add("ml-2", "dark:text-gray-400")
        // attachs
        pName.textContent = elem.title;
        pEmail.textContent = elem.text;
        divPrice.textContent = elem.count;
        sales.textContent = "sales";

        // appends
        topProducts.appendChild(ul);
        ul.appendChild(li);
        li.appendChild(div);
        div.appendChild(divNE);
        divNE.appendChild(pName);
        divNE.appendChild(pEmail);
        div.appendChild(divPrice)
        divPrice.appendChild(sales)
    })
}
products(productsData, topProducts);

// tables 

const tbody = document.querySelector("#tbody");

function table(data, tbody) {
    data.map(elem => {

        // createlements
        let tr = document.createElement("tr");
        let tdTitle = document.createElement("td");
        let tdData = document.createElement("td");
        let tdPrise = document.createElement("td");
        let tdStatus = document.createElement("td");
        let pTitle = document.createElement("p");
        let pData = document.createElement("p");
        let pPrise = document.createElement("p");
        let spanStatus = document.createElement("span");
        let spanBox = document.createElement("span");
        let spanArea = document.createElement("span");
        let pTitleSpan = document.createElement("span");

        // add classlists
        tdTitle.classList.add("px-4", "sm:px-5", "py-5", "text-xs", "sm:text-sm");
        tdData.classList.add("text-xs", "sm:text-sm");
        tdPrise.classList.add("md:px-5", "text-xs", "py-5", );
        tdStatus.classList.add("px-5", "text-xs", "py-5", "hidden", "md:inline-block");

        pTitle.classList.add("text-gray-900");
        pTitleSpan.classList.add("font-semibold", "ml-1");

        pPrise.classList.add("text-gray-900", "font-semibold", "hidden", "md:inline-block");

        spanBox.classList.add("relative", "px-3", "py-1", "font-semibold", "text-green-900");
        spanArea.classList.add("absolute", "inset-0", "bg-green-200", "opacity-50", "rounded-full");
        spanStatus.classList.add("relative");

        // attachs
        pTitle.textContent = elem.transaction;
        pTitleSpan.textContent = elem.span;
        pData.textContent = elem.dateTime;
        pPrise.textContent = elem.amount;
        spanStatus.textContent = elem.status;

        // appends
        tbody.appendChild(tr);
        tr.appendChild(tdTitle);
        tdTitle.appendChild(pTitle);
        pTitle.appendChild(pTitleSpan);

        tr.appendChild(tdData);
        tdData.appendChild(pData);

        tr.appendChild(tdPrise);
        tdPrise.appendChild(pPrise);

        tr.appendChild(tdStatus);
        tdStatus.appendChild(spanBox);
        spanBox.appendChild(spanArea);
        spanBox.appendChild(spanStatus);

        // styles
        if (elem.status === "Cancelled") {
            spanBox.classList.add("relative", "px-3", "py-1", "font-semibold", "text-red-600");
            spanArea.classList.add("absolute", "inset-0", "bg-pink-300", "opacity-50", "rounded-full");
        }
        if (elem.status === "In progress") {
            spanBox.classList.add("relative", "px-3", "py-1", "font-semibold", "text-blue-600");
            spanArea.classList.add("absolute", "inset-0", "bg-blue-200", "opacity-50", "rounded-full");
        }
        tr.classList.add("tbody__tr")
    })
}
table(tables, tbody);

// hamburger menu 

const navbarBtn = document.querySelector(".navbar__btn");
const navbarMenu = document.querySelector("#navbar__menu");
const navbarBtnClose = document.querySelector(".navbar__btn--close")

navbarBtn.addEventListener("click", () => {

    navbarMenu.classList.add("show")
    navbarMenu.classList.remove("hide")
    navbarBtnClose.classList.add("navbar__close--show")
})
navbarBtnClose.addEventListener("click", () => {
    navbarMenu.classList.remove("show")
    navbarMenu.classList.add("hide")
})
// end off hamburger menu