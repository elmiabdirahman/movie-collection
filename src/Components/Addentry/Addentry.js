import React, { Component } from 'react';

class Addentry extends Component {
    render() {
        return (
            <form>
                <div>
                    <h1>Add Movie</h1>
                </div>
                <div class="form-group row">
                    <input type="text" class="form-control" placeholder="Name"></input>
                <br></br>
                <select class="custom-select mr-sm-2" id="inlineFormCustomSelect">
                    <option selected>Choose...</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </select>
                <label>Release Date:</label>
                <input type="date"></input>
                <input placeholder="Run Time"></input>
                <button>Submit</button>
                <br></br>
                <h2>Movie</h2>
                
                <div class="row">
                    <div class="column">
                        <div class="card">
                            {/* <img src="Elmi.jpg" alt="Elmi" style="width:100%"/> */}
                            <div class="container">
                                <h3>Elmi</h3>
                            </div>
                        </div>
                    </div>
                </div>

                </div>
            </form>
        );
    }
}

export default Addentry;