class SettingsScreen {
  // Locator for Settings title
  get settingsTitle() {
    return $('//android.view.View[@text="Settings"]');
  }

  // checks if you are on the Settings screen
  async isSettingsTitleDisplayed() {
    try {
      return await (await this.settingsTitle).isDisplayed();
    } catch (error) {
      console.error("Failed to display Settings Title:", error);
      throw error;
    }
  }
}

module.exports = new SettingsScreen();
