'use client'

import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html,
  body,
  main,
  #root {
    height: 100%;
  }

  html {
    font-size: 62.5%;
  }

  :root {
    --primary-color: #2c3e50;
    --secondary-color: #f39c12;
    --tertiary-color: #ecf0f1;
    --quaternary-color: #34495e;
    --quinary-color: #e74c3c;
  }

  body {
    background-color: var(--tertiary-color);
    color: var(--primary-color);
    font-family: var(--font-primary);
    font-size: 1.6rem;
  }

  h1, h2, h3, h4, h5, h6 {
    color: var(--secondary-color);
    font-family: var(--font-secondary);
    font-weight: 700;
  }

  a {
    color: inherit;
    text-decoration: none;
    transition: opacity 0.2s ease-in-out;

    &:hover {
      opacity: 0.8;
    }
  }

  button {
    background-color: var(--secondary-color);
    border: none;
    border-radius: 5px;
    color: var(--tertiary-color);
    cursor: pointer;
    font-family: var(--font-secondary);
    font-size: 1.6rem;
    font-weight: 700;
    padding: 1rem 2rem;
    transition: background-color 0.2s ease-in-out;

    &:hover {
      background-color: var(--quinary-color);
    }
  }
`
