import "./App.scss";

import MainBlock from "./components/MainBlock/MainBlock";
import LeftMenu from "./components/LeftMenu/LeftMenu";


function App({ items }) {
	return (
		<div className="App">
			<LeftMenu />
			<MainBlock />
		</div>
	);
}

export default App;
