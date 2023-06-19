import './Profile.css';
import UserForm from '../UserForm/UserForm';
import { useContext } from 'react';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

const PROFILE = {
  name: 'profile',
  title: '',
  link: null,
  btnTitleSaving: 'Редактировать...',
  btnTitle: 'Редактировать',
  inputs: [
    {
      id: 1,
      type: 'profile',
      name: 'name',
      title: 'Имя',
      typeAttribute: 'text',
    },
    {
      id: 2,
      type: 'profile',
      name: 'email',
      title: 'E-mail',
      typeAttribute: 'email',
    },
  ],
};

function Profile({ buttonSubmitState, onUpdateUser, onLogout, info }) {
  const currentUser = useContext(CurrentUserContext);

  PROFILE.title = `Привет, ${currentUser.name}`;

  return (
    <div className="profile">
      <UserForm
        config={PROFILE}
        buttonSubmitState={buttonSubmitState}
        onUserForm={onUpdateUser}
        info={info}
      />

      <button
        className="profile__logout"
        onClick={onLogout}
        type="button"
        aria-label="управление выходом из профиля">
        Выйти из аккаунта
      </button>
    </div>
  );
}

export default Profile;
