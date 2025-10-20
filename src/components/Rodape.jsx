function Rodape() {
  return (
    <footer className="bg-gray-900 text-white py-6 mt-10">
      <div className="max-w-4xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm">&copy; {new Date().getFullYear()} Wagner. Todos os direitos reservados.</p>
        <div className="flex gap-4 mt-4 md:mt-0">
          <a href="https://github.com/wagnermartinssantana" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/wagner-martins-santana/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
            LinkedIn
          </a>
          <a href="mailto:wagnermartinssantana@gmail.com" className="hover:text-blue-400">
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Rodape;
