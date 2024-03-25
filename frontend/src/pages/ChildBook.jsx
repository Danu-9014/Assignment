import React from "react";
import MainNavBar from "../components/MainNavBar";
import Footer from "../components/Footer";
import '../styles.css'

const ChildBook = () => {
  return (
    <div>
      <MainNavBar />
      <br />
      <br />

      <div class="container pt-4">
        {/* <!-- Section: Main chart --> */}
        <section class="mb-4">
          <div class="card">
            <div class="card-header py-3">
              <h5 class="mb-0 text-center">
                <strong>Child's Current Reading Book</strong>
              </h5>
            </div>
            <div class="card-body">
              {/* <canvas class="my-4 w-100" id="myChart" height="380"></canvas> */}
              <div className="d-flex justify-content-center align-items-center vh-50">
                <div
                  className="card card-style"
                  style={{ width: "75%", minHeight: "200px" }}
                >
                  <div className="card-body">
                    <h5 className="card-title">Sherlock Holmes</h5>
                    <p className="card-text">Arthur Conan Doyle</p>
                    <p className="card-text">
                      <small className="text-muted">
                        Last updated 3 mins ago
                      </small>
                    </p>
                  </div>
                  <img
                    src="https://ksr-ugc.imgix.net/assets/039/479/483/209057c7195c4a518f7bf1d5877b460c_original.jpg?ixlib=rb-4.1.0&crop=faces&w=1552&h=873&fit=crop&v=1671210374&auto=format&frame=1&q=92&s=6ff85bee9a771cf9122c92160c2b3427"
                    className="card-img-bottom"
                    alt="Camera"
                    style={{ maxHeight: "300px" }}
                  />
                  <div class="card-footer text-muted">
                    <div class="progress" style={{ height: "20px" }}>
                      <div
                        class="progress-bar"
                        role="progressbar"
                        style={{ width: "25%" }}
                        aria-valuenow="25"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      >
                        25%
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <br />
      <div class="container pt-4">
        {/* <!-- Section: Main chart --> */}
        <section class="mb-4">
          <div class="card">
            <div class="card-header py-3">
              <h5 class="mb-0 text-center">
                <strong>Completed Reading Book List</strong>
              </h5>
            </div>
            <div class="card-body">
              <div className="container mt-4">
                <div className="row">
                  <div className="col-md-3">
                    <div className="card card-style">
                      <div className="card-body">
                        <h5 className="card-title">Card 1</h5>
                        <p className="card-text">
                          Some quick example text to build on the card title and
                          make up the bulk of the card's content.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="card card-style">
                      <div className="card-body">
                        <h5 className="card-title">Card 2</h5>
                        <p className="card-text">
                          Some quick example text to build on the card title and
                          make up the bulk of the card's content.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="card card-style">
                      <div className="card-body">
                        <h5 className="card-title">Card 3</h5>
                        <p className="card-text">
                          Some quick example text to build on the card title and
                          make up the bulk of the card's content.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="card card-style">
                      <div className="card-body">
                        <h5 className="card-title">Card 4</h5>
                        <p className="card-text">
                          Some quick example text to build on the card title and
                          make up the bulk of the card's content.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div class="container pt-4">
        {/* <!-- Section: Main chart --> */}
        <section class="mb-4">
          <div class="card">
            <div class="card-header py-3">
              <h5 class="mb-0 text-center">
                <strong>Next Readings</strong>
              </h5>
            </div>
            <div class="card-body">
              <div className="container mt-4">
                <div className="row">
                  <div className="col-md-3">
                    <div class="card card-style">
                      <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">
                          Some quick example text to build on the card title and
                          make up the bulk of the card's content.
                        </p>
                        <button
                          type="button"
                          class="btn btn-primary"
                          data-mdb-ripple-init
                        >
                          Read
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div class="card card-style">
                      <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">
                          Some quick example text to build on the card title and
                          make up the bulk of the card's content.
                        </p>
                        <button
                          type="button"
                          class="btn btn-primary"
                          data-mdb-ripple-init
                        >
                          Read
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div class="card card-style">
                      <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">
                          Some quick example text to build on the card title and
                          make up the bulk of the card's content.
                        </p>
                        <button
                          type="button"
                          class="btn btn-primary"
                          data-mdb-ripple-init
                        >
                          Read
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div class="card card-style">
                      <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">
                          Some quick example text to build on the card title and
                          make up the bulk of the card's content.
                        </p>
                        <button
                          type="button"
                          class="btn btn-primary"
                          data-mdb-ripple-init
                        >
                          Read
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <br />
      <br />
      <br />
      <br />
      <Footer />
    </div>
  );
};

export default ChildBook;
