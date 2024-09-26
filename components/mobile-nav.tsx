import { IoCloseOutline } from "react-icons/io5";

interface MobileNavProps {
  setMobileNav: (value: boolean) => void;
}

export const MobileNav: React.FC<MobileNavProps> = ({ setMobileNav }) => {
  return (
    <nav className="text-white">
      <div className="cursor-pointer" onClick={() => setMobileNav(false)}>
        <IoCloseOutline className="text-4xl" />
      </div>
    </nav>
  );
};
