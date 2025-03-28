import React from 'react';
import './index.css';
import { CiBookmark } from 'react-icons/ci';
import { CiHeart } from 'react-icons/ci';
import { LuMessageCircle } from 'react-icons/lu';
import { fetchData } from '../../Hook/useFetch';
import ModalCommon from '../../Common/Component/Modal/Modal.component';
import UpdateProfile from '../UpdateProfile/UpdateProfile';
export interface ProfileModel {
  fullname: string;
  user_name: string;
  role: string;
  avatar: string;
  profile: object;
}
const Profile = () => {
  const [user, setUser] = React.useState<ProfileModel>();
  React.useEffect(() => {
    // Chờ fix user
    fetchData(`${process.env.REACT_APP_URL_API}profile/${4}`, 'GET').then(
      (data) => {
        setUser(data.data.profile);
      }
    );
  }, []);

  const hanldeUpdateProfile = () => {
    const updateProfileModal = ModalCommon.Show({
      content: (
        <UpdateProfile
        onSuccess={() => updateProfileModal.destroy()}
        />
      ),
      title: <h1>Update Profile</h1>,
      width: 1000,
      afterClose: () => {},
    });
  };

  return (
    <section className="user-profile">
      <h1 style={{ fontSize: 40 }}>Your Profile</h1>

      <div className="info">
        <div className="user">
          <div className='avatar'>
            <img
              src={`${user?.avatar}`}
              alt=""
            />
          </div>
          <h3>{user?.fullname}</h3>
          <p>{user?.role}</p>
          <a onClick={()=>hanldeUpdateProfile()} className="inline-btn">
            update profile
          </a>
        </div>

        <div className="box-container">
          <div className="box">
            <div className="flex">
              <div className="icons">
                <CiBookmark size={35} />
              </div>
              <div>
                <span>4</span>
                <p>saved playlist</p>
              </div>
            </div>
            <a href="#" className="inline-btn">
              view playlists
            </a>
          </div>

          <div className="box">
            <div className="flex">
              <div className="icons">
                <CiHeart size={35} />
              </div>
              <div>
                <span>33</span>
                <p>videos liked</p>
              </div>
            </div>
            <a href="#" className="inline-btn">
              view liked
            </a>
          </div>

          <div className="box">
            <div className="flex">
              <div className="icons">
                <LuMessageCircle size={35} />
              </div>
              <div>
                <span>12</span>
                <p>videos comments</p>
              </div>
            </div>
            <a href="#" className="inline-btn">
              view comments
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
