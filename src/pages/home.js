import React, { useEffect } from "react";
import "../App.css";
import Footer from "../components/Footer";
import Header from "../components/Header";

function Home() {

  return (
    <div>
      <Header/>
      {/* End Header  */}

      {/* <!-- ======= Hero Section ======= --> */}
      <section id="hero" className="clearfix">
        <div className="container d-flex h-100">
          <div
            className="row justify-content-center align-self-center"
            data-aos="fade-up"
          >
           
            <div
              className="col-lg-6 intro-info order-lg-first order-last"
              data-aos="zoom-in"
              data-aos-delay="100"
            >
              <h2>
                We help you
                <br />
                grow your <br />
                Business faster
              </h2>
              <p>
                Lorem is the Instagram analytics platform teams use to stay
                focused on the goals, track engagement for report your business
                .
              </p>
              {/* <div>
            <a href="#about" className="btn-get-started scrollto">Get Started</a>
          </div> */}
            </div>
          
            <div
              className="col-lg-6 intro-img order-lg-last order-first"
              data-aos="zoom-out"
              data-aos-delay="200"
            >
              <img
                src={require("../assets/img/intro-img.svg")}
                alt=""
                className="img-fluid"
              />
            </div>

          </div>
          {/* <div
              className="intro-img2"
              data-aos="zoom-out"
              data-aos-delay="200"
            >
              <img
                src={require("../assets/img/main-intro.png")}
                alt=""
                // className="img-fluid"
              />
            </div> */}
        </div>
      </section>
      {/* <!-- End Hero --> */}

      <main id="main">
        {/* <!-- ======= About Section ======= --> */}
        <section id="about" className="about">
          <div className="container">
            <div
              className="row counters clients1"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="col-lg-3 col-md-6 text-center client-img">
                <img
                  src={require("../assets/img/clients/client-1.png")}
                  className="img-fluid"
                  alt=""
                />
              </div>

              <div className="col-lg-3 col-md-6 text-center client-img">
                <img
                  src={require("../assets/img/clients/client-2.png")}
                  className="img-fluid"
                  alt=""
                />
              </div>

              <div className="col-lg-3 col-md-6 text-center client-img">
                <img
                  src={require("../assets/img/clients/client-3.png")}
                  className="img-fluid"
                  alt=""
                />
              </div>

              <div className="col-lg-3 col-md-6 text-center client-img">
                <img
                  src={require("../assets/img/clients/client-4.png")}
                  className="img-fluid"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="container" data-aos="fade-up">
            <div className="row">
              <div className="col-lg-5 col-md-6">
                <div
                  className="about-img"
                  data-aos="fade-right"
                  data-aos-delay="100"
                >
                  <img src={require("../assets/img/iphone1.png")} alt="" />
                </div>
              </div>

              <div className="col-lg-7 col-md-6">
                <div
                  className="about-content"
                  data-aos="fade-left"
                  data-aos-delay="100"
                >
                  <h2>
                    Lorem ipsum dolor sit amet, consectetur adipiscing eli
                  </h2>

                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                  <p>
                    Aut dolor id. Sint aliquam consequatur ex ex labore. Et quis
                    qui dolor nulla dolores neque. Aspernatur consectetur omnis
                    numquam quaerat. Sed fugiat nisi. Officiis veniam molestiae.
                    Et vel ut quidem alias veritatis repudiandae ut fugit. Est
                    ut eligendi aspernatur nulla voluptates veniam iusto vel
                    quisquam. Fugit ut maxime incidunt accusantium totam
                    repellendus eum error. Et repudiandae eum iste qui et ut ab
                    alias.
                  </p>
                  <a href="#hero" className="btn-about">
                    Get Started
                  </a>
                  <div></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="about1" className="about1">
          <div className="container" data-aos="fade-up">
            <div className="row">
              <div className="col-lg-7 col-md-6">
                <div
                  className="about-content"
                  data-aos="fade-left"
                  data-aos-delay="100"
                >
                  <h2>
                    Lorem ipsum dolor sit amet, consectetur adipiscing eli
                  </h2>

                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                  <p>
                    Aut dolor id. Sint aliquam consequatur ex ex labore. Et quis
                    qui dolor nulla dolores neque. Aspernatur consectetur omnis
                    numquam quaerat. Sed fugiat nisi. Officiis veniam molestiae.
                    Et vel ut quidem alias veritatis repudiandae ut fugit. Est
                    ut eligendi aspernatur nulla voluptates veniam iusto vel
                    quisquam. Fugit ut maxime incidunt accusantium totam
                    repellendus eum error. Et repudiandae eum iste qui et ut ab
                    alias.
                  </p>
                  <div>
                    <a href="#hero" className="btn-about">
                      Get Started
                    </a>
                  </div>
                </div>
              </div>

              <div className="col-lg-5 col-md-6">
                <div
                  className="about-img"
                  data-aos="fade-right"
                  data-aos-delay="100"
                >
                  <img src={require("../assets/img/iphone1.png")} alt="" />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- End About Section --> */}

        <section id="about" className="about">
          <div className="container" data-aos="fade-up">
            <div className="row">
              <div className="col-lg-5 col-md-6">
                <div
                  className="about-img"
                  data-aos="fade-right"
                  data-aos-delay="100"
                >
                  <img src={require("../assets/img/iphone1.png")} alt="" />
                </div>
              </div>

              <div className="col-lg-7 col-md-6">
                <div
                  className="about-content"
                  data-aos="fade-left"
                  data-aos-delay="100"
                >
                  <h2>
                    Lorem ipsum dolor sit amet, consectetur adipiscing eli
                  </h2>

                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                  <p>
                    Aut dolor id. Sint aliquam consequatur ex ex labore. Et quis
                    qui dolor nulla dolores neque. Aspernatur consectetur omnis
                    numquam quaerat. Sed fugiat nisi. Officiis veniam molestiae.
                    Et vel ut quidem alias veritatis repudiandae ut fugit. Est
                    ut eligendi aspernatur nulla voluptates veniam iusto vel
                    quisquam. Fugit ut maxime incidunt accusantium totam
                    repellendus eum error. Et repudiandae eum iste qui et ut ab
                    alias.
                  </p>
                  <a href="#hero" className="btn-about">
                    Get Started
                  </a>
                  <div></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <!-- ======= Footer ======= --> */}
        <Footer/>
        {/* <!-- End  Footer --> */}
      </main>
    </div>
  );
}

export default Home;
