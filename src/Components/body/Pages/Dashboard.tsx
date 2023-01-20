import React from "react";

const Dashboard = () => {
  return (
    <div className="col-12 d-flex flex-wrap justify-content-between">
      <div className="col-12 col-md-8 d-flex flex-wrap align-content-start justify-content-between">
        <div className="col-12 col-md-6 mb-2 pe-md-3">
          <div className="card border-0 shadow-lg ">
            <div className="card-body p-3 mb-2  ">
              <div className="d-flex justify-content-between">
                <p className="card-title fs-5 n-blue">
                  Sales
                  <small className="text-secondary mx-1 fs-6">
                    | Today
                  </small>{" "}
                </p>
                <small className="text-secondary mx-1 fs-6">...</small>
              </div>
              <div className="d-flex ">
                <div className="col-4 text-white">
                  <button
                    className="fs-2 mainIcon rounded-circle"
                    style={{ color: "#4154f1", backgroundColor: "#f6f6fe" }}
                  >
                    <i className="bi bi-cart"></i>
                  </button>
                </div>
                <div className="col-8 ps-1">
                  <h2 className="n-blue">145</h2>
                  <span className="text-secondary">
                    <span
                      className="me-2 text-success"
                      style={{ fontWeight: "500" }}
                    >
                      12%{" "}
                    </span>{" "}
                    increase
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6 mb-2 pe-md-2">
          <div className="card border-0 shadow-lg ">
            <div className="card-body p-3 mb-2">
              <div className="d-flex justify-content-between">
                <p className="card-title fs-5 n-blue">
                  Revenue
                  <small className="text-secondary mx-1 fs-6">
                    | This Month
                  </small>{" "}
                </p>
                <small className="text-secondary mx-1 fs-6">...</small>
              </div>
              <div className="d-flex ">
                <div className="col-4 text-white">
                  <button
                    className="fs-2 mainIcon rounded-circle"
                    style={{ color: "#4154f1", backgroundColor: "#f6f6fe" }}
                  >
                    <i className="bi bi-cart"></i>
                  </button>
                </div>
                <div className="col-8">
                  <h2 className="n-blue">145</h2>
                  <span className="text-secondary">
                    <span
                      className="me-2 text-success"
                      style={{ fontWeight: "500" }}
                    >
                      12%{" "}
                    </span>{" "}
                    increase
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12  mb-2 pe-md-2">
          <div className="card border-0 shadow-lg mt-2">
            <div className="card-body p-3 mb-2  ">
              <div className="d-flex justify-content-between">
                <p className="card-title fs-5 n-blue">
                  Sales
                  <small className="text-secondary mx-1 fs-6">
                    | Today
                  </small>{" "}
                </p>
                <small className="text-secondary mx-1 fs-6">...</small>
              </div>
              <div className="d-flex ">
                <div className="col-4 text-white">
                  <button
                    className="fs-2 mainIcon rounded-circle"
                    style={{ color: "#4154f1", backgroundColor: "#f6f6fe" }}
                  >
                    <i className="bi bi-cart"></i>
                  </button>
                </div>
                <div className="col-8 ps-1">
                  <h2 className="n-blue">145</h2>
                  <span className="text-secondary">
                    <span
                      className="me-2 text-success"
                      style={{ fontWeight: "500" }}
                    >
                      12%{" "}
                    </span>{" "}
                    increase
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-12 col-md-4  ps-md-2">
        <div className="card col-12 border-0 shadow-lg  mb-3 pe-md-2">
          <div className="card-title p-3 mb-2">
            <div className="d-flex justify-content-between">
              <p className="card-title fs-5 n-blue">
                Recent Activity
                <small className="text-secondary mx-1 fs-6">| Today</small>{" "}
              </p>
              <small className="text-secondary mx-1 fs-6">...</small>
            </div>

            <div className="d-flex ">
              <ul className="list-group border-none">
                <li className="list-group-item d-flex justify-content-between align-items-center">
                  A list item
                  <span className="badge bg-primary rounded-pill">14</span>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center">
                  A second list item
                  <span className="badge bg-primary rounded-pill">2</span>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center">
                  A third list item
                  <span className="badge bg-primary rounded-pill">1</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
