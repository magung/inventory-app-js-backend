# RESTful API Inventory App
![](https://img.shields.io/badge/Code%20Style-Standard-yellow.svg)
![](https://img.shields.io/badge/Dependencies-Express-green.svg)
![](https://img.shields.io/npm/v/npm.svg)
[![Node.js](https://img.shields.io/badge/Node.js-v.10.16-green.svg?style=rounded-square)](https://nodejs.org/)
<p align="center">
  <a href="https://nodejs.org/">
    <img alt="restfulapi" title="Restful API" src="https://cdn-images-1.medium.com/max/871/1*d2zLEjERsrs1Rzk_95QU9A.png">
  </a>
</p>

----
## Table of contens
* [Prerequiste](#prerequiste)
* [Installation](#installation)
* [Documentation](#documentation)
## Prerequiste
- Node.js - Download and Install [Node.js](https://nodejs.org/en/) with [NVM](https://github.com/creationix/nvm) (Node Version Manager) - Simple bash script to manage multiple active node.js versions.
- MySQL - Download and Install [MySQL](https://www.mysql.com/downloads/) - Make sure it's running on the default port.
- Postman - Download and Install [Postman](https://www.getpostman.com/downloads) - Implementation with postman latest version.

## Installation
### Clone
```
$ git clone https://github.com/magung/inventory-app-js-backend.git
$ cd js-backend-inventory
$ npm install
```
### Create Environment Variable
```
$ cp .envexample .env
$ nano .env
```

```
SERVER_PORT = YOUR-PORT

DB_HOST = "YOU-DB-HOST"
DB_USER = "YOUR-DB-USER"
DB_PASSWORD = "YOUR-DB-PASSWORD"
DB_NAME = "YOUR-DB-NAME"

JWT_SECRET = "YOUR-SECRET"
```
### Start Development Server
```
$ npm start
```

## Documentation

### Products Routes
#### GET Request
- "/products" => displays all products, with default pagination {page:1, limit:10}. Query params:
  - "search" -> displays all products with name product that constains the keyword, 
  - "sortBy" -> its value is name of column you want to sort,
  - "sort" -> its filtering your ascending or descending,
  - "limit" -> number of products displayed in a page (default 10),
  - "page" -> page to display (default 1).
- "/products/{name}" = search products by name and displays all products that contains the name in the search

#### POST Request
- "/products" => Inserting a product to database. data required = name, description, image, id_category, quantity
    - before entering product data, it's insert data categories, because id_category is related to the category table,
	  - note = image is the url to the image, not the actual image.
  
#### PATCH Request
- "/products/update/{id_product}" => Updating a product in database. data required = id_product, name, description, image, id_category, quantity.
- "/product/{id_product}" => Choose products with id_product to add and reduce the quantity of these products. Query params:
	- "act" -> Choose add or reduce,
	- "value" -> The value you want to add or reduce

#### DELETE Request
- "/prducts/{id_product}" => Delete a product in database. data required = id_product.

### Categories Routes
#### GET Request
- "/categories" => displays all categories, with default pagination {page:1, limit:10}. Query params:
  - "search" -> displays all categories with name category or id that constains the keyword, 
  - "sortBy" -> its value is name of column you want to sort,
  - "sort" -> its filtering your ascending or descending,
  - "limit" -> number of products displayed in a page (default 10),
  - "page" -> page to display (default 1).
- "/categories/{id}" = search category by id or name of category and displays all categories that contains the keyword in the search.

#### POST Request
- "/categories" => Inserting a category to database. data required = id, category.

#### PATCH Request
- "/categories/{id}" => Updating a categoriy in database. data required = id, category.

#### DELETE Request
- "/categories/{id_product}" => Deleting a product in database. data required = id_product.




 


