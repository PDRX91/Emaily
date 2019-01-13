import React, { Component } from 'react';
import { connect } from 'react-redux';

class Header extends Component {
	render() {
		console.log(this.props);
		return (
			<nav>
				<div className="nav-wrapper">
					<a href="/" className="left brand-logo">
						Emaily
					</a>
					<ul className="right hide-on-med-and-down">
						<li>
							<a href="/auth/google">Login With Google</a>
						</li>
					</ul>
				</div>
			</nav>
		);
	}
}

function mapStateToProps(auth) {
	return { auth };
}

export default connect(mapStateToProps)(Header);
