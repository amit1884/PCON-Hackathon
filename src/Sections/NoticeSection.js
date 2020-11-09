import React from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
function NoticeSection() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        vertical: true,
      };
    return (
        <div style={{padding:'5px'}}>
            <br/>
             <h5 className="Notice-head">Latest Updates</h5>
            <br />
            <div className="notice-box">
              <Slider {...settings}>
                <div>
                    <div className="single_notice">
                        Notices
                    </div>
                </div>
                <div>
                    <div className="single_notice">
                        Notices
                    </div>
                </div>
                <div>
                    <div className="single_notice">
                        Notices
                    </div>
                </div>
                <div>
                    <div className="single_notice">
                        Notices
                    </div>
                </div>
                <div>
                    <div className="single_notice">
                        Notices
                    </div>
                </div>
              </Slider>
            </div>
            <br/>
        </div>
    )
}

export default NoticeSection
