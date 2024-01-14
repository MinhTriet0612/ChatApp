import React, { Children, useState, useEffect, useCallback } from "react";
import {
	UploadOutlined,
	UserOutlined,
	VideoCameraOutlined,
} from "@ant-design/icons";
import { Layout, Menu, theme } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faComment,
	faCircleUser,
	faUserGroup,
	faDoorOpen,
	faCommentDots,
	faBoxArchive,
} from "@fortawesome/free-solid-svg-icons";
import "./Main.scss";
import { Link } from "react-router-dom";

import UserModal from "../components/Modal/UserModal";
import FrameLeftIcon from "../components/container/FrameLeftIcon";
import FrameLeftChat from "../components/container/FrameLeftChat";
import PathT from "../components/Nav/PathT";

const { Header, Content, Footer, Sider } = Layout;
const items = [
	UserOutlined,
	VideoCameraOutlined,
	UploadOutlined,
	UserOutlined,
].map((icon, index) => ({
	key: String(index + 1),
	icon: React.createElement(icon),
	label: `nav ${index + 1}`,
}));

const Main = ({ children }) => {
	const {
		token: { colorBgContainer, borderRadiusLG },
	} = theme.useToken();

	const [isClick, setIsClick] = useState("");
	const [icon, setIcon] = useState("icon");
	const [isOpen, setIsOpen] = useState(false);
	const [isOpenUserodal, setIsOpenUserodal] = useState(false);

	const handleOpenTab = (openTab) => {
		setIcon("iconActive");
		setIsClick(openTab);
	};

	const handleOpenDoor = () => {
		setIsOpen(!isOpen);
	};
	const openUserModal = () => {
		setIsOpenUserodal(!isOpenUserodal);
	};

	return (
		<>
			<div className="mainContainer">
				<div className="frameLeftIcon">
					<FrameLeftIcon />
				</div>
				<div className="frameLeftChat">{children}</div>
			</div>
		</>
	);
};
export default Main;
