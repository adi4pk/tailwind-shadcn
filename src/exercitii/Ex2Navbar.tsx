export default function Ex2Navbar() {
  return (
    <header className="flex items-center gap-6">
      <span className="">MyShop</span>
      <input placeholder="Caută produse..." className="flex-1" />
      <nav className="">
        <a href="#" className="">Produse</a>
        <a href="#" className="">Contact</a>
        <span className="">Coș (0)</span>
      </nav>
    </header>
  );
}
