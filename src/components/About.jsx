import './About.css'

function About() {
  return (
    <div className="about-page container fade-in">
      <div className="about-content">
        <h1>About This Project</h1>

        <section className="about-section">
          <h2>The Big Bang Theory</h2>
          <p>
            The Big Bang Theory is an American sitcom created by Chuck Lorre and Bill Prady,
            which aired on CBS from September 24, 2007, to May 16, 2019. The show follows
            the lives of four socially awkward but brilliant scientists and their interactions
            with each other and the people around them.
          </p>
          <p>
            Over 12 seasons and 279 episodes, the show became one of the most popular sitcoms
            in television history, winning numerous awards and capturing the hearts of millions
            of viewers worldwide.
          </p>
        </section>

        <section className="about-section">
          <h2>Chuck Lorre Vanity Cards</h2>
          <p>
            At the end of each episode, a vanity card appears for a few seconds. These cards,
            created by producer Chuck Lorre, contain personal messages, jokes, philosophical
            observations, and commentary on various topics. They have become a beloved part of
            the show, offering a glimpse into Lorre's thoughts and sense of humor.
          </p>
          <p>
            The vanity cards appear so briefly on screen that they are nearly impossible to read
            in real-time, making them a special Easter egg for dedicated fans who pause to read
            them. This archive preserves these cards for easy viewing and appreciation.
          </p>
        </section>

        <section className="about-section">
          <h2>About This App</h2>
          <p>
            This web application is a comprehensive archive of The Big Bang Theory episodes and
            their associated Chuck Lorre vanity cards. It provides:
          </p>
          <ul>
            <li>Complete episode guide with air dates and summaries</li>
            <li>Searchable and filterable episode database</li>
            <li>Gallery of Chuck Lorre vanity cards</li>
            <li>Episode trivia and behind-the-scenes information</li>
            <li>Dark and light theme options for comfortable viewing</li>
          </ul>
        </section>

        <section className="about-section">
          <h2>Technology Stack</h2>
          <p>This application is built with modern web technologies:</p>
          <ul>
            <li><strong>React</strong> - Component-based UI framework</li>
            <li><strong>Vite</strong> - Fast build tool and development server</li>
            <li><strong>React Router</strong> - Client-side routing</li>
            <li><strong>CSS3</strong> - Custom styling with CSS variables for theming</li>
            <li><strong>TVMaze API</strong> - Episode data source</li>
          </ul>
        </section>

        <section className="about-section">
          <h2>Data Sources</h2>
          <ul>
            <li>
              <strong>TVMaze API</strong> - Episode information, air dates, and summaries
            </li>
            <li>
              <strong>chucklorre.com</strong> - Official source for vanity cards
            </li>
            <li>
              <strong>Big Bang Theory Wiki</strong> - Additional trivia and information
            </li>
          </ul>
        </section>

        <section className="about-section">
          <h2>Deployment</h2>
          <p>
            This site was engineered with assistance from OpenAI Codex and deployed to Azure Static Web Apps on the free tier, because the funding model currently resembles a graduate student stipend.

Everything here is statically generated, which means the whole thing runs on pure HTML, CSS, and an unreasonable amount of nerd enthusiasm. The upside is that it loads faster than Sheldon can correct someone’s physics. The downside is that if you notice any inconsistencies, continuity errors, or strange behavior, it is most likely the result of AI generated code colliding with fan level enthusiasm rather than an intentional violation of the Big Bang Theory canon
          </p>
        </section>

        <section className="about-section disclaimer">
          <h2>Disclaimer</h2>
          <p>
            This is a fan-made project and is not officially affiliated with The Big Bang Theory,
            CBS, Warner Bros., or Chuck Lorre Productions. All content is used for educational
            and informational purposes. Episode information and vanity cards are the property
            of their respective copyright holders.
          </p>
        </section>

        <div className="credits">
          <p>Made with care by a fan for fans</p>
          <p className="year">2026</p>
        </div>
      </div>
    </div>
  )
}

export default About
