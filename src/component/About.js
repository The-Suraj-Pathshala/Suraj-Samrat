import React from 'react'

export default function About() {
  return (
    <div className="container">
        <div className="row">
          <div className="col-12 ">
            <h3 className="display-6 text-center mt-5 mb-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores distinctio,  </h3>
          </div>
        </div>
        <div className="row justify-content-evenly">
          <div className="col-md-3 text-center mt-5">
            <h1><i className="bi bi-file-code-fill text-primary"></i></h1>
            <h5>Build for developer</h5>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus nesciunt architecto impedit soluta iste suscipit dolor animi. Non ratione ad sequi nisi ipsam consequatur, provident, quidem cumque maxime alias laborum!</p>
          </div>
          <div className="col-md-3 text-center mt-5">
            <h1><i className="bi bi-easel-fill text-danger"></i></h1>
            <h5>Build for developer</h5>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus nesciunt architecto impedit soluta iste suscipit dolor animi. Non ratione ad sequi nisi ipsam consequatur, provident, quidem cumque maxime alias laborum!</p>
          </div>
          <div className="col-md-3 text-center mt-5">
            <h1><i className="bi bi-calendar-range-fill text-success"></i></h1>
            <h5>Build for developer</h5>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus nesciunt architecto impedit soluta iste suscipit dolor animi. Non ratione ad sequi nisi ipsam consequatur, provident, quidem cumque maxime alias laborum!</p>
          </div>
        </div>
        <hr/>
        <div className="row justify-content-evenly pt-3 pb-5">
          <div className="col-md-5">
            <img src="https://thumbs.dreamstime.com/b/three-people-stand…tions-means-to-conquer-summit-three-138580656.jpg" className="img-fluid" alt="img not found"/>
          </div>
          <div className="col-md-5 pt-3">
            <h5 className="mt-3">Web development</h5>
            <div className="progress" role="progressbar" aria-label="Success example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
              <div className="progress-bar bg-success" ></div>
            </div>

            <h5 className="mt-3">App Development</h5>
            <div className="progress" role="progressbar" aria-label="Info example" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
              <div className="progress-bar bg-info" ></div>
            </div>

            <h5 className="mt-3">Software Development</h5>
            <div className="progress" role="progressbar" aria-label="Warning example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
              <div className="progress-bar bg-warning" ></div>
            </div>

            <h5 className="mt-3">SEO</h5>
            <div className="progress" role="progressbar" aria-label="Danger example" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
              <div className="progress-bar bg-danger" s></div>
            </div>

              <h5 className="mt-3">Marketing</h5>
            <div className="progress" role="progressbar" aria-label="Danger example" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
              <div className="progress-bar bg-primary" ></div>
            </div>
          </div>
        </div>

    </div>
  )
}
