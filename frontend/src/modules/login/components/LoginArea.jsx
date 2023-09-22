import React from "react";
import "../css/loginAreaCss.css";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const LoginArea = () => {
  return (
    <section className="vh-100 gradient-custom loginAreaCss">
      <div class="container py-5 h-100">
        <div class="row d-flex justify-content-center align-items-center h-100">
          <div class="col-12 col-md-8 col-lg-6 col-xl-5">
            <div
              class="card bg-dark text-white"
              style={{ borderRadius: "1rem" }}
            >
              <div class="card-body p-5 text-center">
                <div class="mb-md-5 mt-md-4 pb-5">
                  <h2 class="fw-bold mb-2 text-uppercase">Start Drawing</h2>
                  <p class="text-white-50 mb-5">
                    Create a Room or Join an Existing one
                  </p>

                  <div class="form-outline form-white mb-4 ">
                    <label class="form-label" for="typeEmailX">
                      Name
                    </label>
                    <input
                      type="text"
                      id="UserName"
                      class="form-control form-control-lg"
                    />
                  </div>

                  <div class="form-outline form-white mb-4">
                    <label class="form-label" for="typePasswordX">
                      RoomID
                    </label>
                    <input
                      type="text"
                      id="RoomNumber"
                      class="form-control form-control-lg"
                    />
                  </div>

                  <div className="">
                    <Row>
                      <Col>
                        <Link to="/">
                          <button
                            class="btn btn-outline-light btn-lg"
                            type="submit"
                          >
                            Create Room
                          </button>
                        </Link>
                      </Col>

                      <Col>
                        <Link to="/">
                        <button
                          class="btn btn-outline-light btn-lg"
                          type="submit"
                        >
                          Join Room
                        </button>
                        </Link>
                      </Col>
                    </Row>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoginArea;
