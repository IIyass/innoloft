import { useSelector } from 'react-redux';
import { selectInitialConfig } from 'state/product/slice';

interface ILogo {
  className: string;
}

const Logo = ({ className }: ILogo) => {
  const { logo } = useSelector(selectInitialConfig);

  return (
    <div className={className}>
      <img src={logo} alt="user" />
    </div>
  );
};

export default Logo;
