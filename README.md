# frontegg-app

## Setup

1. Clone the repo to your local machine:

git clone https://github.com/udibh-frontegg/frontegg-app.git
cd frontegg-app

2. Install dependencies:
npm install
npm install @frontegg/react react-router-dom

4. Start the App:
npm run dev

App will open at http://localhost:5173
You should be redirected to the Frontegg login page.


## Frontegg Configuration

- Authentication > Login method > Hosted login
- Added http://localhost:5173/oauth/callback to Allowed Redirect URLs
- Enabled Magic Link only sign-in
- Created limited role:
  View own profile
  Invite users
  Access audit logs
  Create M2M tokens
- Configured http://localhost:5173 & https://app-grkb95gt40d2.frontegg.com in Keys & Domains > Domains > Allowed Origins
- Invited hunter@frontegg.com with this role

## Features

- User authentication integrated with Frontegg
- Home page shows username and profile picture
- Settings button opens the Frontegg Admin Portal
