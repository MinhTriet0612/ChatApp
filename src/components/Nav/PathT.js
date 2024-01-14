import React, { useState } from "react";
import FrameMiddle from "../container/FrameMiddle";
import FrameRight from "../container/FrameRight";
import "./pathT.scss";
import { Button } from "antd";

const PathT = () => {
	const [isClick, setIsClick] = useState(true);

	const handleClickButton = () => {
		setIsClick((prev) => {
			return !prev;
		});
	};

	const handleExtendFrameMiddle = (click) => {
		setIsClick(click);
	};

	return (
		<div className="containerPathT">
			{/* <div className={isClick === true ? "frameMiddle" : "frameMiddle Active"}>
				<FrameMiddle handleExtend={(param) => handleExtendFrameMiddle(param)} />
			</div> */}
			{/* <div className="frameRightPathT">
				<FrameRight />
			</div> */}
			{/* <Button onClick={() => handleClickButton()}>HIHIHI</Button> */}
		</div>
	);
};

export default PathT;
