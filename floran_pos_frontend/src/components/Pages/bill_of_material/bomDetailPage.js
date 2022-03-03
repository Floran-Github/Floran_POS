import React, { Component } from "react";
import { Link } from "react-router-dom";

export class bomDetailPage extends Component {
  render() {
    return (
      <div className="col-12">
        <div className="row">
          <div className="col-12">
            <h1>Burger Detail</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="card">
              <div className="row g-0">
                <div className="col-md-4">
                  <img
                    src="https://res.cloudinary.com/floran-music/raw/upload/v1/media/blog/Welcome_Scan_aygnxt.jpg"
                    className="img-fluid rounded-start"
                    alt="..."
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-header">
                    <div className="card-tools">
                      <Link className="link" to="/billOfMaterial">
                        <i className="fas fa-edit"></i>
                      </Link>

                      <Link className="link" to="/billOfMaterial">
                        <i className="fas fa-times"></i>
                      </Link>
                    </div>
                  </div>
                  <div className="card-body">
                    <div className="row">
                      <div className="form-group border-bottom row">
                        <h5 className="col">
                          <label>Item Code</label>
                        </h5>
                        <h5 className="col">
                          <b>1</b>
                        </h5>
                      </div>

                      <div className="form-group border-bottom row">
                        <h5 className="col">
                          <label>Item Name</label>
                        </h5>
                        <h5 className="col">Burger</h5>
                      </div>

                      <div className="form-group border-bottom row">
                        <h5 className="col">
                          <label>Item Desription</label>
                        </h5>
                        <p className="col">
                          Lorem ipsum, dolor sit amet consectetur adipisicing
                          elit. Animi officia mollitia modi corporis, distinctio
                          dolorem quisquam consequuntur vel vitae aliquam
                          delectus fugiat porro. Ullam, temporibus doloribus
                          deleniti eaque id ad?
                        </p>
                      </div>

                      <div className="form-group border-bottom row">
                        <h5 className="col">
                          <label>Item Production Cost</label>
                        </h5>
                        <h5 className="col">25</h5>
                      </div>

                      <div className="form-group border-bottom row">
                        <h5 className="col">
                          <label>Item Selling Cost</label>
                        </h5>
                        <h5 className="col">35</h5>
                      </div>

                      <div className="form-group border-bottom row">
                        <h5 className="col">
                          <label>Item Receipe</label>
                        </h5>
                        <p className="col receipe-p">
                          Read through the recipe at least twice to make sure
                          that you understand the directions.
                          <br />
                          Make sure that you can perform all the techniques.
                          <br />
                          Look at the recipe yield and decide if the number of
                          servings is what you need. If not, consider whether
                          you should cut the ingredient amounts in half or
                          double them.
                          <br />
                          Check that you have all the necessary equipment and
                          ingredients.
                          <br />
                          Make sure that you have enough time before serving to
                          prepare and cook the recipe.
                          <br />
                          Check whether you can (or need to) make any part of
                          the recipe ahead of time.
                          <br />
                          Read through the ingredients to see whether you like
                          them all, as well as whether the recipe has too much
                          fat, sugar, or salt for your dietary needs.
                          <br />
                          Check whether you need to use an ingredient, such as
                          butter or oil, at different stages in the recipe so
                          that you don’t make the mistake of using that
                          ingredient all at once.
                          <br />
                          Find out whether you need to preheat the oven.
                          <br />
                        </p>
                      </div>
                    </div>
                    <div className="row">
                      <h3>Kitchen Items used</h3>
                      <div className="row">
                        <div className="col-md-4 col-12">
                          <div className="card">
                            <div className="card-body text-center">
                              <h3>Bun</h3>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-4 col-12">
                          <div className="card">
                            <div className="card-body text-center">
                              <h3>Bun</h3>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-4 col-12">
                          <div className="card">
                            <div className="card-body text-center">
                              <h3>Bun</h3>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-4 col-12">
                          <div className="card">
                            <div className="card-body text-center">
                              <h3>Bun</h3>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <h3>Inventory Items used</h3>
                      <div className="row">
                        <div className="col-md-4 col-12">
                          <div className="card">
                            <div className="card-body text-center">
                              <h3>Bun</h3>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-4 col-12">
                          <div className="card">
                            <div className="card-body text-center">
                              <h3>Bun</h3>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-4 col-12">
                          <div className="card">
                            <div className="card-body text-center">
                              <h3>Bun</h3>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-4 col-12">
                          <div className="card">
                            <div className="card-body text-center">
                              <h3>Bun</h3>
                            </div>
                          </div>
                        </div>
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

export default bomDetailPage;
