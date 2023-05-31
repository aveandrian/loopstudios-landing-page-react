
import Navbar from './components/Navbar'
import './App.css'

function App() {

  return (
    <>
      <header>
        <picture>
          <source srcSet='/images/mobile/image-hero.jpg' media='(max-width: 1250px)'></source>
          <img src='/images/desktop/image-hero.jpg' className='bg-img'></img>
        </picture>
        
        <Navbar />
        <div className='header-container'>
          <h1 className='header-title'>Immersive experiences that deliver</h1>
        </div>
      </header>
      <section className='main-header'>
        <div className='main-header-img-container'>
          <img className='main-header-img' src='/images/desktop/image-interactive.jpg'></img>
        </div>
        <div className='main-content'>
          <h1 className='main-content-title'>The leader in interactive VR</h1>
          <p className='main-content-text'>
            Founded in 2011, Loopstudios has been producing world-class virtual reality 
            projects for some of the best companies around the globe. Our award-winning 
            creations have transformed businesses through digital experiences that bind 
            to their brand.
          </p>
        </div>
      </section>
      <section className='creations-grid'>
        <h1 className='creations-title'>Our creations</h1>
        <button className='creations-btn'>See all</button>
        <div className='creations-item'>
          <picture>
            <source srcSet='/images/mobile/image-deep-earth.jpg' media='(max-width: 1250px)'></source>
            <img className='item-bg' src='/images/desktop/image-deep-earth.jpg'></img>
          </picture>
          <h1 className='item-title'>Deep earth</h1>
        </div>
        <div className='creations-item'>
          <picture>
            <source srcSet='/images/mobile/image-night-arcade.jpg' media='(max-width: 1250px)'></source>
            <img className='item-bg' src='/images/desktop/image-night-arcade.jpg'></img>
          </picture>
          <h1 className='item-title'>Night arcade</h1>
        </div>
        <div className='creations-item'>
          <picture>
            <source srcSet='/images/mobile/image-soccer-team.jpg' media='(max-width: 1250px)'></source>
            <img className='item-bg' src='/images/desktop/image-soccer-team.jpg'></img>
          </picture>
          <h1 className='item-title'>Soccer team VR</h1>
        </div>
        <div className='creations-item'>
          <picture>
            <source srcSet='/images/mobile/image-grid.jpg' media='(max-width: 1250px)'></source>
            <img className='item-bg' src='/images/desktop/image-grid.jpg'></img>
          </picture>
          <h1 className='item-title'>The grid</h1>
        </div>
        <div className='creations-item'>
          <picture>
            <source srcSet='/images/mobile/image-from-above.jpg' media='(max-width: 1250px)'></source>
            <img className='item-bg' src='/images/desktop/image-from-above.jpg'></img>
          </picture>
          <h1 className='item-title'>From up above VR</h1>
        </div>
        <div className='creations-item'>
          <picture>
            <source srcSet='/images/mobile/image-pocket-borealis.jpg' media='(max-width: 1250px)'></source>
            <img className='item-bg' src='/images/desktop/image-pocket-borealis.jpg'></img>
          </picture>
          <h1 className='item-title'>Pocket borealis</h1>
        </div>
        <div className='creations-item'>
          <picture>
            <source srcSet='/images/mobile/image-curiosity.jpg' media='(max-width: 1250px)'></source>
            <img className='item-bg' src='/images/desktop/image-curiosity.jpg'></img>
          </picture>
          <h1 className='item-title'>The curiosity</h1>
        </div>
        <div className='creations-item'>
          <picture>
            <source srcSet='/images/mobile/image-fisheye.jpg' media='(max-width: 1250px)'></source>
            <img className='item-bg' src='/images/desktop/image-fisheye.jpg'></img>
          </picture>
          <h1 className='item-title'>Make it fisheye</h1>
        </div>
      </section>
      <section className='footer-section'>
        <div className='footer-main'>
          <div className='creds'>
            <img src='/images/logo.svg' className='footer-logo'></img>
            <div className='footer-links'>
              <a>About</a>
              <a>Careers</a>
              <a>Events</a>
              <a>Products</a>
              <a>Support</a>
            </div>
          </div>
          <div className='socials'>
            <div className='social-icons'>
              <div className='social-icon-container'>
                <img className='social-logo' src='/images/icon-facebook.svg'></img>
              </div>
              <div className='social-icon-container'>
                <img className='social-logo' src='/images/icon-twitter.svg'></img>
              </div>
              <div className='social-icon-container'>
                <img className='social-logo' src='/images/icon-pinterest.svg'></img>
              </div>
              <div className='social-icon-container'>
                <img className='social-logo' src='/images/icon-instagram.svg'></img>
              </div>
            </div>
            <p>© 2021 Loopstudios. All rights reserved.</p>
          </div>
        </div>
        <div className="attribution">
          Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
          Coded by <a href="https://github.com/aveandrian">aveandrian</a>.
        </div>
      </section>


  
    </>
  )
}

export default App
