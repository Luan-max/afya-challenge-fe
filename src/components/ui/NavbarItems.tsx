import Link from "next/link";

interface NavbarItemsProps {
  url?: string;
  text: string;
  icon: any;
  className?: string;
  onClick?: (event: any) => void;
}

export default function NavbarItems(props: NavbarItemsProps) {
  function renderContent() {
    return (
      <a
        className={`flex flex-col justify-center items-center h-20 w-60 dark:text-gray-200 ${props.className}`}
      >
        {props.icon}
        <span
          className={`
    text-xs font-light
    `}
        >
          {props.text}
        </span>
      </a>
    );
  }
  return (
    <li
      onClick={props.onClick}
      className={`hover:bg-gray-100 cursor-pointer`}
    >
      {props.url ? (
        <Link href={props.url} legacyBehavior>
          {renderContent()}
        </Link>
      ) : (
        renderContent()
      )}
    </li>
  );
}