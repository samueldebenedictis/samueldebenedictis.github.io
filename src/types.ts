export type TitleProps = {
	title: string;
	subtitle: string;
	text: string[];
};

export type GalleryProps = {
	items: {
		img: string;
		title: string;
	}[];
};

export type BottomProps = {
	items: { name: string; link: string }[];
};

export {};
