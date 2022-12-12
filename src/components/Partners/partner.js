import { useRef } from "react";
import "./partner.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
import { Pagination, Navigation, Autoplay } from "swiper";
import { Row, Col } from "react-bootstrap";

const Partner = () => {
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);

  return (
    <div className="fe04-container">
    <div className="fe04-container_partner container">
      <Col className="fe04-container_partner_title">
        <h2>Trusted by the Clients & Partners</h2>
        <Row className="fe04-swiper_navigation">
          <Col ref={navigationPrevRef} className="swiper_button swiper_prev">
            Prev
          </Col>
          <Col ref={navigationNextRef} className="swiper_button swiper_next">
            Ncext
          </Col>
        </Row>
      </Col>
      
      
      <div className="fe04-container_partner swiper">
        <Swiper
          
          speed={500}
          grabCursor={true}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 3500,
            stopOnLastSlide: true,
          }}
          
          navigation={{
            prevEl: navigationPrevRef.current,
            nextEl: navigationNextRef.current,
          }}
          onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = navigationPrevRef.current;
            swiper.params.navigation.nextEl = navigationNextRef.current;
          }}
          modules={[Pagination, Navigation, Autoplay]}
         
          slidesPerView={4}
          slidesPerGroup={4}
          breakpoints={{
            320: {
              slidesPerView: 1,
              slidesPerGroup: 1,
            },
            480: {
              slidesPerView: 3,
              slidesPerGroup: 3,
            },
            720: {
              slidesPerView: 4,
              slidesPerGroup: 4,
            },
            1024: {
              slidesPerView: 4,
              slidesPerGroup: 4,
            },
            1400: {
              slidesPerView:4,
              slidesPerGroup: 4,
            },
          }}
          className="mySwiper"
        >
          <SwiperSlide>
            <a href="http://vsec.com.vn">
              <img
                src="https://stunited.vn/wp-content/uploads/2016/03/vsec_logo1-1-150x150.png"
                alt=""
              />
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a href="http://mti-vietnam.vn">
              <img
                src="https://stunited.vn/wp-content/uploads/2016/03/1544156780812-72-2-150x150.png"
                alt=""
              />
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a href="http://tmsgroup.vn">
              <img
                src="https://stunited.vn/wp-content/uploads/2016/03/af90ab46-05fd-11e7-9e7d-cac091044fd5-2-150x150.jpg"
                alt=""
              />
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a href="https://mobifone.vn">
              <img
                src="https://stunited.vn/wp-content/uploads/2019/08/logo-1-150x150.png"
                alt=""
              />
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a href="https://www.gitstart.com/">
              <img
                src="https://stunited.vn/wp-content/uploads/2016/03/68730533_678381192676224_5237130520554373120_n-150x150.png"
                alt=""
              />
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a href="https://www.flexidata.vn/">
              <img
                src="https://stunited.vn/wp-content/uploads/2016/03/logo700px-duongban-01-1-150x150.png"
                alt=""
              />
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a href="https://www.facebook.com/codecompletevietnam/">
              <img
                src="https://stunited.vn/wp-content/uploads/2019/08/codecomplete-logo-150x150.png"
                alt=""
              />
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a href="https://synova-solutions.com/">
              <img
                src="https://stunited.vn/wp-content/uploads/2019/08/Synova-Logo-WebRetina-w-018-1-150x150.png"
                alt=""
              />
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a href="https://www.hollows.org">
              <img
                src="https://stunited.vn/wp-content/uploads/2016/03/b4cbe5b535d3de27d3835854cb64b56d-1165x550-c-center-1-150x150.jpg"
                alt=""
              />
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a href="http://www.alacartedanangbeach.com/">
              <img
                src="https://stunited.vn/wp-content/uploads/2019/08/26170224_2060251644219912_7814952797271844429_o-150x150.jpg"
                alt=""
              />
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a href="https://zendiamondsuites.com/">
              <img
                src="https://stunited.vn/wp-content/uploads/2019/08/Logo.ZenDiamondSuites12-150x150.jpg"
                alt=""
              />
            </a>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
    </div>
  );
};
export default Partner;
