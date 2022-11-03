import React from 'react';
import icons from '../../shared/assests/icons';
import avatar from '../../shared/assests/imgs/avatarUser.png';
import './styles.scss';

const Profile = () => {
  return (
    <div className="profile">
      <img className="profile__notifi" src={icons.chuongThongBaoIcon} alt="" />
      <div className="profile__content">
        <img src={avatar} className="avatar" alt="" />
        <div className="information">
          <p>Xin chào</p>
          <h4>Lê Quỳnh Ái Vân</h4>
        </div>
      </div>
    </div>
  );
};

export default Profile;
