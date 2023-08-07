# Project Name

AR PORIBOHON

## Demo

https://etickets-bd.vercel.app/

## Documentation

## step1 > git clone

## step2 > install yarn

## step3 > set env:

    GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
    GOOGLE_ClIENT_SECRET: process.env.GOOGLE_ClIENT_SECRET,


    MONGODB_URI: process.env.MONGODB_URI,


    CLOUD_NAME: process.env.CLOUD_NAME,
    CLOUD_API_KEY: process.env.CLOUD_API_KEY,
    CLOUD_API_SECRET: process.env.CLOUD_API_SECRET,


    BASE_URL:
      process.env.NODE_ENV === "production"
        ? "https://multishop-ecommerce.vercel.app"
        : "http://localhost:3000",


    AUTH_SECRET: process.env.AUTH_SECRET,
    HOST_EMAIL: process.env.HOST_EMAIL,
    HOST_PASSWORD: process.env.HOST_PASSWORD,

## step4 > yarn dev

## Features

- I am a skilled and passionate developer with expertise in building web applications using cutting-edge technologies. My website showcases my extensive resume and portfolio, highlighting my proficiency in Next.js with TypeScript and the latest Next.js version 13 app router.
- As a developer, I have undertaken a significant project called "Bus Poribohon." This project offers a seamless and efficient bus ticketing system for users, covering 32 bus routes. To ensure the utmost security and privacy, I have implemented a robust authentication system that verifies users through email. Once verified, users gain access to our ticket purchase platform, where they can purchase up to 4 tickets per day.
- I take pride in my attention to detail, and every successful ticket purchase triggers the automatic delivery of a visually appealing ticket information PDF directly to the user's email. Additionally, this information is accessible in the user's frontend dashboard, creating a streamlined and user-friendly experience.
- My personal dashboard design is aesthetically pleasing and easy to navigate. Users can add buses to their favorites for convenient access and manage their account settings effortlessly. Furthermore, I have integrated Recharts for data visualization, enabling administrators to make data-driven decisions based on ticket purchase trends.

- Through my personal website, I aim to display not only my technical skills but also my commitment to delivering user-centric and visually appealing solutions. I believe that my proficiency in Next.js, TypeScript, and data visualization tools like Recharts make me a valuable asset to any development team.

- Thank you for visiting my website, and I hope you enjoy exploring my resume and portfolio. Feel free to reach out to me for any collaboration opportunities or to discuss exciting new projects!

## Installation

#### Run Locally

Install my-project with yarn

```bash
  git clone  url
  cd ar-poribohon
  yarn install
  yarn dev

```

## Logo

![Logo](https://i.ibb.co/QfKqVGD/logo-3-r-bg.png)

## Screenshots

![App Screenshot](https://i.ibb.co/BZzVpzN/etickets-header.png)

![App Screenshot](https://i.ibb.co/fvW3BQ8/etickets-footer.png)

![App Screenshot](https://i.ibb.co/25gVb5d/etickets-dahboard-1.png)

## Tech Stack

**Client:** Next js, Typescript ,Redux, Mantine ui

**Server:** Node,

## version

**Next js 13.4.9 App Router**

## Authors

- [@Web](https://devjunaid.netlify.app/)
- [@Email](dev.junaid.bd@gmil.com)

## Deployment

------ To deploy this project follow --------

```bash
  ## yarn build
  ## deploy vercel
   -------------or-----------------------
  ## connect github repo to auto deploy at vercel

```

## For Find Out Me

**email** dev.junaid.bd@gmail.com or call **+8801634-900664**.

## API Reference

#### Sign Up

```http
  POST /api/auth/signUp
```

| Parameter  | Type     | Description            |
| :--------- | :------- | :--------------------- |
| `name`     | `string` | **Required**. name     |
| `email`    | `string` | **Required**. email    |
| `password` | `string` | **Required**. password |

#### Sign In

```http
  POST /api/auth/signIn
```

| Parameter  | Type     | Description            |
| :--------- | :------- | :--------------------- |
| `email`    | `string` | **Required**. email    |
| `password` | `string` | **Required**. password |

#### verify email

```http
  POST /api/auth/verifyEmail
```

| Parameter | Type     | Description         |
| :-------- | :------- | :------------------ |
| `email`   | `string` | **Required**. email |
| `token`   | `string` | **Required**. token |

#### refresh token

```http
  POST /api/auth/refreshToken
```

| Parameter      | Type     | Description                |
| :------------- | :------- | :------------------------- |
| `refreshToken` | `string` | **Required**. refreshToken |

#### Add Bus

```http
  POST /api/buses
```

| Parameter    | Type     | Description                               |
| :----------- | :------- | :---------------------------------------- |
| `busNumber`  | `number` | **Required**. bus Number                  |
| `totalSeats` | `number` | **Required**. total Seats                 |
| `roadName`   | `string` | **Required**. roadName                    |
| `busType`    | `union`  | **Required**. "AC", "Non-AC", "Coach-Bus" |
| `seatPrice`  | `number` | **Required**. seat Price                  |

#### Get all bus

```http
  GET /api/busses
```

| Parameter     | Type     | Description                |
| :------------ | :------- | :------------------------- |
| `AccessToken` | `string` | **Required**. Access Token |

#### check ticket

```http
  GET /api/checkTicket
```

| Parameter     | Type     | Description                |
| :------------ | :------- | :------------------------- |
| `AccessToken` | `string` | **Required**. Access Token |

#### Get Bus

```http
  GET /api/busses/${id}
```

| Parameter     | Type     | Description                       |
| :------------ | :------- | :-------------------------------- |
| `id`          | `string` | **Required**. Id of item to fetch |
| `AccessToken` | `string` | **Required**. AccessToken         |
