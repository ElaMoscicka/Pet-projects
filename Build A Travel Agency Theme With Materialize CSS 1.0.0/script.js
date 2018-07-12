//Sidenav
const sideNav = document.querySelector('.sidenav');
M.Sidenav.init(sideNav, {}); //initializing our SideNav

//Slider
const slider = document.querySelector('.slider');
M.Slider.init(slider, {
    indicators: false,
    height: 500,
    transition: 500,
    interval: 6000
});

//Autocomplete
const autocomplete = document.querySelector('.autocomplete');
M.Autocomplete.init(autocomplete, {
    data: {
        "Aruba": null,
        "Cancun Mexico": null,
        "Hawaii": null,
        "Florida": null,
        "California": null,
        "Jamaica": null,
        "Europe": null,
        "The Bahamas": null,
    }
});

//Material Boxed (Gallery)
const materialBoxed = document.querySelectorAll('.materialboxed'); //using querySelectorAll (not querySelector, as it will work only on first element/photo)
M.Materialbox.init(materialBoxed, {});

//Scrollspy
const scrollspy = document.querySelectorAll('.scrollspy');
M.ScrollSpy.init(scrollspy, {});
