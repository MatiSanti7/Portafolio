const allSection = document.querySelectorAll('section');
const navLink = document.querySelectorAll('.navbar a');
const bgLeft = document.querySelector('.left');
bgLeft.style.backgroundImage = `url(/images/img-home.jpg)`;

window.onscroll = () => {
    allSection.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
        if(top > offset && top < offset+height){
            navLink.forEach(links => {
                links.classList.remove('select');
                document.querySelector('nav a[href*='+id+']').classList.add('select');
            })
            bgLeft.style.backgroundImage = `url(/images/img-${id}.jpg)`;
        }
    })
}

function viewCV() {
    var url = '/Matias Santillan.pdf';
    var link = document.createElement('a');
    link.href = url;
    link.download = 'Matias Santillan.pdf';
    link.click();
}
