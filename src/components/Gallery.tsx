import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import Link from "@mui/material/Link";
import { GalleryProps } from "../types";

function Gallery(p: GalleryProps) {
	return (
		<ImageList gap={10} cols={3} rowHeight={"auto"}>
			{p.items.map((item) => (
				<Link href={item.img} key={item.title}>
					<ImageListItem>
						<img
							style={{ filter: "saturate(0)" }}
							src={item.img}
							srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
							alt={item.title}
							loading="lazy"
						/>
					</ImageListItem>
				</Link>
			))}
		</ImageList>
	);
}

export default Gallery;
