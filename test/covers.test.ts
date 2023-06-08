import { expect, test } from "@playwright/test";
import fs from "fs";

test.describe("Cover generation", () => {
	test("Test", async ({ request, page }) => {
		await page.goto("file:" + "/home/sdebenedictis/Documenti/Progetti/sdb-app/src/pages/001/001.html");
		await expect(page.locator("canvas")).toBeVisible();
		const cover = await page.locator("canvas").screenshot();
		fs.writeFileSync("/home/sdebenedictis/Documenti/Progetti/sdb-app/src/pages/001/cover.png", cover);
		await page.pause();
	});
});
