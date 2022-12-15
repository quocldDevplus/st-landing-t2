import { bannerItems } from '~/constant';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import 'swiper/css/effect-fade';
import images from '~/assets/images';
import './Banner.scss';
import { Navigation, Pagination, EffectFade, Autoplay } from 'swiper';

function Banner() {
    const menu = ['Slide 1', 'Slide 2', 'Slide 3'];
    const handleOnChangeSlider = () => {
        var animationElements = document.getElementsByClassName('main-banner__loading');
        for (let i = 0; i < animationElements.length; i++) {
            animationElements[i].classList.remove('main-banner__loading-animation');
            console.log(bannerItems);
            void animationElements[i].offsetWidth;
            animationElements[i].classList.add('main-banner__loading-animation');
        }
    };

    return (
        <>
            <Swiper
                onSlideChange={handleOnChangeSlider}
                modules={[EffectFade, Navigation, Pagination, Autoplay]}
                spaceBetween={30}
                effect={'fade'}
                autoplay={{ delay: 10000, disableOnInteraction: false }}
                navigation={true}
                pagination={{
                    el: '.swiper-pagination',
                    clickable: true,
                    renderBullet: function (index) {
                        return (
                            '<span class="swiper-pagination-bullet"><span class="render-bullet-inside"></span><span class="tp-bullet"> <img class="tp-bullet-image" src=' +
                            bannerItems[index].img +
                            ' alt="banner2" /> <span class="tp-bullet-title">Slide</span></span></span>'
                        );
                    },
                }}
                className="mySwiper"
            >
                {bannerItems.map((item) => (
                    <SwiperSlide key={item.id}>
                        <div>
                            <img className="main-banner__img" src={item.img} alt="banner1" />
                        </div>
                        <div className="main-banner__layer"></div>
                        <div className="main-banner__item-content-box">
                            <p className="main-banner__item-content">{item.content}</p>
                        </div>
                        <span className="main-banner__loading main-banner__loading-animation"></span>
                    </SwiperSlide>
                ))}

                <div class="swiper-pagination"></div>
            </Swiper>
        </>
    );
}

export default Banner;
