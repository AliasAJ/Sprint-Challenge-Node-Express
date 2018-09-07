# Review Questions

## What is Node.js?

a platform that excutes JavaScript applications outside of the browser

## What is Express?

a framework used to with Node.js that makes it easier to create applications and RESTful web services with JSON

## Mention two parts of Express that you learned about this week.

Two aspects provided by express that were most used this week are Middleware and Routing. Our applications can be broken into routers that have their own middleware and routing.

## What is Middleware?

Middleware stops an API request and can change it or add an additional request. It takes three parameters: a request and response, and the functionn that points to the next middleware

## What is a Resource?

all routers and middleware used to form an applications are considered resources. Management of these resources are done through HTTP methods

## What can the API return to help clients know if a request was successful?

status(200) lets the client know the request was successful

## How can we partition our application into sub-applications?

by using a layered system to help components communicate. having separate components for logging, caching, and authenntication

## What is express.json() and why do we need it?
parses our express dependency so any data returned from an API can be in JSON format
