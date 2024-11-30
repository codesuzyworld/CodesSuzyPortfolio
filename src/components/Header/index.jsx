
import Nav from "../Nav"

export default function Header() {
    console.log("Header component rendering"); // Add this line
    return (
        <header>
        <h1 className="logo">Suzanna Lam</h1>
        <Nav />
        </header>
    );
  }
