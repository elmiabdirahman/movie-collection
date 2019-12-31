import React, { Component } from 'react';

class Manage extends Component {
    render() {
        return (
            <form>
                <div>
                    <h1>Add Genre</h1>
                </div>
                <div>
                    <input type="text" placeholder="Project name"></input>
                    <button>Submit</button>
                    <br></br>
                    <h2>Projects</h2>
                    <table>
                        <thead>
                            <tr>
                                <th>Project</th>
                                <th>Total Movies</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Scifi</td>
                                <td>2</td>
                                <td>Delete</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </form>
        );
    }
}

export default Manage;