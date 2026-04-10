const links = document.querySelectorAll('.nav-regions a')

// aplica classe inicial nas imagens
links.forEach(link => {
    const img = link.querySelector('img')
    if (img) img.classList.add('no-selected')
})

const observer = new IntersectionObserver(entries => {
    const visible = entries
        .filter(entry => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]

    if (visible) {
        const id = visible.target.id
        const activeLink = document.querySelector(`.nav-regions a[href="#${id}"]`)

        if (activeLink) {
            links.forEach(link => {
                const img = link.querySelector('img')
                if (img) {
                    img.classList.remove('selected')
                    img.classList.add('no-selected')
                }
            })

            // adiciona só na imagem ativa
            const activeImg = activeLink.querySelector('img')
            if (activeImg) {
                activeImg.classList.remove('no-selected')
                activeImg.classList.add('selected')
            }
        }
    }
}, {
    threshold: 0.75
})

document.querySelectorAll('section').forEach(section => {
    observer.observe(section)
})