import React from "react";
import axios from "axios";
import { useState } from "react";
import "./NewsCard.css";
import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from "@mui/material";
import Questions from "../QuestionsComponent/Questions";
import { QNA } from "../../utils/types";

interface NewsCardProps {
  newsItem: any;
  key: any;
}

function NewsCard(props: NewsCardProps) {
  const [value, setValue] = React.useState('false');
  const [objectsArray, setObjectsArray] = useState<QNA[]>([]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const eventValue = (((event.target as HTMLInputElement).value));
    if(eventValue === 'true') {
      getQuizApi().then(()=> {
        setValue(eventValue);
      })
    } else {
      setValue(eventValue);
    }
  };

  const getQuizApi = async () => {
    try {
      const response = await axios.get(`http://localhost:8000/articles/${props.newsItem.id}`);
      console.log("quiz :: " + JSON.stringify(response));
      setObjectsArray(response.data.quiz)
    } catch (error) {
      console.log("error" + error);
    }
  };

  return (
    <div className="newsCard">
      <img
        alt={props.newsItem.title}
        src={props.newsItem.urlToImage ? props.newsItem.urlToImage : ""}
        className="newsImage"
      />
      <div className="newsText">
        <div>
          <span className="title">{props.newsItem.title}</span>
        </div>
        <div className="lowerNewsText">
          <div className="description">{props.newsItem.content}</div>
          <span className="readmore">
            Read More at
            <a href={props.newsItem.url} target='_blank'>
              <b>Link</b>
            </a>
          </span>
          {props.newsItem ?
            <span className="readmore">
              <FormControl>
                <FormLabel id="demo-row-radio-buttons-group-label">Do you want to take a Quiz ?</FormLabel>
                <RadioGroup
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="row-radio-buttons-group"
                  value={value}
                  onChange={handleChange}
                >
                  <FormControlLabel value="true" control={<Radio />} label="Yes" />
                  <FormControlLabel value="false" control={<Radio />} label="No" />
                </RadioGroup>
              </FormControl>
              {value === 'true' ? <div><Questions questions={objectsArray} /></div> : null}
            </span>
            : ''
          }
        </div>
      </div>
    </div>
  );
}

export default NewsCard;
