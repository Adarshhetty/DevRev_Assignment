# Creating Work Items with DevRev API

This repository contains a Node.js script to demonstrate how to create work items (issues or tickets) using the DevRev API. Follow the steps below to get started.

## Prerequisites

1. Node.js installed on your machine.
2. An API key from DevRev. You can obtain your API key by signing up on the DevRev platform.

## Installation

1. Clone this repository to your local machine:

git clone <[https://github.com/Adarshhetty/DevRev_Assignment]>

2. Navigate to the project directory:

cd 01_Utilizing_the_DevRev_API

3. Install the required dependencies using npm:

npm install


## Usage

1. Replace `<API Key>` in the `script.js` file with your actual API key obtained from DevRev.

2. Customize the `requestData` object in the `script.js` file to specify the details of the work item you want to create. Make sure to provide values for `applies_to_part`, `owned_by`, and `title` properties.

3. Run the script using Node.js:

node script.js


4. The script will make a POST request to the DevRev API to create the work item with the provided details. If successful, it will log the response containing the created work item details.

## Troubleshooting

- If you encounter any errors or issues while running the script, double-check the API key and ensure that you have provided valid values for the `requestData` object.

- Refer to the [DevRev API documentation](https://devrev.ai/docs/api/) for more information on available endpoints and request parameters.


