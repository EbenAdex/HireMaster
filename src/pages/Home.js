import CareerOppor from '../Assets/CareerOppor.jpg';
import interviewImage from '../Assets/interviewImage.jpg';
import sales from '../Assets/sales.jpg';
import techVideo from '../Assets/techVideo.mp4';
import corporateVideo from '../Assets/corporateVideo.mp4';
export default function Home() {

 return (
    <div className="home">
        <h2>Empowering masters of the workforce</h2>
        <p>Welcome to <strong>  HireMaster, </strong> 
            your one-stop destination for discovering exciting career opportunities! 
            Whether you're searching for your dream job, exploring new career paths, 
            or looking to connect with top employers, we've got you covered. 
            Our platform is designed to make your job search seamless and efficient, 
            offering personalized recommendations, helpful resources, and a wide range of job 
            listings tailored to your skills and interests. Join us today, and take the first
             step towards achieving your career goals. 
             Let’s find the perfect job for you!</p>

             <img 
              src={CareerOppor} 
              alt="Career Opportunities" 
              className="home-image"
             />

             <p> Talent acquisition at <strong> HireMaster </strong>
                    The application process at HireMaster is pretty simple and straightforward. 
                    First, feel free to learn more about our company and the open positions available. 
                    If you spot a position you're interested in and qualified for, just complete our 
                    short application and submit your resume.
                    A member of our talent acquisition team will review your submission and if your experience aligns,
                    the company to which you applied to will reach out to schedule a call to have a conversation. 
                    And we do mean conversation. This is not only your first moment to put your best foot forward,
                    but also a moment to ask questions about the role.</p>

                    <img 
                        src={interviewImage} 
                        alt="Interview Process" 
                        className="home-image"
                    />

                   <p> The interview process is where things can get interesting-for both of us. 
                    Each functional area at HireMaster has a different order and process for interviewing,
                     but all include a few behavioral and situational questions, and, always, time for you to ask questions.
                      For example:
                      
                      
                         <li> Sales:  For a sales position, you can expect a virtual "Day in the Life" 
                            interview with a team member in that role who can speak to day-to-day expectations.
                            
                            <img 
                                    src={sales} 
                                    alt="sales" 
                                    className="home-image"
                                    />
                            </li>
                    
                   
                   
                        <li>
                             Tech:  For a tech position, you can expect to complete a take-home 
                        Hackerrank or Woven technical assessment in addition to a "Day in the Life" interview.
                        <video controls className="home-video">
                           <source src={techVideo} type="video/mp4" />

                        </video>
                        </li>
                    
                   
                   
                        <li> Corporate: For a corporate position, 
                        you may be asked to complete a role-based assignment that will be shared with the hiring
                        team.
                        <video controls className="home-video">
                        <source src={corporateVideo} type="video/mp4" />
                        </video>
                        </li>
                    
                   </p>


             


    </div>
 )

}