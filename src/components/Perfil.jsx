function Perfil() {
  return (
    <section className="py-10 px-6 bg-white text-center">
      <img
        src="/perfil.jpeg"
        alt="Foto de Wagner"
        className="w-40 h-40 mx-auto rounded-full object-cover border-4 border-blue-500 shadow-md"
      />
      <h2 className="text-2xl font-bold mt-4">Wagner Martins Santana Vieira</h2>
      <p className="text-gray-600">Cientista da Computação</p>
      <p>Desenvolvedor apaixonado por criar interfaces modernas e funcionais.</p>
    </section>
  );
}

export default Perfil;
