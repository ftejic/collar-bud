import Link from "next/link";

function DesktopMenu() {
  return (
    <nav className="hidden md:block">
      <ul className="flex space-x-10">
        <li>
          <Link href={`/create-collar`} className="underlineText relative">
            Create Collar
          </Link>
        </li>
        <li>
          <Link href={"/#gallery"} className="underlineText relative">
            Gallery
          </Link>
        </li>
        <li>
          <Link href={"/#faqs"} className="underlineText relative">
            FAQs
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default DesktopMenu;
