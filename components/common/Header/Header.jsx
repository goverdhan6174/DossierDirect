import { DossierDirectLogo, Bell } from "../../icons";
import Hamburger from "../../icons/Hamburger";

const Header = ({ props }) => {
  return (
    <>
      <header
        className={`flex justify-between items-center space-x-4 bg-primary h-16 px-4`}
        {...props}
      >
        <DossierDirectLogo className={`fill-current text-primary-light`} />
        <div className={`flex items-center justify-space-around`}>
          <Bell className={`fill-current text-primary-light mx-2.5`} />
          <Hamburger
            className={`fill-current text-primary-light mx-2.5`}
            gap={10}
          />
        </div>
      </header>
    </>
  );
};

export default Header;
