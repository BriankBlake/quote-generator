@import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,700;1,100&family=Montserrat:ital,wght@1,500&display=swap');

html {
    box-sizing: border-box;
}

body {
    margin: 0;
    min-height: 100vh;
    background-color: #6701ff;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='42' height='58' viewBox='0 0 42 58'%3E%3Cg fill='%23000000' fill-opacity='0.69'%3E%3Cpath fill-rule='evenodd' d='M12 18h12v18h6v4H18V22h-6v-4zm-6-2v-4H0V0h36v6h6v36h-6v4h6v12H6v-6H0V16h6zM34 2H2v8h24v24h8V2zM6 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm8 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm8 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm8 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm0 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm0 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm0 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4zM2 50h32v-8H10V18H2v32zm28-6a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm0-8a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm0-8a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm0-8a2 2 0 1 0 0 4 2 2 0 0 0 0-4z'/%3E%3C/g%3E%3C/svg%3E");
    color: aquamarine;
    font-family: Lato, sans-serif;
    font-weight: 700;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
}

.quote-container {
    width: auto;
    max-width: 900px;
    padding: 20px 30px;
    border-radius: 10px;
    background-color: rgba(255, 255, 255, 0.4);
    box-shadow: 0 10px 10px 10px rgba(0, 0, 0, 0.2);
}

.quote-text {
    font-size: 2.75rem;
}

.long-quote {
    font-size: 2rem;
}

.fa-quote-left {
    font-size: 4rem;
}

.quote-author {
    margin-top: 15px;
    font-size: 2rem;
    font-weight: 400;
    font-style: italic;
}

.button-container {
    margin-top: 15px;
    display: flex;
    justify-content: space-between;
}

.button {
    cursor: pointer;
    font-size: 1.2rem;
    height: 2.5rem;
    border: none;
    border-radius: 10px;
    color: #fff;
    background: #333;
    outline: none;
    padding: 0.5rem 1.8rem;
    box-shadow: 0 0.3rem rgba(121, 121, 121, 0.65);
}

button:hover {
    filter: brightness(110%);
}

button:active {
    transform: translate(0, 0.3rem);
    box-shadow: 0 0.1rem rgba(255, 255, 255, 0.65);
}

.twitter-button:hover {
    color: #38a1f3;
}

.fa-twitter {
    font-size: 1.5rem;
}

/* Loader */
.loader {
  border: 16px solid black; 
  border-top: 16px solid blueviolet; 
  border-radius: 50%;
  width: 120px;
  height: 120px;
  animation: spin 2s linear infinite;
}
      
      @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
      }


/* Media Query: Tablet or smaller */
@media screen and (max-width: 1000px) {
    .quote-container {
        margin: auto 10px;
    }

    .quote-text {
        font-size: 2.5rem;
    }
}