import google from '../Assets/google.jpg';
import opera from '../Assets/opera.jpg';
import safari from '../Assets/safari.jpg';
import Vercel from '../Assets/Vercel.jpg';
import introVideo from '../Assets/introVideo.mp4';


export default function Home() {
  return (
    <div className="home">
      <h2>Empowering masters of the workforce</h2>
      <p>
        Welcome to <strong>HireMaster,</strong> your one-stop destination for discovering exciting career opportunities! 
        Whether you're searching for your dream job, exploring new career paths, or looking to connect with top employers, 
        we've got you covered. Our platform is designed to make your job search seamless and efficient, offering personalized 
        recommendations, helpful resources, and a wide range of job listings tailored to your skills and interests. Join us today, 
        and take the first step towards achieving your career goals. Let’s find the perfect job for you!
      </p>

      <video 
        src={introVideo} 
        className="home-video" 
        autoPlay 
        loop 
        muted 
        playsInline
      />

      {/* Live Statistics Section */}
      <div className="stats">
        <h3>Join Thousands Finding Careers!</h3>
        <p>🎯 <strong>15,000+</strong> Job Listings</p>
        <p>👨‍💼 <strong>8,000+</strong> Companies Hiring</p>
        <p>👥 <strong>50,000+</strong> Job Seekers</p>
      </div>

      {/* Trusted Companies Section */}
      <div className="trusted-companies">
        <h3>Trusted Hosting Companies.</h3>
        <div className="company-logos">
          <img src={google} alt="Google" />
          <img src={safari} alt="Safari" />
          <img src={opera} alt="Opera Mini" />
          <img src={Vercel} alt="Vercel" />
        </div>
      </div>
    </div>
  );
}