import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1>Home</h1>
      <nav className="menu">
        <ul className="menu-list">
          <li className="item">
            <Link href="/dashboard">dashboard</Link>
          </li>
        </ul>
      </nav>
    </main>
  );
}
