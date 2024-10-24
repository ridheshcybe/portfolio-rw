const Certificates = [
    { orgUrl: "https://www.harvard.edu", orgName: "Harvard", path: "/public/img/CS50x.jpg", timeAdded: "7 July 2024" },
    { orgUrl: "https://learn.opswatacademy.com/certifications/f904148a-9764-11ed-98f7-02dd896aace5", orgName: "OpswatAcademy", path: "/public/img/cip.png", timeAdded: "24 October 2024" }
];
const CertificatesSize = [window.innerHeight / Certificates.length, window.innerWidth / Certificates.length];
const gallery = document.getElementById("animated-thumbnails-gallery");
Certificates.forEach((imageData, i) => {
    // Create the caption element
    const rootCert = document.createElement('div');
    const caption = document.createElement('div');
    const dialog = document.createElement('dialog');
    const p = document.createElement('p');
    const img = document.createElement('img');
    const btn = document.createElement('button');

    btn.innerText = "X";
    btn.classList.add("closeBtn")
    img.src = location.protocol + "//" + location.host + "/" + imageData.path;
    img.alt = imageData.orgName;
    img.style.width = CertificatesSize[1];
    img.style.height = CertificatesSize[0];
    p.innerHTML = `<p>Received from: <a href="${imageData.orgUrl}"><strong>${imageData.orgName}</strong></a> - Added on ${imageData.timeAdded}</p>`;

    img.onclick = () => {

        dialog.showModal();
    }
    btn.onclick = () => {
        dialog.close();
    }

    dialog.appendChild(btn);
    dialog.appendChild(p);
    caption.appendChild(dialog);
    rootCert.appendChild(img);
    rootCert.appendChild(caption);
    gallery.appendChild(rootCert);
});

const handleResize = () => {
    const width = window.innerWidth;
    let columns;
    if (width < 768) {
        columns = 1;
    } else if (width < 1024) {
        columns = 2;
    } else {
        columns = Certificates.length;
    }
    document.querySelector('.gallery-container').style.gridTemplateColumns = `repeat(${columns}, 1fr)`;
}

window.addEventListener('resize', handleResize);
window.addEventListener('DOMContentLoaded', () => {
    handleResize();
});

document.getElementById('ctq').onclick = () => {
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

const sections = document.querySelectorAll('section[id]');
console.log(sections)

window.addEventListener('scroll', () => {
    const scrollY = window.pageYOffset

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        const sectionId = current.getAttribute('id')

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('a[href*=' + sectionId + ']').classList.add('active')
        } else {
            document.querySelector('a[href*=' + sectionId + ']').classList.remove('active')
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

function createEl(href, src, alt, archived) {
    const a = document.createElement("a");

    a.href = href;
    a.classList.add("work__img");

    const img = document.createElement("img");

    img.src = src;
    img.alt = alt;

    if (archived) {
        const p = document.createElement("p");
        p.innerText = archived ? "Archived" : ""
        p.classList.add("projectsp");
        a.appendChild(p);
    }

    a.appendChild(img);
    el.appendChild(a);
}

async function fetcher() {
    try {
        let res = await fetch('https://api.github.com/users/ridheshcybe/repos')
        let json = await res.json();

        for (let i = 0; i < json.length; i++) {
            const e = json[i];
            if (["ridheshcybe", "vercel-minify-web"].includes(e.name)) return;
            const res = await fetch('https://api.github.com/repos/ridheshcybe/' + e.name);
            const repo = await res.json();
            let response = await fetch('https://placehold.co/600x400/000000/FFF?font=raleway&text=' + e.name);
            let blob = await response.blob();
            createEl(e["html_url"], URL.createObjectURL(blob), e.description, repo.archived)
        }
    } catch (error) {
        el.innerHTML = `Error fetching ${err.message}`;
    }
}

fetcher();
