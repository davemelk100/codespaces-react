import './App.css';

function App() {
  return (
    <div className="App">
      <header className="row header-row py-4 ps-4">
        <div className='col-lg-12'>
          <h1>David Melkonian</h1>
          <h2>Senior Application Developer</h2>
        </div>
      </header>
      <main className='App-main'>
        <div className='row'>
          <div className='col-lg-12 col-6 p-0'>
            <ul className='samples ps-lg-4'>
              <li class="col-lg-1 font-bold"><h3>Samples</h3></li>
              <li><a href='https://www.figma.com/proto/IaGShRQDs0RRld07kLP9G5/dewpoint-mobile-app-copy-2?node-id=201%3A315&scaling=min-zoom&page-id=201%3A45&starting-point-node-id=201%3A315&hide-ui=1'>Mobile app <span className='hide-small'>prototype</span></a></li>
              <li><a href='https://davemelkcom.files.wordpress.com/2021/10/onu-one-uxui-plan.pdf'>3d software <span className='hide-small'>UX/UI plan</span></a></li>
              <li><a href='https://davemelkcom.files.wordpress.com/2021/10/uxui-solution-examples.pdf'><span className='hide-small'>UX/UI</span> Solutioning</a></li>
              <li><a href='https://davemelkcom.files.wordpress.com/2021/11/ux-ui-examples-sketch-3.pdf'><span className='hide-small'>UX/UI</span> Concepts</a></li>
            </ul>
          </div>
          <div className='col-lg-12 col-6 p-0'>
            <ul className='contact ps-lg-4'>
            <li class="col-lg-1"><h3>Contact</h3></li>
              <li><a href='https://www.linkedin.com/in/davemelk/'>LinkedIn</a></li>
              <li><a href='https://docs.google.com/document/d/194Y7nvZMypnbAiT-F51o4PI05_dS7X7i26euKBHTyTA/edit?usp=sharing'>Resume</a></li>
              <li><a href='https://dribbble.com/davemelk100'>Dribble</a></li>
              <li><a href='mailto:davemelk@gmail.com?subject = David Melkonian - portfolio'>Contact</a></li>
            </ul>
          </div>
          <div className='col-lg-12 py-4 px-5'>
            <p>
              Experienced front-end developer with a variety of experience using HTML/CSS/Javascript and more
              with a wealth of experience with user experience design, development, solutioning and more.
            </p>
            <p>
              My career has included enterprise software delivery with companies/initiatives such as HealthCare.gov, 
              Blue Cross Blue Shield, United Healthcare, Meridian Health, Delta Dental of Michigan, Ford Motor 
              Company, General Motors and more. In addition to my current role, my previous roles include delivery 
              manager, technical lead, accessibility lead, user experience and user interface 
              designer/developer/consultant and technical writer.
            </p>
            <p>
              I am well-versed in Agile software development, including Scrum and SAFe methodologies. I am a 
              Certified Usability Analyst (CUA) by Human Factors International and have obtained Scrum Master 
              certification. I work closely with product owners, executive leadership, vendors and management 
              to ensure successful development and design to deliver world class software.
            </p>
            </div>
        </div>
      </main>
    </div>
  );
}

export default App;
