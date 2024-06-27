import React from 'react';
import {useState, useEffect} from 'react';
import './NewsCard.css';

interface NewsCardProps{
    newsItem: any;
    key: any;
}

function NewsCard(props: NewsCardProps) {
 //   console.log(props.newsItem)
  return (
    <div className="newsCard">
        <img alt={props.newsItem.title} src={props.newsItem.urlToImage?props.newsItem.urlToImage:""}
            className="newsImage"/>
        <div className="newsText">
            <div>
                <span className="title">
                    {props.newsItem.title}
                </span>
            </div>
            <div className="lowerNewsText">
                   <div className="description">{props.newsItem.description}</div>
                   <span className="readmore">Read More at
                   <a href={props.newsItem.url} target="_blank"><b>{props.newsItem.source.name}</b></a>
                   </span>
            </div>
        </div>
    </div>
  );
}

export default NewsCard;
