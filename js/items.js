let itemsList = [
    { "id": 2,"name": "Chocolate Cake", "image": "./img/flavours/CHOCO.jpg", "type": "flavour" },
    { "id": 1,"name": "ButterScotch Cake", "image": "./img/flavours/butterscotch.jpg", "type": "flavour" },
    { "id": 3,"name": "Truffle Chocolate Cake", "image": "./img/flavours/Depadya Cake.svg", "type": "flavour" },
    { "id": 4,"name": "Honey Almond Cake", "image": "./img/flavours/HONEY.jpg", "type": "flavour" },
    { "id": 5,"name": "Strawberry Cake", "image": "./img/flavours/straw.jpg", "type": "flavour" },
    { "id": 6,"name": "Rasmalai Cake", "image": "./img/flavours/rasamalai.jpg", "type": "flavour" },
    { "id": 7,"name": "White Chocolate Cake", "image": "./img/flavours/whitechoc.jpg", "type": "flavour" },
    { "id": 8,"name": "Lotusbiscoff Cake", "image": "./img/flavours/lotus.jpg", "type": "flavour" },
    { "id": 9,"name": "Kit-Kat Cake", "image": "./img/flavours/kitcat.jpg", "type": "theme" },
    { "id": 10,"name": "Unicorn Cake", "image": "./img/flavours/Unicon.jpg", "type": "theme" },
    { "id": 11, "name": "Boss Baby Cake", "image": "./img/flavours/BossBaby.jpg", "type": "theme" },
    { "id": 12,"name": "Jungle Cake", "image": "./img/flavours/Jungle.jpg", "type": "theme" },
    { "id": 13,"name": "Cars Cake", "image": "./img/flavours/cars.jpg", "type": "theme" },
    { "id": 14,"name": "Mickey Mouse Cake", "image": "./img/flavours/Mickey.jpg", "type": "theme" },
    { "id": 15,"name": "Shinchan Cake", "image": "./img/flavours/Shinchan.jpg", "type": "theme" },
    { "id": 16,"name": "Cocomelon Cake", "image": "./img/flavours/Cocomelon.jpg", "type": "theme" },
    { "id": 17,"name": "Barbie Cake", "image": "./img/flavours/Barbie.jpg", "type": "theme" },
    { "id": 18,"name": "Little Princess Cake", "image": "./img/flavours/Little.jpg", "type": "theme" },
    { "id": 33,"name": "Pokémon Cake", "image": "./img/flavours/pokemon.jpg", "type": "theme" },
    { "id": 20,"name": "Cricket Cake", "image": "./img/flavours/Cricket.jpg", "type": "theme" },
    { "id": 21,"name": "Chota Bheem Cake", "image": "./img/flavours/chotabhem.jpg", "type": "theme" },
    { "id": 22,"name": "Spiderman Cake", "image": "./img/flavours/spider.jpg", "type": "theme" },
    { "id": 23,"name": "Disney Frozen Cake", "image": "./img/flavours/Frozen.jpg", "type": "theme" },
    { "id": 24,"name": "Mixed Fruit Cake", "image": "./img/flavours/MixedFru.jpg", "type": "theme" },
    { "id": 25,"name": "BTS Cake", "image": "./img/flavours/BTS.jpg", "type": "theme" },
    { "id": 26,"name": "Emoji Cake", "image": "./img/flavours/Emoji.jpg", "type": "theme" },
    { "id": 27,"name": "Doremon Cake", "image": "./img/flavours/Doremon.jpg", "type": "theme" },
    { "id": 28,"name": "Engagement Rings Cake", "image": "./img/flavours/rings.jpg", "type": "theme" },
    { "id": 29,"name": "Couple Cake", "image": "./img/flavours/Marriage.jpg", "type": "theme" },
    { "id": 30,"name": "Peppa Pig Cake", "image": "./img/flavours/Peppa pig.jpg", "type": "theme" },
    { "id": 31,"name": "Astronaut Cake", "image": "./img/flavours/Astronut.jpg", "type": "theme" },
    { "id": 32,"name": "Super Mario Cake", "image": "./img/flavours/mario.jpg", "type": "theme" },
    { "id": 34,"name": "Teddy Bear Cake", "image": "./img/flavours/Teddy.jpg", "type": "theme" },
    { "id": 35,"name": "Winnie the Pooh Cake", "image": "./img/flavours/Winnie.jpg", "type": "theme" },
    { "id": 36,"name": "Avengers Cake", "image": "./img/flavours/Avengers.jpg", "type": "theme" },
    { "id": 37,"name": "Baby Shark Cake", "image": "./img/flavours/babyshark.jpg", "type": "theme" },
    { "id": 38,"name": "Panda Cake", "image": "./img/flavours/Panda.jpg", "type": "theme" },
    { "id": 39,"name": "Couple Cake", "image": "couplecake2.png", "type": "theme" },
    { "id": 40,"name": "Let's Get Married", "image": "img/flavours/Engaged.jpg", "type": "theme" },
    { "id": 41,"name": "Mr.Bean", "image": "img/flavours/Mr.beanBirth.jpg", "type": "theme" },
    { "id": 43,"name": "Mega Chocolate", "image": "img/flavours/mixedchoco.jpg", "type": "theme" },
    { "id": 42,"name": "Birthday Girl", "image": "img/flavours/birthdaygirl.jpg", "type": "theme" },
    { "id": 44,"name": "Welcome Baby", "image": "img/flavours/welcomebaby.jpg", "type": "theme" },
    { "id": 45,"name": "Girl's Graduation", "image": "img/flavours/Graduation.jpg", "type": "theme"},
    { "id": 46,"name": "Bride To Be", "image": "img/flavours/Bridetobe.jpg", "type": "theme"},
    { "id": 47,"name": "Super Woman", "image": "img/flavours/SuperWomen.jpg", "type": "theme"},
    { "id": 48,"name": "Mother's Day ", "image": "img/flavours/mothersday2.jpg", "type": "theme"},
    { "id": 49,"name": "Mother's Day 2", "image": "img/flavours/mothersday.jpg", "type": "theme"}
        
];


function handleBuyNowAndRedirect(id) {
    let selectedCake = itemsList.find(item => item.id === id);
    if (selectedCake) {
        let redirectUrl = selectedCake.type === "theme" ? "buyoption_theme.html" : "buyoption_flavour.html";
        window.location.href = `${redirectUrl}?id=${id}`;
    } else {
        console.error("Cake not found with ID:", id);
    }
}

function getItemHandler() {
    const urlParams = new URLSearchParams(window.location.search);
    let itemId = urlParams.get("id");

    if (itemId !== null) {
        itemId = parseInt(itemId);
        return itemsList.find(item => item.id === itemId) || itemsList[0];
    }
    return itemsList[0];
}

function displaySelectedCake() {
    let selectedItem = getItemHandler();
    if (!selectedItem) return;

    document.getElementById("cakeLabel").textContent = selectedItem.name;
    document.getElementById("cakeImage").src = selectedItem.image;

    if (selectedItem.type === "theme") {
        document.getElementById("flavorSelection").style.display = "block";
    }
}

function displayCakeList() {
    let cakeListDiv = document.getElementById("cakeList");
    itemsList.forEach(item => {
        let cakeDiv = document.createElement("div");
        cakeDiv.innerHTML = `
            <p>${item.name}</p>
            <img src="${item.image}" alt="${item.name}" width="100">
            <button onclick="handleBuyNowAndRedirect(${item.id})">Buy Now</button>
        `;
        cakeListDiv.appendChild(cakeDiv);
    });
}

    function bookCake() {
        // Get the selected cake details
        let cakeName = document.getElementById("cakeLabel").innerText;
        let cakeType = document.querySelector('input[name="type"]:checked') ? document.querySelector('input[name="type"]:checked').value : "Not Selected";
        let cakeWeight = document.getElementById("cakeWeight").value;
        let customWeight = document.getElementById("customWeight").value;
        let address = document.getElementById("address").value;
        let phoneNumber = document.getElementById("phoneNumber").value;

        // Handle custom weight
        let finalWeight = (cakeWeight === "custom" && customWeight) ? `${customWeight} kg` : `${cakeWeight} kg`;

        // Validate user inputs
        if (!cakeName || !cakeType || !finalWeight || !address || !phoneNumber) {
            alert("Please fill in all the required details.");
            return;
        }

        // Format the WhatsApp message
        let message = `I want to order a cake:
🍰 *Cake Name*: ${cakeName}
🥚 *Type*: ${cakeType}
⚖️ *Weight*: ${finalWeight}
📍 *Address*: ${address}
📞 *Phone*: ${phoneNumber}`;

        // Encode message for URL
        let encodedMessage = encodeURIComponent(message);

        // Redirect to WhatsApp (Replace XXXXXXXXXX with your WhatsApp number)
        window.location.href = `https://wa.me/+919642453006?text=${encodedMessage}`;
    }
    function bookCake1() {
        // Get the selected cake details
        let cakeName = document.getElementById("cakeLabel").innerText;
        let cakeType = document.querySelector('input[name="type"]:checked') ? document.querySelector('input[name="type"]:checked').value : "Not Selected";
        let cakeWeight = document.getElementById("cakeWeight").value;
        let cakeFlavour = document.getElementById("CakeFlavour").value;
        let customWeight = document.getElementById("customWeight").value;
        let address = document.getElementById("address").value;
        let phoneNumber = document.getElementById("phoneNumber").value;

        // Handle custom weight
        let finalWeight = (cakeWeight === "custom" && customWeight) ? `${customWeight} kg` : `${cakeWeight} kg`;

        // Validate user inputs
        if (!cakeName || !cakeType || !finalWeight || !address || !phoneNumber) {
            alert("Please fill in all the required details.");
            return;
        }

        // Format the WhatsApp message
        let message = `I want to order a Theme cake:
🍰 *Cake Name*: ${cakeName}
🎂 *Flavour*: ${cakeFlavour}
🥚 *Type*: ${cakeType}
⚖️ *Weight*: ${finalWeight}
📍 *Address*: ${address}
📞 *Phone*: ${phoneNumber}`;

        // Encode message for URL
        let encodedMessage = encodeURIComponent(message);

        // Redirect to WhatsApp (Replace XXXXXXXXXX with your WhatsApp number)
        window.location.href = `https://wa.me/+919642453006?text=${encodedMessage}`;
    }





window.onload = function () {
    displaySelectedCake();
    displayCakeList();
};