import React from "react";

const Sidebar = () => {
	// const toggleMenu = useSelector((state) => state?.app?.toggleMenu);
	return (
		<div className="shadow-lg w-40 p-2">
			<ul>
				<li>Home</li>
				<li>Shorts</li>
				<li>Subscriptions</li>
			</ul>
			<h1 className="pt-2 font-bold">You</h1>

			<ul>
				<li>History</li>
				<li>Playlists</li>
				<li>Your videos</li>
				<li>Watch Later</li>
				<li>Liked Videos</li>
			</ul>
			<h1 className="pt-2 font-bold">Subscriptions</h1>
			<ul>
				<li>Trending</li>
				<li>Shopping</li>
				<li>Music</li>
				<li>Films</li>
				<li>Live</li>
			</ul>
		</div>
	);
};

export default Sidebar;
