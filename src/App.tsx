import Container from "@mui/material/Container";
import Title from "./components/Title";
import Bottom from "./components/Bottom";
import Gallery from "./components/Gallery";
import { dependenciesData, title, subtitle, text } from "./dataStatic";
import dataSketches from "./dataSketches.json";

function App() {
	return (
		<Container maxWidth="xl">
			<Title {...{ title: title, subtitle: subtitle, text: text }} />
			<Gallery {...{ items: dataSketches.items }} />
			<Bottom {...{ items: dependenciesData.items }} />
		</Container>
	);
}

export default App;
