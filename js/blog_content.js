const links_b = document.getElementById('links__blogc');
const link_b = links_b.getElementsByTagName('li');



for (var i = 0; i < link_b.length; i++) {
    link_b[i].addEventListener('click', function(event) {
        event.preventDefault();

        var current_b = document.getElementsByClassName('b-link');
        current_b[0].className = current_b[0].className.replace(' b-link', '');
        this.className += " b-link";


    })
}