# Simple Contact Us Handler
This is a sample application developed with revolutionary serverless IDE Sigma, to demonstrate the use of AWS Lambda, DynamoDB and API Gateway to implement a simple contact us form for a static web site.
## Prerequisites

All the deployments of this application are based on Amazon AWS. To open the project, you will need the Sigma IDE which can be found at https://sigma.slappforge.com. You will need to create an account and provide your AWS credentials to open the project (Your AWS credentials will not be acquired by SLAppForge under any circumstances).
## Usecase Description
Nowadays static web sites can be hosted on services like google drive or even in github without any cost. But this advatnage becomes useless when we want to add a contact us form to the web site. Either we have to run a server at the backend to collect contact us data, or we have to purchase BAAS which facilitate a backend for our form. Either of these options costs us around $5 - $10 per month regardless of the traffic we get for our website.  

This example presents a serverless solution developed on top of AWS(Amazon Web Service) using SIGMA IDE to implement a contact us form with minimum effort and minimum cost.

## Getting Started

In order to get started you just have to open the sample project from the SLappForge IDE and deploy it on top of your AWS account. If you want to deploy the sample project as it's without any changes, you can directly deploy your project. However, if there are any changes for the project, IDE will get a clone of the project and commit it to your own GitHub account to allow you to keep playing with the source code to get familiar with the application.

## Deployment

Click on the deployment button and it should deploy all lambdas that are required to run the application.

## Testing

After the deployment, you can test this sample application by sending an HTTP request to the created API Gateway (activity-stream-proxy). To find the endpoint URL, please follow these steps.

1. Sign in to the AWS Management Console, and then open the API Gateway console at [https://console.aws.amazon.com/apigateway/](https://console.aws.amazon.com/apigateway/ "Amazon API Gateway").
2. Make sure that you are signed in to the AWS region where you selected when creating the Sigma project.
3. On the API Gateway page, in the APIs list, select "contact_us" API.

### Testing data persisting endpoint (/contact)
In the Stages navigation pane, expand the Prod stage, select POST on /contact, and then copy the Invoke URL value in the format of https://{api-id}.execute-api.{region}.amazonaws.com/Prod/contact.

Send the following sample JSON payload to the above endpoint using a HTTP clinet.

```
{
    "comment":"Sigma is Awsome!",
    "company":"SlappForge",
    "email":"email@email.com",
    "name":"Chathura Widanage",
    "phone":"1111111111"
}
```

### Testing data reading endpoint (/view)
This endpoint expects a query parameter `date` with the target date formatted as `dd/MM/yyyy`. So you may send a GET request to https://{api-id}.execute-api.{region}.amazonaws.com/Prod/view?date=2/7/2018 to view the entries for the targetted date.
For this API call, you will recieve a JSON response as follows.

```
{
    "Items":[
            {
                "entryDate":"2/7/2018",
                "comment":"My comment",
                "company":"Slappforge",
                "email":"email@email.com",
                "name":"Chathura Widanage",
                "phone":"11111111111"
            },
             {
                "entryDate":"2/7/2018",
                "comment":"My comment",
                "company":"Slappforge",
                "email":"myname@email.com",
                "name":"My Name",
                "phone":"11111111111"
            }
        ],
    "Count":2,
    "ScannedCount":2
}
```

## Author
[**Chathura Widanage**](https://github.com/chathurawidanage)

## License
```
Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in 
compliance with the License. You may obtain a copy of the License at 

http://www.apache.org/licenses/LICENSE-2.0 

Unless required by applicable law or agreed to in writing, software distributed under the License is 
distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. 
See the License for the specific language governing permissions and limitations under the License. `
```
## Acknowledgments
* Awesome SLAppForge team
* Amazon Web Services 
