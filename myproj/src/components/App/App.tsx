import './App.css';
import { Footer } from '../Footer/Footer';
import UserData from '../user.json';

interface IAddress {
  city?: string;
  USState?: string;
  country?: string;
}

interface IUserDataObject {
  firstName?: string;
  lastName?: string;
  address?: IAddress;
  phoneNumbers?: string[];
  dayEvent?: string;
  photo?: string;
}

const App: React.FC<IUserDataObject> = () => {
  return (
    <>
      <div className='user-card'>
        <h1 className='title'>
          {UserData.firstName} {UserData.lastName}
        </h1>
        <div className='flex-parent'>
          <div className='flex-child'>
            <img
              className='user-photo'
              src={UserData.photo}
              alt={UserData.firstName + ' ' + UserData.lastName}
            />
          </div>

          <div className='flex-justify-content'>
            <p>
              <strong>Address:</strong>&nbsp;
              {UserData.address.city},&nbsp;
              {UserData.address.USState},&nbsp;
              {UserData.address.country}
            </p>

            <p>
              <strong>Phone numbers:</strong> {UserData.phoneNumbers.join(', ')}
            </p>
            <p>{UserData.dayEvent}</p>
          </div>
        </div>
      </div>
      <Footer copyright='NJul © 2022' />
    </>
  );
};

export default App;
