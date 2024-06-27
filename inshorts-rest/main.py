from flask import Flask, request, abort, jsonify, render_template
from flask_restful import Api, Resource, reqparse
import requests
from flask_cors import CORS

app = Flask(__name__)
cors = CORS(app, resource={
    r"/*":{
        "origins":"*"
    }
})
api = Api(app)

def fetch_summaries():
    response = requests.get("http://localhost:8000/articles")
    if response.status_code ==200:
        summaries = response.json()
        result = [{'id': summary['id'], 'summary': summary['shorts'] } for summary in summaries][:5]
        return result
    else:
        return f"Error: {response.status_code}"      


def fetch_all_news():
    response = requests.get("http://localhost:8001/articles");
    if response.status_code == 200:
        newsarticles = response.json()
        summaries_dict = fetch_summaries()
        result = [{'id': article['id'], 'title': article['title'], 'content': summaries_dict, 'url': article['url'], 'urlToImage': article['urlToImage']} for article in newsarticles][:5]

        return result
    else:
        return f"Error: {response.status_code}"

class News(Resource):
    def get(self):
        all_news_data = fetch_all_news()
        return all_news_data
    
api.add_resource(News, "/news")


if __name__ == "__main__":
    app.run(debug=True)