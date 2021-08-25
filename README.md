# Gallery

A Personal Photo Gallery boilerplate (NextJS Application) with hands on [Framer-Motion](https://www.framer.com/motion/) animations.
Live demo available at: [photogallery-cvrlnolan.vercel.app](https://photogallery-cvrlnolan.vercel.app/)

## Description

This project serves as a playground or quickstart to get acquinted with Framer-Motion browser animations as it cuts across most of its useful concepts used to animate DOM objects. These animation concepts are applied to photos stored in a [Firebase Storage](https://firebase.google.com/products/storage/) bucket which are loaded dynamically and displayed to a user. Users can also add new photos to the album with the relative data about the photo stored in a [MongoDB Atlas Database](https://cloud.mongodb.com).

### Note

Most of these anmations take full effect on desktop browsers. Hence you might feel an accessibility limitations when trying the same animations on a mobile device.

## Installation

1. To get this project files locally on your machine, you can clone this repository by running the following command on your terminal or command line:

```bash
git clone https://github.com/cvrlnolan/photogallery
```

2. Next, you need to setup the `.env` file found in the root with the appropriate API Keys & credentials from the following service providers:

- [Google Firebase](https://firebase.google.com/)
- [MongoDB Atlas](https://cloud.mongodb.com)

3. Install all the dependency packages found in the `package.json` file by running yarn install or npm install from the project root directory.

4. To start the development server of the application, run npm run dev or yarn dev. This should log some start-up application information & display the development server url: `http://localhost:3000`. Visit http://localhost:3000 to view your application.

## Usage

### General

This application was built reflecting the MVC architecture and the main dependencies(all found in the `package.json`) of the application are organised as so:

- Front-end User Interface(UI): [Chakra UI](https://chakra-ui.com) + [Framer-Motion](https://www.framer.com/motion/) for animations
- Backend Integration: [NextJS API](https://nextjs.org/docs/api-routes/introduction) (basically [NodeJS](https://nodejs.org))
- Database Management: [MongoDB](https://mongodb.com)
- File Storage: [Firebase Storage](https://firebase.google.com/products/storage/)

Other important services & dependency libraries of the application include:

- [axios](https://www.npmjs.com/package/axios): An http client to fetch urls and make api calls or requests within the application.
- [swr](https://swr.vercel.app/): To fetch and revalidate data on the client-side of the application while keeping the UI reactive.
- [framer-motion](https://www.framer.com/motion/): A production-ready library that delivers motion components for React which integrate browser animation patterns and atrributes.
- [popmotion](https://popmotion.io): A javascript animation toolbox that helps in generating complex animation patterns using keyframes and other css animation properties.
- [react-hook-form](https://react-hook-form.com/): A lightweight Javascript library for form validation and form data capturing.
- [compressorjs](https://fengyuanchen.github.io/compressorjs/): Javascript image compressor to compress images before uploading them to storage to have an optimized and servable version.

### Directives

The application is organized from the root(`.`) as follows:

- `./page/` folder(integrated by NextJS) contains the UI Views for the application with the exception of the `./page/api/*` sub-folder.
- `./page/api` sub-folder(integrated by NextJS) contains serverless and NodeJS backend code for the application.
- `./firebase/` folder contains the Firebase initialization configurations and the logical operation to upload photos to Firebase Storage.
- `./mongodb/` folder contains the MongoDB Client variable used to establish connections to the MongoDB Atlas server.
- `./components/` folder contains coded UI layouts to be used through out the application.
- `./styles/` folder(integrated by NextJS) contains the global style of the application accessible by all components.
- `./public/` folder(integrated by NextJS) contains global files to be shared through the application. You can store static images here.

Absolute imports to any of these folders through the application are configured in the `jsconfig.json` file in the root.

The application's code source contains inline comments which will provide further help and guidance on how an important piece of module or component works. The code quality was tested with [JSLint](https://www.jslint.com/)

### Deployment

You may eventually want to deploy a live version of your app in a future instance. [Vercel](https://vercel.com/) platform is suitably built fo the deployment of NextJS application and more as they have an integrated environment to deploy directly from your own [Github Repository](https://github.com/new).

## Support

If any worries, bugs or problem arises in the future, you can create an issue, contribute or contact me via:

- [carlnolan@lootyclub.com](mailto:carlnolan@lootyclub.com)

## Roadmap

I have scheduled the integration of multiple file(photos) upload for the near future.

## License

![GitHub](https://img.shields.io/github/license/cvrlnolan/photogallery)

###

![GitHub last commit](https://img.shields.io/github/last-commit/cvrlnolan/photogallery) ![GitHub contributors](https://img.shields.io/github/contributors/cvrlnolan/photogallery) ![GitHub issues](https://img.shields.io/github/issues/cvrlnolan/photogallery) ![GitHub repo size](https://img.shields.io/github/repo-size/cvrlnolan/photogallery)

![GitHub followers](https://img.shields.io/github/followers/cvrlnolan?style=social) ![Twitter Follow](https://img.shields.io/twitter/follow/realcarlnolan?style=social)
