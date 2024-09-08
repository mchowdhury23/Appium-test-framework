const MainScreen = require("../screenObjects/Main.screen");
const HomeScreen = require("../screenObjects/Home.screen");
const StatsScreen = require("../screenObjects/Stats.screen");
const SettingsScreen = require("../screenObjects/Settings.screen");

describe("Navigation Test - Stats Tab", () => {
  it("should navigate to the Stats tab", async () => {
    await MainScreen.clickStatsTab();
  });

  it("should verify that the Stats screen is displayed", async () => {
    await StatsScreen.isStatsTitleDisplayed();
  });
});

describe("Navigation Test - Home Tab", () => {
  it("should navigate to the Home tab", async () => {
    await MainScreen.clickHomeTab();
  });

  it("should verify that the Home screen is displayed", async () => {
    await HomeScreen.isHomeTitleDisplayed();
  });
});

describe("Navigation Test - Settings Tab", () => {
  it("should navigate to the Settings tab", async () => {
    await MainScreen.clickSettingsTab();
  });

  it("should verify that the Settings screen is displayed", async () => {
    await SettingsScreen.isSettingsTitleDisplayed();
  });
});
