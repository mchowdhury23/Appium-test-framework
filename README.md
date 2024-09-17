
# Hey Linda Test Framework

This repository contains a **WebdriverIO + Appium** test framework that automates tests for the **Hey Linda** app (`hey-linda-prod.apk`). The APK is hosted in Dropbox, and its link is included in the `ci.yml` file.
Additional app info here : https://github.com/heylinda/heylinda-app

## CI Status
You can view the latest successful build here: https://github.com/mchowdhury23/heyLindaTest/actions/runs/10793289725/job/29934866628

## Getting Started
Getting Started
Prerequisites
Before you can get the test framework running, make sure you have the following installed:

1. Node.js (v16.13.0 or lower)
The tests rely on this specific version of Node.js. Anything newer might break things. If you're not sure how to install a specific version, try using Node Version Manager (nvm):
You can use tools like [nvm](https://github.com/nvm-sh/nvm) to manage and switch between Node.js versions.
nvm install 16.13.0
nvm use 16.13.0

2. Java Development Kit (JDK) 11
This is needed for Appium to work. You can install it with:
choco install openjdk11

3. Appium
Appium is required to run the mobile tests. Install it globally with npm:
npm install -g appium

4. Android SDK & Emulator
Make sure the Android SDK is set up and the emulator is working on your machine.

5. Installation
A. Clone the repo:
git clone https://github.com/mchowdhury23/heyLindaTest.git
cd heyLindaTest
B. Install the dependencies: Inside the project folder, run:
npm install

The APK (hey-linda-prod.apk) is pulled from Dropbox during the CI process. If you need it locally for testing, you can find the Dropbox link in the CI configuration.

6. Start appium server
Start the Appium server:
npx appium -p 4724

7. Run the tests locally: Run WebdriverIO with:
npx wdio



