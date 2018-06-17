const links_p = document.getElementById('links__porfolio');
const link_p = links_p.getElementsByTagName('li');



for (var i = 0; i < link_p.length; i++) {
    link_p[i].addEventListener('click', function(event) {
        event.preventDefault();

        var current_p = document.getElementsByClassName('p_link');
        current_p[0].className = current_p[0].className.replace(' p_link', '');
        this.className += " p_link";


    })
}