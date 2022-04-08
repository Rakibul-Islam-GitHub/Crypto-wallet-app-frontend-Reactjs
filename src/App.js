import React, { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  useEffect(() => {
    "use strict";

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
     * Toggle .header-scrolled class to #header when page is scrolled
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
     * Back to top button
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
      onscroll(document, toggleBacktotop);
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
      <header
        id="header"
        class="fixed-top d-flex align-items-center header-transparent"
      >
        <div class="container d-flex align-items-center">
          <h1 class="logo me-auto">
            <a href="index.html">Bitx</a>
          </h1>

          {/* <a href="index.html" class="logo me-auto"><img src={require("./assets/img/logo.png")} alt="" class="img-fluid"/></a> */}

          <nav id="navbar" class="navbar order-last order-lg-0">
            <ul>
              <li>
                <a class="nav-link scrollto active" href="#hero">
                  Home
                </a>
              </li>
             
              <li>
                <a class="nav-link scrollto" href="#about">
                  About1
                </a>
              </li>
           
             
              <li>
                <a class="nav-link scrollto" href="#team">
                  Team
                </a>
              </li>

            
            </ul>
            <i class="bi bi-list mobile-nav-toggle"></i>
          </nav>
          {/* <!-- .navbar --> */}

          <div class="social-links">
            <a href="#" class="twitter">
              <i class="bi bi-twitter"></i>
            </a>
            <a href="#" class="facebook">
              <i class="bi bi-facebook"></i>
            </a>
            <a href="#" class="linkedin">
              <i class="bi bi-linkedin"></i>
            </a>
            <a href="#" class="instagram">
              <i class="bi bi-instagram"></i>
            </a>
          </div>
        </div>
      </header>

      {/* End Header  */}

      {/* <!-- ======= Hero Section ======= --> */}
      <section id="hero" class="clearfix">
        <div class="container d-flex h-100">
          <div
            class="row justify-content-center align-self-center"
            data-aos="fade-up"
          >
            <div
              class="col-lg-6 intro-info order-lg-first order-last"
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
            <a href="#about" class="btn-get-started scrollto">Get Started</a>
          </div> */}
            </div>

            <div
              class="col-lg-6 intro-img order-lg-last order-first"
              data-aos="zoom-out"
              data-aos-delay="200"
            >
              <img
                src={require("./assets/img/intro-img.svg")}
                alt=""
                class="img-fluid"
              />
            </div>
          </div>
        </div>
      </section>
      {/* <!-- End Hero --> */}

      <main id="main">
        {/* <!-- ======= About Section ======= --> */}
        <section id="about" class="about">
          <div class="container">
            <div
              class="row counters clients1"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div class="col-lg-3 col-md-6 text-center client-img">
                <img
                  src={require("./assets/img/clients/client-1.png")}
                  class="img-fluid"
                  alt=""
                />
              </div>

              <div class="col-lg-3 col-md-6 text-center client-img">
                <img
                  src={require("./assets/img/clients/client-2.png")}
                  class="img-fluid"
                  alt=""
                />
              </div>

              <div class="col-lg-3 col-md-6 text-center client-img">
                <img
                  src={require("./assets/img/clients/client-3.png")}
                  class="img-fluid"
                  alt=""
                />
              </div>

              <div class="col-lg-3 col-md-6 text-center client-img">
                <img
                  src={require("./assets/img/clients/client-4.png")}
                  class="img-fluid"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div class="container" data-aos="fade-up">
            <div class="row">
              <div class="col-lg-5 col-md-6">
                <div
                  class="about-img"
                  data-aos="fade-right"
                  data-aos-delay="100"
                >
                  <img src={require("./assets/img/iphone1.png")} alt="" />
                </div>
              </div>

              <div class="col-lg-7 col-md-6">
                <div
                  class="about-content"
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
                  <a href="#hero" class="btn-about">
                    Get Started
                  </a>
                  <div></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="about1" class="about1">
          <div class="container" data-aos="fade-up">
            <div class="row">
              <div class="col-lg-7 col-md-6">
                <div
                  class="about-content"
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
                    <a href="#hero" class="btn-about">
                      Get Started
                    </a>
                  </div>
                </div>
              </div>

              <div class="col-lg-5 col-md-6">
                <div
                  class="about-img"
                  data-aos="fade-right"
                  data-aos-delay="100"
                >
                  <img src={require("./assets/img/iphone1.png")} alt="" />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- End About Section --> */}

        <section id="about" class="about">
          <div class="container" data-aos="fade-up">
            <div class="row">
              <div class="col-lg-5 col-md-6">
                <div
                  class="about-img"
                  data-aos="fade-right"
                  data-aos-delay="100"
                >
                  <img src={require("./assets/img/iphone1.png")} alt="" />
                </div>
              </div>

              <div class="col-lg-7 col-md-6">
                <div
                  class="about-content"
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
                  <a href="#hero" class="btn-about">
                    Get Started
                  </a>
                  <div></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <!-- ======= Team Section ======= --> */}
        <section id="team" class="team section-bg">
          <div class="container" data-aos="fade-up">
            <div class="section-header">
              <h3>Team</h3>
           
            </div>

            <div class="row">
              <div
                class="col-lg-3 col-md-6"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <div class="member">
                  <img
                    src={require("./assets/img/team-1.jpg")}
                    class="img-fluid"
                    alt=""
                  />
                  <div class="member-info">
                    <div class="member-info-content">
                      <h4>Walter White</h4>
                      <span>Chief Executive Officer</span>
                      <div class="social">
                        <a href="">
                          <i class="bi bi-twitter"></i>
                        </a>
                        <a href="">
                          <i class="bi bi-facebook"></i>
                        </a>
                        <a href="">
                          <i class="bi bi-instagram"></i>
                        </a>
                        <a href="">
                          <i class="bi bi-linkedin"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div
                class="col-lg-3 col-md-6"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <div class="member">
                  <img
                    src={require("./assets/img/team-2.jpg")}
                    class="img-fluid"
                    alt=""
                  />
                  <div class="member-info">
                    <div class="member-info-content">
                      <h4>Sarah Jhonson</h4>
                      <span>Product Manager</span>
                      <div class="social">
                        <a href="">
                          <i class="bi bi-twitter"></i>
                        </a>
                        <a href="">
                          <i class="bi bi-facebook"></i>
                        </a>
                        <a href="">
                          <i class="bi bi-instagram"></i>
                        </a>
                        <a href="">
                          <i class="bi bi-linkedin"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div
                class="col-lg-3 col-md-6"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <div class="member">
                  <img
                    src={require("./assets/img/team-3.jpg")}
                    class="img-fluid"
                    alt=""
                  />
                  <div class="member-info">
                    <div class="member-info-content">
                      <h4>William Anderson</h4>
                      <span>CTO</span>
                      <div class="social">
                        <a href="">
                          <i class="bi bi-twitter"></i>
                        </a>
                        <a href="">
                          <i class="bi bi-facebook"></i>
                        </a>
                        <a href="">
                          <i class="bi bi-instagram"></i>
                        </a>
                        <a href="">
                          <i class="bi bi-linkedin"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div
                class="col-lg-3 col-md-6"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                <div class="member">
                  <img
                    src={require("./assets/img/team-4.jpg")}
                    class="img-fluid"
                    alt=""
                  />
                  <div class="member-info">
                    <div class="member-info-content">
                      <h4>Amanda Jepson</h4>
                      <span>Accountant</span>
                      <div class="social">
                        <a href="">
                          <i class="bi bi-twitter"></i>
                        </a>
                        <a href="">
                          <i class="bi bi-facebook"></i>
                        </a>
                        <a href="">
                          <i class="bi bi-instagram"></i>
                        </a>
                        <a href="">
                          <i class="bi bi-linkedin"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- End Team Section --> */}

        {/* <!-- ======= Footer ======= --> */}
        <footer id="footer" class="section-bg">
          <div class="row footer2">
            <div class="col-lg-3 col-md-6 footer-social-links text-center">
              <a href="#" class="twitter">
                <i class="bi bi-twitter"></i>
              </a>
              <a href="#" class="facebook">
                <i class="bi bi-facebook"></i>
              </a>
              <a href="#" class="instagram">
                <i class="bi bi-instagram"></i>
              </a>
              <a href="#" class="linkedin">
                <i class="bi bi-linkedin"></i>
              </a>
            </div>
            <div class="col-lg-3 col-md-6 text-center copyright">
              &copy; Copyright <strong>BitX</strong>. All Rights Reserved
            </div>
            <div class="col-lg-3 col-md-6 footer-bitx">
              <strong>BitX</strong>
            </div>
            <a
              href="#"
              class="back-to-top d-flex align-items-center justify-content-center"
            >
              <i class="bi bi-arrow-up-short"></i>
            </a>
          </div>
        </footer>
        {/* <!-- End  Footer --> */}
      </main>
    </div>
  );
}

export default App;
