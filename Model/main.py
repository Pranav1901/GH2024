from fastapi import FastAPI
from app import generate
import os
from huggingface_hub import login
from pydantic import BaseModel
import json

os.environ['HF_HOME'] = '/hug/cache/'
os.environ['TRANSFORMERS_CACHE'] = '/blabla/cache/'

app = FastAPI()

class Item(BaseModel):
    code: str

@app.get("/")
async def root():
 return {"Code Review Automation":"Version 1.0 'First Draft'"}

@app.post("/ShortsGeneration/")
def predict(item: Item):
    result = generate(item)
    output = json.loads(result.content)
    return {"answer": output}
