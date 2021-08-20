# :zap: Svelte AJAX Observables

* Sveltejs sandbox using Rxjs/ajax to fetch API observable data.
* **Note:** to open web links in a new window use: _ctrl+click on link_

![GitHub repo size](https://img.shields.io/github/repo-size/AndrewJBateman/svelte-ajax-observables?style=plastic)
![GitHub pull requests](https://img.shields.io/github/issues-pr/AndrewJBateman/svelte-ajax-observables?style=plastic)
![GitHub Repo stars](https://img.shields.io/github/stars/AndrewJBateman/svelte-ajax-observables?style=plastic)
![GitHub last commit](https://img.shields.io/github/last-commit/AndrewJBateman/svelte-ajax-observables?style=plastic)

## :page_facing_up: Table of contents

* [:zap: Svelte AJAX Observables](#zap-svelte-ajax-observables)
  * [:page_facing_up: Table of contents](#page_facing_up-table-of-contents)
  * [:books: General Info](#books-general-info)
  * [:camera: Screenshots](#camera-screenshots)
  * [:signal_strength: Technologies](#signal_strength-technologies)
  * [:floppy_disk: Setup](#floppy_disk-setup)
  * [:computer: Code Examples](#computer-code-examples)
  * [:clipboard: Status & To-Do List](#clipboard-status--to-do-list)
  * [:clap: Inspiration](#clap-inspiration)
  * [:file_folder: License](#file_folder-license)
  * [:envelope: Contact](#envelope-contact)

## :books: General info

* Displays API observable data such as Github user details
* Note: Rxjs 'startWith' used to initialise fetch with an empty array
* Note: Rxjs 'pluck operator deprecated - replaced with map()

## :camera: Screenshots

![Frontend screenshot](./imgs/list.png)

## :signal_strength: Technologies

* [Snowpack](https://www.snowpack.dev/) frontend build tool, alternative to webpack or Parcel etc.
* [Sveltejs/kit v3](https://kit.svelte.dev/) fast front-end UI library with small bundles of highly-optimized vanilla JavaScript & declarative transitions. Does not use a virtual DOM.
* [rxjs](https://rxjs.dev/) Reactive Extensions JS library
* [rxjs/ajax](https://rxjs.dev/api/ajax/ajax) used to fetch Github API observable
* [Github REST API v2](https://docs.github.com/en/rest/reference/users) RESTful API with data on all world countries. [Get a Github access token](https://github.com/settings/tokens) so API access not limited

## :floppy_disk: Setup

* `npm i` to install dependencies
* `npm start` to run dev server on port `localhost:8080`
* `npm run build` to build a static copy of app to a `build/` folder

## :wrench: Testing

* N/A

## :computer: Code Examples

* N/A

## :cool: Features

* Observables can be displayed in Svelte markup with a preceding $

## :clipboard: Status & To-Do List

* Status: Working
* To-Do: Try out more rxjs methods

## :clap: Inspiration
* [Rxjs API list](https://rxjs.dev/api)

## :file_folder: License

* This project is licensed under the terms of the MIT license.

## :envelope: Contact

* Repo created by [ABateman](https://github.com/AndrewJBateman), email: gomezbateman@yahoo.com
