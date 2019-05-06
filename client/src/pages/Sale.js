import React, { Component } from 'react';
import Geocode from "react-geocode";
import './assets/css/sale.css'
import API from "../utils/API";
// import { BrowserRouter as Router, Route, Link, Redirect, withRouter } from "react-router-dom";
import AuthService from './../components/AuthService';
// import Login from './Login'


class Sale extends Component {
    constructor() {
        super();
        this.Auth = new AuthService();
    }
    state = {
        title: "",
        description: "",
        address: "",
        startTime: "",
        endTime: "",
        city: "",
        state: "",
        zip: "",
        addressLat: "",
        addressLong: "",
        image1: "",
        image2: "",
        image3: ""
    }

    handleInputChange = event => {
        // console.log(event.target);
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    }

    handleFormSubmit = event => {
        event.preventDefault();
        console.log(this.state);
        // Converting address to latitude and longitude coordinates
        Geocode.setApiKey("AIzaSyBLimj2eXL-OopKVfmWs6yLMSEXZ12M7Z0");
        let address = (`${this.state.address}, ${this.state.city}, ${this.state.state} ${this.state.zip}`);
        console.log(address);
        Geocode.fromAddress(address).then(
            response => {
            //   const { lat, lng } = response.results[0].geometry.location;
              let lat = response.results[0].geometry.location.lat;
              let lng = response.results[0].geometry.location.lng;
            //   console.log(lat,lng);
            //   console.log(`${address},  Lat: ${lat}, Long: ${lng}`);
                this.setState({
                    addressLat: lat.toString(),
                    addressLong: lng.toString()
                });
                API.add(this.state)
                .then(response => {
                    alert("Garage sale added!");
                })
                // console.log(this.state);
            },
            error => {
              console.error(error);
            }
          );
        // console.log(this.state);
    }


    showSale = () => {
        if (this.Auth.loggedIn()) {
            return (
                <div className="page-container">
                <div className="jumbotron mt-3">
                    <h1 className="salehead" style={{ textAlign: "center" }}>ADD A SALE!</h1>
                    <div className="saleCard">
                    <form>
                        <div className="form-group">
                            <label for="title">Title</label>
                            <input type="text" className="form-control" name="title" placeholder="Enter a title" value={this.state.title} onChange={this.handleInputChange} required />
                        </div>
                        <div className="form-group">
                            <label for="description">Description</label>
                            <input type="text" className="form-control" name="description" placeholder="Enter a description" value={this.state.description} onChange={this.handleInputChange} required />
                        </div>
                        <div className="form-group">
                            <label for="startTime">Start</label>
                            <input type="text" className="form-control" name="startTime" placeholder="When will it start?" value={this.state.startTime} onChange={this.handleInputChange} required />
                        </div>
                        <div className="form-group">
                            <label for="endTime">End</label>
                            <input type="text" className="form-control" name="endTime" placeholder="When will it end?" value={this.state.endTime} onChange={this.handleInputChange} required />
                        </div>
                        <div className="form-group">
                            <label for="address">Address</label>
                            <input type="text" className="form-control" name="address" placeholder="1234 Main Street" value={this.state.address} onChange={this.handleInputChange} required />
                        </div>
                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <label for="city">City</label>
                                <input type="text" className="form-control" name="city" placeholder="Enter a city" value={this.state.city} onChange={this.handleInputChange} required />
                            </div>
                            <div className="form-group col-md-4">
                                <label for="state">State</label>
                                <input type="text" className="form-control" name="state" placeholder="Ex: CA" value={this.state.state} onChange={this.handleInputChange} required />
                            </div>
                            <div className="form-group col-md-2">
                                <label for="zip">Zip</label>
                                <input type="text" className="form-control" name="zip" placeholder="12345" value={this.state.zip} onChange={this.handleInputChange} required />
                            </div>
                        </div>
                        <div className="form-group">
                            <label for="image1">Image 1</label>
                            <input type="text" className="form-control" name="image1" placeholder="image.jpg" value={this.state.image1} onChange={this.handleInputChange} required />
                        </div>
                        <div className="form-group">
                            <label for="image2">Image 2</label>
                            <input type="text" className="form-control" name="image2" placeholder="anotherImage.jpg" value={this.state.image2} onChange={this.handleInputChange} required />
                        </div>
                        <div className="form-group">
                            <label for="image3">Image 3</label>
                            <input type="text" className="form-control" name="image3" placeholder="yetAnotherImage.jpg" value={this.state.image3} onChange={this.handleInputChange} required />
                        </div>
                        <button to="/search" type="submit" className="btn btn-primary" onClick={this.handleFormSubmit} data-toggle="modal" data-target="#exampleModal">Add!</button>
                        {/* Modal to confirm the sale was added and gives a summary */}
                        <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div class="modal-dialog" role="document">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h5 class="modal-title" id="exampleModalLabel">Your sale has been added!</h5>
                                    </div>
                                    <div class="modal-body">
                                        <h5>Summary</h5>
                                        <h6>Title: {this.state.title}</h6>
                                        <p>Description: {this.state.description}</p>
                                        <p>Start: {this.state.startTime}</p>
                                        <p>End: {this.state.endTime}</p>
                                        <p>Address: {this.state.address}, {this.state.city}, {this.state.state} {this.state.zip}</p>
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                    </div>
                </div>
            </div >
            )
        } else {
        }
    };
    render() {
        return (
            <div>
                {this.showSale()}
            </div>
        )
    }
}


export default Sale;