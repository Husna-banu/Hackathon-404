# SafEscape

## Contents

1. [Short description](#short-description)
1. [Demo video](#demo-video)
1. [The architecture](#the-architecture)
1. [Long description](#long-description)
1. [Project roadmap](#project-roadmap)
1. [Getting started](#getting-started)
1. [Running the tests](#running-the-tests)
1. [Live demo](#live-demo)
1. [Built with](#built-with)
1. [Contributing](#contributing)
1. [Versioning](#versioning)
1. [Authors](#authors)
1. [License](#license)
1. [Acknowledgments](#acknowledgments)

## Short Description

### What's the problem?

Life for the hospitality industry has changed drastically due to the coronavirus pandemic and the future of hotels will look drastically different in a post COVID world. With new guidelines coming in from the tourism ministry, hotels and accommodation units have to ensure  social distancing and adequate safety & hygiene measures. 

### How can technology help?

Sustaining a hospitality business is all about the amazing guest experience and carving ‘brand identity’ in an ever-evolving market. . “Touchless Hospitality” will be the new order. Hotels will now be chosen basis the levels of safety and hygiene instead of the fancy perks. 
Automation in guest-facing hotel functionalities like mobile check-in, in-room smart hotel technology helps in adding the ‘wow’ factor in guest service delivery. It also influences your guest decision making- either they will think – ‘Never here again’ or they will think- ‘I am coming again.’


### The idea

Human beings by nature long for travel and discover new places. Hospitality industry have to shift the way they manage guest services in times of crises such as the COVID-19 pandemic. Providing solution catered to guest comfort & safety, backed by IBM Cloud & Watson Services will enable the hospitality industry to bounce back in business quickly.

## Demo video

[![Watch the video](https://github.com/Code-and-Response/Liquid-Prep/blob/master/images/IBM-interview-video-image.png)](https://youtu.be/vOgCOoy_Bx0)

## The architecture


## Project roadmap

![Roadmap](roadmap.jpg)

## Getting started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

What things you need to install the software and how to install them

```bash
brew install node
brew install watchman
```
For ios:
 1. Xcode from Mac App Store.
 1. CocoaPods
```bash
sudo gem install cocoapods
```
For Android:
```bash
brew cask install adoptopenjdk/openjdk/adoptopenjdk8
```
1. ![Android Studio](https://developer.android.com/studio/index.html)
1. Install the Android SDK
1. Configure the ANDROID_HOME environment variable
    Add the following lines to your ```bash $HOME/.bash_profile ``` or ```bash $HOME/.bashrc``` config file:
    ```bash
          export ANDROID_HOME=$HOME/Library/Android/sdk
          export PATH=$PATH:$ANDROID_HOME/emulator
          export PATH=$PATH:$ANDROID_HOME/tools
          export PATH=$PATH:$ANDROID_HOME/tools/bin
          export PATH=$PATH:$ANDROID_HOME/platform-tools
      ```
   For more details on installation ![click here](https://reactnative.dev/docs/environment-setup) and select the tab `React Native CLI Quickstart`

### Installing

Step 1:

```bash
git clone https://github.com/Husna-banu/Hackathon-404.git
```
Step 2:
```bash
  cd Hackathon404/frontend/Hackathon404/
  npm install
```
Step 3:
For ios:
```bash
  npm run ios
```
For android:
```bash
  npm start (in one terminal)
  npm run android (in another terminal)
```

## Running the tests

Explain how to run the automated tests for this system

### Break down into end to end tests

Explain what these tests test and why, if you were using something like `mocha` for instnance

```bash
npm install mocha --save-dev
vi test/test.js
./node_modules/mocha/bin/mocha
```

### And coding style tests

Explain what these tests test and why, if you chose `eslint` for example

```bash
npm install eslint --save-dev
npx eslint --init
npx eslint sample-file.js
```

## Live demo

You can find a running system to test at [callforcode.mybluemix.net](http://callforcode.mybluemix.net/)

## Built with

* [IBM Cloudant](https://cloud.ibm.com/catalog?search=cloudant#search_results) - The NoSQL database used
* [IBM Cloud Functions](https://cloud.ibm.com/catalog?search=cloud%20functions#search_results) - The compute platform for handing logic
* [IBM API Connect](https://cloud.ibm.com/catalog?search=api%20connect#search_results) - The web framework used
* [Dropwizard](http://www.dropwizard.io/1.0.2/docs/) - The web framework used
* [Maven](https://maven.apache.org/) - Dependency management
* [ROME](https://rometools.github.io/rome/) - Used to generate RSS Feeds

## Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/your/project/tags).

## Authors

* **Billie Thompson** - *Initial work* - [PurpleBooth](https://github.com/PurpleBooth)

See also the list of [contributors](https://github.com/Code-and-Response/Project-Sample/graphs/contributors) who participated in this project.

## License

This project is licensed under the Apache 2 License - see the [LICENSE](LICENSE) file for details

## Acknowledgments

* Based on [Billie Thompson's README template](https://gist.github.com/PurpleBooth/109311bb0361f32d87a2).
