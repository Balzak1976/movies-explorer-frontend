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
      minLength: 2,
      maxLength: 30,
      pattern: '[\\w\\sА-яЁё]+',
    },
    {
      id: 2,
      type: 'profile',
      name: 'email',
      title: 'E-mail',
      typeAttribute: 'email',
      pattern: '[a-z0-9._%+\\-]+@[a-z0-9.\\-]+\\.[a-z]{2,}',
    },
  ],
};

function Profile({ buttonSubmitState, onUpdateUser, onLogout, info, onResetInfo }) {
  const currentUser = useContext(CurrentUserContext);

  PROFILE.title = `Привет, ${currentUser.name}`;

  return (
    <div className="profile">
      <UserForm
        config={PROFILE}
        buttonSubmitState={buttonSubmitState}
        onUserForm={onUpdateUser}
        info={info}
        onResetInfo={onResetInfo}
        isProfile={true}
      />

      <button className="profile__logout" onClick={onLogout} type="button" aria-label="управление выходом из профиля">
        Выйти из аккаунта
      </button>
    </div>
  );
}

export default Profile;
