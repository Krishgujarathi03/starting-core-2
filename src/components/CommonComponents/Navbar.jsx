
import { Link } from "react-router-dom";

const Navbar = () =>{

    return (
        <>
            <nav>
                <Link to="/" className="hover:text-red-600"> Home </Link>
                <Link to="/about" className="hover:text-red-600"> About Us</Link>
                <Link to="/our-process" className="hover:text-red-600"> Our Process </Link>
                <Link to="/our-clients" className="hover:text-red-600"> Who We Work With </Link>
                <Link to="/founder" className="hover:text-red-600"> Founder </Link>
                <Link to="/build-your-legacy" className="hover:text-red-600"> Get Started </Link>
            </nav>
        </>
    );
}

export default Navbar;