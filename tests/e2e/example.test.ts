import { test, expect } from "@playwright/test";

test("should navigate to the home page", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByText("Get started by editing")).toBeVisible();
});
