//import react into the bundle
import React from 'react'
import {createRoot} from 'react-dom/client'

//include your index.scss file into the bundle
import "/workspaces/react-hello-webapp-michflorez-starwars/src/styles/index.css";
import Layout from './Layout';


//
const root = createRoot(document.querySelector("#app"))

//render your react application
root.render(<Layout/>)

