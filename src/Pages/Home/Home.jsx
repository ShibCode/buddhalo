import React, { useState } from "react";

import logo from "../../Assets/logo-textbelow.png";
import img1 from "../../Assets/img1.png";
import img2 from "../../Assets/img2.png";
import img3 from "../../Assets/img3.png";
import img4 from "../../Assets/img4.png";
import img5 from "../../Assets/img5.png";

import imgText from "../../Assets/buddhalo web.png";

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
      <div className="home__section1Wrapper">
        <div className="home__section1">
          <a href="#section2" className="arrow-down">
            <img src={arrow} alt="" />
          </a>
          <img src={imgText} className="section1__imgText" />
          <Splide
            hasTrack={false}
            options={{
              width: "100%",
              perPage: 1,
              perMove: 1,
              arrows: true,
              pagination: true,
              height: "calc(100vh - var(--header-height))",
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
                  <img src={img1} alt="" />
                </div>
              </SplideSlide>
              <SplideSlide>
                <div className="img-wrapper">
                  <img src={img2} alt="" />
                </div>
              </SplideSlide>
              <SplideSlide>
                <div className="img-wrapper">
                  <img src={img3} alt="" />
                </div>
              </SplideSlide>
              <SplideSlide>
                <div className="img-wrapper">
                  <img src={img4} alt="" />
                </div>
              </SplideSlide>
              <SplideSlide>
                <div className="img-wrapper">
                  <img src={img5} alt="" />
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
      </div>

      <div className="home__section2Wrapper" id="section2">
        <section className="home__section2">
          <div className="home__section2Top">
            <div className="home__section2TopContent">
              <div className="home__section2Left">
                <h1 className="home__heading">什么是BUDDhalo？?</h1>

                <h1 className="home__subheading">是由168999尊独特佛陀组成</h1>

                <p className="home__para">
                  BUDDhalo是一个可收藏的NFT项目，其中包括168999尊独特的佛陀。一个无边无量的宏伟愿景，旨在通过高频率的精神能量和禅意的氛围，来影响和团结佛教文化以及Web3元宇宙。我们向着更高的灵性进化而共生，为了减少人类的痛苦和冲突而存在，一切都是为了紧密联系信徒心中的信念而创作BUDDhalo。
                </p>

                <p className="home__para">
                  每尊佛陀都生活在以太坊区块链上。信徒们可以在Web3元宇宙供奉这些独一无二、完全3D的佛陀，当然也可以到我们的机构领取具有庇佑法力的佛陀雕塑。
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
          <h1 className="home__heading">路线图</h1>

          <h1 className="home__subheading">
            我们共同建立的区块链与现实共存的世界观！
          </h1>

          <div className="home__section4Questions">
            <div className="home__section4Question">
              <div className="home__section4QuestionLeft">01</div>

              <div className="home__section4QuestionRight">
                <h1 className="home__subheading">开始——市场投入</h1>

                <p className="home__para">
                  从你开始———一具没有灵魂灵性的躯壳，Web3元宇宙什么都不是。我们想建立全宇宙最高频率的社区，这个社区需要所有信徒信念信心的注入！
                </p>
              </div>
            </div>

            <div className="home__section4Question">
              <div className="home__section4QuestionLeft">02</div>

              <div className="home__section4QuestionRight">
                <h1 className="home__subheading">质押——换购</h1>

                <p className="home__para">
                  您将会到我们合作机构,购买NFT并且享受其带来的附加收益。
                  我们会升级更多的隐藏玩法,让您的被动收入和主动学习的能量不断提升,
                  以获得更多的爱和慈悲。
                </p>
              </div>
            </div>

            <div className="home__section4Question">
              <div className="home__section4QuestionLeft">03</div>

              <div className="home__section4QuestionRight">
                <h1 className="home__subheading">灵感呈现——BUDDhalo佛陀制作</h1>

                <p className="home__para">
                  您可以在您所在地区或者在线搜索符合您的能量特型的音乐或者曼陀罗，还有持有halo的伙伴们，您将在我们Web3元宇宙共同寻找灵感，我们将为您制作和呈现出来。
                </p>
              </div>
            </div>

            <div className="home__section4Question">
              <div className="home__section4QuestionLeft">04</div>

              <div className="home__section4QuestionRight">
                <h1 className="home__subheading">
                  为您的宝物制订独一无二的代码——拍卖藏品
                </h1>

                <p className="home__para">
                  为什么要为手中的宝物的真伪溯源而烦恼呢？我们制作的NFT是独特且唯一可识别的！你也想为您的宝物制作独一无二的身份代码？我们机构同样可以为您服务，为了让您快速发现同频率同层次的好友，我们将会为大家建立并且提供一个Web3元宇宙。
                </p>
              </div>
            </div>

            <div className="home__section4Question">
              <div className="home__section4QuestionLeft">05</div>

              <div className="home__section4QuestionRight">
                <h1 className="home__subheading">
                  拍卖和换购完毕——获得优惠和空投
                </h1>

                <p className="home__para">
                  每一位供养BUDDhalo的信徒，都可以在BUDDhalo下一次的预售中获得独家优惠，一共168999尊佛陀，我们将会为每一位信徒保留名额。并且有机会领取到BUDDhalo的空投，且破解隐藏谜题可以获得相对应的宝藏宝物。
                </p>
              </div>
            </div>

            <div className="home__section4Question">
              <div className="home__section4QuestionLeft">06</div>

              <div className="home__section4QuestionRight">
                <h1 className="home__subheading">
                  高频率能量场——宏伟的因陀罗网
                </h1>

                <p className="home__para">
                  我们希望每一位BUDDhalo的持有者都能够在得到曼陀罗的启示，并且把自己的高频率能量投影到因陀罗网中去。我们会通过开设区块链Web3元宇宙，让大家在上面聚会禅坐交流，我们也会在全球范围内的宗教场所，为大家提供宏大的佛法会。
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div className="home__section5Wrapper">
        <section className="home__section5">
          <h1 className="home__heading">团队成员</h1>

          <div className="home__section5Members">
            <div className="home__section5Member">
              <div className="home__section5MemberDetails gold">
                <h1 className="home__section5MemberName">Dev.Hulk</h1>

                <p className="home__section5MemberInfo">
                  联合创始人 + 全栈工程师
                </p>
              </div>
            </div>

            <div className="home__section5Member">
              <div className="home__section5MemberDetails">
                <h1 className="home__section5MemberName">Leonardo.Fan</h1>

                <p className="home__section5MemberInfo">
                  联合创始人 + CEO + 创意总监
                </p>
              </div>
            </div>

            <div className="home__section5Member">
              <div className="home__section5MemberDetails gold">
                <h1 className="home__section5MemberName">Radocash</h1>

                <p className="home__section5MemberInfo">联合创始人 + 设计师</p>
              </div>
            </div>

            <div className="home__section5Member">
              <div className="home__section5MemberDetails">
                <h1 className="home__section5MemberName">Hayazaki.lee</h1>

                <p className="home__section5MemberInfo">联合创始人 + 顾问</p>
              </div>
            </div>

            <div className="home__section5Member">
              <div className="home__section5MemberDetails gold">
                <h1 className="home__section5MemberName">Nyx.Qin</h1>

                <p className="home__section5MemberInfo">
                  联合创始人 + 美术总监
                </p>
              </div>
            </div>

            <div className="home__section5Member">
              <div className="home__section5MemberDetails">
                <h1 className="home__section5MemberName">Musesium</h1>

                <p className="home__section5MemberInfo">美术团队</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
