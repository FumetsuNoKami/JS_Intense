const contents = document.querySelectorAll('.program-line__content')

contents.forEach((elem, index) => {
    const title = elem.querySelector('.program-line__title')
    const descr = elem.querySelector('.program-line__descr')
    title.addEventListener('click', () => {                        //open tab
        descr.classList.toggle("active")
        i = index
        contents.forEach((elem1, jndex) => {                       //removing other tabs
            const descr1 = elem1.querySelector('.program-line__descr')
            if ((descr1.classList.contains("active")) && (i != jndex))
                descr1.classList.remove("active")
        })
    })
})