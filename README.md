# textler.io

textler.io is a web based markdown editor, for writing and editing markdown files. It also gives you the option to export download your final result as a markdown or html file.

## Getting Started

If you want to setup the project on your local machine, you need to follow the following steps:

### Prerequisites

In order to run textler.io on you machine you need yarn. Yarn is a dependency manager.

* [Learn more about yarn](https://yarnpkg.com/en/docs/getting-started)
* [Install yarn on your system](https://yarnpkg.com/lang/en/docs/install/)


### Installing

Clone the repository to your machine and run the following command from the project root:


```
$ yarn install
```

Once all dependencies are satisfied, you can launch the local node server by running the following command:

```
$ yarn start
```

After that, the local server will launch and listen to requests coming in from port 3000.


## Deployment

If you want to build textler.io for production, you have to run the following command from the project root:

```
$ yarn build
```

A new folder called "build" will be created, with all files that you need for a production system.

## Built With

* [React](https://github.com/facebook/react) - The frontend framework used
* [markdown-it](https://github.com/markdown-it/markdown-it) - The markdown parser
* [react-ace](https://github.com/securingsincity/react-ace) - A port of cloud9's ACE editor for react
* [react-bootstrap](https://github.com/react-bootstrap/react-bootstrap) A port of bootstrap for react

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the tags on this repository.

## Authors

* **Kian Shahriyari** - [@thetruth777](https://github.com/theTruth777)
* **Levent Deniz**- [@levenzdeniz](https://github.com/leventdeniz)
* **Jan Lüthje** - [@lloydcc](https://github.com/LLoydcc)


## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
