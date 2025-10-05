
const products = [
    {
        id: "f-01",
        name: "Banana",
        averagerating: 4.5
    },
    {
        id: "f-02",
        name: "Orange",
        averagerating: 4.7
    },
    {
        id: "f-03",
        name: "Apple",
        averagerating: 3.5
    },
    {
        id: "f-04",
        name: "Pineapple",
        averagerating: 3.9
    },
    {
        id: "f-05",
        name: "Mango",
        averagerating: 5.0
    },
    {
        id: "f-06",
        name: "Avocado",
        averagerating: 5.0
    },
    {
        id: "f-07",
        name: "Cherry",
        averagerating: 5.0
    },
    {
        id: "f-08",
        name: "Blueberry",
        averagerating: 5.0
    },
    {
        id: "f-09",
        name: "Peach",
        averagerating: 5.0
    },
    {
        id: "f-010",
        name: "Pear",
        averagerating: 5.0
    }
];


let productList = document.querySelector(".productList");

products.forEach((product) => {
    let option = document.createElement('option');
    option.setAttribute('value', product.name);
    option.textContent = product.name;
    productList.appendChild(option);
})
























// Display date and time in the footer section
const currentYear = new Date().getFullYear();
let year = document.getElementById("currentyear");
year.textContent = currentYear;

const currentDate = new Date();
let paragraph2 = document.getElementById("lastModified");
paragraph2.textContent = `Last modification: ${currentDate}`;
