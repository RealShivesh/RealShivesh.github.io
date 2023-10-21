import Socials from './Socials'

const HomePage = () => {
  //TODO: horizontal swipe in mobile view
  return (
    <div>
      <div className="page">
        <h1>Realshivesh</h1>
        <section>Welcome to my homepage</section>
        <section>I am a frontend developer on the verge of achieving fullstack development mastery.</section>
      </div>
      <Socials />
    </div>
  )
}

export default HomePage
