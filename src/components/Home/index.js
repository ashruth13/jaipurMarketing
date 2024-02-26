import {Component} from 'react'
import './index.css'
import {MdAccountCircle} from 'react-icons/md'
import {FaListUl} from 'react-icons/fa'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Context from '../../Context'

class Home extends Component {
  render() {
    return (
      <Context.Consumer>
        {value => {
          const {name} = value
          const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
          }
          return (
            <div className="main-home">
              <div className="header">
                <MdAccountCircle size={60} color="white" />
                <FaListUl size={40} color="white" />
              </div>
              <h1 className="h1">Hi! {name}</h1>
              <div className="main-container">
                <div className="slider-container">
                  <Slider {...settings}>
                    <div>
                      <div>
                        <img
                          src="https://res.cloudinary.com/dgw2vopar/image/upload/f_auto,q_auto/cjdkdhqgwyfvakuksxu4"
                          alt="pop"
                          className="carosel-img"
                        />
                      </div>
                    </div>
                    <div>
                      <div>
                        <img
                          src="https://res.cloudinary.com/dgw2vopar/image/upload/f_auto,q_auto/cjdkdhqgwyfvakuksxu4"
                          alt="pop"
                          className="carosel-img"
                        />
                      </div>
                    </div>
                    <div>
                      <div>
                        <img
                          src="https://res.cloudinary.com/dgw2vopar/image/upload/f_auto,q_auto/cjdkdhqgwyfvakuksxu4"
                          alt="pop"
                          className="carosel-img"
                        />
                      </div>
                    </div>
                    <div>
                      <div>
                        <img
                          src="https://res.cloudinary.com/dgw2vopar/image/upload/f_auto,q_auto/cjdkdhqgwyfvakuksxu4"
                          alt="pop"
                          className="carosel-img"
                        />
                      </div>
                    </div>
                  </Slider>
                </div>
              </div>
              <div className="white-card">{'  '}</div>
              <p className="pp">What do you want to learn today {name}?</p>
            </div>
          )
        }}
      </Context.Consumer>
    )
  }
}

export default Home
