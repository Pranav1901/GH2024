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
        result = {summary['id']: summary['shorts'] for summary in summaries[:5]}
        return result
    else:
        return f"Error: {response.status_code}"      


def fetch_all_news():
    response = requests.get("http://localhost:8001/articles");
    if response.status_code == 200:
        newsarticles = response.json()
        summaries_dict = fetch_summaries()
        result = []
                # Limit to first 5 articles and enrich with summaries
        for article in newsarticles[:5]:
            article_id = article['id']
                     # Check if article_id exists in summaries_dict
            # Get summary from summaries_dict based on article ID
            summary = summaries_dict.get(article_id, 'Summary not available')
            enriched_article = {
                'id': article_id,
                'title': article['title'],
                'content': summary,
                'url': article['url'],
                'urlToImage': article['urlToImage']
            }
            result.append(enriched_article)
        


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