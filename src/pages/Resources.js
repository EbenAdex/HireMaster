import React from 'react';

export default function Resources() {
  return (
    <div className="resources-container">
      <h2>Job Interview Resources</h2>

      <div className="resources-grid">
        {/* Job Interview Questions */}
        <section className="interview-questions">
          <h3>Top 10 Job Interview Questions</h3>
          <ol>
            <li>❓ Tell me about yourself.</li>
            <li>❓ What are your strengths and weaknesses?</li>
            <li>❓ Why do you want to work here?</li>
            <li>❓ Can you describe a challenging work situation and how you handled it?</li>
            <li>❓ Where do you see yourself in five years?</li>
            <li>❓ Why should we hire you?</li>
            <li>❓ Tell me about a time you worked in a team.</li>
            <li>❓ How do you handle pressure and tight deadlines?</li>
            <li>❓ What is your biggest professional achievement?</li>
            <li>❓ Do you have any questions for us?</li>
          </ol>
        </section>

        {/* Resume Writing Tips */}
        <section className="resume-tips">
          <h3>How to Write a Standout Resume</h3>
          <ul>
            <li>✅ Tailor your resume to the job description.</li>
            <li>✅ Use a clear, professional format.</li>
            <li>✅ Highlight key achievements with quantifiable results.</li>
            <li>✅ Keep it concise (1-2 pages).</li>
            <li>✅ Use action verbs and avoid generic phrases.</li>
            <li>✅ Proofread for errors and inconsistencies.</li>
          </ul>
        </section>

        {/* Best Paying Careers */}
        <section className="best-paying-careers">
          <h3>Trending Careers in 2025</h3>
          <ul>
            <li>💰 Software Engineer</li>
            <li>💰 AI & Machine Learning Specialist</li>
            <li>💰 Cybersecurity Analyst</li>
            <li>💰 Data Scientist</li>
            <li>💰 Medical Professionals (Doctors, Surgeons, Pharmacists)</li>
            <li>💰 Cloud Computing Engineer</li>
            <li>💰 Blockchain Developer</li>
            <li>💰 Investment Banker</li>
            <li>💰 Marketing Manager</li>
            <li>💰 Renewable Energy Engineer</li>
          </ul>
        </section>
      </div>
    </div>
  );
}
