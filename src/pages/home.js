import React, { useEffect } from "react";
import "../App.css";
import Footer from "../components/Footer";
import Header from "../components/Header";

function Home() {
  useEffect(() => {
  

    /**
     * Easy selector helper function
     */
    const select = (el, all = false) => {
      el = el.trim();
      if (all) {
        return [...document.querySelectorAll(el)];
      } else {
        return document.querySelector(el);
      }
    };

    /**
     * Easy event listener function
     */
    const on = (type, el, listener, all = false) => {
      let selectEl = select(el, all);
      if (selectEl) {
        if (all) {
          selectEl.forEach((e) => e.addEventListener(type, listener));
        } else {
          selectEl.addEventListener(type, listener);
        }
      }
    };

    /**
     * Easy on scroll event listener
     */
    const onscroll = (el, listener) => {
      el.addEventListener("scroll", listener);
    };

    /**
     * Navbar links active state on scroll
     */
    let navbarlinks = select("#navbar .scrollto", true);
    const navbarlinksActive = () => {
      let position = window.scrollY + 200;
      navbarlinks.forEach((navbarlink) => {
        if (!navbarlink.hash) return;
        let section = select(navbarlink.hash);
        if (!section) return;
        if (
          position >= section.offsetTop &&
          position <= section.offsetTop + section.offsetHeight
        ) {
          navbarlink.classList.add("active");
        } else {
          navbarlink.classList.remove("active");
        }
      });
    };
    window.addEventListener("load", navbarlinksActive);
    onscroll(document, navbarlinksActive);

    /**
     * Scrolls to an element with header offset
     */
    const scrollto = (el) => {
      let header = select("#header");
      let offset = header.offsetHeight;

      if (!header.classList.contains("header-scrolled")) {
        offset -= 20;
      }

      let elementPos = select(el).offsetTop;
      window.scrollTo({
        top: elementPos - offset,
        behavior: "smooth",
      });
    };

    /**
     * Toggle .header-scrolled class on #header when page is scrolled
     */
    let selectHeader = select("#header");
    if (selectHeader) {
      const headerScrolled = () => {
        if (window.scrollY > 100) {
          selectHeader.classList.add("header-scrolled");
        } else {
          selectHeader.classList.remove("header-scrolled");
        }
      };
      window.addEventListener("load", headerScrolled);
      onscroll(document, headerScrolled);
    }

    /**
     * Back to top button visibility
     */
    let backtotop = select(".back-to-top");
    if (backtotop) {
      const toggleBacktotop = () => {
        if (window.scrollY > 100) {
          backtotop.classList.add("active");
        } else {
          backtotop.classList.remove("active");
        }
      };
      window.addEventListener("load", toggleBacktotop);
      onscroll(document, toggleBacktotop);  //document.scroll listnr
    }

    /**
     * Mobile nav toggle
     */
    on("click", ".mobile-nav-toggle", function (e) {
      select("#navbar").classList.toggle("navbar-mobile");
      this.classList.toggle("bi-list");
      this.classList.toggle("bi-x");
    });

    /**
     * Mobile nav dropdowns activate
     */
    on(
      "click",
      ".navbar .dropdown > a",
      function (e) {
        if (select("#navbar").classList.contains("navbar-mobile")) {
          e.preventDefault();
          this.nextElementSibling.classList.toggle("dropdown-active");
        }
      },
      true
    );

    /**
     * Scrool with ofset on links with a class name .scrollto
     */
    on(
      "click",
      ".scrollto",
      function (e) {
        if (select(this.hash)) {
          e.preventDefault();

          let navbar = select("#navbar");
          if (navbar.classList.contains("navbar-mobile")) {
            navbar.classList.remove("navbar-mobile");
            let navbarToggle = select(".mobile-nav-toggle");
            navbarToggle.classList.toggle("bi-list");
            navbarToggle.classList.toggle("bi-x");
          }
          scrollto(this.hash);
        }
      },
      true
    );

    /**
     * Scroll with ofset on page load with hash links in the url
     */
    window.addEventListener("load", () => {
      if (window.location.hash) {
        if (select(window.location.hash)) {
          scrollto(window.location.hash);
        }
      }
    });
  }, []);
 
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
                We help you grow
                <br />
                 your Business<br />
                 <span className="curvespan">
                faster
                <img
                src={require("../assets/img/curve-line.png")}
                alt=""
                className="img-fluid curveline"
              />
                 </span>
              </h2>
              <p>
                Lorem is the Instagram analytics platform teams use to stay
                focused on the goals, track engagement for report your business
                .
              </p>
              <div>
            <a href="#about" className="btn-get-started scrollto">See how it works</a>
          </div>
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
