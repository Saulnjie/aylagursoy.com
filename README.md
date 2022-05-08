# Next.js + Tailwind CSS Example

This example shows how to use [Tailwind CSS](https://tailwindcss.com/) [(v3.0)](https://tailwindcss.com/blog/tailwindcss-v3) with Next.js. It follows the steps outlined in the official [Tailwind docs](https://tailwindcss.com/docs/guides/nextjs).

## Deploy your own

Deploy the example using [Vercel](https://vercel.com?utm_source=github&utm_medium=readme&utm_campaign=next-example) or preview live with [StackBlitz](https://stackblitz.com/github/vercel/next.js/tree/canary/examples/with-tailwindcss)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https://github.com/vercel/next.js/tree/canary/examples/with-tailwindcss&project-name=with-tailwindcss&repository-name=with-tailwindcss)

## How to use

Execute [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) with [npm](https://docs.npmjs.com/cli/init) or [Yarn](https://yarnpkg.com/lang/en/docs/cli/create/) to bootstrap the example:

```bash
npx create-next-app --example with-tailwindcss with-tailwindcss-app
# or
yarn create next-app --example with-tailwindcss with-tailwindcss-app
# or
pnpm create next-app -- --example with-tailwindcss with-tailwindcss-app
```

Deploy it to the cloud with [Vercel](https://vercel.com/new?utm_source=github&utm_medium=readme&utm_campaign=next-example) ([Documentation](https://nextjs.org/docs/deployment)).

Project Exam 2
There are two options with this Project Exam. You need to only choose one and please follow the deliveries carefully.

Goal
To take the skills learned over the last two years and take on an extensive project where the finished product should reflect the candidate's general development capabilities, in addition to visual and technical skills.

Brief
For this assignment you have the choice between getting a real world client that you will manage and build a website for, or a case study to make a hotel booking website.

Whatever project you choose, the final submission must have the following:

A Gantt chart planning the project
A style guide
An Adobe XD prototype
Use a CSS Pre-processor and BEM if not using CSS Modules, Styled Components, etc
Use a React.js or Next.js
You can use regular JS or TypeScript
Please use create-react-app or create-next-app to generate a skeleton project for yourself
A fully working website that fulfils the brief

Option 1: Real World Client
Make a website or application for a real world client. The project should offer a significant enough scope to be able to show off your skills as a developer, and hopefully the project can form a central part of your portfolio for when you start applying for jobs.

The process followed for the project will differ depending on the client and the requirements of their project.

Note: The project has to have a big enough scope to show off the skills learned over your studies. An example of the level we’re expecting would be a website where administrators can add, update, remove products, and users can search, filter, and contact administrators. If you are unsure if your potential client’s brief is strong enough for the Project Exam 2, please message your tutors. Use of a JavaScript Framework is a requirement.

If you do a Real World Client, your project will need to have the following:

Visitor side:
Home page
Search bar typeahead (auto dropdown to match the products or services the real world client has)
A list of products or services either on the home page or a dedicated page
A specific page for a product or service
A contact form that sends a message and which can be viewed on the admin side. This can be a modal or a page.
An enquiry page, either as a modal or separate page
Admin side:
Login section that makes use of JWT tokens
List of enquiries and new enquiries appear when user submits the form on the enquiry page
List of messages from the contact form
The admin can create a new product/service

Recommended Process
Week 1 to 3: Finding client, Planning and Design Week 4 to 6: Coding Week 7: Bug Fixing

Level 1 Process
Use your networks and connections to find a client that needs a website or application built.
Understand their requirements and come up with a functional specification for the project. You can write the functional specification using “System shall” statements. For example, “The system shall allow visitors to search for an article”
Create a Gantt chart for the project, planning out your deliverables for the client.
Make a design style guide and then take this style guide and create an Adobe XD prototype. Present to the client for feedback.
Develop the site ensuring you deliver all that is listed in your functional specification.
Test the website on various platforms and browsers. Ensure the site is bug-free and working before presenting to the client.
Go through a final round of changes before going live with the website.
Write a report on your process and decisions for the project. Please use the report template provided.
Submission
End of week 3: Functional specification, Gantt chart, style guide, and Adobe XD prototype End of week 7: Report with link to website, and all files in a compressed ZIP

Resources
Report template included in the repo.

Video on deploying Strapi to Heroku

---

Ting og fikse:

1. Rydde opp i filene
2. implementere jwt-token og security
3. Post metode / contact form

4. searchbar - se gammel eksamen
5. Hva skjer med images? Grainy, og vrange
6. kan nav brukes i app.js?
