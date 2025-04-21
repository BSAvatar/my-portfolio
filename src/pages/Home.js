import React from 'react';

function Home() {
  return (
    <section className="home">
      <h1>Portfolio Website</h1>
      <img src="/home-image.jpg" alt="Anthony's Portrait" className="home-image" />
      <p>
        Hi, I'm Anthony Ugwu – a passionate UI/UX designer and Digital Media student at the University of Central Florida (UCF).
        I specialize in creating intuitive and visually appealing digital experiences that are both functional and accessible.
      </p>
      <h3>What I Do</h3>
      <p>
        As a designer, I focus on human-centered design principles to create seamless and enjoyable experiences for users.
        From wireframing to prototyping, I ensure that my designs solve real-world problems and enhance the user's journey. 
        I work with design tools like Figma, Adobe XD, and Sketch to bring my ideas to life, and I'm constantly improving my skills
        to stay up to date with the latest trends in the UI/UX design industry.
      </p>
      <h3>Skills & Expertise</h3>
      <ul>
        <li>UI/UX Design</li>
        <li>Wireframing & Prototyping</li>
        <li>Research & Usability Testing</li>
        <li>Interaction Design</li>
        <li>Front-End Development (HTML, CSS, JavaScript)</li>
      </ul>
    </section>
  );
}

export default Home;
