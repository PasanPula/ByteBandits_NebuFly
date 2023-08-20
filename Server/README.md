# NebuFly-Backend-Dev


A backend application built using Node.js that provides various features. This README provides instructions for setting up the environment and running the project.


## Getting Started


### Prerequisites

To run this project, you need to have the following installed:

- Node.js (version 18.x.x)
- npm (version 9.x.x)


### Installation

1. Clone this repository:
   ```sh
   git clone https://github.com/yourusername/my-node-backend.git
   cd my-node-backend
   ```
2. Install dependencies
   ```sh
   npm install
   ```
4. Start the server
   ```sh
   npm run dev
   ```

6. Environment Variables
Create a .env file in the root directory of your project and add the following variables:

1. SECRET=your_secret_key
2. ISSUER=your_issuer
3. AUDIENCE=your_audience
4. ALGORITHM=your_algorithm

5. EXP_ACCESS_TOKEN=access_token_expiration_time
6. EXP_REFRESH_TOKEN=refresh_token_expiration_time

7. MONGO_URI=mongodb://localhost:27017/mydatabase

8. EMAIL_SERVICE=gmail
9. EMAIL_HOST=smtp.gmail.com
10. EMAIL_PORT=587
11. EMAIL_PASS=your_email_password
12. EMAIL_USER=your_email_address

13. EMAIL_FROM=your_email_address

