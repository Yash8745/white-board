import React from "react";
// import '../../assets/satvik_yash.jpg'

const UserCard = () => {
  return (
    <>
      <section class="vh-100" style={{ backgroundColor: "#9de2ff" }}>
        <div class="container py-5 h-100">
          <div class="row d-flex justify-content-center align-items-center h-100">
            <div class="col col-md-9 col-lg-7 col-xl-5">
              <div class="card" style={{ borderRadius: "15px" }}>
                <div class="card-body p-4">
                  <div class="d-flex text-black">
                    <div class="flex-shrink-0">
                      <img
                        src='https://nyrevconnect.com/wp-content/uploads/2017/06/Placeholder_staff_photo-e1505825573317-700x699.png'
                        alt="Generic placeholder"
                        class="img-fluid"
                        style={{ width: "180px", borderRadius: "10px" }}
                      />
                    </div>
                    <div class="flex-grow-1 ms-3">
                      <h5 class="mb-1">Yash Narang</h5>
                      <p class="mb-2 pb-1" style={{ color: "#2b2a2a" }}>
                        @yashnarang
                      </p>
                      <div
                        class="d-flex justify-content-start rounded-3 p-2 mb-2"
                        style={{ backgroundColor: "#efefef" }}
                      >
                        <div>
                          <p class="small text-muted mb-1">Game Played</p>
                          <p class="mb-0">0</p>
                        </div>
                      </div>
                      <div class="d-flex pt-1">
                        <button
                          type="button"
                          class="btn btn-outline-primary me-1 flex-grow-1"
                        >
                          Chat
                        </button>
                        <button
                          type="button"
                          class="btn btn-primary flex-grow-1"
                        >
                          Follow
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default UserCard;
