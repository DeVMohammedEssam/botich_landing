import Link from "next/link";
import { useRouter } from "next/router";
function Navbar() {
  const router = useRouter();
  return (
    <>
      <nav>
        <h6 className="text-secondary">BETA</h6>

        <h6 className="text-secondary ">
          <span style={{ color: "#244A8B" }}>BOTICH</span> Careers
        </h6>

        <ul className="list-unstyled">
          <li>
            <Link href="/">
              <a className={`${router.pathname === "/" && "active"} `}>
                Botich Road
              </a>
            </Link>
          </li>
          <li>
            <Link href="/careers">
              <a className={`${router.pathname === "/careers" && "active"} `}>
                Careers
              </a>
            </Link>
          </li>
        </ul>
      </nav>
      <style jsx>{``}</style>
    </>
  );
}

export default Navbar;
