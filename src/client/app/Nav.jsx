var React = require("react");

module.exports = React.createClass({
    render: function() {
        return(
            <div className="navbar navbar-inverse navbar-fixed-top">
                <div className="navbar-header">
                    <a className="navbar-brand" href="#">brandybucks</a>
                    <ul className="navbar-nav nav-fill">
                      <li className="nav-item">
                        <a className="nav-link" href="#">Home</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#">Create Log</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link disabled" href="#">Sign Out</a>
                      </li>
                    </ul>
                </div>
                <div className="side-nav">
                    <ul className="side-nav">
                    <li><a><img src="https://t1.rbxcdn.com/52ed596ced6630987d05c5cc688e3af5" width="150" /><br /><br />Student Name</a></li>
                        <li>
                            <a href="index.html">Goals</a>
                        </li>
                        <li>
                            <a href="index.html">IEP</a>
                        </li>
                        <li>
                            <a href="index.html">Meeting Notes</a>
                        </li>
                        <li>
                            <a href="index.html">Updates / Logs</a>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
})