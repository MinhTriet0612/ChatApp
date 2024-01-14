import React, { Component } from "react";
import "./pathActive.scss";
import { Scrollbars } from "react-custom-scrollbars";

class pathActive extends Component {
	componentDidMount() {}

	render() {
		return (
			<div className="pathActiveContainer">
				<Scrollbars style={{ width: "100%", height: "100vh" }}>
					<div className="title">People</div>
					<div className="activeContacts">Active Contacts ( 0 )</div>

					<div className="activeList">
						<div className="activePerson">
							<div className="avatar"></div>
							<div className="name">Name</div>
						</div>
						<div className="activePerson">
							<div className="avatar"></div>
							<div className="name">Name</div>
						</div>
						<div className="activePerson">
							<div className="avatar"></div>
							<div className="name">Name</div>
						</div>
						<div className="activePerson">
							<div className="avatar"></div>
							<div className="name">Name</div>
						</div>
						<div className="activePerson">
							<div className="avatar"></div>
							<div className="name">Name</div>
						</div>
						<div className="activePerson">
							<div className="avatar"></div>
							<div className="name">Name</div>
						</div>
						<div className="activePerson">
							<div className="avatar"></div>
							<div className="name">Name</div>
						</div>
						<div className="activePerson">
							<div className="avatar"></div>
							<div className="name">Name</div>
						</div>
						<div className="activePerson">
							<div className="avatar"></div>
							<div className="name">Name</div>
						</div>
						<div className="activePerson">
							<div className="avatar"></div>
							<div className="name">Name</div>
						</div>
						<div className="activePerson">
							<div className="avatar"></div>
							<div className="name">Name</div>
						</div>
						<div className="activePerson">
							<div className="avatar"></div>
							<div className="name">Name</div>
						</div>
						<div className="activePerson">
							<div className="avatar"></div>
							<div className="name">Name</div>
						</div>
						<div className="activePerson">
							<div className="avatar"></div>
							<div className="name">Name</div>
						</div>
						<div className="activePerson">
							<div className="avatar"></div>
							<div className="name">Name</div>
						</div>
						<div className="activePerson">
							<div className="avatar"></div>
							<div className="name">Name</div>
						</div>
						<div className="activePerson">
							<div className="avatar"></div>
							<div className="name">Name</div>
						</div>
						<div className="activePerson">
							<div className="avatar"></div>
							<div className="name">Name</div>
						</div>
						<div className="activePerson">
							<div className="avatar"></div>
							<div className="name">Name</div>
						</div>
						<div className="activePerson">
							<div className="avatar"></div>
							<div className="name">Name</div>
						</div>
						<div className="activePerson">
							<div className="avatar"></div>
							<div className="name">Name</div>
						</div>
						<div className="activePerson">
							<div className="avatar"></div>
							<div className="name">Name</div>
						</div>
						<div className="activePerson">
							<div className="avatar"></div>
							<div className="name">Name</div>
						</div>
						<div className="activePerson">
							<div className="avatar"></div>
							<div className="name">Name</div>
						</div>
					</div>
				</Scrollbars>
			</div>
		);
	}
}

export default pathActive;
