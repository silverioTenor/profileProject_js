const express = require('express')
const nunjucks = require('nunjucks')

const server = express()
const videos = require("./data")

server.use(express.static('public'))

server.set("view engine", "njk")

nunjucks.configure("views", {
    express: server,
    autoescape: false,
    noCache: true
})

server.get("/", (req, res) => {
    const data = {
        name: "Rodrigo Silvério",
        job: "Desenvolvedor Full-Stack",
        photo: "luffy.jpg",
        description: "Focado nas melhores tecnologias para o desenvolvimento de aplicações web e mobile, afim de trazer a melhor experiência para o usuário."
    }

    const social = [
        {
            name: "GitHub",
            url: "https://github.com/silverioTenor/"
        },
        {
            name: "Twitter",
            url: "https://twitter.com/silverio_tenor"
        },
        {
            name: "linkedIn",
            url: "https://www.linkedin.com/in/rodrigo-silverio-659502139/"
        }
    ]

    return res.render("about", { data, links: social })
});

server.get("/portfolio", (req, res) => res.render("portfolio", { items: videos }))

server.listen(3000, () => console.log("Server is running..."))