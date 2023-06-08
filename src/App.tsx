import Container from "@mui/material/Container";
import Title from "./components/Title";
import Bottom from "./components/Bottom";
import Gallery from "./components/Gallery";
import { dependenciesData, itemsData } from "./data";

const title = "SAM";
const subtitle = "Sequential Access Memory";
const text: string[] = [];

function App() {
	return (
		<Container maxWidth="xl">
			<Title {...{ title: title, subtitle: subtitle, text: text }} />
			<Gallery {...{ items: itemsData.items }} />
			<Bottom {...{ items: dependenciesData.items }} />
		</Container>
	);
}

export default App;
