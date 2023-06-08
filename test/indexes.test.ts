/* eslint-disable jest/valid-title */
import { expect, test } from "@playwright/test";
import fs from "fs";
import path from "path";

const dataSketch: {
	items: {
		img: string;
		link: string;
		title: string;
	}[];
} = { items: [] };

test.describe("Cover and index generation", () => {
	const dir = fs.readdirSync("./public/pages");
	dir.forEach((id) => {
		const file = path.resolve("public/pages/", `${id}/${id}.html`);
		console.log(file);
		test(`Cover ${id}`, async ({ request, page }) => {
			await page.goto(`file:${file}`);
			await expect(page.locator("canvas")).toBeVisible();
			const cover = await page.locator("canvas").screenshot();
			fs.writeFileSync(`./public/pages/${id}/cover.png`, cover);
			const img = `./pages/${id}/cover.png`;
			const link = `/pages/${id}/${id}.html`;
			const element = { img: `${img}`, link: `${link}`, title: `${id}` };
			dataSketch.items.push(element);
			await page.pause();
		});
	});
	test("Index", async ({ request, page }) => {
		console.log(dataSketch);
		fs.writeFileSync("./src/dataSketches.json", JSON.stringify(dataSketch, undefined, 2));
	});
});
