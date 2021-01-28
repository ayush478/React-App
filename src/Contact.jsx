import React from "react";

const Contact = () => {
  return (
    <>
      <div className="container contact_div">
        <div className="row">
          <div className="col-md-10 col-10 mx-auto">
            <section class="main_heading my-5 py-3 bg-light  ">
              <div class="text-center">
                <h1 class="display-4">Contact Us</h1>
                <hr class="w-25 mx-auto" />
              </div>
              <div class="container">
                <div class="row">
                  <div class="col-10 col-md-8 mx-auto">
                    <form>
                      <div class="input-group mb-3">
                        <span class="input-group-text" id="basic-addon1">
                          @
                        </span>
                        <input
                          type="text"
                          class="form-control"
                          placeholder="Username"
                          aria-label="Username"
                          aria-describedby="basic-addon1"
                        />
                      </div>
                      <div class="mb-2">
                        <label for="exampleInputEmail1" class="form-label">
                          Email address
                        </label>
                        <input
                          type="email"
                          class="form-control"
                          id="exampleInputEmail1"
                          aria-describedby="emailHelp"
                        />
                        <div id="emailHelp" class="form-text">
                          We'll never share your email with anyone else.
                        </div>
                      </div>
                      <div class="mb-2">
                        <label class="pr-4">Gender</label>
                        <div class="form-check form-check-inline">
                          <input
                            class="form-check-input"
                            type="radio"
                            name="inlineRadioOptions"
                            id="inlineRadio1"
                            value="option1"
                          />
                          <label class="form-check-label" for="inlineRadio1">
                            Male
                          </label>
                        </div>
                        <div class="form-check form-check-inline">
                          <input
                            class="form-check-input"
                            type="radio"
                            name="inlineRadioOptions"
                            id="inlineRadio2"
                            value="option2"
                          />
                          <label class="form-check-label" for="inlineRadio2">
                            Female
                          </label>
                        </div>
                      </div>
                      <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">
                          Password
                        </label>
                        <input
                          type="password"
                          class="form-control"
                          id="exampleInputPassword1"
                        />
                      </div>
                      <div class="mb-3 form-check">
                        <input
                          type="checkbox"
                          class="form-check-input"
                          id="exampleCheck1"
                        />
                        <label class="form-check-label" for="exampleCheck1">
                          Check me out
                        </label>
                      </div>
                      <button type="submit" class="btn btn-outline-primary mb-2">
                        Submit
                      </button>
                      <div class="mb-2">
                        <label for="exampleDataList" class="form-label">
                          Select City
                        </label>
                        <input
                          class="form-control"
                          list="datalistOptions"
                          id="exampleDataList"
                          placeholder="Type to search..."
                        />
                        <datalist id="datalistOptions">
                          <option value="San Francisco"></option>
                          <option value="New York"></option>
                          <option value="Seattle"></option>
                          <option value="Los Angeles"></option>
                          <option value="Chicago"></option>
                        </datalist>
                      </div>
                      <div class="mb-3">
                        <label
                          for="exampleFormControlTextarea1"
                          class="form-label"
                        >
                          Example textarea
                        </label>
                        <textarea
                          class="form-control"
                          id="exampleFormControlTextarea1"
                          rows="3"
                        ></textarea>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
