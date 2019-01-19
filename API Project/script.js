let selectElement = document.getElementById('categories');
let findVendorsButton = document.getElementById('findVendors');
let vendorsAddress = document.getElementById('address');
let results = document.getElementById('results');


$(function () {
    //Select Category from Categories
    $.ajax({
        url: config.mainUrl + "categories", //+ $.param(params),
        beforeSend: function (xhrObj) {
            // Request headers
            xhrObj.setRequestHeader("Ocp-Apim-Subscription-Key", config.apiKey);
        },
        type: "GET",
        // Request body
        data: "{body}",
    })
        .done(function (data) {
            let categories = JSON.parse(data);
            categories.forEach((category) => {
                let option = document.createElement("option");
                let text = document.createTextNode(category.name);
                option.appendChild(text);
                selectElement.appendChild(option);
            })
        })
        .fail(function () {
            alert("error");
        });
});

//function declaration: Capitalize first letter of address/input
let capitalize = function (vendorsAddress) {
    return vendorsAddress.charAt(0).toUpperCase() + vendorsAddress.slice(1);
}

//Button - Find Vendors
findVendorsButton.addEventListener('click', () => {
    // findVendors(selectElement.value, capitalize(vendorsAddress.value));
    findGeocode(capitalize(vendorsAddress.value));
});

//Getting Address
function findGeocode(address) {
    console.log(address);
    $.ajax({
        url: config.mainUrl + "locations/geocode/" + address, //+ $.param(params),
        beforeSend: function (xhrObj) {
            // Request headers
            xhrObj.setRequestHeader("Ocp-Apim-Subscription-Key", config.apiKey);
        },
        type: "GET",
        // Request body
        data: "{body}",
    })
        .done(function (data) {
            console.log(data);

            //showNoResults
            if (data.area) {
                findVendors(selectElement.value, data.area);
            } else {
                showNoResults();
            }
        })
        //Show user message that they didn't enter delivery address
        .fail(function () {
            // alert("please try one more time");

            // if(vendors.length === 0) {
            showMissingAddress();
            return;
            // }
        });
}


//Select Vendors from particular category and area, e.g. category:Restaurant, area: Sharq 
function findVendors(category, area) {
    //Clear Results
    results.innerHTML = '';

    $.ajax({
        url: config.mainUrl + `vendors/${category}/areas/${area}`,
        beforeSend: function (xhrObj) {
            // Request headers
            xhrObj.setRequestHeader("Ocp-Apim-Subscription-Key", config.apiKey);
        },
        type: "GET",
        // Request body
        data: "{body}",
    })
        .done(function (vendors) {
            //show message to user if vendor not found
            if (vendors.length === 0) {
                showNoResults();
                return;
            }

            vendors.forEach((vendor) => {
                //Creating Div/Container
                let div = document.createElement('div');
                div.classList.add('bordershowResults');
                results.appendChild(div);

                //Show Image
                let image = document.createElement("img");
                image.src = vendor.ImageUrl;
                image.classList.add('imageStyle');
                let imageContainer = document.createElement('div');
                imageContainer.classList.add('flex1');
                imageContainer.appendChild(image);
                div.appendChild(imageContainer);

                //Show vendor's name
                let textContainer = document.createElement('div');
                textContainer.classList.add('flex2');
                let vendorsName = document.createElement("h3");
                vendorsName.classList.add('vendorsName');
                let text = document.createTextNode(vendor.Name);
                textContainer.appendChild(vendorsName);
                vendorsName.appendChild(text);
                div.appendChild(textContainer);

                //create list
                let listElement = document.createElement("ul");
                textContainer.appendChild(listElement);

                //show vendors categories, e.g. salad, burgers, pizza
                let categories = vendor.Categories
                categories.forEach((category) => {
                    if (category) {
                        let li = document.createElement("li");
                        li.classList.add('categoryName');
                        let text = document.createTextNode(category.Name);
                        li.appendChild(text);
                        listElement.appendChild(li);
                    }
                })
            })
        })
        .fail(function () {
            alert("Please enter your delivery address");
        });
};

//Show message to user if results not found
function showNoResults() {
    //Clear Results
    results.innerHTML = '';

    //Creating Div/Container
    let div = document.createElement('div');
    div.classList.add('borderShowNoResults');

    //Show Message
    let textshowNoResults = document.createElement("h3");
    let text = document.createTextNode("Results not found. Please select another category or enter another address");
    textshowNoResults.classList.add('textshowNoResults');
    textshowNoResults.appendChild(text);
    div.appendChild(textshowNoResults);
    results.appendChild(div);
}

//Show message to user if adress wasn't entered
function showMissingAddress() {
    //Clear Results
    results.innerHTML = '';

    //Creating Div/Container
    let div = document.createElement('div');
    div.classList.add('bordershowMissingAddress');

    //Show Message
    let textshowMissingAddress = document.createElement("h3");
    let text = document.createTextNode("Looks like you didn't enter delivery address");
    textshowMissingAddress.classList.add('textshowMissingAddress');
    textshowMissingAddress.appendChild(text);
    div.appendChild(textshowMissingAddress);
    results.appendChild(div);
}


