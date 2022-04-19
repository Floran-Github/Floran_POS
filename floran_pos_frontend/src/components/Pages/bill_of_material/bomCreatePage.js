// import { Modal } from "bootstrap";
import React, { Component } from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Fade from "@mui/material/Fade";
import Backdrop from "@mui/material/Backdrop";
export class bomCreatePage extends Component {
  state = {
    show: false,
  };

  handleOpen = () => {
    console.log("open");
    this.setState({
      show: true,
    });
  };

  handleClose = () => {
    this.setState({
      show: false,
    });
  };
  render() {
    const show = this.state.show;
    const style = {
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      width: "90%",
      bgcolor: "background.paper",
      boxShadow: 24,
      p: 4,
    };
    return (
      <div className="col-12">
        <div className="card">
          <div className="card-header">
            <h3>Create New Dish Bill Of Material</h3>
          </div>
          <div className="card-body">
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <h5 className="col-12">
                    <label htmlFor="bomname">Name</label>
                  </h5>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    className="col-12 form-control"
                    placeholder="Dish Name"
                    required
                  />
                </div>
                <div className="form-group">
                  <h5 className="col-12">
                    <label htmlFor="bomname">Photo</label>
                  </h5>
                  <input
                    type="file"
                    accept="image/*"
                    name="name"
                    id="name"
                    className="col-12 form-control"
                    placeholder="Dish Name"
                    required
                  />
                </div>
                <div className="form-group">
                  <h5 className="col-12">
                    <label htmlFor="bomname">Description</label>
                  </h5>
                  <textarea
                    rows={6}
                    className="col-12 form-control"
                    placeholder="Dish Description"
                    required
                  />
                </div>
                <div className="form-group">
                  <h5 className="col-12">
                    <label htmlFor="bomname">Receipe</label>
                  </h5>
                  <textarea
                    rows={6}
                    className="col-12 form-control"
                    placeholder="Dish Receipe"
                    required
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="row">
                  <div className="col-md-6">
                    <button
                      className="btn card bg-dark"
                      onClick={this.handleOpen}
                    >
                      <div className="card-body text-center">
                        <h2>Select Floor Inventory Item</h2>
                      </div>
                    </button>
                  </div>

                  <Modal
                    aria-labelledby="transition-modal-title"
                    aria-describedby="transition-modal-description"
                    open={show}
                    onClose={this.handleClose}
                    closeAfterTransition
                    BackdropComponent={Backdrop}
                    BackdropProps={{
                      timeout: 500,
                    }}
                  >
                    <Fade in={show}>
                      <Box sx={style}>
                        <div className="row">
                          <div className="col-12">
                            <h1>Add New Item</h1>
                          </div>
                          <hr />
                          <div className="col-md-6 row">
                            <h1 className="col-12">Floor Items</h1>
                            <div className="col-md-4 col-6">
                              <div className="card">
                                <div className="card-body text-center">
                                  <h2>Bun</h2>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-4 col-6">
                              <div className="card">
                                <div className="card-body text-center">
                                  <h2>Bun</h2>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-4 col-6">
                              <div className="card">
                                <div className="card-body text-center">
                                  <h2>Bun</h2>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-4 col-6">
                              <div className="card">
                                <div className="card-body text-center">
                                  <h2>Bun</h2>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-4 col-6">
                              <div className="card">
                                <div className="card-body text-center">
                                  <h2>Bun</h2>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-4 col-6">
                              <div className="card">
                                <div className="card-body text-center">
                                  <h2>Bun</h2>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="row">
                              <h3 className="col-12">Item selected :</h3>
                              <div className="col-12 noitemselected text-center">
                                <h3>No Item selected</h3>
                              </div>
                            </div>
                            <div className="row d-flex align-items-center">
                              <h4 className="col-md-12">
                                <label>Quantity used</label>
                              </h4>
                              <div className="col-md-12">
                                <div className="row">
                                  <input
                                    type="number"
                                    name="qty"
                                    id="qty"
                                    className="col-10 form-control"
                                  />
                                  <h4 className="col-2">Pieces</h4>
                                </div>
                              </div>
                            </div>
                            <br />
                            <div className="row">
                              <button className="btn btn-success">Add Item To The List</button>
                            </div>
                          </div>
                        </div>
                      </Box>
                    </Fade>
                  </Modal>

                  <div className="col-md-6">
                    <button
                      className="btn card bg-dark"
                      onClick={this.handleOpen}
                    >
                      <div className="card-body text-center">
                        <h2>Select Kitchen Inventory Item</h2>
                      </div>
                    </button>
                  </div>
                </div>
                <div className="row">
                  <div className="col-12">
                    <h1>Items used to create the dish</h1>
                  </div>
                  <div className="col-12">
                    <div className="card">
                      <div className="card-body row">
                        <h3 className="col-4">Tomato Sauce</h3>
                        <h3 className="col-4">
                          <b>Qty : </b>120 gram
                        </h3>
                        <h4 className="col-4">
                          <b>Floor Item</b>
                        </h4>
                      </div>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="card">
                      <div className="card-body row">
                        <h3 className="col-4">Bun</h3>
                        <h3 className="col-4">
                          <b>Qty : </b>2 peices
                        </h3>
                        <h4 className="col-4">
                          <b>Kitechen Item</b>
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default bomCreatePage;
