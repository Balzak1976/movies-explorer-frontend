import UserForm from '../UserForm/UserForm';
import './Profile.css';

const PROFILE = {
  name: 'profile',
  title: 'Привет, Виталий!',
  link: null,
  btnTitleSaving: 'Редактировать...',
  btnTitle: 'Редактировать',
  inputs: [
    {
      id: 1,
      type: 'profile',
      name: 'name',
      title: 'Имя',
      placeholder: 'Виталий',
      typeAttribute: 'text',
    },
    {
      id: 2,
      type: 'profile',
      name: 'email',
      title: 'E-mail',
      placeholder: 'pochta@yandex.ru',
      typeAttribute: 'email',
    },
  ],
};

function Profile({onLogout, buttonSubmitState, onProfile, info }) {
  return (
    <div className="profile">
      <UserForm config={PROFILE} buttonSubmitState={buttonSubmitState} onUserForm={onProfile} info={info} />
      
      <button
        className='profile__logout'
        onClick={onLogout}
        type="button"
        aria-label="управление выходом из профиля"
      >Выйти из аккаунта</button>
    </div>
  );
}

export default Profile;