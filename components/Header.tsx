const Header = () => {
    return (
    <header>
      <div className="flex items-center space-x-2">
        <ul className="flex space-x-4">
          <li>👍</li>
          <li className="headerLink">Alle Serien</li>
          <li className="headerLink">Zufällige Serie</li>
          <li className="headerLink">Serie hinzufügen</li>
        </ul>
      </div>
    </header>
    )
}

export default Header;