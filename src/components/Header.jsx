function Header() {
  return (
    <header className="bg-gray-900 text-white p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">APRESENTAÇÃO</h1>
      <nav>
        <ul className="flex gap-4">
          <li><a href="#sobre" className="hover:text-blue-400">Sobre</a></li>
          <li><a href="#projetos" className="hover:text-blue-400">Projetos</a></li>
          <li><a href="#contato" className="hover:text-blue-400">Contato</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
