import './App.css';

function App() {
  return (

    <div className="App">
      <div class="container-xxl bd-gutter">

        <header class="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
          <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
            <span class="fs-4">Art Prize</span>
          </a>

          <ul class="nav nav-pills">
            <li class="nav-item"><a href="#" class="nav-link active" aria-current="page">Visitors</a></li>
            <li class="nav-item"><a href="#" class="nav-link">Artists</a></li>
            <li class="nav-item"><a href="#" class="nav-link">Venues</a></li>
            <li class="nav-item"><a href="#" class="nav-link">Get Involved</a></li>
            <li class="nav-item"><a href="#" class="nav-link">Education</a></li>
            <li class="nav-item"><a href="#" class="nav-link">Donate</a></li>
            <li class="nav-item"><a href="#" class="nav-link">Sponsors</a></li>
            <li class="nav-item"><a href="#" class="nav-link">About ArtPrize</a></li>
          </ul>
        </header>

        <main>
          <h2 class="mb-3">Artist Registration</h2>
            <form class="row g-3">
              
              <div class="col-md-4 mb-3">
                <label for="inputFirstName" class="form-label">First Name</label>
                <input type="text" class="form-control" id="inputFirstName" />
              </div>
              <div class="col-md-4 mb-3">
                <label for="inputPassword4" class="form-label">Last Name</label>
                <input type="password" class="form-control" id="inputPassword4" />
              </div>
              <div class="col-md-4 mb-3">
                <label for="inputEmail4" class="form-label">Email</label>
                <input type="email" class="form-control" id="inputEmail4" />
              </div>
              
              <div class="col-md-4 mb-3">
                <label for="inputAddress" class="form-label">Address</label>
                <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St" />
              </div>
              <div class="col-md-4 mb-3">
                <label for="inputAddress2" class="form-label">Address 2</label>
                <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" />
              </div>
              <div class="col-md-4 mb-3">
                <label for="inputCity" class="form-label">City</label>
                <input type="text" class="form-control" id="inputCity" />
              </div>
              <div class="col-md-2 mb-3">
                <label for="inputState" class="form-label">State</label>
                <select id="inputState" class="form-select">
                  <option selected="">Choose...</option>
                  <option>MI</option>
                  <option>IL</option>
                  <option>OH</option>
                </select>
              </div>
              <div class="col-md-2 mb-3">
                <label for="inputZip" class="form-label">Zip</label>
                <input type="text" class="form-control" id="inputZip" />
              </div>
              <div class="col-md-4 mb-3">
                <label for="inputState" class="form-label">Country</label>
                <select id="inputState" class="form-select">
                  <option selected="">Choose...</option>
                  <option>USA</option>
                  <option>Canada</option>
                  <option>Sweden</option>
                </select>
              </div>
              <div class="col-md-4 mb-3">
                <label for="inputState" class="form-label">Birth Country</label>
                <select id="inputState" class="form-select">
                  <option selected="">Choose...</option>
                  <option>USA</option>
                  <option>Canada</option>
                  <option>Sweden</option>
                </select>
              </div>
              <div class="col-md-3 mb-3">
                <label>Artist name other than name listed?</label>
                <div class="form-check">
                  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                  <label class="form-check-label" for="flexRadioDefault1">Yes</label>
                </div>
                <div class="form-check">
                  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked/>
                  <label class="form-check-label" for="flexRadioDefault2">No</label>
                </div>
              </div>
              <div class="col-md-4 mb-3">
                <label for="inputFirstName" class="form-label">Artist or Artist Group Name(s)</label>
                <input type="text" class="form-control" id="inputFirstName" />
              </div>
              <div class="col-md-3 mb-3">
                <label for="inputPhone" class="form-label">Phone Number</label>
                <input type="tel" class="form-control" id="inputPhone" />
              </div>
              <div class="col-md-2 mb-3">
                <label for="inputState" class="form-label">Phone Type</label>
                <select id="inputState" class="form-select">
                  <option selected="">Choose...</option>
                  <option>Mobile</option>
                  <option>Land line</option>
                </select>
              </div>

              <h3 class="mb-3 mt-5">Collaborators</h3>
              <div class="row collab mb-3">
                <div class="col-md-3">
                  <label for="inputFirstName" class="form-label">First Name</label>
                  <input type="text" class="form-control" id="inputFirstName" />
                </div>
                <div class="col-md-4">
                  <label for="inputPassword4" class="form-label">Last Name</label>
                  <input type="password" class="form-control" id="inputPassword4" />
                </div>
                <div class="col-md-4">
                  <label for="inputEmail4" class="form-label">Email</label>
                  <input type="email" class="form-control" id="inputEmail4" />
                </div>
                <div class="col-md-1 mt-4">
                  <button type="submit" class="btn btn-primary">Add</button>
                </div>
              </div>

              <div class="row collab mb-3">
                <div class="col-md-1">
                  <button class="btn btn-danger">X</button>
                </div>
                <div class="col-md-1">
                  <p>First</p>
                </div>
                <div class="col-md-1">
                  <p>Name</p>
                </div>
              </div>

              <div class="row collab mb-3">
                <div class="col-md-1">
                  <button class="btn btn-danger">X</button>
                </div>
                <div class="col-md-1">
                  <p>Firstt</p>
                </div>
                <div class="col-md-1">
                  <p>Namee</p>
                </div>
              </div>

 



              <h3 class="mb-3 mt-5">Artwork</h3>
              <div class="row collab">
                <div class="col-md-4 mb-3">
                  <label for="inputFirstName" class="form-label">Title</label>
                  <input type="text" class="form-control" id="inputFirstName" />
                </div>
                <div class="col-md-4 mb-3">
                  <label for="inputPassword4" class="form-label">Production Year</label>
                  <input type="password" class="form-control" id="inputPassword4" />
                </div>
                <div class="col-md-4 mb-3">
                  <label for="inputEmail4" class="form-label">Medium</label>
                  <input type="email" class="form-control" id="inputEmail4" />
                </div>
              </div>


              <div class="row collab">

              <div class="col-md-4 mb-3">
                <label>Environment</label>
                <div class="form-check">
                  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                  <label class="form-check-label" for="flexRadioDefault1">Indoors</label>
                </div>
                <div class="form-check">
                  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked/>
                  <label class="form-check-label" for="flexRadioDefault2">Outdoors</label>
                </div>
              </div>
              <div class="col-md-4 mb-3">
                <label for="inputPhone" class="form-label">Phone Number</label>
                <input type="tel" class="form-control" id="inputPhone" />
              </div>
              <div class="col-md-4 mb-3">
                <label for="inputState" class="form-label">Phone Type</label>
                <select id="inputState" class="form-select">
                  <option selected="">Choose...</option>
                  <option>Mobile</option>
                  <option>Land line</option>
                </select>
              </div>
              </div>
              <div class="row collab">
                <div class="col-md-12 mb-3 p-0">
                  <label for="exampleFormControlTextarea1" class="form-label">Description</label>
                  <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
              </div>

            <div class="row collab">
            <div class="col-md-4 mb-3 p-0">
                  <label for="inputState" class="form-label">Art Forms</label>
                  <select id="inputState" class="form-select">
                    <option selected="">Choose...</option>
                    <option>asdf</option>
                    <option>asdf</option>
                  </select>
              </div>
              <div class="col-md-2 mb-3">
                  <label for="inputFirstName" class="form-label">Width</label>
                  <input type="number" class="form-control" id="inputFirstName" />
              </div>

              <div class="col-md-2 mb-3">
                  <label for="inputFirstName" class="form-label">Depth</label>
                  <input type="number" class="form-control" id="inputFirstName" />
              </div>

              <div class="col-md-2 mb-3">
                  <label for="inputFirstName" class="form-label">Height</label>
                  <input type="number" class="form-control" id="inputFirstName" />
              </div>


              <div class="col-md-2 mb-3">
              <label>Can touch?</label>
                <div class="form-check">
                  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                  <label class="form-check-label" for="flexRadioDefault1">Yes</label>
                </div>
                <div class="form-check">
                  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked/>
                  <label class="form-check-label" for="flexRadioDefault2">No</label>
                </div>
              </div>
            </div>


            <div class="row collab mb-5">
                <div class="col-md-12 p-0">
                  <label for="exampleFormControlTextarea1" class="form-label">Technical Details</label>
                  <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
            </div>


            <div class="row collab mb-5">
              <div class="col-md-5 mb-5 p-0">
                <label for="formFile" class="form-label">Upload Artwork Images</label>
                <input class="form-control" type="file" id="formFile"/>
              </div>
              <div class="col-md-1 text-center">
                <p class="mt-5">or</p>
              </div>
              <div class="col-md-5 p-0 mb-5">
                <label for="inputFirstName" class="form-label">URL</label>
                <input type="text" class="form-control" id="inputFirstName" placeholder='https://' />
              </div>
              <div class="col-md-1 mt-4">
                <button type="button" class="btn btn-primary">Add</button>
              </div>
            </div>


            <div class="row collab mb-5">
              <div class="col-md-2 mb-5">
                <label>For Sale?</label>
                <div class="form-check">
                  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                  <label class="form-check-label" for="flexRadioDefault1">Yes</label>
                </div>
                <div class="form-check">
                  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked/>
                  <label class="form-check-label" for="flexRadioDefault2">No</label>
                </div>
              </div>
              <div class="col-md-2 mb-5">
                <label for="inputFirstName" class="form-label">Price</label>
                <input type="number" class="form-control" id="inputFirstName" min="0.01" step="0.01" max="2500" value="25.67" />
              </div>
              <div class="col-md-8">
                <label for="inputFirstName" class="form-label">Pricing Details</label>
                <input type="text" class="form-control" id="inputFirstName" />
              </div>
            </div>




              <div class="row collab">
                <div class="col-md-2">
                <label>Venue Preference</label>
                <div class="form-check">
                  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                  <label class="form-check-l mb-5abel" for="flexRadioDefault1">Yes</label>
                </div>
                <div class="form-check">
                  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2"/>
                  <label class="form-check-label" for="flexRadioDefault2">No</label>
                </div>
              </div>
              <div class="col-md-4 mb-5">
                  <label for="inputState" class="form-label">Venues</label>
                  <select id="inputState" class="form-select">
                    <option selected="">Choose...</option>
                    <option>asdf</option>
                    <option>asdf</option>
                  </select>
              </div>
            </div>


            </form>
        </main>
      </div>

    



      {/* <header className="App-header">
        <div className='App-grid-header'>
          <h1>David Melkonian</h1>
          <h2>Application Development Leader. User Experience Expertise. Accessibility advocate.</h2>
        </div>
      </header>
      <main className='App-main'>
        <div className='row'>
          <div className='App-grid-a samples-links'>
            <ul className='samples'>
              <li><h3>Samples</h3></li>
              <li><a href='https://www.figma.com/proto/IaGShRQDs0RRld07kLP9G5/dewpoint-mobile-app-copy-2?node-id=201%3A315&scaling=min-zoom&page-id=201%3A45&starting-point-node-id=201%3A315&hide-ui=1'><span className='hide-small'>Mobile&nbsp;App</span> Prototype</a></li>
              <li><a href='https://davemelkcom.files.wordpress.com/2021/10/onu-one-uxui-plan.pdf'>3d&nbsp;<span className='hide-small'>app&nbsp;</span>UX plan</a></li>
              <li><a href='https://davemelkcom.files.wordpress.com/2021/10/uxui-solution-examples.pdf'><span className='hide-small'>UX/UI&nbsp;</span>Solutioning</a></li>
              <li><a href='https://davemelkcom.files.wordpress.com/2021/11/ux-ui-examples-sketch-3.pdf'><span className='hide-small'>UX/UI&nbsp;</span>Concepts</a></li>
            </ul>
            <ul className='contact'>
              <li><h3>Contact</h3></li>
              <li><a href='https://www.linkedin.com/in/davemelk/'>LinkedIn</a></li>
              <li><a href='https://docs.google.com/document/d/194Y7nvZMypnbAiT-F51o4PI05_dS7X7i26euKBHTyTA/edit?usp=sharing'>Resume</a></li>
              <li><a href='https://dribbble.com/davemelk100'>Dribble</a></li>
              <li><a href='mailto:davemelk@gmail.com?subject = David Melkonian - portfolio'>Contact</a></li>
            </ul>
            <div className='row'>
              <div className='App-grid-c'>
                <div className='title'><h3>Experience</h3></div>
                <div className='bio-text'>
                  <p>My specialties are user experience (UX) strategy, UX leadership, user interface (UI) design, UX design, and software accessibility supporting ADA and WCAG standards for impaired users. I've implemented accessibility (a11y) awareness, development and design practices within large organizations.</p>
                  <p>My experience includes enterprise software delivery with companies/initiatives such as HealthCare.gov, Blue Cross Blue Shield, United Healthcare, Meridian Health, Delta Dental of Michigan, Ford Motor Company, General Motors and more. In addition to my current role, my previous roles include delivery manager, technical lead, accessibility lead, user experience and user interface designer/developer/consultant, scrum master and technical writer.</p>
                  <p>I am well-versed in Agile software development, including Scrum and SAFe methodologies. I am a Certified Usability Analyst (CUA) by Human Factors International and have obtained Scrum Master certification. I work closely with product owners, executive leadership, vendors and management to ensure successful development and design to deliver world class software.</p>
                  <p>I reviewed, assessed, documented and groomed a11y test results into story cards according to logical groupings of work. I was able to institute an a11y practice and discipline in my current role that hadn't previously existed. I trained developers, testers, tech leads and BAs on what a11y means and how we build software to be accessible from design all the way to production.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer className='App-footer'>

      </footer> */}
      </div>
  );
}

export default App;
