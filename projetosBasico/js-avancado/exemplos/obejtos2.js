const filmes = [
    {
        id: 1,
        titulo: "Dilema das Redes",
        descricao: "Um documentario sobre tecnologia",
        duracao: 120
    },
    {
        id: 2,
        titulo: "Us",
        descricao: "Filme de terror",
        duracao: 120
    },
    {
        id: 3,
        titulo: "Corra",
        descricao: "Um filme de suspense",
        duracao: 120
    }
]

const [{id, titulo, descricao, duracao}] = filmes

filmes.map(filme => console.log(filme.descricao))