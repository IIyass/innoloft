import { selectInitialConfig } from 'state/product/slice';
import Logo from '../../Components/Logo/Logo';
import { useSelector } from 'react-redux';

const NavBar = () => {
  const { mainColor } = useSelector(selectInitialConfig);

  return (
    <header
      className={`text-white px-6 py-4 mb-8`}
      style={{ backgroundColor: mainColor }}
    >
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <h1 className="text-xl font-bold">
            <a href="/">
              <Logo className="w-32" />
            </a>
          </h1>
          <nav>
            <ul className="flex space-x-4">
              <li>
                <a href="/" className="text-white">
                  Main Page
                </a>
              </li>
              <li>
                <a href="/product/6781" className="text-white">
                  Product
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
