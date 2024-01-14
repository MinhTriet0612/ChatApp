import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faPenToSquare,
	faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import "./FrameLeftChat.scss";
import React, { useState, useEffect } from "react";
import FrameMiddle from "./FrameMiddle";
import { Button, Flex } from "antd";
import { Link, Route, Routes } from "react-router-dom";

function FrameLeftChat() {
	return (
		<Flex>
			<div className="frameLeftChatContainer">
				<div className="top">
					<div className="upperContain">
						<div className="chat">Chats</div>

						<div className="pen">
							<div className="bg">
								<FontAwesomeIcon className="icon" icon={faPenToSquare} />
							</div>
						</div>
					</div>

					<form className="search">
						<div className="contain">
							<div className="containInput">
								<input
									className="searchInput"
									type="text"
									placeholder="Search messenger"
									name="search"
								/>

								<div className="searchGlass">
									<FontAwesomeIcon className="icon" icon={faMagnifyingGlass} />
								</div>
							</div>
						</div>
					</form>
				</div>

				{/* Giữa   */}
				<div className="middle">
					<div className="chat">
						<div className="avatar"></div>
						<div className="someInfor"></div>
						<Button>
							<Link to="/t/1">Chat</Link>
						</Button>
					</div>
				</div>
				<div className="bottom"></div>
			</div>
			<Routes>
				<Route path=":id" element={<FrameMiddle />} />
			</Routes>
		</Flex>
	);
}

export default FrameLeftChat;
