import NavBar from '../../Modules/NavBar/NavBar';
import Wrapper from '../Wrapper';

const Layout = ({ children }: any) => {
  return (
    <div className="bg-gray w-full min-h-screen	">
      <NavBar />
      <Wrapper>{children}</Wrapper>
    </div>
  );
};

export default Layout;
