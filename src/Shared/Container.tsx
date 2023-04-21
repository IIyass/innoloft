import cx from 'classnames';
const Container = ({ children, className }: any) => {
  return (
    <div className={cx(className, 'bg-white border border-gray rounded-md')}>
      {children}
    </div>
  );
};

export default Container;
