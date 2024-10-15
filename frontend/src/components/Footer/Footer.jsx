import { assets } from '../../assets/assets'
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className='footer-content'>
            <div className='footer-content-left'>
                <img src={assets.logo} alt=''/>
                <p>
                Discover a diverse menu at our Canteen! Enjoy fresh salads, savory rolls, creamy pastas, delicious sandwiches, and sweet desserts. We offer pure vegetarian options and hearty meals. Perfect for every craving and occasion.
                </p>
                <div className='footer-social-icons'>
                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.twitter_icon} alt="" />
                    <img src={assets.linkedin_icon} alt=""/>
                </div>
            </div>
            <div className='footer-content-center'>
                <h2>COMPANY</h2>
                <li>Home</li>
                <li>About us</li>
                <li>Delivery</li>
                <li>Privacy policy</li>
            </div>
            <div className='footer-content-right'>
                <ul>
                    <li>+91-99999-99999</li>
                    <li>contact@tcecanteen.com</li>
                </ul>
            </div>
        </div>
        <hr/>
        <p className='footer-copyright'>
            Copyright 2024 © Tcecanteen.com - All Right Reserved.
        </p>
    </div>
  )
}

export default Footer