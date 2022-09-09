import React, { Component } from 'react';

class HeaderComponent extends Component {
    constructor(props) {
        super(props)
        this.state={
         
      }
    }

    render() {
        return (
            <div>
                <header>
                <nav class="navbar navbar-expand-md navbar-dark bg-dark">
                        <div><li><a href="Artist.html" className="navbar-brand">User Management List</a></li>
</div>
                    </nav>
                </header>
            </div>
        );
    }
}

export default HeaderComponent;