import { DossierDirectLogo, Bell, ArrowBottom } from "../../icons";
import Hamburger from "../../icons/Hamburger";

const Header = ({ props }) => {
  return (
    <>
      <header
        className={`flex justify-between items-center space-x-4 sm:bg-canvas-color bg-primary h-16 px-4`}
        {...props}
      >
        <DossierDirectLogo
          className={`fill-current sm:text-primary text-primary-light`}
        />
        <div className={`flex items-center justify-space-around`}>
          <Bell
            className={`sm:hidden fill-current text-primary-light stroke-current mx-2.5`}
          />
          <Hamburger
            className={`sm:hidden fill-current text-primary-light mx-2.5`}
            gap={10}
          />
          <Bell
            className={`hidden sm:inline-flex stroke-current text-primary mx-2.5`}
          />
          <div className="hidden sm:inline-flex  flex justify-center items-center rounded-full bg-white w-10 h-10 mx-1">
            <p className="text-accent font-bold text-sm">AT</p>
          </div>
          <ArrowBottom
            className="hidden sm:inline-flex  fill-current text-primary transform rotate-180"
            scale={1}
          />
        </div>
      </header>
    </>
  );
};

export default Header;
