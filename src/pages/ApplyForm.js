import { useNavigate } from "react-router-dom";

export default function ApplyForm() { 
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate("/Careers");
    };
    return(
        <div className="apply-form">
            <h2>Apply Below</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">FirstName</label>
                    <input type="text" id="name" name="name" required />
                </div>

                <div>
                    <label htmlFor="name">LastName</label>
                    <input type="text" id="name" name="name" required />
                </div>
                     
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" required />
                </div>   

                <div>
                    <label htmlFor="resume">Resume</label>
                    <input type="file" id="resume" name="resume" required />
                </div>

                <button type="submit">Submit Application</button>
            </form>
        </div>
    );
}