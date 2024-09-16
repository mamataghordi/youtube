import Header from "./components/Header";
import Body from "./components/Body";

const App = () => {
	return (
		<>
			<Header />
			<Body />
		</>
	);
};

export default App;

// import { useState } from "react";

// const App = () => {
// 	const [input, setInput] = useState("");
// 	const [todo, setTodo] = useState([]);
// 	const [isEditing, setIsEditing] = useState(false);
// 	const [editText, setEditText] = useState();
// 	const [currentIndex, setCurrentIndex] = useState(null);
// 	const addHandler = () => {
// 		setTodo([input, ...todo]);
// 		setInput("");
// 	};
// 	const deleteHandler = (id) => {
// 		const updatedTodo = todo.filter((_, i) => i !== id);
// 		setTodo(updatedTodo);
// 	};
// 	const editHandler = (id) => {
// 		setEditText(todo[id]);
// 		setIsEditing(true);
// 		setCurrentIndex(id);
// 	};
// 	const saveHandler = () => {
// 		const updatedTodo = todo.map((t, i) =>
// 			i === currentIndex ? editText : todo
// 		);
// 		setTodo(updatedTodo);
// 		setEditText("");
// 		setInput("");
// 		setCurrentIndex(null);
// 	};
// 	return (
// 		<>
// 			<div>
// 				{isEditing ? (
// 					<div>
// 						<input
// 							value={editText}
// 							onChange={(e) => setEditText(e.target.value)}
// 							className="border border-black"
// 							type="text"
// 						/>
// 						<button onClick={saveHandler} className="border border-black">
// 							Save
// 						</button>
// 					</div>
// 				) : (
// 					<div>
// 						<input
// 							value={input}
// 							onChange={(e) => setInput(e.target.value)}
// 							className="border border-black"
// 							type="text"
// 						/>
// 						<button onClick={addHandler} className="border border-black">
// 							Add
// 						</button>
// 					</div>
// 				)}
// 			</div>
// 			<div>
// 				{todo.map((todo, id) => (
// 					<li key={id}>
// 						{todo}
// 						<button
// 							onClick={() => editHandler(id)}
// 							className="border border-black"
// 						>
// 							Edit
// 						</button>
// 						<button
// 							onClick={() => deleteHandler(id)}
// 							className="border border-black"
// 						>
// 							Delete
// 						</button>
// 					</li>
// 				))}
// 			</div>
// 		</>
// 	);
// };
// export default App;
