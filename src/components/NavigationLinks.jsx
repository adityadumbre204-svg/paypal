const menuItems = [
  { id: 1, label: "Personal", href: "#personal" },
  { id: 2, label: "Business", href: "#business" },
  { id: 3, label: "Partners", href: "#partners" },
  { id: 4, label: "Useful Info", href: "#useful-info" },
];

function NavigationLinks() {
  return (
    <nav className="links-nav-container">
      <ul className="links-nav-list">
        {menuItems.map((item) => (
          <li key={item.id} className="links-nav-item">
            <a href={item.href} className="links-nav-anchor">
              <span>{item.label}</span>
              <span className="arrow-indicator">⌄</span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default NavigationLinks;

