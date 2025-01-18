
import { useLoaderData, useNavigate, useParams } from "react-router-dom";

export default function CareerDetails() {
    const { id } = useParams();
    const career = useLoaderData();
    const navigate = useNavigate();

    if (!career) {
        return <div>Loading...</div>
    }


      const handleApplyClick = () => {
        navigate('/apply');
      }

    return (
        <div className="career-details">
            <h2>Career Details for {career.title}</h2>
            <p><strong>Location:</strong> {career.location}</p>
            <p><strong>Institute:</strong> {career.institute}</p>
            <p><strong>Starting Salary: $</strong> {career.salary}</p>
            
            <div className="description">
                <h3>About the Job</h3>
                <p>{career.description.about}</p>
            </div>
            
            <div className="role">
                <h3>The Role</h3>
                <h4>You will be responsible for:</h4>
                <ul>
                    {career.description.role.responsibilities.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            </div>
            
            <div className="ideal-profile">
                <h3>Ideal Profile</h3>
                <h4>We are looking for someone with:</h4>
                <ul>
                    {career.description.ideal_profile.requirements.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            </div>
            
            <div className="compensation">
                <h3>Compensation</h3>
                <p>{career.description.compensation}</p>
            </div>
            
            <div className="what-on-offer">
                <h3>What's on Offer?</h3>
                <ul>
                    {career.description.what_on_offer.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            </div>

          <button onClick={handleApplyClick}>Apply Now.</button>

        </div>
    );
}

// loader function
export const careerDetailsLoader = async ({ params }) => {
    const { id } = params;
    const res = await fetch('http://localhost:4000/careers/' + id);
    
    return res.json();
};
