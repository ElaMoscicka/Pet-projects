function searchMonth() {
    // Declaring variables
    var input, filter, ul, li, a, i;
    input = document.getElementById('searchMonth');
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName('li');

    //checking if input lenght is more than one
    if (input.value.length === 0) {
        ul.style.display = "none";
        return;
    } else {
        ul.style.display = "block";
    }

    // Loop through all list items and hide those who don't match the search query
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}
