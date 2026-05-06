function Home() {
    return (
        <main>

            {/* Hero Section */}
            <section className="hero">
                <img src="/my-portfolio/images/purpleFlower2.png" alt="flower" />
                <div>
                <h1>Hello!</h1>
                <h1>My name is Sandra Principe</h1>
                <p>Focused on web developent, cybersecurity, and practical tech projects.</p>
                </div>
            </section>

            {/* About Section */}
            <section id="about" className="section">
                <h2>About Me</h2>
                <p>
                    I'm a Computer Information Systems student at California State University San Marcos.
                    I am interested in web development, cybersecurity, and learning how technology can
                    be used to solve real problems!
                </p>

                <p>
                    My goal is to keep improving my skills in React, JavaScript, databases, and secure
                    software practices. I want to create projects that are organized, useful, and easy
                    for people to use! Though there are challenges, I love learning and being able to use 
                    what I've learned to apply to my next projects.
                </p>
                <p>
                    My end goal is to graduate in June of 2027. By that time, I hope to have 
                    secured a job in the data analytics field! I'm originally from a small down in 
                    the desert so, I'd love to be able to live in the San Diego area.
                </p>

                <a href="/my-portfolio/Resume_Sandra Principe.pdf" target="_blank" rel="noreferrer">
                    Click Here for my Resume!
                </a>
            </section>

            {/* Projects Section */}
            <section id="projects" className="section">
                <h2>Projects</h2>

                <div className="projects-grid">
                    <ProjectCard
                        title="Project 1"
                        desc="A cool web app built with React."
                    />

                    <ProjectCard
                        title="Project 2"
                        desc="A collaboration creating a guitar scale learning system."
                   />

                    <ProjectCard
                        title="Project 3"
                        desc="A portfolio website (this one!)."
                        link="https://github.com/SandraPrincipe/my-portfolio"

                    />
                    <ProjectCard
                        title="Project 4"
                        desc="A sentinal mesh program that utilizes blue team against red team cyber attacks. Data is stored and analyzed for improved reaction time. 
                        Currently a work in progress."
                    />
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="section">
                <h2>Contact</h2>
                <p>I am open to internships, class projects, collaborations, and entry-level 
                    opportunities where I can continue to build or obtain new skills.
                </p>
                <p>Email: princ026@csusm.edu</p>
                <p>
                    GitHub:{' '}
                    <a
                        href="https://github.com/SandraPrincipe"
                        target="_blank"
                        rel="noreferrer"
                    >
                        github.com/SandraPrincipe
                    </a>
                </p>
            </section>

            <footer className="footer">
                <p>© 2026 Sandra Principe</p>
            </footer>

        </main>
    );
}

function ProjectCard({ title, desc, link }) {
    return (
        <div className="project-card">
            <h3>{title}</h3>
            <p>{desc}</p>
            <a href={link} target="_blank" rel="noreferrer">
                View Project
            </a>
        </div>
    );
}

export default Home;