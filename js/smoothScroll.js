const navBar = document.querySelector(".header__nav")
const links = navBar.querySelectorAll("a")
console.log(links)

links.forEach((link) => {
    link.addEventListener("click", (event) => {
        event.preventDefault()
        console.log(seamless);
        const section = document.querySelector(link.getAttribute("href"))

        if (section) {
            //     section.scrollIntoView({
            //         block: "start",
            //         behavior: "smooth"
            //     })
            seamless.scrollIntoView(section, {
                behavior: "smooth",
                block: "start",
                inline: "center",
            });
        }
    })
})