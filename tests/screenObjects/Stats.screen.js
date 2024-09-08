class StatsScreen {
  // Locator for Stats title
  get statsTitle() {
    return $('//android.view.View[@text="Stats"]');
  }

  // checks if you are on the Stats screen
  async isStatsTitleDisplayed() {
    try {
      return await (await this.statsTitle).isDisplayed();
    } catch (error) {
      console.error("Failed to display Stats Title:", error);
      throw error;
    }
  }
}

module.exports = new StatsScreen();
