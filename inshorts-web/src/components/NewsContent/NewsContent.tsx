import React from 'react';
import Container from '@mui/material/Container';
import './NewsContent.css';
import NewsCard from '../NewsCard/NewsCard';

interface NewsContentProps{
    newsArray: any[];
    newsResults: any;
}

function NewsContent(props: NewsContentProps) {

  return (
    <Container maxWidth="md">
        <div className="content">
            {props.newsArray.map((newsItem) => (

                <NewsCard newsItem={newsItem} key={newsItem.title}/>
            ))}

        </div>
    </Container>
  );
}

export default NewsContent;
