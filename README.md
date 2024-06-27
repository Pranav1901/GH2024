# GH2024
Installation
npm install -g json-server

To run the json server use command 
"json-server — watch db.json — routes routes.json — port 8000"

npm install -g json-server@0.17.4
npx json-server --watch db.json --routes route.json --port 8000
cd json-server
http://localhost:8000/articles/24767206


To run the python project

pip install -r requirements.txt
pip install requests
run python main.py

To run the newsarticles mock-server
cd json-server
npx json-server --watch newsapiresponse.json --port 8001
http://localhost:8001/articles
