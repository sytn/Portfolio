import React, { useState } from 'react';
import './Resume.css';
import resumeData from './resume.json';

const Resume = () => {
    const [loading, setLoading] = useState(false);
    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div className="resume-container">
            <h1>{resumeData.name}</h1>
            <h2>Contact</h2>
            <p>Email: {resumeData.contact.email}</p>
            <p>Phone: {resumeData.contact.phone}</p>

            <h2>Experience</h2>
            {resumeData.experience.length > 0 ? (
                <ul>
                    {resumeData.experience.map((job, index) => (
                        <li key={index}>
                            <strong>{job.jobTitle}</strong> at {job.company} ({job.duration})
                            <p>{job.description}</p>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No work experience available.</p>
            )}

            <h2>Education</h2>
            <ul>
                {resumeData.education.map((edu, index) => (
                    <li key={index}>
                        <strong>{edu.degree}</strong> &nbsp; from {edu.institution} ({edu.year})
                    </li>
                ))}
            </ul>

            <h2>Skills</h2>
            <ul>
                {resumeData.skills.map((skill, index) => (
                    <li key={index}>{skill}</li>
                ))}
            </ul>

            <h2>Projects</h2>
            <ul>
                {resumeData.projects.map((project, index) => (
                    <li key={index}>
                        <strong>{project.title}</strong>: {project.description} 
                        <a href={project.link} target="_blank" rel="noopener noreferrer"> View Project</a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Resume;
