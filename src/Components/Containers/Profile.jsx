import user from "../../Data/userData";

const Profile = () => {
  return (
    <section className='profile__container'>
      <section className='containerFlex profile'>
        <section className='profile__content'>
          <img
            className='profile__image'
            src='https://marketplace.canva.com/EAEkB8aSmJU/1/0/1600w/canva-rosa-y-amarillo-gato-moderno-dibujado-a-mano-abstracto-imagen-de-perfil-de-twitch-R-0ekToDIBE.jpg'
            alt='Profile'
          />
        </section>
      </section>
      <h2>{user.name}</h2>
      <p>{user.description}</p>
      <p>{`📍 ${user.country}`}</p>
      <p>{`📍 ${user.email}`}</p>
      <p>{`📍 ${user.phone}`}</p>
      <p>{`Tickets Purchased: ${user.ticketsPurchased}`}</p>
    </section>
  );
};
export default Profile;
