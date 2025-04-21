import React from 'react';

function Projects() {
  return (
    <section className="projects">
      <h2>My Projects</h2>
      <div className="project-item">
        <h3>Knight Quarters – UCF Social Platform</h3>
        <p>
          Knight Quarters is a UCF-centered social platform designed to help students connect with each other, explore
          Registered Student Organizations (RSOs), and stay updated on campus events. I was responsible for the UI/UX design
          of the mobile app, focusing on creating an intuitive and mobile-first user experience. The app allows students to
          share information and interact with one another in a way that fosters community engagement on campus.
          <img src="/home-image4.jpg" alt="Knightsquarters" className="home-image" />
        </p>
        <p><strong>Technologies Used:</strong> React Native, Figma, Firebase</p>
        <p><strong>Key Features:</strong></p>
        <ul>
          <li>User Authentication through UCF email.</li>
          <li>Event creation and RSO exploration features.</li>
          <li>Real-time notifications about campus news and events.</li>
        </ul>
      </div>

      <div className="project-item">
        <h3>AR Education Tool</h3>
        <p>
          The AR Education Tool is an augmented reality app aimed at enhancing the learning experience in classrooms.
          It uses AR to overlay educational content over the real world, helping students interact with concepts in a more
          immersive way. I worked on designing the user interface, ensuring it was simple, engaging, and easy to use for
          both students and teachers.
          <img src="/home-image3.jpg" alt="AR" className="home-image" />
        </p>
        <p><strong>Technologies Used:</strong> Unity, ARKit, Figma</p>
        <p><strong>Key Features:</strong></p>
        <ul>
          <li>Interactive AR models for anatomy and physics.</li>
          <li>Immersive learning modules with audio instructions.</li>
          <li>User feedback integration for performance tracking.</li>
        </ul>
      </div>

      <div className="project-item">
        <h3>Infamous: Accessibility Reflection</h3>
        <p>
          This project involved analyzing the accessibility features in the game "Infamous: Second Son." I evaluated the
          game’s UI/UX design, paying particular attention to the accessibility options for players with visual and
          motor impairments. I provided insights on improving the design and making it more inclusive for all users.
          <img src="/home-image5.jpg" alt="imfamous" className="home-image" />
        </p>
        <p><strong>Technologies Used:</strong> Video Analysis, Accessibility Testing, Figma</p>
        <p><strong>Key Takeaways:</strong></p>
        <ul>
          <li>Improved color contrast in menus for better visibility.</li>
          <li>Voice command features for players with motor impairments.</li>
          <li>Adjustable font sizes and UI scaling options.</li>
        </ul>
      </div>
    </section>
  );
}

export default Projects;
