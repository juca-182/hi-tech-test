# Hello Insight Front-End Technical Test

Welcome to our technical test! Below are the instructions and requirements for completing the task. This test will assess your skills in Angular, Typescript, HTML, CSS and SCSS by implementing a user interface based on a provided Figma prototype and integrating it with a REST API.

## Requirements

Technical Stack

- **Framework**: Angular (version 15 or higher).
- **Language**: TypeScript.
- **Styling**: CSS/SCSS (from scratch, no frameworks like Bootstrap or Tailwind).
- **Optional**: Docker for containerizing the application.
---

## Test Description

You are tasked with implementing a front-end application that displays a list of groups. The application must follow the design provided in the Figma prototype.

### User Stories

Bellow you will find the user stories for the implementation requested. These user stories are supported with a Figma prototype and the API to be integrated.

#### Definitions:

- **Group:** A set of participants that will answer a survey.
- **Site:**  A set of groups that belongs to the same location.
- **Participant:** A person that belongs to a group and received the survey.

#### Sections:


**Group Info**

As a user, I want to see a list of groups displayed in the application, so that I can understand and interact with the groups.

As a user, I want to see the information of a group in the Group Info section so that I can understand what are the specifications for that group

- Group name: `<name>`  (e.g “Group A”)
- Site name: `<site>` (e.g. “Downtown Rec Center”)
- Number of group participants: `<participants>` (e.g “35 Group Participants”)
- Start Date - End Date
    - Start Date: `<start_date>` (e.g “Dec 1, 2023”)
    - End Date: `<end_date>` (e.g “Mar 30, 2024”)


**Survey Collection Tags**

As a user, I want to see when is the survey date in the Survey Collection Tags (check prototype) section so I can take actions about collecting the data

- “Check-In Surveys | `<survey_date>`  (e.g “Check-In Surveys | March 11, 2024”)

As a user, I want to easily know how my group is progressing in collecting responses by tags, so I can quickly identify which groups need more attention.

- Tags:
  1. **Target Met:**
      - The group has achieved or exceeded the target number of valid responses.
      - Display: Target Met - `<valid_responses> of <response_target>` (e.g., "10 of 10").
  2. **Target Not Met:**
      - The group has collected some valid responses but has not yet reached the target.
      - Display: Target Not Met -`<valid_responses> of <response_target>` (e.g., "5 of 10").
  3. **No Responses Collected:**
      - The group has not collected any valid responses yet.
      - Display: No Responses Collected


**Group Details**

As a user, I want to view group details by clicking the “Show Details” button, so that I can see the details about a specific group.

As a user, I want a progression bar in the group details so that I can easily see how my group is progressing.

As a user, I want to download the survey admin kit and the backup surveys so that I can print those later

- `<survey_admin_kit>`
- `<backup_surveys>`

As a user, I want to click on "Copy a link” and have that link in my clipboard so that I can paste it in a web browser

- `<survey_link>`

As a user, I want to see tooltips for “Valid Responses” and “Response Target” in the group details, so that I can better understand what these fields represent.


**Event Tracking**

As a Product Owner, I want to collect information when the users click on the following events so that I can understand how they interact with the application.

- When a click is made on the Show Details button.
- When a click is made in the Valid Responses pill in the Group Details.
- When a click is made in the Response Target pill in the Group Details.

### Key Tasks

1. **Layout Implementation**
    - Follow the [Figma Prototype](https://www.figma.com/design/ToFsXLYWhTAP1ZJRsXAcxE/Engineering-Front-End-Test?node-id=2-11673&node-type=canvas) to replicate the layout and visuals as closely as possible.
        - Development  (https://www.figma.com/design/ToFsXLYWhTAP1ZJRsXAcxE/Engineering-Front-End-Test?node-id=0-1&node-type=canvas&t=KeOegSxWB2t3gxel-0)
            - Icons used in the design. This icons are exportable from the figma.
            - Posible permutations.
            - Individual group card design (closed and open)
            - Details about the styling.
        - Prototype (https://www.figma.com/proto/ToFsXLYWhTAP1ZJRsXAcxE/Engineering-Front-End-Test?page-id=2%3A11673&node-id=2-11674&node-type=frame&viewport=345%2C276%2C0.25&t=zt8S0jDYemxsJYDU-1&scaling=scale-down-width&content-scaling=fixed)
            - Interactions with the groups cards
    - Create styles using pure CSS. Avoid using prebuilt libraries or frameworks.
2. **REST API Integration**
    - Connect to the first endpoint, which returns a list of groups. The structure of the group data will be shared in the next section.
    - Display the groups in the UI according to the Figma design.
    - The second endpoint is used to track events that occur in the application. We are interested on tracking three possible events:
        - The user clicks on the “Show Details” button of the group card and the details are displayed for the group.
        - The user clicks on “Valid Responses” in the group details and the tooltip is displayed.
        - The user clicks on “Response Target” in the group details and the tooltip is displayed.
3. **Optional**: Dockerize the application.
    - Write a Dockerfile to containerize the application for easy deployment.API Details

---

## Web Services

The web service endpoint to obtain the groups information is:

```
GET https://hi-api-develop.helloinsight.org/tech-test-groups-list/
```

### Example Response

```json
{
	"data": {
		"groups": [
		  {
		    "id": 1,
		    "name": "Group A",
		    "site": "Site B",
		    "participants": 10,
		    "start_date": "Mar 15, 2023",
        "end_date": "Jul 12, 2025",
        "survey_date": "July 19, 2025",
        "valid_responses": 5,
        "response_target": 10,
        "survey_link": "https://helloinsight.org/",
        "backup_surveys": "https://assets.ctfassets.net/2swnv0f818pu/7wps74OuRn8VWv8CMtohMG/d1f1b54e8a85cf2092d04e91c4d5d916/HI_College_Readiness_-_Tool_Brief.pdf",
        "survey_admin_kit": "https://assets.ctfassets.net/2swnv0f818pu/7wps74OuRn8VWv8CMtohMG/d1f1b54e8a85cf2092d04e91c4d5d916/HI_College_Readiness_-_Tool_Brief.pdf"
		  },
		  {
		    "id": 2,
		    "name": "Group B",
		    "site": "Site A",
		    "participants": 15,
		    "start_date": "Feb 10, 2024",
        "end_date": "Jun 21, 2025",
        "survey_date": "June 30, 2026",
        "valid_responses": 0,
        "response_target": 12,
        "survey_link": "https://helloinsight.org/",
        "backup_surveys": "https://assets.ctfassets.net/2swnv0f818pu/7wps74OuRn8VWv8CMtohMG/d1f1b54e8a85cf2092d04e91c4d5d916/HI_College_Readiness_-_Tool_Brief.pdf",
        "survey_admin_kit": "https://assets.ctfassets.net/2swnv0f818pu/7wps74OuRn8VWv8CMtohMG/d1f1b54e8a85cf2092d04e91c4d5d916/HI_College_Readiness_-_Tool_Brief.pdf"
		  }
		]
	}
}

```

The web service endpoint to track the events is:

```
POST https://hi-api-develop.helloinsight.org/tech-test-track-event/
```

### Example Body

```json
{
    "token": "a1b2c3",
    "event_name": "Event Name Example",
    "event_description": "Event Description Example"
}
```

The web service endpoint to read the events is:

```
GET https://hi-api-develop.helloinsight.org/tech-test-read-events/<token>/
```

This endpoint can be used to check what events have been tracked so far.

---

## Deliverables

- A fully functional Angular application.
- CSS/SCSS files defining the styles for the application.
- Readme with the steps to run the application locally.
- (Optional) A Dockerfile to run the application in a container

---

## How to Submit

1. Fork the provided repository (if applicable) or create a new repository in your GitHub account.
2. Commit your code and provide detailed commit messages.
3. Include a `README.md` file with instructions on how to set up and run the application locally (and via Docker, if implemented).
4. Send us the link to your repository once completed.

---

We look forward to seeing your solution! 🚀
