import { useState } from 'react';
import { MegaMenu, MegaMenuDropdown, MegaMenuDropdownToggle, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle } from 'flowbite-react';
import { HiChevronDown } from 'react-icons/hi';
import logo from './assets/Logo-CegZjA9A-2.png';
import './style.css';

export default function Component() {
  const [openMenu, setOpenMenu] = useState<string | null>(null);

  interface HandleMenuToggleProps {
    menuId: string;
  }

  const handleMenuToggle = (menuId: HandleMenuToggleProps['menuId']): void => {
    setOpenMenu(openMenu === menuId ? null : menuId);
  };
  return (
    <MegaMenu
      dir="rtl"
      className="w-full h-[70px] bg-yellow-50! wfc"
      aria-label="Mega menu example"
    >
      <NavbarBrand
        href="#"
        className="ml-[120px]"
      >
        <img
          alt=""
          src={logo}
          className="mr-3 h-6 sm:h-9"
        />
      </NavbarBrand>
      <NavbarToggle
        className="ml-10!"
        onClick={() => setOpenMenu(null)}
      />
      <NavbarCollapse>
        <MegaMenuDropdownToggle
          className="w-fit! active:text-black! text-black!"
          id="menu-one"
          onClick={() => handleMenuToggle('menu-one')}
          aria-expanded={openMenu === 'menu-one'}
        >
          البرامج والدورات
          <HiChevronDown className="" />
        </MegaMenuDropdownToggle>

        <MegaMenuDropdownToggle
          className="w-fit! active:text-black! text-black! py-2! ml-0"
          id="menu-two"
          onClick={() => handleMenuToggle('menu-two')}
          aria-expanded={openMenu === 'menu-two'}
        >
          الشهادات المعتمدة
          <HiChevronDown className="" />
        </MegaMenuDropdownToggle>

        <NavbarLink href="#"></NavbarLink>
        <NavbarLink
          className="w-fit! active:text-black! text-black! py-2!"
          href="#"
        >
          نبذة عنا
        </NavbarLink>
        <NavbarLink
          className="wfit! active:text-black! text-black! py-2!"
          href="#"
        >
          تواصل معنا
        </NavbarLink>
        <NavbarLink
          className="wfit! active:text-black! text-black! py-2! "
          href="#"
        >
          بوابة الشركة
        </NavbarLink>
        <NavbarLink
          className="wfit! flex! text-white! bg-green-300 hover:bg-primary-800 text-xl rounded-lg px-6! py-1! text-center"
          href="#"
        >
          اشترك الان
        </NavbarLink>
      </NavbarCollapse>

      {/* MegaMenu الأول */}
      <MegaMenuDropdown
        className="wfit!"
        id="menu-one"
        style={{ display: openMenu === 'menu-one' ? 'block' : 'none' }}
      >
        <div className="mt-3 relative max-wfit! border-y border-gray-200 rounded-lg bg-white shadow-sm dark:border-gray-600 dark:bg-gray-800">
          <div className="mx-auto grid max-w-screen-xl px-4 py-5 text-sm text-gray-500 md:grid-cols-3 md:px-6 dark:text-gray-400">
            <ul className="mb-4 hidden space-y-4 md:mb-0 md:block">
              <li>
                <a
                  href="#"
                  className="text-purple-50! hover:text-primary-600 hover:underline dark:hover:text-primary-500"
                >
                  برنامج شهادة المعلم الخبير المعتمد
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-purple-50! hover:text-primary-600 hover:underline dark:hover:text-primary-500"
                >
                  برنامج شهادة تدريب المدربين المعتمد
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-purple-50! hover:text-primary-600 hover:underline dark:hover:text-primary-500"
                >
                  البرامج التأهيلية للمقاييس المعتمدة
                </a>
              </li>
            </ul>
          </div>
        </div>
      </MegaMenuDropdown>

      {/* MegaMenu الثاني */}
      <MegaMenuDropdown
        className="w-fit!"
        id="menu-two"
        style={{ display: openMenu === 'menu-two' ? 'block' : 'none' }}
      >
        <div className="mt-3 relative w-fit! border-y border-gray-200 rounded-lg bg-white shadow-sm dark:border-gray-600 dark:bg-gray-800">
          <div className="mx-auto grid max-w-[600px]!  px-4 py-5 text-sm text-gray-500 md:grid-cols-2 md:px-6 dark:text-gray-400">
            <ul className="mb-4 hidden space-y-4 md:mb-0 md:block">
              <li>
                <a
                  href="#"
                  className="text-purple-50! hover:text-primary-600 hover:underline dark:hover:text-primary-500"
                >
                  شهادات الحزام الأخضر والأسود المعتمدة لستة سيغما
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-purple-50! hover:text-primary-600 hover:underline dark:hover:text-primary-500"
                >
                  شهادات معتمدة في برامج أخرى
                </a>
              </li>
            </ul>
          </div>
        </div>
      </MegaMenuDropdown>
    </MegaMenu>
  );
}
