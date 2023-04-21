import { Location } from 'types';
import Logo from '../../Components/Logo/Logo';
import Map from '../../Components/Map/Map';
import UserCard from '../../Components/UserCard/UserCard';
import styles from './UserInfo.module.scss';

interface IUserInfo {
  location?: Location;
  firstName: string;
  lastName: string;
  companyName: string;
  profilePicture: string;
}

const UserInfo = ({
  location,
  firstName,
  lastName,
  companyName,
  profilePicture,
}: IUserInfo) => {
  return (
    <>
      <h1 className="mb-6">Offered By</h1>
      <Logo className="w-52" />
      <UserCard
        profilePicture={profilePicture}
        firstName={firstName}
        lastName={lastName}
        companyName={companyName}
        className="mb-6 mt-2"
      />
      {location && (
        <p className="mb-2">
          {location.street} {location.house},<br />
          {location.zipCode} {location.city.name}, {location.country.name}
        </p>
      )}
      {location && (
        <div className={styles.map_wrapper}>
          <Map location={location} />
        </div>
      )}
    </>
  );
};

export default UserInfo;
