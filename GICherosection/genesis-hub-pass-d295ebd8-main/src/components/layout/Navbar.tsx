import { Link } from "react-router-dom";
import { ThemeToggle } from "@/components/ThemeToggle";
import gicLogo from "@/assets/gic-logo.jpeg";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <img src={gicLogo} alt="GIC Logo" className="h-10 w-10 rounded-full object-cover" />
            <div className="flex items-center gap-1">
              <span className="font-display font-bold text-xl text-primary">GIC</span>
              <span className="font-display font-bold text-xl text-foreground">2026</span>
            </div>
          </Link>

          {/* Theme Toggle */}
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
