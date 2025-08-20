import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
  const location = useLocation();

  const navItems = [
    { name: "MUSIC", path: "/music" },
    { name: "MERCH", path: "/merch" },
    { name: "BLOG", path: "/blog" },
    { name: "CONTACT", path: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-8 left-8 z-50">
      <div className="space-y-8">
        {/* Logo */}
        <Link to="/" className="block">
          <h1 className="text-2xl font-display font-bold text-artistic tracking-wide">
            ZOOFIA
          </h1>
        </Link>

        {/* Navigation Links */}
        <div className="space-y-6">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`block text-sm font-medium tracking-wider transition-colors ${
                isActive(item.path)
                  ? "text-primary"
                  : "text-muted-foreground hover:text-primary"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Bottom Text */}
        <div className="pt-8 space-y-2">
          <p className="text-xs text-muted-foreground tracking-wider">CREATIVITY</p>
          <p className="text-xs text-muted-foreground tracking-wider">POWERED BY CODE</p>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;