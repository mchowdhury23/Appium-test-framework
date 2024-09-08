class HomeScreen {
  // Locator for Home title
  get homeTitle() {
    return $('//android.view.View[@text="Home"]');
  }

  // checks if you are on the Home screen
  async isHomeTitleDisplayed() {
    try {
      return await (await this.homeTitle).isDisplayed();
    } catch (error) {
      console.error("Failed to display Home Title:", error);
      throw error;
    }
  }
}

module.exports = new HomeScreen();
