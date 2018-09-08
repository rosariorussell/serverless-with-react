export default {
  MAX_ATTACHMENT_SIZE: 5000000,

  s3: {
    REGION: "us-east-1",
    BUCKET: "serverless-with-react"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://q2aqn6s3nl.execute-api.us-east-1.amazonaws.com/prod"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_PVrNeuy6m",
    APP_CLIENT_ID: "24vg1in1srudm9t8elb26jf3d1",
    IDENTITY_POOL_ID: "us-east-1:354a0d0c-1e4b-404c-94da-b5e0e49b1b94"
  }
};

