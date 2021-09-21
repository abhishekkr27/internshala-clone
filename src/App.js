import './public/css/main.css';
import './public/css/mainvishal.css';
import './public/css/nev_bar_style.css';
import './public/css/pop.css';
import './public/css/resumePage.css';
import { Carousel } from 'react-carousel-minimal';
import 'font-awesome/css/font-awesome.min.css';
import Image1 from './public/images/get_set_intern_2021-1920-5bb08e.png';
import Image2 from './public/images/learn_with_me-1920-5da5b0.png';
import Image3 from './public/images/social_issue_camapign_jul21-1920-b70cf7.png';

function App() {

  let data = [
    {
      image: "https://static2.tripoto.com/media/filter/tst/img/735873/TripDocument/1537686560_1537686557954.jpg",
    },
    {
      image: "https://cdn.britannica.com/s:800x450,c:crop/35/204435-138-2F2B745A/Time-lapse-hyper-lapse-Isle-Skye-Scotland.jpg",
    },
    {
      image: "https://static2.tripoto.com/media/filter/tst/img/735873/TripDocument/1537686560_1537686557954.jpg",
    },
    {
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Palace_of_Fine_Arts_%2816794p%29.jpg/1200px-Palace_of_Fine_Arts_%2816794p%29.jpg",
    },
  ];



  return (
    <div className="App">
      <header>
        <a class="logo" href="#">
          <img
            class="logo"
            src="https://internshala.com/static/images/common/new_internshala_logo.svg"
            alt="InternShala"
          />
        </a>
        <nav>
          <ul class="nav_links">
            <li>
              <a href="internships.ejs">Internships</a>
            </li>
            <li>
              <a href="#">Online Training <span id="headOffer">OFFER</span></a>
            </li>
            <li>
              <a href="#">Freshers Job</a>
            </li>
          </ul>
        </nav>
        <a href="students_log.ejs" id="cta">
          <button class="headingbutton">Login</button></a
        >

        <a href="students_reg.ejs" id="cta1">
          <button class="headingbutton" id="register">Register</button></a
        >
      </header>

      <div id="searchbox">
        <input
          id="home_search"
          type="text"
          placeholder="What are you looking for?"
        />
        <button id="searchIcon">
          <i class="fa fa-search"></i>
        </button>
      </div>

      <div>
        <div style={{ textAlign: "center" }}>
          <div>
            <Carousel
              data={data}
              time={2000}
              width="1000px"
              height="400px"
              radius="10px"
              slideNumber={true}
              automatic={true}
              dots={true}
            />
          </div>
        </div>
      </div>


      <div id="internships" class="container-fluid section">
        <div class="max-width-container">
          <h2>Internships</h2>
          <p class="section_description">
            Apply to 10,000+ internships for free
            <a class="view_all_cta" href="internships.ejs">
              View all internships <i class="ic-24-arrow-right"></i>
            </a>
          </p>

          <div class="categories_container">
            <h4>Popular cities</h4>

            <div class="categories scrollable_cards">
              <a
                class="internship_card card_item home_tile_city"
                href="internships.ejs"
              >
                <div class="img">
                  <img
                    alt=""
                    src="https://internshala.com/static/images/home/internships/categories/work_from_home.svg"
                  />
                </div>
                <div class="text">Work from home</div>
              </a>
              <a
                class="internship_card card_item home_tile_city"
                href="internships.ejs"
              >
                <div class="img">
                  <img
                    alt=""
                    src="https://internshala.com/static/images/home/internships/categories/delhi_ncr.svg"
                  />
                </div>
                <div class="text">Delhi</div>
              </a>
              <a
                class="internship_card card_item home_tile_city"
                href="internships.ejs"
              >
                <div class="img">
                  <img
                    alt=""
                    src="https://internshala.com/static/images/home/internships/categories/bangalore.svg"
                  />
                </div>
                <div class="text">Bangalore</div>
              </a>
              <a
                class="internship_card card_item home_tile_city"
                href="internships.ejs"
              >
                <div class="img">
                  <img
                    alt=""
                    src="https://internshala.com/static/images/home/internships/categories/mumbai.svg"
                  />
                </div>
                <div class="text">Mumbai</div>
              </a>
              <a
                class="internship_card card_item home_tile_city"
                href="internships.ejs"
              >
                <div class="img">
                  <img
                    alt=""
                    src="https://internshala.com/static/images/home/internships/categories/hyderabad.svg"
                  />
                </div>
                <div class="text">Hyderabad</div>
              </a>
              <a
                class="internship_card card_item home_tile_city"
                href="internships.ejs"
              >
                <div class="img">
                  <img
                    alt=""
                    src="https://internshala.com/static/images/home/internships/categories/chennai.svg"
                  />
                </div>
                <div class="text">Chennai</div>
              </a>
              <a
                class="internship_card card_item home_tile_city"
                href="internships.ejs"
              >
                <div class="img">
                  <img
                    alt=""
                    src="https://internshala.com/static/images/home/internships/categories/kolkata.svg"
                  />
                </div>
                <div class="text">Kolkata</div>
              </a>
              <a
                class="internship_card card_item home_tile_city"
                href="internships.ejs"
              >
                <div class="img">
                  <img
                    alt=""
                    src="https://internshala.com/static/images/home/internships/categories/international.svg"
                  />
                </div>
                <div class="text">International</div>
              </a>
            </div>
          </div>

          <div class="categories_container">
            <h4>Popular categories</h4>

            <div class="categories scrollable_cards">
              <a
                class="internship_card card_item home_tile_category"
                href="internships.ejs"
              >
                <div class="img">
                  <img
                    alt=""
                    src="https://internshala.com/static/images/home/internships/categories/part_time.svg"
                  />
                </div>
                <div class="text">Part-time</div>
              </a>
              <a
                class="internship_card card_item home_tile_category"
                href="internships.ejs"
              >
                <div class="img">
                  <img
                    alt=""
                    src="https://internshala.com/static/images/home/internships/categories/engineering.svg"
                  />
                </div>
                <div class="text">Engineering</div>
              </a>
              <a
                class="internship_card card_item home_tile_category"
                href="internships.ejs"
              >
                <div class="img">
                  <img
                    alt=""
                    src="https://internshala.com/static/images/home/internships/categories/ngo.svg"
                  />
                </div>
                <div class="text">NGO</div>
              </a>
              <a
                class="internship_card card_item home_tile_category"
                href="internships.ejs"
              >
                <div class="img">
                  <img
                    alt=""
                    src="https://internshala.com/static/images/home/internships/categories/mba.svg"
                  />
                </div>
                <div class="text">MBA</div>
              </a>
              <a
                class="internship_card card_item home_tile_category"
                href="internships.ejs"
              >
                <div class="img">
                  <img
                    alt=""
                    src="https://internshala.com/static/images/home/internships/categories/design.svg"
                  />
                </div>
                <div class="text">Design</div>
              </a>
              <a
                class="internship_card card_item home_tile_category"
                href="internships.ejs"
              >
                <div class="img">
                  <img
                    alt=""
                    src="https://internshala.com/static/images/home/internships/categories/science.svg"
                  />
                </div>
                <div class="text">Science</div>
              </a>
              <a
                class="internship_card card_item home_tile_category"
                href="internships.ejs"
              >
                <div class="img">
                  <img
                    alt=""
                    src="https://internshala.com/static/images/home/internships/categories/media.svg"
                  />
                </div>
                <div class="text">Media</div>
              </a>
              <a
                class="internship_card card_item home_tile_category"
                href="internships.ejs"
              >
                <div class="img">
                  <img
                    alt=""
                    src="https://internshala.com/static/images/home/internships/categories/humanities.svg"
                  />
                </div>
                <div class="text">Humanities</div>
              </a>
            </div>
          </div>
        </div>


        <div id="trainings" class="container-fluid section">
          <div class="max-width-container">
            <h4>Internshala Trainings</h4>
            <p class="section_description">
              Learn new -age skills on the go
              <a
                class="view_all_cta"
                target="_blank"
                rel="noopener"
                href="internships.ejs"
              >
                View all trainings<i class="ic-24-arrow-right"></i>
              </a>
            </p>

            <div id="trainings_container" class="scrollable_cards">
              <a
                href="internships.ejs"
                class="card_item"
                target="_blank"
                rel="noopener"
              >
                <div class="img">
                  <img
                    src="https://internshala.com/static/images/home/trainings/icons/programming_with_python.svg"
                    alt=""
                  />
                </div>
                <div class="text">Programming with Python</div>
              </a>
              <a
                href="internships.ejs"
                class="card_item"
                target="_blank"
                rel="noopener"
              >
                <div class="img">
                  <img
                    src="https://internshala.com/static/images/home/trainings/icons/digital_marketing.svg"
                    alt=""
                  />
                </div>
                <div class="text">Digital Marketing</div>
              </a>
              <a
                href="internships.ejs"
                class="card_item"
                target="_blank"
                rel="noopener"
              >
                <div class="img">
                  <img
                    src="https://internshala.com/static/images/home/trainings/icons/web_development.svg"
                    alt=""
                  />
                </div>
                <div class="text">Web Development</div>
              </a>
              <a
                href="internships.ejs"
                class="card_item"
                target="_blank"
                rel="noopener"
              >
                <div class="img">
                  <img
                    src="https://internshala.com/static/images/home/trainings/icons/machine_learning.svg"
                    alt=""
                  />
                </div>
                <div class="text">Machine Learning</div>
              </a>
              <a
                href="internships.ejs"
                class="card_item"
                target="_blank"
                rel="noopener"
              >
                <div class="img">
                  <img
                    src="https://internshala.com/static/images/home/trainings/icons/advanced_excel.svg"
                    alt=""
                  />
                </div>
                <div class="text">Advanced Excel</div>
              </a>
              <a
                href="internships.ejs"
                class="card_item"
                target="_blank"
                rel="noopener"
              >
                <div class="img">
                  <img
                    src="https://internshala.com/static/images/home/trainings/icons/ethical_hacking.svg"
                    alt=""
                  />
                </div>
                <div class="text">Ethical Hacking</div>
              </a>
              <a
                href="internships.ejs"
                class="card_item"
                target="_blank"
                rel="noopener"
              >
                <div class="img">
                  <img
                    src="https://internshala.com/static/images/home/trainings/icons/autocad.svg"
                    alt=""
                  />
                </div>
                <div class="text">AutoCAD</div>
              </a>
              <a
                href="internships.ejs"
                class="card_item"
                target="_blank"
                rel="noopener"
              >
                <div class="img">
                  <img
                    src="https://internshala.com/static/images/home/trainings/icons/creative_writing.svg"
                    alt=""
                  />
                </div>
                <div class="text">Creative Writing</div>
              </a>
            </div>

            <div class="view_all_cta_container_20_more">&amp; 52 more...</div>
          </div>
        </div>


        <div id="fresher_jobs" class="container-fluid section">
          <div class="max-width-container">
            <h2>Fresher Jobs <span class="superscript">New</span></h2>
            <p class="section_description">
              Premium fresher jobs on your fingertips
              <a class="view_all_cta" href="internships.ejs">
                View all jobs <i class="ic-24-arrow-right"></i>
              </a>
            </p>

            <div id="fresher_jobs_container">
              <div class="fresher_job_perk">
                <div class="img">
                  <img
                    src="https://internshala.com/static/images/home/jobs/perks/ctc.svg"
                    alt=""
                  />
                </div>
                <div class="name">Minimum CTC of 3 LPA</div>
              </div>
              <div class="fresher_job_perk">
                <div class="img">
                  <img
                    src="https://internshala.com/static/images/home/jobs/perks/dream.svg"
                    alt=""
                  />
                </div>
                <div class="name">Dream companies</div>
              </div>
              <div class="fresher_job_perk">
                <div class="img">
                  <img
                    src="https://internshala.com/static/images/home/jobs/perks/verified.svg"
                    alt=""
                  />
                </div>
                <div class="name">100% verified jobs</div>
              </div>
            </div>
          </div>
        </div>
      </div>



      <div id="footer" class="generic_footer">
        <div class="max-width-container">
          <div class="footer_container">


            <div class="footer_coloumn">
              <div class="footer_list">
                <h3>Internships by places</h3>
                <div class="footer_list_item">
                  <a href="#">Internships in India</a>
                </div>
                <div class="footer_list_item">
                  <a href="#">Internships in Delhi</a>
                </div>
                <div class="footer_list_item">
                  <a href="#">Internships in Bangalore</a>
                </div>
                <div class="footer_list_item">
                  <a href="#">Internships in Hyderabad</a>
                </div>
                <div class="footer_list_item">
                  <a href="#">Internships in Mumbai</a>
                </div>
                <div class="footer_list_item">
                  <a href="#">Internships in Chennai</a>
                </div>
                <div class="footer_list_item">
                  <a href="#">Internships in Gurgaon</a>
                </div>
                <div class="footer_list_item">
                  <a href="#">Internships in Kolkata</a>
                </div>
              </div>
            </div>


            <div class="footer_coloumn">
              <div class="footer_list">
                <h3>Internships by Stream</h3>
                <div class="footer_list_item">
                  <a href="#">Computer Science Internship</a>
                </div>
                <div class="footer_list_item">
                  <a href="#">Electronics Internship</a>
                </div>
                <div class="footer_list_item">
                  <a href="#">Mechanical Internship</a>
                </div>
                <div class="footer_list_item">
                  <a href="#">Civil Internship</a>
                </div>
                <div class="footer_list_item">
                  <a href="#">Marketing Internship</a>
                </div>
                <div class="footer_list_item">
                  <a href="#">Chemical Internship</a>
                </div>
                <div class="footer_list_item">
                  <a href="#">Finance Internship</a>
                </div>
                <div class="footer_list_item">
                  <a href="#">Summer Research Fellowship</a>
                </div>
              </div>
            </div>

            <div class="footer_coloumn">
              <div class="footer_list">
                <h3>
                  Online Trainings
                  <span class="orange"> <a href="#">OFFER</a></span>
                </h3>
                <div class="footer_list_item">
                  <a href="#">Programming with python</a>
                </div>
                <div class="footer_list_item">
                  <a href="#">Digital Marketing</a>
                </div>
                <div class="footer_list_item">
                  <a href="#">Web Development</a>
                </div>
                <div class="footer_list_item">
                  <a href="#">Machine Learning</a>
                </div>
                <div class="footer_list_item">
                  <a href="#">Advance Excel</a>
                </div>
                <div class="footer_list_item">
                  <a href="#">Ethical Hacking</a>
                </div>
                <div class="footer_list_item">
                  <a href="#">Auto CAD</a>
                </div>
                <div class="footer_list_item">
                  <a href="#">Creative Writing</a>
                </div>
              </div>
            </div>

            <div class="footer_coloumn">
              <div class="footer_list">
                <h3>About Internshala</h3>
                <div class="footer_list_item">
                  <a href="#">About Us</a>
                </div>
                <div class="footer_list_item">
                  <a href="#">We're hiring</a>
                </div>
                <div class="footer_list_item">
                  <a href="#">Hire Interns for your company</a>
                </div>
                <div class="footer_list_item">
                  <a href="#">Team Diary</a>
                </div>
                <div class="footer_list_item">
                  <a href="#">Blog</a>
                </div>
                <div class="footer_list_item">
                  <a href="#">Our Services</a>
                </div>
                <div class="footer_list_item">
                  <a href="#">Terms and Conditions</a>
                </div>
                <div class="footer_list_item">
                  <a href="#">Privacy</a>
                </div>
              </div>
            </div>
          </div>


          <br />
          <div id="footer_bottom">

            <div id="android_app_container" class="footer_list_item">
              <a href="#">
                <i class="fab fa-google-play"> <span>Get Android App</span></i>
              </a>
            </div>

            <div id="social_media_container">
              <span>
                <a href="#"> <i class="fa fa-instagram footer_icons"></i></a>
                <a href="#"><i class="fa fa-twitter footer_icons"></i></a>
                <a href="#"><i class="fa fa-youtube footer_icons"></i></a>
                <a href="#"><i class="fa fa-linkedin footer_icons"></i></a>
              </span>
            </div>

            <div id="copyright">
              <span>© Copyright 2021 InternShala</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
