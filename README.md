# APIs (Application Programming Interface):

API, or Application Programming Interface, is a set of rules, protocols, and tools that allows different software applications to communicate and interact with each other.

## Three pair Articture:

### Frontend | Backend | DataBase

In this scenario, the frontend represents our client-side, the backend is our server-side, and the database is where we store our data. Suppose a client visits our website and presses a button, essentially making a request for data. This request will be sent to the server, and then the server will request the database for the data. The response to this request will contain the data, which the server will then show to the client. This process of handling requests and responses is typically handled by APIs.

## Why create APIs:

1. We have three components: frontend, backend, and database. If we fetch data directly from the database using the frontend, it can pose security risks like potential hacking or unauthorized access. That's why we first fetch the data from the server, then show it to the client. This approach helps solve security issues and ensures better protection against potential threats to our database.
2. If we directly connect the client to the database, it would pose several challenges. For instance, if we intend to develop a mobile app for the same web application in the future, we would need to rewrite the backend separately. However, if we create APIs once, it would offer the advantage of reusability. Whether we are building a website or a mobile app, we would only need to focus on developing the frontend and connect it to the backend through APIs.

---

# APIs Method:

API methods are used to define the actions or functionalities that can be performed through an API (Application Programming Interface). These methods specify how different software components or systems can interact with each other, allowing them to exchange data, request services, or perform specific tasks

1. **GET**: Used to retrieve data from a server or resource.
2. **POST**: Used to send data to a server or create a new resource.

3. **PUT**: Used to update existing data on a server or resource.

4. **DELETE**: Used to remove data from a server or resource.

5. **PATCH**: Modifies part of the resource identified by the URL.
6. **HEAD**: Retrieves only the headers of the resource without the body.
7. **OPTIONS**: Fetches the supported methods for a resource.
8. **TRACE**: Echoes back the received request for diagnostic purposes.

These definitions describe the purpose and functionality of each API method.

#### We can first try these methods on Postman to understand how they work, and then we can practice coding them.

---

# What is Postman:

Postman is a popular API development tool that allows developers to design, test, and debug APIs quickly and easily. It provides a user-friendly interface for making HTTP requests, testing endpoints, and viewing responses. With Postman, developers can organize their API workflows, create collections of requests, and collaborate with team members on API development projects.

## Simple Book API:

We have a simple book API that we will practice with to clarify our concepts related to APIs and their methods. Here is the API link: [https://simple-books-api.glitch.me](https://simple-books-api.glitch.me).

### Base URL & EndPoints in API:

APIs (Application Programming Interfaces) are software interfaces that allow different software components to communicate and interact. An API typically consists of a base URL and endpoints.

1. **Base URL**: The base URL is the main URL of the API server where it can be accessed. It serves as the address of the API server. Example: `https://api.example.com`.

2. **Endpoints**: Endpoints represent specific functionalities or resources of the API. Each endpoint is a unique URL that comes after the base URL. Each endpoint allows performing a specific action, such as retrieving data, updating, or deleting. Example: `/users`, `/products`, `/orders`.

To use an API, you send requests to the base URL with one or more specified endpoints. Specific HTTP methods like GET, POST, PUT, DELETE, etc., are used to retrieve or manipulate data related to endpoints.

---

# Let's understand how API Method work.

To understand how APIs mnethod work we can use thunder client API.

## Get Method:

### Request to Base API:

First, using Thunder Client, we'll create a new request for a GET request. We'll send this request to a base API endpoint and receive a response containing a message object: `{"message": "Welcome to the Simple Books API."}`.

```ts
// Step01:
// Create a new request using Thunder Client, and in that request, use the GET method. Set the API endpoint to https://simple-books-api.glitch.me and send the request. After that, the response to this request will give us the following object.

{
  "message": "Welcome to the Simple Books API."
}
```

### Request to specific end point to get list of books:

Next, we'll add `/books` to the base URL to get the list of available books. Upon sending this request, we'll receive an array of book objects with their details.

```ts
[
  {
    id: 1,
    name: "The Russian",
    type: "fiction",
    available: true,
  },
  {
    id: 2,
    name: "Just as I Am",
    type: "non-fiction",
    available: false,
  },
  {
    id: 3,
    name: "The Vanishing Half",
    type: "fiction",
    available: true,
  },
  {
    id: 4,
    name: "The Midnight Library",
    type: "fiction",
    available: true,
  },
  {
    id: 5,
    name: "Untamed",
    type: "non-fiction",
    available: true,
  },
  {
    id: 6,
    name: "Viscount Who Loved Me",
    type: "fiction",
    available: true,
  },
];
```

### Request to specific end point to Get a single book:

Then, by adding `/books/5` to the base URL, where 5 represents the specific book's ID, we can retrieve the details of that book in the form of an object.

```ts
{
  "id": 5,
  "name": "Untamed",
  "author": "Glennon Doyle",
  "type": "non-fiction",
  "price": 15.5,
  "current-stock": 20,
  "available": true
}
```

## Post Method.

### API Authentication & Post an order:

So, before this, we were fetching simple data, so we didn't need authentication. Now, since we want to place an order for a book, we need authentication. This is because until we are authenticated, our identity isn't verified, and without authentication, we can't place an order.

#### API Authentication

So now, we'll add the endpoint `/api-clients/` to the base URL. We can use this endpoint to authenticate ourselves with the API. Before sending the request to this URL, we need to include our data in the request body. We'll post an object in the body and then send the request. After sending the request, the response will contain our authentication token.

```ts
// Step1:
// Post Request:
// https://simple-books-api.glitch.me//api-clients/

// step02:
// In the request body, we'll post our data in the form of an object.
{
   "clientName": "ARehman",
   "clientEmail": "ARehman@example.com"
}

// Step03:
// In the response, we'll receive a token in the form of an object, which we'll use further.

{
  "accessToken": "65e17e4e6c0ad72ce8eece6ec8aefb66ab1c98650f1f0c4d98866d07848c0fd9"
}

```

### Request to specific end point to Post an order:

Now, we'll add the endpoint /orders to the base URL. We can use this endpoint to post an order to the API. Before sending the request to this URL, we need to include our data in the request body. We'll post an object in the body and also add our authentication token in the authorization header. Then, we'll send the request, and upon receiving the response, we'll get a confirmation of the order.

```ts
// Step1.
// Post Request.
// https://simple-books-api.glitch.me/orders


// Step2.
// After that, we'll specify the book ID and customer name in the request body.
{
  "bookId": 1,
  "customerName": "John"
}

// Step3.
// Then, we'll include our authentication token inside the authorization header so that our identification is established.

// 65e17e4e6c0ad72ce8eece6ec8aefb66ab1c98650f1f0c4d98866d07848c0fd9

// step4.
// Then, we'll receive a confirmation in the response indicating that our order has been successfully placed.

{
  "created": true,
  "orderId": "sfLWJYXFMEShxooNtlooq"
}

```

### Request to specific end point to Get an order:

Now, we'll add the endpoint `/orders` to the base URL. This endpoint allows us to retrieve data about our orders. First, we'll specify this endpoint, then we'll include our authentication token in the authorization header. Upon sending this request, the response will contain the data of our orders.

```ts
// ste01.
// Get Request
// https://simple-books-api.glitch.me/orders

// step02.
// Then, we'll provide our authentication token inside the authorization header.
// 65e17e4e6c0ad72ce8eece6ec8aefb66ab1c98650f1f0c4d98866d07848c0fd9

// step03.
// Then, in the response, we'll receive the data.
[
  {
    id: "sfLWJYXFMEShxooNtlooq",
    bookId: 1,
    customerName: "John",
    createdBy:
      "7cc64bceb285a49b9ebb1e3410a1ab940e803dc8c1f61cfdb57a739e07ab0be9",
    quantity: 1,
    timestamp: 1714215604718,
  },
];
```


### Request to specific end point to Get an secific order:
So now, if we want to check one of our 3 to 4 orders, we'll add the endpoint `/orders/orderId` to the base URL. This allows us to retrieve the data of a specific order. First, we'll specify this endpoint, then we'll include our authentication token in the authorization header. Upon sending this request, the response will contain the data of our specified order.

```ts
// step01
// Get Request
// https://simple-books-api.glitch.me/orders/sfLWJYXFMEShxooNtlooq

// step02:
// Then, we'll provide our authentication token inside the authorization header.
// 65e17e4e6c0ad72ce8eece6ec8aefb66ab1c98650f1f0c4d98866d07848c0fd9

// step03:
// Then, we'll receive the data in the response.

{
  "id": "sfLWJYXFMEShxooNtlooq",
  "bookId": 1,
  "customerName": "John",
  "createdBy": "7cc64bceb285a49b9ebb1e3410a1ab940e803dc8c1f61cfdb57a739e07ab0be9",
  "quantity": 1,
  "timestamp": 1714215604718
}

```


## Patch Method
### Request to specific end point to Patch an order:
So if we need to update something in any of our orders, we'll provide `orders/orderId`, then we'll send a PATCH request. In the request body, we'll include an object with the data we want to update. After sending the PATCH request, we won't receive any content in the response, but our order will be updated. When we send another GET request later, we'll receive the updated order.

```ts
// step01.
// Patch Method
// https://simple-books-api.glitch.me/orders/sfLWJYXFMEShxooNtlooq

// step02.
// Then, we'll provide the data inside the request body.

{
  "customerName": "AbdulRehman"
}

// step03.
// No content

// Step4.
// We'll send another GET request, and then we'll receive our data.
{
  "id": "sfLWJYXFMEShxooNtlooq",
  "bookId": 1,
  "customerName": "AbdulRehman",
  "createdBy": "7cc64bceb285a49b9ebb1e3410a1ab940e803dc8c1f61cfdb57a739e07ab0be9",
  "quantity": 1,
  "timestamp": 1714215604718
}


```


## Delete Method:
### Request to specific end point to Delete an order:
If we want to delete something from any of our orders, we'll provide `orders/orderId`, then we'll include our authentication token in the authorization header. After that, we'll send a DELETE request. In the response, we won't receive any content, but our order will be deleted. When we send another GET request later, we'll see that the order has been deleted.

```ts
// Steo01.
// Delete Request 
// https://simple-books-api.glitch.me/orders/sfLWJYXFMEShxooNtlooq


// Steo02.
// Then, we'll include our authentication token in the authorization header.
// 65e17e4e6c0ad72ce8eece6ec8aefb66ab1c98650f1f0c4d98866d07848c0fd9

// Steo03.
// No content

// Step04
// We'll send another GET request, and then we'll receive all remaining orders after the deletion of the specified order.
[
  {
    "id": "Q8b2DrSr5LYb2L9DT5gr8",
    "bookId": 3,
    "customerName": "John",
    "createdBy": "7cc64bceb285a49b9ebb1e3410a1ab940e803dc8c1f61cfdb57a739e07ab0be9",
    "quantity": 1,
    "timestamp": 1714219160004
  },
  {
    "id": "9Xm-d60oZF2fNdorPv6kV",
    "bookId": 5,
    "customerName": "John",
    "createdBy": "7cc64bceb285a49b9ebb1e3410a1ab940e803dc8c1f61cfdb57a739e07ab0be9",
    "quantity": 1,
    "timestamp": 1714219168843
  }
]

// 3 se 2 orderho gye ab 

```

This way, we can improve our understanding of concepts using Thunder Client.
