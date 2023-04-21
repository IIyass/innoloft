import cx from 'classnames';

interface IUserCard {
  className: string;
  firstName: string;
  lastName: string;
  companyName: string;
  profilePicture: string;
}

const UserCard = ({
  className,
  firstName,
  lastName,
  companyName,
  profilePicture,
}: IUserCard) => {
  return (
    <div className={cx('flex justify-berween items-center', className)}>
      <img className="w-14 h-14 rounded-full" src={profilePicture} alt="user" />
      <div className="ml-4">
        <h2 className="text-sm font-semibold">
          {firstName} {lastName}
        </h2>
        <span className="text-sm">{companyName}</span>
      </div>
    </div>
  );
};

export default UserCard;
