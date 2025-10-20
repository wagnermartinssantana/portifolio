function Projetos() {
  const listaProjetos = [
    {
      titulo: "PORTIFÓLIO PESSOAL",
      descricao: "Aplicação web responsiva desenvolvida com React e Tailwind CSS, focada em performance e design moderno. Estruturada com componentes reutilizáveis e estilização utilitária, oferece uma experiência fluida em diferentes dispositivos. O projeto inclui roteamento com React Router, organização modular de código e boas práticas de acessibilidade e responsividade.",
      link: "https://github.com/wagnermartinssantana/portfolio",
    },
    {
      titulo: "PROJETO DE GESTAO EMPRESARIAL",
      descricao: "O projeto de marcenaria feito para a Marcenaria Santana uma aplicação MVC completa, com um front-end desenvolvido usando Thymeleaf, Bootstrap, HTML e CSS, integrado a um banco de dados PostgreSQL. Além disso, o projeto inclui testes JUnit e documentação detalhada feita com o Swagger OpenAPI.",
      link: "https://github.com/wagnermartinssantana/AmpliarGestaoMarcenaria",
    },
    {
      titulo: "PROJETO INTEGRADO",
      descricao: "O projeto integrado para a PUC Minas apresenta uma aplicação MVC completa, com um front-end desenvolvido usando Thymeleaf, Bootstrap, HTML e CSS, integrado a um banco de dados PostgreSQL. Além disso, o projeto inclui testes JUnit e documentação detalhada feita com o Swagger OpenAPI.",
      link: "https://github.com/wagnermartinssantana/projetoIntegrado",
    },
  ];

  return (
    <section id="projetos" className="py-10 bg-gray-100">
      <h2 className="text-3xl font-bold text-center mb-6">Meus Projetos</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-6">
        {listaProjetos.map((projeto, index) => (
          <div key={index} className="bg-white shadow-md rounded-lg p-4 hover:shadow-xl transition">
            <h3 className="text-xl font-semibold mb-2">{projeto.titulo}</h3>
            <p className="text-gray-700 mb-4">{projeto.descricao}</p>
            <a
              href={projeto.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              Ver no GitHub →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projetos;
