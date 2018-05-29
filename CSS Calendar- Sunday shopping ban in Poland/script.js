let input = document.getElementById('searchMonth');
input.addEventListener('keyup', function searchMonth(event) { //declaring searchMonth function
  
    // Declaring variables
    let filter, ul, li, a, i;
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName('li');

    //checking if input lenght is more than one - showing/hiding month we're searching for from the list
    if (input.value.length === 0) {
        ul.style.display = "none";
        return;
    } else {
        ul.style.display = "block";
    }

    // Loop through all list items and hide those who don't match the search query - searching for month in a list
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
  
  //redirecting to month we're searching for after pressing 'Enter' button
    if (event.keyCode === 13) {
      // Loop through all visible "a" items and trigger a click event on the first one.
      event.preventDefault();
      for (i = 0; i < li.length; i++) {
          a = li[i].getElementsByTagName("a")[0];
          if (li[i].style.display === "") {
              a.click();
              break;
          }
      }
    } 
});
