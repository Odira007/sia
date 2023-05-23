const drawings = [
    {
        title: "the lord's prayer",
        image_url: "../images/art-1.JPG"
    },
    {
        title: "ikewelugo man ii",
        image_url: "../images/art-4.JPG"
    },
    {
        title: "take back our country",
        image_url: "../images/art-3.JPG"
    },
    {
        title: "ikewelugo man iii",
        image_url: "../images/art-2.JPG"
    },
    {
        title: "a symbol of strength, freedom and justice",
        image_url: "../images/art-5.JPG"
    },
    {
        title: "igbo landing",
        image_url: "../images/art-6.JPG"
    },
    {
        title: "the lord's prayer",
        image_url: "../images/art-7.JPG"
    },
]

const gallery = document.querySelector(".gallery");

const arts = drawings.map(drawing => {
    return `
        <div class="">
        <img src=${drawing.image_url} alt=${drawing.title} class="drawings"/>
        <p class="art-title">${drawing.title.toUpperCase()}</p>
        </div>
    `
})

const sia = arts.join("");
gallery.innerHTML = sia;