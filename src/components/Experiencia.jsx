function Experiencia() {
  const experiencias = [
    {
      empresa: "Global Web",
      periodo: "Out 2023 - Atualmente",
      cargo: "Developer Full Stack",
      detalhes: [
        "Alocado no time de desenvolvimento do Banco CAIXA",
        "Projeto: SINAC (Home Broker - Ações Online Caixa)",
        "Tecnologias: Java, SQL Server, Oracle, Hibernate, JavaScript, Bootstrap",
        "Ferramentas: Eclipse, Intellij, VSCode, GitLab, Jenkins",
        "Responsabilidades: Desenvolvimento e Sustentação",
      ],
    },
    {
      empresa: "Sonda",
      periodo: "Ago 2022 - Out 2023",
      cargo: "Developer Back-End",
      detalhes: [
        "Alocado no time do Banco BASA",
        "Projetos: Open Banking, FGIFGO, Amortiza Mais",
        "Tecnologias: Java, Spring, MySQL, JPA, Hibernate, JDBC",
        "Ferramentas: Intellij, STS, VSCode, GitLab, Jenkins, OpenShift, Docker, Kubernetes",
        "Responsabilidades: Arquitetar e desenvolver novos sistemas",
      ],
    },
    {
      empresa: "Nostrum Tech",
      periodo: "Mai 2021 - Ago 2022",
      cargo: "Developer Full Stack",
      detalhes: [
        "Alocado no time da Zetra",
        "Projetos: eConsig, MAG (Seguradora)",
        "Tecnologias: Java, JSP, Spring, MySQL, Hibernate, JavaScript, Bootstrap",
        "Ferramentas: Eclipse, Spring Tool Suite, GitLab, SVN",
        "Responsabilidades: Desenvolvimento e Sustentação",
      ],
    },
  ];

  return (
    <section id="experiencia" className="py-10 px-6 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-8">Experiência Profissional</h2>
      <div className="space-y-6 max-w-4xl mx-auto">
        {experiencias.map((exp, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-blue-600">{exp.empresa}</h3>
            <p className="text-sm text-gray-500">{exp.periodo}</p>
            <p className="mt-2 font-medium">{exp.cargo}</p>
            <ul className="list-disc list-inside mt-2 text-gray-700 space-y-1">
              {exp.detalhes.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experiencia;
