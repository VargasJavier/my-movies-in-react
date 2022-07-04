const Header = ({ send, children = null }) => {
  return (
    <>
      <header className='containerFlex header'>
        <h1>Hi, Javier!</h1>
        <section className='nav__relative'>
          <div className='nav__circle available'></div>
          <button
            className='container__profile'
            onClick={() => {
              send("PROFILE");
            }}
          >
            <img
              className='icon__profile'
              src='https://marketplace.canva.com/EAEkB8aSmJU/1/0/1600w/canva-rosa-y-amarillo-gato-moderno-dibujado-a-mano-abstracto-imagen-de-perfil-de-twitch-R-0ekToDIBE.jpg'
              alt='Profile'
            />
          </button>
        </section>
      </header>
    </>
  );
};
export default Header;
