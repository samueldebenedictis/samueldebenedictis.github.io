import { BottomProps } from "./types";

export const title = "SAM";
export const subtitle = "Sequential Access Memory";
export const text: string[] = [];

export const dependenciesData: BottomProps = {
	items: [
		{
			name: "canvas-sketch",
			link: "https://github.com/mattdesl/canvas-sketch",
		},
		{ name: "p5.js", link: "https://p5js.org/" },
		{ name: "chroma.js", link: "https://www.vis4.net/chromajs/" },
	],
};

export {};
