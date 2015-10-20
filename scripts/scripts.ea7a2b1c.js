"use strict";angular.module("localAngularDocsApp",["ngAnimate","ngCookies","ngResource","ngRoute","ngSanitize","ngTouch"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl",controllerAs:"main"}).when("/docs/schemas",{templateUrl:"views/docs/schemas.html",controller:"AboutCtrl",controllerAs:"about"}).when("/docs/routes/giftcards",{templateUrl:"views/docs/routes/giftcards.html",controller:"GiftcardsCtrl",controllerAs:"giftcards"}).when("/docs/routes/locations",{templateUrl:"views/docs/routes/locations.html",controller:"LocationsCtrl",controllerAs:"locations"}).when("/docs/routes/owners",{templateUrl:"views/docs/routes/owners.html",controller:"OwnersCtrl",controllerAs:"owners"}).when("/docs/routes/users",{templateUrl:"views/docs/routes/users.html",controller:"UsersCtrl",controllerAs:"users"}).when("/docs/routes",{templateUrl:"views/docs/routes/routes.html",controller:"RoutespageCtrl",controllerAs:"routesPage"}).when("/docs/triconcodes",{templateUrl:"views/docs/triconcodes.html",controller:"TriconcodesCtrl",controllerAs:"triconCodes"}).when("/manuals/ngrok",{templateUrl:"views/manuals/ngrok.html",controller:"NgrokCtrl",controllerAs:"ngrok"}).when("/docs",{templateUrl:"views/docs/docs.html",controller:"DocsCtrl",controllerAs:"docs"}).when("/manuals",{templateUrl:"views/manuals/manuals.html",controller:"ManualsCtrl",controllerAs:"manuals"}).otherwise({redirectTo:"/"})}]),angular.module("localAngularDocsApp").controller("MainCtrl",function(){this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}),angular.module("localAngularDocsApp").controller("GitcardsCtrl",function(){this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}),angular.module("localAngularDocsApp").controller("LocationsCtrl",function(){this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}),angular.module("localAngularDocsApp").controller("OwnersCtrl",function(){this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}),angular.module("localAngularDocsApp").controller("UsersCtrl",function(){this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}),angular.module("localAngularDocsApp").controller("RoutespageCtrl",function(){this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}),angular.module("localAngularDocsApp").controller("TriconcodesCtrl",function(){this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}),angular.module("localAngularDocsApp").controller("NgrokCtrl",function(){this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}),angular.module("localAngularDocsApp").controller("DocsCtrl",function(){this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}),angular.module("localAngularDocsApp").controller("ManualsCtrl",function(){this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}),angular.module("localAngularDocsApp").run(["$templateCache",function(a){a.put("views/docs/docs.html",'<h2><b>Docs</b></h2> The documentation for code in Localight<br><br> <a href="#/docs/routes/">Routes</a><br> <a href="#/docs/schemas">Schemas</a><br> <a href="#/docs/triconcodes">Tricon Codes</a><br>'),a.put("views/docs/schemas.html",'<h1>Schemas</h1> <h2>Users</h2> <div class="indentBlock"> name<br> email<br> phone - required<br> password<br> salt<br> created<br> updated<br> </div> <h2>Giftcards</h2> <div class="indentBlock"> fromId -> users._id - required<br> toId -> users._id - required<br> amount - required<br> iconId - required<br> message - required<br> stripeOrderId<br> sendDate<br> sent<br> </div> <h2>Locations</h2> <div class="indentBlock"> name - required<br> triconKey - required<br> address1 - required<br> address2<br> city<br> state<br> zipcode<br> ownerId -> owners._id - required<br> </div> <h2>Owners</h2> <div class="indentBlock"> name - required<br> stripeCustomerId - required<br> email - required<br> password - required<br> salt - required<br> created<br> updated<br> </div> <h2>Sessions</h2> <div class="indentBlock"> accountId -> (users._id || owners._id)<br> type<br> token<br> </div>'),a.put("views/docs/triconcodes.html",'<h2><b>Tricon Codes</b></h2> <div class="indentBlock"> <b>Eatery</b>{<br> <div class="indentBlock"> "cupcake": "e101",<br> "sandwich": "e102",<br> "sushi": "e103",<br> "dinner": "e104",<br> "pho-soup": "e105",<br> "wine": "e106"<br> "coffee": "e107",<br> "sundae": "e108",<br> "pie": "e109"<br> </div> } </div> <br>'),a.put("views/main.html",'<div class="jumbotron"> <h1>\'Allo, \'Allo!</h1> <p class="lead"> <img src="images/yeoman.8cb970fb.png" alt="I\'m Yeoman"><br> Always a pleasure scaffolding your apps. </p> <p><a class="btn btn-lg btn-success" ng-href="#/">Splendid!<span class="glyphicon glyphicon-ok"></span></a></p> </div> <div class="row marketing"> <h4>Localight Documentation</h4> <p> This is the work in progress for the documentation of the Localight application. Currently, our focus is to show all of the schemas and routes for the backend. </p> </div>'),a.put("views/manuals/manuals.html",'<h2><b>Manuals</b></h2> The documentation for software and standards used in Localight development<br><br> <a href="#/manuals/ngrok">Ngrok</a><br>'),a.put("views/manuals/ngrok.html",'<h2><b>Ngrok Setup Guide</b></h2> Setting up the magical ngrok<br><br><br> Steps:<br><br> - Download our SSL compiled ngrok (not from ngrok site) <a href="files/linux/ngrok">Linux</a> <a href="files/osx/ngrok">OSX</a><br> - Start ngrok once from terminal with no arguments (./ngrok) and then quit it.<br><br> Using nano, edit ~/.ngrok (autogenerated config file), and add the following code.<br> Every ~~INSTRUCTION~~ should be replaced with your own information. (do not leave these in the file)<br><br> <div class="indentBlock"> http_proxy: "http://127.0.0.1:8888" ~~Include this line if you want to use charles~~<br> server_addr: "ngrok.kondeo.com:4443"<br> trust_host_root_certs: "false"<br> tunnels:<br> <div class="indentBlock"> ~~Tunnel name, such as juliantunnel~~:<br> <div class="indentBlock"> proto:<br> <div class="indentBlock"> http: ~~Port of your grunt server~~ </div> </div> </div> </div> <br> Make sure that the file is spaced in correctly from copy/pasta! DO NOT use tabs!!!<br> I explain this file at the end of this document in more detail. For now, lets start the tunnel!<br><br> Open your terminal, and enter the following command from the directory your ngrok is in:<br><br> <div class="indentBlock"> "./ngrok start ~~tunnel name~~" </div><br> You will now be able to access your localhost from tunnelname.ngrok.kondeo.com (no port number). It will automatically be tunneled to your localhost, at the port you specified.<br><br>')}]);