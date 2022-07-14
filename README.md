## About

A boilerplate to create full stack web application. Built with monorepo so you can replace frontend and backend easily.

## Tech Stack

Both backend and frontend use typescript. Not really a fan of it, but I think that's the modern and expected stack for modern web projects these days.

### Frontend

- Typescript
- Next.js
- Material UI

### Backend

- Typescript
- Node.js with express
- Postgresql
- Typeorm

## Features

### Frontend

- will have dashboard and landing page layout
- built with next.js, so enhancement from next.js is built in out of the box

### Backend

- standardized express response
  - you can call `res.customSuccess()` for success response and `catch(customeError)` to pass the error to error middleware and return error response
- easily change database orm
  - the layers in the backend are route -> controller -> service -> dao. Technically, you can change the orm or use different database in dao level

## Usage

- If you don't have `nx` installed globally, then simply run `npx nx dev server` to run backend or `npx nx dev web` to run frontend.
- Or you can run `yarn dev` and it will run both backend and frontend

## Todo

I will add more features in the future. Currently will focus more on tooling first like setting up eslint.

- [X] Server - Eslint
- [X] Server - Prettier
- [X] Web - Eslint
- [X] Web - Prettier