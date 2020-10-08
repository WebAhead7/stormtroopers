<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.min.css"
      integrity="sha512-1PKOgIY59xJ8Co8+NE6FZ+LOAZKjy+KY8iq0G4B3CyeY6wYHN3yt9PW0XpSriVlkMXe40PTKnXrLnZ9+fkDaog=="
      crossorigin="anonymous"
    />
    <link rel="stylesheet" href="style.css" />
    <title>Stromtroopers Agency</title>
  </head>
  <body>
    <div class="container" id="container">
      <a href="#container"> <i class="fas fa-angle-double-up arrow"></i></a>
      <header class="top">
        <nav class="navbar">
          <a href="#" class="toggleNavbar" id="toggleNavbar">☰</a>

          <ul id="menu">
            <li><a href="#container">Home</a></li>
            <li><a href="#membersinfo">Troopers</a></li>
            <li><a href="#About-Us">About</a></li>
            <li><a href="#contactus">Contact</a></li>
          </ul>
        </nav>
        <div class="img-header"></div>
      </header>
      <div class="ShortReview">
        <h2>
          The Stromtroopers of the<br />
          <span class="Galactic-Empire"> GALACTIC EMPIRE</span>
        </h2>
        <h1>
          of <span class="Agency">THE WEB DEVELOPMENT AGENCY</span> at your
          Service .
        </h1>
      </div>

      <div class="users-info" id="membersinfo">
        <div class="userInfoBg"></div>
        <h1>Team Members</h1>
        <div class="user">
          <div>
            <img
              class="users-pic"
              src="./img/t-1.png"
              width="200"
              height="180"
            />
            <h3>Awwad</h3>
          </div>
          <div class="inner-paragraph">
            <p>
              <span
                >Meet our Front End developer Awwad, he is responsible for
                building the Front End in websites, he is really good at this,
                Awwad builds nice UIs and out customers are very satisifed.
              </span>
            </p>
          </div>
        </div>
        <div class="user">
          <div>
            <img
              class="users-pic"
              src="./img/t-2.jpg"
              width="200"
              height="180"
            />
            <h3>Ahmed</h3>
          </div>
          <div class="inner-paragraph">
            <p>
              <span
                >Meet our Front End developer Ahmad, he is responsible for
                building the Design websites, he is really good at this, Awwad
                builds nice UIs and out customers are very satisifed.
              </span>
            </p>
          </div>
        </div>
        <div class="user">
          <div>
            <img
              class="users-pic"
              src="./img/t-3.jpg"
              width="200"
              height="180"
            />
            <h3>Alaa</h3>
          </div>
          <div class="inner-paragraph">
            <p>
              <span
                >Meet our Front End developer Alaa, he is responsible for
                building the Back End in websites, he is really good at this,
                Awwad builds nice UIs and out customers are very satisifed.
              </span>
            </p>
          </div>
        </div>
      </div>

      <div class="FULL-REVIEW" id="About-Us">
        <h1><span class="About-Us">About Us </span></h1>
        <h3>
          Welcome to Stormtroopers Web development agency, After The Fall Of The
          Galactic Empire, We Decided To Start Our Own Startup To Return Our
          Legacy And Rise Again. We're dedicated to giving you the very best,
          with a focus on modern design that matches your needs.
        </h3>
        <h3>
          Founded in 2020 by Awwad Alaa & Ahmad, Stormtroopers has come a long
          way from its beginnings in Haifa. When they first started out, their
          passion for Web development drove them to quit day job, do tons of
          research, and join webahead 7 so that Stormtroopers can offer you the
          world's most advanced Websites, apps,..., We now serve customers all
          over the world and are thrilled that we're able to turn our passion
          into a service that we can provide in the best way.
        </h3>

        <h3>
          we hope you enjoy our products as much as we enjoy offering them to
          you. If you have any questions or comments, please don't hesitate to
          contact us.
        </h3>
        <h3>
          Sincerely,
          <br />
          Stormtroopers team.
        </h3>
      </div>
      <div class="contact-section">
        <div class="contact-section-inner1"></div>
        <div class="contact-form" id="contactus">
          <h2>Are You Interested? Leave Details Below</h2>
          <form>
            <div class="labels">
              <label for="name">Name</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div class="labels">
              <label for="eml">Email</label>
              <input type="email" id="eml" name="email" required />
            </div>
            <div class="labels">
              <label for="fon">Telephone</label>
              <input type="tel" id="fon" name="tel" required />
            </div>
            <div class="inner-form">
              <label class="radio-label" for="feildset-radio"
                >Preferred contact method</label
              >
              <fieldset class="feildset-radio" id="feildset-radio" required>
                <input
                  id="contact-email"
                  type="radio"
                  name="contact"
                  value="email"
                  checked=""
                />
                <label for="contact-email" class="radio">Email</label>

                <input
                  id="contact-tel"
                  type="radio"
                  name="contact"
                  value="telephone"
                  checked=""
                />
                <label for="contact-tel" class="radio">Telephone</label>

                <input
                  id="contact-post"
                  type="radio"
                  name="contact"
                  value="post"
                />
                <label for="contact-post" class="radio">Post</label>
              </fieldset>
            </div>
            <label for="msg">Message</label>
            <textarea id="msg" name="message" required></textarea>
            <div class="the-checkbox">
              <input id="myinbox" name="marketingConsent" type="checkbox" />
              <label for="myinbox" class="checkbox" required
                >Just wreck my inbox</label
              >
            </div>
            <button type="submit" class="submit">Submit</button>
          </form>
        </div>
        <div class="contact-section-inner2"></div>
      </div>
    </div>
    <footer>
      <div class="arrow-div"></div>
      <div class="pra1-div">
        <p class="pra1">Find us on Social Media</p>
      </div>
      <div class="icons">
        <a href="http://facebook.com">
          <i class="fab fa-facebook-square"></i
        ></a>
        <a href="http://instagram.com"> <i class="fab fa-instagram"></i></a>
        <a href="http://youtube.com"> <i class="fab fa-youtube"></i></a>
        <a href="https://twitter.com/ABashiyi">
          <i class="fab fa-twitter"></i
        ></a>
        <a href="http://linkedin.com"> <i class="fab fa-linkedin-in"></i></a>
      </div>
      <div class="pra2-div">
        <p class="pra2">Copyright © 2020 Stormtrooper</p>
      </div>
    </footer>
    <script src="script.js"></script>

  </body>
</html>
