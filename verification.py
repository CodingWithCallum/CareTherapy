from playwright.sync_api import sync_playwright

def test_services_page():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()
        page.goto("http://localhost:3000/services")

        # Take a screenshot to verify the image changes (Sports Recovery instead of Rehabilitation)
        # Note: the actual image files might not exist if they weren't downloaded, but the image alt or source might be visible.
        page.screenshot(path="verification.png", full_page=True)
        browser.close()

if __name__ == "__main__":
    test_services_page()
