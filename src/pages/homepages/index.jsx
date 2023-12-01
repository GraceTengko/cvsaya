const HomePage = () => {
  return (
    <div>
  <div className="page-content">
    <div className="container">
      <div className="cover shadow-lg bg-white">
        <div className="cover-bg p-3 p-lg-4 text-white">
          <div className="row">
            <div className="col-lg-4 col-md-5">
              <div className="avatar hover-effect bg-white shadow-sm p-1"><img src="images/grace.jpg" width={200} height={200} /></div>
            </div>
            <div className="col-lg-8 col-md-7 text-center text-md-start">
              <h2 className="h1 mt-2" data-aos="fade-left" data-aos-delay={0}>Grace Stehvalin</h2>
            </div>
          </div>
        </div>
        <div className="about-section pt-4 px-3 px-lg-4 mt-1">
          <div className="row">
            <div className="col-md-6">
              <h2 className="h3 mb-3">About Me</h2>
              <p>Hello! I am Grace Stehvalin. I am passionate about math and UI/UX. I am a skilled Front-end Developer and master Graphic Design tools such as Photoshop and Sketch.</p>
            </div>
            <div className="col-md-5 offset-md-1">
              <div className="row mt-2">
                <div className="col-sm-4">
                  <div className="pb-1">Age</div>
                </div>
                <div className="col-sm-8">
                  <div className="pb-1 text-secondary">21</div>
                </div>
                <div className="col-sm-4">
                  <div className="pb-1">Email</div>
                </div>
                <div className="col-sm-8">
                  <div className="pb-1 text-secondary">gracetengko@gmail.com</div>
                </div>
                <div className="col-sm-4">
                  <div className="pb-1">Phone</div>
                </div>
                <div className="col-sm-8">
                  <div className="pb-1 text-secondary">+0812-1122-0087</div>
                </div>
                <div className="col-sm-4">
                  <div className="pb-1">Address</div>
                </div>
                <div className="col-sm-8">
                  <div className="pb-1 text-secondary">Tumpaan, Minahasa Selatan, Sulawesi Utara, Indonesia</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr className="d-print-none" />
        <div className="work-experience-section px-3 px-lg-4">
          <h2 className="h3 mb-4">Work Experience</h2>
          <div className="timeline">
            <div className="timeline-card timeline-card-primary card shadow-sm">
              <div className="card-body">
                <div className="h5 mb-1">Automata <span className="text-muted h6">at Course Content</span></div>
                <div className="text-muted text-small mb-2">January - May, 2023 - Present</div>
                <div>Automata courses often cover formal aspects of languages and automata, including concepts such as Turing machines, finite state machines, and grammars. I like this course because mathematical logic, especially propositional and predicate logic, is used in the analysis and specification of automata. Logic is used to express desirable or prohibited properties of a computing system which helps me to be able to analyze a problem and understand it well.</div>
              </div>
            </div>
            <div className="timeline-card timeline-card-primary card shadow-sm">
              <div className="card-body">
                <div className="h5 mb-1">Frontend <span className="text-muted h6">at Course Content</span></div>
                <div className="text-muted text-small mb-2">August - November, 2023</div>
                <div>I was able to work together in a group to complete the Fronend course assignment and final project.</div>
              </div>
            </div>
            <div className="timeline-card timeline-card-primary card shadow-sm">
              <div className="card-body">
                <div className="h5 mb-1">White Hat Photography <span className="text-muted h6">Asisten Photograper</span></div>
                <div className="text-muted text-small mb-2">2017 - 2020</div>
                <div>Assist in arranging and setting up the shooting location, including lighting, background, and other visual elements. Provide direct assistance to the photographer during the shoot, such as helping to direct the model, setting up props, or handling equipment while the photographer focuses on shooting. Learn photography techniques, the latest equipment, and industry trends to continuously improve their skills and knowledge.</div>
              </div>
            </div>
          </div>
        </div>
        <hr className="d-print-none" />
        <div className="page-break" />
        <div className="education-section px-3 px-lg-4 pb-4">
          <h2 className="h3 mb-4">Education</h2>
          <div className="timeline">
            <div className="timeline-card timeline-card-success card shadow-sm">
              <div className="card-body">
                <div className="h5 mb-1">Junior High School<span className="text-muted h6"> from SMA Negeri 1 Amurang</span></div>
                <div className="text-muted text-small mb-2">2017 - 2020</div>
                <div>At this level of education, I learned a lot of knowledge in the field of mathematics, which enabled me to understand any data processing or questions about math.</div>
              </div>
            </div>
            <div className="timeline-card timeline-card-success card shadow-sm">
              <div className="card-body">
                <div className="h5 mb-1">Bachelor of Computer Science <span className="text-muted h6"> from Universitas Klabat</span></div>
                <div className="text-muted text-small mb-2">2020 - Now</div>
                <div>I am currently studying at Klabat University taking the Informatics study program. Where I learned a lot about coding and math, enabling me to hone my knowledge in the field of Computer Science by not leaving my experience in junior high school.</div>
              </div>
            </div>
          </div>
        </div>
        <hr className="d-print-none" />
        </div></div>
  </div>
</div>

  )
}

export default HomePage