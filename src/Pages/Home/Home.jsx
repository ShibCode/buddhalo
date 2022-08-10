import React, { useState } from "react";

import logo from "../../Assets/logo-textbelow.png";
import img1 from "../../Assets/img1.png";
import img2 from "../../Assets/img2.png";
import img3 from "../../Assets/img3.png";
import img4 from "../../Assets/img4.png";
import img5 from "../../Assets/img5.png";

import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";

import img from "../../Assets/3.png";
import arrow from "../../Assets/arrow-down.png";
import arrowRight from "../../Assets/arrow-right.png";
import arrowLeft from "../../Assets/arrow-left.png";

import paused from "../../Assets/pause-icon.png";

import "./Home.css";
import "@splidejs/react-splide/css";

const Home = () => {
  const [slideNumber, setSlideNumber] = useState(1);

  return (
    <div className="home">
      <div className="home__section1">
        <img src={arrow} alt="" className="arrow-down" />
        <Splide
          hasTrack={false}
          options={{
            width: "100%",
            perPage: 1,
            perMove: 1,
            arrows: true,
            pagination: true,
            height: "600px",
            type: "loop",
            drag: true,
          }}
          onMove={(splide, prev, next) => {
            setSlideNumber(prev + 1);
          }}
        >
          <SplideTrack>
            <SplideSlide>
              <div className="img-wrapper">
                <img src={img} alt="" />
              </div>
            </SplideSlide>
            <SplideSlide>
              <div className="img-wrapper">
                <img src={img} alt="" />
              </div>
            </SplideSlide>
            <SplideSlide>
              <div className="img-wrapper">
                <img src={img} alt="" />
              </div>
            </SplideSlide>
            <SplideSlide>
              <div className="img-wrapper">
                <img src={img} alt="" />
              </div>
            </SplideSlide>
            <SplideSlide>
              <div className="img-wrapper">
                <img src={img} alt="" />
              </div>
            </SplideSlide>
          </SplideTrack>

          <div className="splide__arrows">
            <button className="splide__arrow splide__arrow--prev">
              <img src={arrowLeft} alt="" />
            </button>
            <h1>{slideNumber}</h1>
            <button className="splide__arrow splide__arrow--next">
              <img src={arrowRight} alt="" />
            </button>
          </div>
        </Splide>
      </div>

      <div className="home__section2Wrapper">
        <section className="home__section2">
          <div className="home__section2Top">
            <div className="home__section2TopContent">
              <div className="home__section2Left">
                <h1 className="home__heading">LoremBUDDhalo?</h1>

                <h1 className="home__subheading">Lorem, ipsum dolor.</h1>

                <p className="home__para">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Laborum quis laboriosam aperiam. Autem blanditiis deserunt
                  velit excepturi voluptas facere quas tempore, cupiditate
                  laborum dolore eligendi officia fugiat. Eius, vitae facilis!
                </p>

                <p className="home__para">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Laboriosam delectus quibusdam magni architecto, ducimus quod
                  illo aspernatur voluptatum maiores incidunt?
                </p>
              </div>

              <div className="home__section2Right">
                <img src={logo} alt="BUDDHALO" />
              </div>
            </div>
          </div>

          <div className="home__section2ImagesWrapper">
            <div className="home__section2Images">
              <div className="home__section2Image">
                <img src={img1} alt="" />
              </div>

              <div className="home__section2Image">
                <img src={img2} alt="" />
              </div>

              <div className="home__section2Image">
                <img src={img3} alt="" />
              </div>

              <div className="home__section2Image">
                <img src={img4} alt="" />
              </div>

              <div className="home__section2Image">
                <img src={img5} alt="" />
              </div>
            </div>
          </div>
        </section>
      </div>

      <section className="home__section3">
        <img src={paused} />
      </section>

      <div className="home__section4Wrapper">
        <section className="home__section4">
          <h1 className="home__heading">Lorem</h1>

          <h1 className="home__subheading">Lorem ipsum dolor sit amet.</h1>

          <div className="home__section4Questions">
            <div className="home__section4Question">
              <div className="home__section4QuestionLeft">01</div>

              <div className="home__section4QuestionRight">
                <h1 className="home__subheading">Lorem, ipsum dolor.</h1>

                <p className="home__para">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Ipsum consequuntur quisquam esse culpa est vero nihil aliquid
                  repudiandae quo exercitationem!
                </p>
              </div>
            </div>

            <div className="home__section4Question">
              <div className="home__section4QuestionLeft">02</div>

              <div className="home__section4QuestionRight">
                <h1 className="home__subheading">Lorem, ipsum dolor.</h1>

                <p className="home__para">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Ipsum consequuntur quisquam esse culpa est vero nihil aliquid
                  repudiandae quo exercitationem!
                </p>
              </div>
            </div>

            <div className="home__section4Question">
              <div className="home__section4QuestionLeft">03</div>

              <div className="home__section4QuestionRight">
                <h1 className="home__subheading">Lorem, ipsum dolor.</h1>

                <p className="home__para">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Ipsum consequuntur quisquam esse culpa est vero nihil aliquid
                  repudiandae quo exercitationem!
                </p>
              </div>
            </div>

            <div className="home__section4Question">
              <div className="home__section4QuestionLeft">04</div>

              <div className="home__section4QuestionRight">
                <h1 className="home__subheading">Lorem, ipsum dolor.</h1>

                <p className="home__para">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Ipsum consequuntur quisquam esse culpa est vero nihil aliquid
                  repudiandae quo exercitationem!
                </p>
              </div>
            </div>

            <div className="home__section4Question">
              <div className="home__section4QuestionLeft">05</div>

              <div className="home__section4QuestionRight">
                <h1 className="home__subheading">Lorem, ipsum dolor.</h1>

                <p className="home__para">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Ipsum consequuntur quisquam esse culpa est vero nihil aliquid
                  repudiandae quo exercitationem!
                </p>
              </div>
            </div>

            <div className="home__section4Question">
              <div className="home__section4QuestionLeft">06</div>

              <div className="home__section4QuestionRight">
                <h1 className="home__subheading">Lorem, ipsum dolor.</h1>

                <p className="home__para">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Ipsum consequuntur quisquam esse culpa est vero nihil aliquid
                  repudiandae quo exercitationem!
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div className="home__section5Wrapper">
        <section className="home__section5">
          <h1 className="home__heading">Lorem</h1>

          <div className="home__section5Members">
            <div className="home__section5Member">
              <div className="home__section5MemberDetails gold">
                <h1 className="home__section5MemberName">Dev.Hulk</h1>

                <p className="home__section5MemberInfo">Lorem, ipsum dolor.</p>
              </div>
            </div>

            <div className="home__section5Member">
              <div className="home__section5MemberDetails">
                <h1 className="home__section5MemberName">Leonardo.Fan</h1>

                <p className="home__section5MemberInfo">Lorem, ipsum dolor.</p>
              </div>
            </div>

            <div className="home__section5Member">
              <div className="home__section5MemberDetails gold">
                <h1 className="home__section5MemberName">Radocash</h1>

                <p className="home__section5MemberInfo">Lorem, ipsum dolor.</p>
              </div>
            </div>

            <div className="home__section5Member">
              <div className="home__section5MemberDetails">
                <h1 className="home__section5MemberName">Hayazakllee</h1>

                <p className="home__section5MemberInfo">Lorem, ipsum dolor.</p>
              </div>
            </div>

            <div className="home__section5Member">
              <div className="home__section5MemberDetails gold">
                <h1 className="home__section5MemberName">Nyxon</h1>

                <p className="home__section5MemberInfo">Lorem, ipsum dolor.</p>
              </div>
            </div>

            <div className="home__section5Member">
              <div className="home__section5MemberDetails">
                <h1 className="home__section5MemberName">Musesium</h1>

                <p className="home__section5MemberInfo">Lorem, ipsum dolor.</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
