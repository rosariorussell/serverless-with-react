### WHAT IS SERVERLESS/AWS LAMBDA AND WHY USE IT?
  * Stateless functions run in a container managed by AWS
  * Low maintenance, low cost, easy to scale

### SET UP YOUR AWS ACCOUNT
  * Create an AWS account (Free tier)
  * Create an IAM user and configure the AWS CLI
    * Grant admin rights and programmatic access

### SETTING UP THE SERVERLESS BACKEND
  * Create a DynamoDB table
    * Use composite key (partition key + sort key) to filter table by multiple columns
  * Create an S3 bucket for file uploads
    * Enable CORS
  * Create a Cognito user pool
    * Create app client
    * Update domain name
    * Create a Cognito test user and confirm user
  * Set up the Serverless Framework for API Gateway by cloning a serverless starter boilerplate
    * Add support for ES6/ES7 JavaScript with Babel and Webpack

### BUILDING A SERVERLESS REST (CRUD) API
  * Create CRUD functions
    * Create helper dynamoDB functions
    * Add a create note API
    * Add a get (read) note API
    * Add a get (read) all notes API
    * Add an update note API
    * Add a delete note API
  * Update serverless.yml with CRUD functions
  * Test serverless.yml with mock data
    * Create a mock folder with JSON files mimicking real data that would be sent over the API gateway
    * Invoke serverless local functions using the mock JSON files

### DEPLOYING THE BACKEND
  * Deploy the APIs
  * Create a Cognito identity pool
    * Update authentication provider to be the user pool previously created
    * Grant permission to an s3 folder containing the user id as well as API gateway
  * Test the APIs (see code below)

### SETTING UP A REACT APP
  * Create a new React.js app
  * Use favicon generator from a 260x260 png logo (https://realfavicongenerator.net/)
    * Add files to root folder and update index and manifest files with favicon data
  * Add Google font and update index and css files
  * Set up Bootstrap and React Bootstrap
  * Create a navbar with all the links
    * Use single page application links that do not refresh page with react-router-dom and react-router-bootstrap
  * Export a Routes.js component below the navbar which contains React Router
    * Remember to add a new route for each of the containers/pages in the app
  * Make a containers folder for the various pages/components
    * Create a Home.js component with Home.css styling
    * Handle 404s with a NotFound.js container and add as a last option in the Routes file
  * Add AWS Amplify settings to the top level index.js container to allow our React app to talk to the AWS backend
    * Create a config file containing the AWS resources used

### BUILDING A REACT APP
  * Create a login page and login with AWS Cognito
  * Add the session to the state on the App.js component
    * Pass the session authentication state from the main app.js component to the child components through the Routes file
      * Use an AppliedRoute wrapper around the react-router-dom.Route component
    * Check if authenticated within the componentDidMount lifecycle
      * Add isAuthenticating boolean toggle to app state and render app after state is updated
    * Use a ternary operator with React fragment for displaying navbar links contingent upon authentication state
  * Clear the session on logout
  * Redirect on login and logout
    * withRouter, this.props.history.push("'")
  * Add a loader button for the login process
    * Add isLoading boolean toggle to the state of the login container
    * Use a higher order component to wrap the button and inform user of status while authenticating
  * Create the signup form with a conditional confirmation code form
    * Connect the signup form with AWS Cognito
    * Save the new user info and automatically login once the confirmation code is submitted successfully and then redirect to the homepage
  * Add the create note page
    * Include handleFileChange event handler and update max file size in the AWS Amplify config file
    * Use Amplify.Storage to return the key of the uploaded attachment then proceed with Amplify.API to call the post /notes method
  * Modify home page to list all notes IF user is authenticated
    * Make a GET all request in the componentDidMount lifecycle
    * Add a button to link to the create new note page
    * Map through the notes array to return HTML for each item
  * Display an individual note
    * Get the note in the componentDidMount lifecycle and store the content, attachment URL, and note itself in the state
    * Include functionality to update and delete note
      * Include isUpdating and isDeleting to state and buttons
  * Create authenticated and unauthenticated Route wrappers that conditionally redirect based on authentication
    * For example, redirect /login and /signup to the home page if authenticated and redirect secure pages to the login page if unauthenticated
    * Move the redirect after login to the unauthenticatedRoute wrapper instead of the login page to handle referall redirect

### DEPLOYING A REACT APP ON AWS
  * Create an S3 bucket, add a public bucket policy, and enable static website hosting
  * Build the assets from the create-react-app and upload them to the bucket
  * Create a CloudFront distribution that compresses objects and set a custom error page that redirects to the root object with a 200 response
  * Purchase domain through Route 53
    * Add alternate domain (CNAME) for CloudFront distribution
    * Create A and AAAA record sets for the hosted zone of the domain in CloudFront
  * Set up www domain redirect by creating a new S3 bucket that redirects to bare domain
    * Create an additional CloudFront distribution to the new S3 bucket and add the www.domain as a CNAME
    * Go back to the hosted zone of the domain and add 2 new record sets for the www.domain (A and AAAA)
  * Set up SSL by requesting a certificate for bare and www names
    * Create additional records sets in Route 53
    * Update CloudFront distributions with certificate and redirect HTTP to HTTPS for both distributions
    * Update S3 redirect to the HTTPS version to prevent multiple redirects
  * __*For updates to app, create NPM scripts for the following*__
    * Rebuild with npm run build
    * Upload to S3
    * Invalidate the CloudFront Cache

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

### Questions
* How to handle non-auth pages?
* How to add redux?

### Future development
* Handle when an unconfirmed user refreshes the page and loses the confirm screen to enter confirmation code

### Code Samples
```
aws configure
```

```
npx aws-api-gateway-cli-test \
--username='rosariorussell@gmail.com' \
--password='password' \
--user-pool-id='us-east-1_PVrNeuy6m' \
--app-client-id='24vg1in1srudm9t8elb26jf3d1' \
--cognito-region='us-east-1' \
--identity-pool-id='us-east-1:354a0d0c-1e4b-404c-94da-b5e0e49b1b94' \
--invoke-url='https://q2aqn6s3nl.execute-api.us-east-1.amazonaws.com/prod/' \
--api-gateway-region='us-east-1' \
--path-template='notes' \
--method='POST' \
--body='{"content":"hello world","attachment":"hello.jpg"}'
```

```
"predeploy": "npm run build",
"deploy": "aws s3 sync build/ s3://YOUR_S3_DEPLOY_BUCKET_NAME --delete",
"postdeploy": "aws cloudfront create-invalidation --distribution-id YOUR_CF_DISTRIBUTION_ID --paths '/*' && aws cloudfront create-invalidation --distribution-id YOUR_WWW_CF_DISTRIBUTION_ID --paths '/*'",
```