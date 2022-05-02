# Team Uruk Meetings

## 4-17-2022 Meeting Notes
**Planning**

* Create folders to hold our databases, and HTML (Completed by Connor)
  * Structure similarly to A5
* What data source do we want to use to get our COVID data?
  * Public database that could be scraped
  * API that easily interfaces
  * All of us can come by our next meeting with 1 or 2 data sources 
  * Request API access: https://airtable.com/shrMqS4C6wjpZLCP0
  * Public APIs: https://github.com/public-apis/public-apis
* Find examples of things we can get ideas from
  * Like: https://coronavirus.1point3acres.com/
* Set up main node.js server that will serve HTML/frontend
  * Put in index.js
* Database: better-sqlite3
  * User DB:
    * Store user login info
  * Interaction DB:
    * Figure out later

## 4-19-22 Meeting Notes

**Possible APIs**



* [HTTP API for COVID Data](https://pipedream.com/@pravin/http-api-for-latest-wuhan-coronavirus-data-2019-ncov-p_G6CLVM/readme)
    * Provides COVID data for every country, along with COVID data for regions in these countries
    * Statistics: # of Cases, # of Recoveries, # of Deaths
* [Covid Tracking Project API](https://covidtracking.com/data/api/version-2)
    * Provides COVID data for the USA, allows for single day statistics
    * Might be good to use if we want to focus in on the USA for our dashboard
    * One we will be using for now
* [Coronavirus (Covid-19) Data in the United States](https://github.com/nytimes/covid-19-data)
    * On github so very easy to view
    * Mainly shows examples of Datasets

**Good Examples of other COVID Dashboards**



* [https://covid19.ncdhhs.gov/dashboard](https://covid19.ncdhhs.gov/dashboard)
    * Dashboard for the state of North Carolina
* [https://public.tableau.com/app/profile/oira.dashboards/viz/CarolinaCOVID-19MonitoringDashboard/COVID19MetricsDashboard](https://public.tableau.com/app/profile/oira.dashboards/viz/CarolinaCOVID-19MonitoringDashboard/COVID19MetricsDashboard)

**Categories**



* Select by state
    * Daily case count for x number of days
* Hospitalizations by country or state
* Compare state by state, or compare state to national average
    * Percent difference
* Vaccination numbers/rate by state
* Interactive map possibly
* Search bar or drop down menu

**Next Steps**



* Use basic HTML/CSS for frontend
* Use JS/Node for backend
* Use better-sqllite3 for databases
* Frontend: Jenna Levy
    * Jenna will create markup
* Databases + Login: Maxwell Muoto
* Backend + Some Frontend (COVID Data Display): Colin Liebe, Connor Hitchings
* Node.js Backend: Robert Ceglie

Endpoints we will use:

* Login Page
* Account page
* US totals page
* States page


## 4-30-22 Meeting Notes
* Max will add in login validation and the account management page
 * Use email validation NPM package for valdiation
 * Account managamenet page will support:
  * Delete account
  * Change username
  * Change password
  * Change email
  * Allow user to view current information
* Robert will work on finishing finishing API documenation and making the login page look nicer
 * Will add alert if email is already being used or if account doesn't exist yet
 * Can add listeners in the script.js to accomplish this
* The rest of the work is all done

## 4-31-22 Meeting Notes
* Robert will refactor endpoints to be based around /app/
* Maxwell will creator the readme
* Fixed issues with loading JS and CSS through endpoints
* Will record video this evening with whoever is available
