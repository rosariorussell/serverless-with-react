# Part I - The Basics
### WHAT IS SERVERLESS/AWS LAMBDA AND WHY USE IT?
```
Stateless functions run in a container managed by AWS
Low maintenance, low cost, easy to scale
```

### SET UP YOUR AWS ACCOUNT
  * Create an AWS account (Free tier)
  * Create an IAM user and configure the AWS CLI
    * Grant admin rights and programmatic access
    ```
    aws configure
    ```
### SETTING UP THE SERVERLESS BACKEND
  * Create a DynamoDB table
    * Use composite key (partition key + sort key) to filter table by multiple columns
  * Create an S3 bucket for file uploads
    * Enable CORS
  * Create a Cognito user pool
    * Create app client
    * Update domain name
    * Create a Cognito test user
  * Set up the Serverless Framework for API Gateway
    * Clone a serverless starter boilerplate
    * Add support for ES6/ES7 JavaScript with Babel and Webpack
### BUILDING A SERVERLESS REST (CRUD) API
  * Create helper dynamoDB functions
  * Create CRUD functions
    * Add a create note API
    * Add a get (read) note API
    * Add a get (read) all notes API
    * Add an update note API
    * Add a delete note API
  * Create mock JSON files
  * Update serverless.yml with CRUD functions and test with mock data
  * Test serverless local functions using mock JSON files
### DEPLOYING THE BACKEND
  * Deploy the APIs
  * Create a Cognito identity pool
    * Cognito user pool vs identity pool
  * Test the APIs
### SETTING UP A REACT APP
  * Create a new React.js app
    * Add app favicons
    * Set up custom fonts
    * Set up Bootstrap
  * Handle routes with React Router
    * Create containers
    * Adding links in the navbar
    * Handle 404s
  * Configure AWS Amplify
### BUILDING A REACT APP
  * Create a login page
    * Login with AWS Cognito
    * Add the session to the state
    * Load the state from the session
    * Clear the session on logout
    * Redirect on login and logout
    * Give feedback while logging in
  * Create a signup page
    * Create the signup form
    * Signup with AWS Cognito
  * Add the create note page
    * Call the create API
    * Upload a file to S3
  * List all the notes
    * Call the list API
  * Display a note
    * Render the note form
    * Save changes to a note
    * Delete a note
  * Set up secure pages
    * Create a route that redirects
    * Use the redirect routes
    * Redirect on login
### DEPLOYING A REACT APP ON AWS
  * Deploy the Frontend
    * Create an S3 bucket
    * Deploy to S3
    * Create a CloudFront distribution
    * Set up your domain with CloudFront
    * Set up www domain redirect
    * Set up SSL
  * Deploy updates
    * Update the app
    * Deploy again

# Part II - Automation
### INTRODUCTION
  * Getting production ready
### CREATE A NEW BACKEND
  * Initialize the backend repo
    * Organize the backend repo
### INFRASTRUCTURE AS CODE
  * What is Infrastructure as Code?
    * Configure DynamoDB in Serverless
    * Configure S3 in Serverless
    * Configure Cognito User Pool in Serverless
    * Configure Cognito Identity Pool in Serverless
  * Use environment variables in Lambda functions
  * Deploy your Serverless infrastructure
### ADDING A STRIPE BILLING API
  * Working with 3rd party APIs
    * Setup a Stripe account
    * Add a billing API
    * Load secrets from env.yml
  * Test the billing API
### ADDING UNIT TESTS
  * Unit tests in Serverless
### AUTOMATING SERVERLESS DEPLOYMENTS
  * Automating Serverless deployments
    * Setting up your project on Seed
    * Configure secrets in Seed
    * Deploying through Seed
    * Set custom domains through Seed
  * Test the configured APIs
  * Monitoring deployments in Seed
### CONNECT TO THE NEW BACKEND
  * Initialize the frontend repo
    * Manage environments in Create React App
### ADDING A BILLING FORM
  * Create a settings page
    * Add Stripe keys to config
    * Create a billing form
    * Connect the billing form
### AUTOMATING REACT APP DEPLOYMENTS
  * Automating React Deployments
    * Create a build script
    * Setting up your project on Netlify
    * Custom Domains in Netlify
  * Frontend workflow
### CONCLUSION
  * Wrapping up
  * Futher reading
  * Giving back
  * Changelog
  * Staying up to date

# Extra Credit
### SERVERLESS ARCHITECTURE
  * Organizing Serverless projects
  * Cross-stack references in Serverless
    * DyanamoDB as a Serverless service
    * S3 as a Serverless service
    * API Gateway domains across services
    * Cognito as a Serverless service
  * Deploying multiple services in Serverless
### BACKEND
  * API Gateway and Lambda Logs
  * Debugging Serverless API Issues
  * Serverless environment variables
  * Stages in Serverless Framework
  * Configure multiple AWS profiles
  * Customize the Serverless IAM Policy
  * Connect to API Gateway with IAM auth
  * Serverless Node.js Starter
### FRONTEND
  * Code Splitting in Create React App
  * Environments in Create React App