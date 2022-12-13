document.getElementById('ctq').onclick = ()=>{
    window.open("mailto:walavalkarridhesh@gmail.com")
}

document.getElementById('nav-toggle').addEventListener('click', () => {
    document.getElementById('nav-menu').classList.toggle('show')
})

document.querySelectorAll('.nav__link')
    .forEach(n => n.addEventListener('click', () => {
        const navMenu = document.getElementById('nav-menu')
        navMenu.classList.remove('show')
    }))

const sections = document.querySelectorAll('section[id]')

window.addEventListener('scroll', () => {
    const scrollY = window.pageYOffset

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        const sectionId = current.getAttribute('id')

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active')
        } else {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active')
        }
    })
})

const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 200,
});

sr.reveal('.home__data, .about__img, .skills__subtitle, .skills__text', {});
sr.reveal('.home__img, .about__subtitle, .about__text, .skills__img', { delay: 400 });
sr.reveal('.home__social-icon', { interval: 200 });
sr.reveal('.skills__data, .work__img, .contact__input', { interval: 200 });


const el = document.getElementById("grid");

function createEl(href, src, alt) {
    const a = document.createElement("a");

    a.href = href;
    a.classList.add("work__img");

    const img = document.createElement("img");

    img.src = src;
    img.alt = alt;

    a.appendChild(img);
    el.appendChild(a);
}

async function fetcher() {
    try {
        let res = await fetch('https://api.github.com/users/ridheshcybe/repos')
        let json = await res.json();

        for (let i = 0; i < json.length; i++) {
            const e = json[i];
            if(["ridheshcybe", "vercel-minify-web"].includes(e.name))return 
            let response = await fetch('https://placehold.co/600x400/000000/FFF?font=raleway&text=' + e.name);
            let blob = await response.blob();
            createEl(e["html_url"], URL.createObjectURL(blob), e.description)
        }
    } catch (error) {
        el.innerHTML = `Error fetching ${err.message}`;
    }
}

fetcher();