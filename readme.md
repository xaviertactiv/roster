**Roster App:**

***System Requirements:***
- Python 3.5 to latest
- Postgresql any version


***Setup Instruction:***

Part 1 (Backend)

1. Clone the project.
2. Create a virtual environment. `virtualenv env --python=python3.x`
3. Enable your virtualenv
4. Create a `local_settings.py` and setup the database info
5. Run `pip install -r requirements.txt`
6. Run `migrate` command.
7. Create a superuser using `createsuperuser` command.
8. Run `runserver` command.

Part 2 (Frontend)

1. Go to the angular root directory. `assets/scripts/fe`
2. Run `npm install`
3. Run `ng build`. add `--watch` when you are developing to avoid re-running the script for every changes.

