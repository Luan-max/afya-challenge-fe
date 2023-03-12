import NavbarItems from "./NavbarItems";
import {
  PatientsIcon,
  AppoinmentsIcon,
} from "../icons";

import Image from "next/image";

export default function Navbar() {

  return (
    <aside
      className="flex flex-col 
         bg-white
       dark:bg-gray-900 dark:text-gray-200
    "
    >
      <div
        className={`
          flex flex-col items-center justify-center
          bg-
          h-20 w-60
      `}
      >
        <Image src="https://cardiopapers.com.br/wp-content/uploads/2022/04/afya-logo.png" width={100} height={100} alt="Opencashback" />
      </div>
      <ul className="flex-grow">
        <NavbarItems
          url="/"
          text="Pacientes"
          icon={PatientsIcon}
          className={`hover:bg-pink-600 hover:text-white`}
        />
        <NavbarItems
          url="/appointments"
          text="Agendamentos"
          icon={AppoinmentsIcon}
          className={`hover:bg-pink-600 hover:text-white`}
        />
      </ul>
    </aside>
  );
}