//Footer Section

// Display date and time in the footer section
const currentYear = new Date().getFullYear();
let year = document.getElementById("currentyear");
year.textContent = currentYear;

const currentDate = new Date();
let paragraph2 = document.getElementById("lastModified");
paragraph2.textContent = `Last modification: ${currentDate}`;

// Humburger Menu
const mainnav = document.querySelector('.navigation')
const hambutton = document.querySelector('#menu');

hambutton.addEventListener('click', () => {
    mainnav.classList.toggle('open');
    hambutton.classList.toggle('open');
});

// JavaScript Template-Object

const fruits = [
    {
        productName: "Apple",
        price: 10,
        size: 2.5,
        stock: 10,
        imageUrl:
            "https://media.istockphoto.com/id/1391983099/photo/red-apple.jpg?s=612x612&w=0&k=20&c=9ORyjwbw2NEPJYcxxt7HePzFkLHrA-vKtF8kvyteV8I="
    },
    {
        productName: "Banana",
        price: 9.75,
        size: 2.0,
        stock: 24,
        imageUrl:
            "https://media.istockphoto.com/id/636739634/photo/banana.jpg?s=612x612&w=0&k=20&c=pO0985tQi1LpWRlWqpRvbab8S5yxgnEOVcs5CHIlcDE="
    },
    {
        productName: "Orange",
        price: 15,
        size: 5.2,
        stock: 9,
        imageUrl:
            "https://media.istockphoto.com/id/2124102567/photo/orange-fruit-with-leaf.jpg?s=612x612&w=0&k=20&c=TUXQZs76_KNXdbffr6B9Jm74SQ-KbXAaikxTE78Qy6o="
    },
    {
        productName: "Mango",
        price: 7,
        size: 3,
        stock: 6,
        imageUrl:
            "https://media.istockphoto.com/id/529964085/photo/mango.jpg?s=612x612&w=0&k=20&c=rmcMZlLOZFdn4NhUcjnaJ3EBHKYZQ4xH4xzpzFU4JgY="
    },
    {
        productName: "Pineapple",
        price: 25,
        size: 8.9,
        stock: 18,
        imageUrl:
            "https://media.istockphoto.com/id/1497639521/photo/ripe-pineapple-is-tropical-fruit-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=CbsnU075NPRPGzOxlrqAEb0gP7o4U5aZ-cV1qjBrGVw="
    },
    {
        productName: "Avocado",
        price: 6.7,
        size: 3.6,
        stock: 5,
        imageUrl:
            "https://media.istockphoto.com/id/1482149278/photo/fresh-avocado-on-white.jpg?s=612x612&w=0&k=20&c=1tMnZ0Jit8gK7M4VP8ECNYMKKxkdkmTDN-AlAe8a_T4="
    },
    {
        productName: "Cherry",
        price: 3.2,
        size: 1.8,
        stock: 11,
        imageUrl:
            "https://media.istockphoto.com/id/533381303/photo/cherry-with-leaves-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=6BV79sui5Hc6lj555eV_ePiGlKfdZveIG9B5hIWidug="
    },
    //Added three more
    {
        productName: "Blueberry",
        price: 20,
        size: 5.1,
        stock: 13,
        imageUrl:
            "https://media.istockphoto.com/id/1452463944/photo/blueberry-isolated-blueberry-with-leaves-on-white-background-two-blueberries-with-clipping.jpg?s=612x612&w=0&k=20&c=En50fM8lct05HPvZJDOB4iHjo087SBKce3OJPFVAcaU="
    },
    {
        productName: "Peach",
        price: 17,
        size: 3.8,
        stock: 7,
        imageUrl:
            "https://media.istockphoto.com/id/1151868959/photo/single-whole-peach-fruit-with-leaf-and-slice-isolated-on-white.jpg?s=612x612&w=0&k=20&c=RLTbnKnN6w85oXn4qA8y8WYN3OMpGxEDc1nI7VY0gWU="
    },
    {
        productName: "Pear",
        price: 10.9,
        size: 4.6,
        stock: 20,
        imageUrl:
            "https://media.istockphoto.com/id/1399396369/photo/pear-isolated-one-whole-green-pear-and-a-half-of-fruit-on-white-background-pear-slice-with.jpg?s=612x612&w=0&k=20&c=v8ySxPib1HS_qa06ocMcVUnwNikyUNfDZZTGqv7Zkzc="
    },
];

fruitCard(fruits);

let home = document.querySelector(".home");
let old = document.querySelector(".about-us");
let recent = document.querySelector(".sign-in");

// Filters 
// home.addEventListener("click", () => (
//     fruitCard(fruits)
// ));

// old.addEventListener("click", () => (
//     fruitCard(fruits.filter(fruit => fruit.price < "10"))
// ));

// recent.addEventListener("click", () => (
//     fruitCard(fruits.filter(fruit => fruit.stock > "10"))
// ));

// large.addEventListener("click", () => (
//     fruitCard(fruits.filter(fruit => fruit.size > 2.5))
// ));



//Create fruit card function
function fruitCard(filteredFruites) {
    document.querySelector(".container").innerHTML = "";
    filteredFruites.forEach(fruit => {
        let img = document.createElement("img");
        let card = document.createElement("section");
        let name = document.createElement("h2");
        let price = document.createElement("p");
        let size = document.createElement("p");
        let stock = document.createElement("p");
        let info = document.createElement("p");

        name.textContent = fruit.productName;
        price.innerHTML = `<span class="label">Price:</span> \$${fruit.price}`;
        size.innerHTML = `<span class="label">Size:</span> ${fruit.size} cm`;
        stock.innerHTML = `<span class="label">Stock:</span> ${fruit.stock} units.`;
        info.textContent = `Info: ${fruit.stock >= 10 ? "In Stock" : "Out of stock"}`;

        fruit.stock >= 10 ? info.style.color = 'green' : info.style.color = 'red'



        img.setAttribute("src", fruit.imageUrl);
        img.setAttribute("alt", `${fruit.name} Fruit`);
        img.setAttribute("loading", "lazy");
        img.setAttribute("width", "300");
        img.setAttribute("height", "250")

        card.appendChild(img);
        card.appendChild(name);
        card.appendChild(price);
        card.appendChild(size);
        card.appendChild(stock);
        card.appendChild(info);

        document.querySelector(".container").appendChild(card);

    })

}



