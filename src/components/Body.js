import React from "react";
import Sidebar from "./Sidebar";
import MainContainer from "./MainContainer";
import { useSelector } from "react-redux";

const Body = () => {
	const toggleMenu = useSelector((state) => state?.app?.isMenuOpen);
	return (
		<div className="flex ">
			{toggleMenu && <Sidebar />}
			<MainContainer />
		</div>
	);
};

export default Body;
