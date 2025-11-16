## Fast React Pizza Co.

A front-end pizza ordering SPA built with React Router and Redux Toolkit.

Demo: https://fast-react-pizza-hai-nguyen.netlify.app/

- Built a complete single-page application using React Router with a clean app layout, which resulted in a smoother navigation flow and an app-like user experience.
- Implemented React Router “Loaders” for data fetching and “Actions” for data mutations, thereby enabling declarative data handling and reducing boilerplate for server interactions.
- Modeled global “User” and “Cart” state using Redux Toolkit slices, which helped centralize shared logic and improve maintainability and scalability.
- Used React-Redux hooks such as useSelector and useDispatch to access and modify state, leading to efficient state-driven rendering and predictable updates.
- Leveraged createAsyncThunk to manage asynchronous operations like placing orders, which ensured robust async workflows with built-in loading and error handling.
- Designed a fully responsive UI using Tailwind CSS, thereby providing a consistent, mobile-friendly UI across all screen sizes.
- Integrated browser Geolocation and reverse Geocoding APIs, which allowed the app to automatically suggest the user’s address, improving convenience and reducing input errors.
- Utilized React Router’s useFetcher to fetch and update data without navigation, resulting in a more seamless UX.

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
