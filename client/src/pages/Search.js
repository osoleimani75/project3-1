import React, { Component } from 'react';
// import MapComponent from "../components/Map/MapComponent";
// import List from "../components/List/List";
import GoogleMapReact from 'google-map-react';
import API from "../utils/API";
// import "../Styles/css/App.css";

class Search extends Component {
    state = {
        city: "",
        sales: []
    };

    static defaultProps = {

        center: {
            lat: 32.852906,
            lng: -117.1828535
        },
        zoom: 12
    };

    componentDidMount() {
        API.search("San Diego")
        .then(response => {
            this.setState({ sales: response.data });
            this.setState({ city: "" });
            // console.log(this.state.sales);
        })
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
        console.log(this.state.city.toLowerCase());
        API.search(this.state.city)
            .then(response => {
                this.setState({ sales: response.data });
                this.setState({ city: "" });
                // console.log(this.state.sales);
            })
    }

    render() {
        const Marker = sale => {
            return <div className="AwesomePin">
                <i className="fab fa-font-awesome-flag"></i>

            </div>
        }
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-6 offset-3">
                        <div className="input-group mt-3 mb-3">
                            <input type="text" className="form-control" placeholder="Search a city" name="city" onChange={this.handleInputChange} value={this.state.city} />
                            <div className="input-group-append">
                                <button className="btn btn-outline-secondary" type="submit" onClick={this.handleFormSubmit}>Search</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="row">
                        {/* <MapComponent /> */}
                        <div className="col-lg-8">
                            <div style={{ height: '80vh', width: '100%' }}>
                                <GoogleMapReact
                                    bootstrapURLKeys={{ key: "AIzaSyDk_a_MQ3sUXYg2Y6oI-cxtuKXuoUtbOEM" }}
                                    defaultCenter={this.props.center}
                                    defaultZoom={this.props.zoom}>

                                    {this.state.sales.map(sale => {
                                        console.log(sale);
                                        return <Marker lat={sale.addressLat} lng={sale.addressLong} />
                                    })}
                                </GoogleMapReact>
                            </div>
                        </div>

                        {/* <List /> */}
                        <div className="col-lg-4">
                            <ul className="list-group" style={{ "overflowY": "scroll", "height": "54%" }}>
                                {this.state.sales.map(sale => {
                                    return (
                                        <li key={sale._id} className="list-group-item mb-3">
                                            <h5><strong>{sale.title}</strong></h5>
                                            <p>Description: {sale.description}</p>
                                            <p>Start: {sale.startTime}</p>
                                            <p>End: {sale.endTime}</p>
                                            <p>Address: {sale.address}, {sale.city}, {sale.state} {sale.zip}</p>
                                            <p>Posted on {sale.createdAt}</p>
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}



export default Search;