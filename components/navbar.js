import Link from "next/link";

const Navbar = () => (
  <div>
    <ul>
      <li>
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/about">
          <a>About</a>
        </Link>
      </li>
    </ul>
    <style jsx>{`
            ul{
                background: #333;
            }

            ul li a {
                color: #fff;
                margin-left:10px;
            }
        `}
    </style>
  </div>
);

export default Navbar;