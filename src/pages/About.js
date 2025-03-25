import userprofile from '../Assets/userprofile.jpg';
import userprofile2 from '../Assets/userprofile2.jpg';

export default function About() {
  return (
    <div className="about">
      <h2>About us</h2>
      <p>
        At HireMaster, we are dedicated to bridging the gap between job seekers and employers.
        Our mission is to empower individuals to find meaningful employment and help businesses
        discover exceptional talent. With a user-friendly platform, we provide access to diverse
        job opportunities across various industries, along with tools and resources to support
        career growth. Whether you're a job seeker pursuing your next big opportunity or an
        employer aiming to build a strong team, we're here to make the process easier, faster,
        and more effective. Together, we’re shaping a future where opportunities and talent
        connect effortlessly.
      </p>
      {/* Testimonials Section */}
      <div className="testimonials">
        <h3>What Our Users Say</h3>
        <div className="testimonial">
          <img src={userprofile} alt="User 1" />
          <p>"I got hired in just two weeks! Amazing platform." - Oluwaleke Abdul-rasaq.</p>
        </div>
        <div className="testimonial">
          <img src={userprofile2} alt="User 2" />
          <p>"The best job search experience I’ve ever had!" - Mr Donald Smith.</p>
        </div>
      </div>
    </div>
  );
}