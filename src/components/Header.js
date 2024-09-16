import React from "react";
import { toggleMenu } from "../utils/appSlice";
import { useDispatch } from "react-redux";

const Header = () => {
	const dispatch = useDispatch();
	const toggleMenuHandler = () => {
		dispatch(toggleMenu());
	};
	return (
		<div className="flex  items-center justify-between p-2 m-2 shadow-lg">
			{/* Logo Section */}
			<div className="flex items-center">
				<img
					onClick={() => toggleMenuHandler()}
					className="h-16 cursor-pointer"
					src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRU2g1vSMPO0qtLUm0hoW1zMQl9lrI-__LixA&s"
					alt="Logo 1"
				/>
				<img
					className="h-16 ml-4"
					src="https://cdn.mos.cms.futurecdn.net/8gzcr6RpGStvZFA2qRt4v6.jpg"
					alt="Logo 2"
				/>
			</div>

			{/* Search Bar Section */}
			<div className="flex-grow mx-4">
				<div className="flex">
					<input
						placeholder="Search"
						className="border  border-gray-500 w-full px-4 py-2 rounded-full rounded-r-none"
						type="text"
					/>
					<button className="bg-blue-600 text-white px-4 py-2 ml-0 rounded-full rounded-l-none"></button>
				</div>
			</div>

			{/* User Icon Section */}
			<div className="flex justify-end">
				<img
					className="h-12"
					src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
					alt="User Icon"
				/>
			</div>
		</div>
	);
};

export default Header;
