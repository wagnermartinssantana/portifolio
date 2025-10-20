function Contato() {
  return (
    <section id="contato" className="py-10 px-6 bg-white">
      <h2 className="text-3xl font-bold text-center mb-6">Fale comigo</h2>
      <form className="max-w-xl mx-auto bg-gray-100 p-6 rounded-lg shadow-md space-y-4">
        <div>
          <label htmlFor="nome" className="block text-sm font-medium text-gray-700">Nome</label>
          <input
            type="text"
            id="nome"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            placeholder="Seu nome"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            id="email"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            placeholder="seu@email.com"
          />
        </div>
        <div>
          <label htmlFor="mensagem" className="block text-sm font-medium text-gray-700">Mensagem</label>
          <textarea
            id="mensagem"
            rows="4"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            placeholder="Escreva sua mensagem..."
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
        >
          Enviar
        </button>
      </form>
    </section>
  );
}

export default Contato;
