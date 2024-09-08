// class MainScreen {
//   // Locator for Home, Settings, and Stats tabs on the Main screen
//   get homeTab() {
//     const homeSelector = 'new UiSelector().text("Home")';
//     return $(`android=${homeSelector}`);
//   }

//   get settingsTab() {
//     const settingsTabSelector = 'new UiSelector().text("Settings")';
//     return $(`android=${settingsTabSelector}`);
//   }

//   get statsTab() {
//     const statsTabSelector = 'new UiSelector().text("Stats")';
//     return $(`android=${statsTabSelector}`);
//   }

//   // Locator for Anxiety section's "Deep and Quick Relaxation"
//   get deepRelaxationTile() {
//     const deepRelaxationSelector =
//       'new UiSelector().text("Deep and Quick Relaxation")';
//     return $(`android=${deepRelaxationSelector}`);
//   }

//   // Click Actions
//   async clickHomeTab() {
//     try {
//       await (await this.homeTab).click();
//     } catch (error) {
//       console.error("Failed to click Home Tab:", error);
//       throw error;
//     }
//   }

//   async clickSettingsTab() {
//     try {
//       await (await this.settingsTab).click();
//     } catch (error) {
//       console.error("Failed to click Settings Tab:", error);
//       throw error;
//     }
//   }

//   async clickStatsTab() {
//     try {
//       await (await this.statsTab).click();
//     } catch (error) {
//       console.error("Failed to click Stats Tab:", error);
//       throw error;
//     }
//   }

//   async clickDeepRelaxationTile() {
//     try {
//       await (await this.deepRelaxationTile).click();
//     } catch (error) {
//       console.error("Failed to click Deep and Quick Relaxation Tile:", error);
//       throw error;
//     }
//   }
// }

// module.exports = new MainScreen();
//------------

class MainScreen {
  // Locators for Home, Settings and Stats tabs
  get homeTab() {
    const homeSelector = 'new UiSelector().text("Home")';
    return $(`android=${homeSelector}`);
  }

  get settingsTab() {
    const settingsTabSelector = 'new UiSelector().text("Settings")';
    return $(`android=${settingsTabSelector}`);
  }

  get statsTab() {
    const statsTabSelector = 'new UiSelector().text("Stats")';
    return $(`android=${statsTabSelector}`);
  }

  // Click Actions
  async clickHomeTab() {
    try {
      await (await this.homeTab).click();
    } catch (error) {
      console.error("Failed to click Home Tab:", error);
      throw error;
    }
  }

  async clickSettingsTab() {
    try {
      await (await this.settingsTab).click();
    } catch (error) {
      console.error("Failed to click Settings Tab:", error);
      throw error;
    }
  }

  async clickStatsTab() {
    try {
      await (await this.statsTab).click();
    } catch (error) {
      console.error("Failed to click Stats Tab:", error);
      throw error;
    }
  }
}
module.exports = new MainScreen();
