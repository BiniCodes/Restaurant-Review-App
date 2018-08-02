# Restaurant Review App

## A project for Udacity Front-End Web Developer Nanodegree

## About this project 
The goal of this project was to convert a static webpage into a mobile-ready web application.
Therefore, responsive design needed to be added to make it usable for desktop browsers as well as
mobile devices. Furthermore, accesibility features needed to be added to make it accesible for screen reader use.
Lastly, a service worker was inserted to make the webpage display in offline modus via Cache storage.


## How to display the website

1. Download/ Clone the repository 
2. In the folder run a simple http server by using Python to serve the webpage on your localhost.
(For Python 3) In your command line run:
*Python -m http.server 8008*

The webpage would run on port 8008. If you want to run a different server port,
open the dbhelper.js file and change const port variable to your customized port.

3.Open the following link in your webbrowser: *http://localhost:8008/*
The port needs to be changed in case you used a different one.
4.The webpage is diyplayed on the localhost

## Leaflet.js and Mapbox:

This repository uses [leafletjs](https://leafletjs.com/) with [Mapbox](https://www.mapbox.com/). You need to replace `<your MAPBOX API KEY HERE>` with a token from [Mapbox](https://www.mapbox.com/). Mapbox is free to use, and does not require any payment information.


### Note about ES6

Most of the code in this project has been written to the ES6 JavaScript specification for compatibility with modern web browsers and future proofing JavaScript code. 

### Code Reference
-[Mapbox](https://www.mapbox.com/)
-[Udacity Restaurant Review App Project](https://github.com/udacity/mws-restaurant-stage-1)
-[WAI-ARIA Authoring Practices 1.1](https://www.w3.org/TR/wai-aria-practices-1.1)