import './Main.scss';
import { format } from 'date-fns';
import {useMemo, useState, useCallback} from 'react';
export function HomeBody () {
    const articles = useMemo(() => {
        return [
          {
            title: 'Article 1',
            img: {src: "https://via.placeholder.com/350x150"},
            previewText: 'Something on Hover',
            paragraphs: [
    "this is one",
    "this is another"
            ]
          },
          {
            title: 'Article 4',
            img: {src: "https://via.placeholder.com/350x150"},
            previewText: 'Something on Hover'
          },
          {
            title: 'Article 3',
            img: {src: "https://via.placeholder.com/350x150"},
            previewText: 'Something on Hover'
          },
          {
            title: 'Article 2',
            img: {src: "https://via.placeholder.com/350x150"},
            previewText: 'Something on Hover'
          },
        ]
      }, []);
      const siteTitle = 'pedal';
      const today = format(new Date, 'MM/dd/yyyy'); // usememo
      const mainArticle = articles[0];
    return (
        <>
        <h1>{siteTitle}</h1>
            <article class="primary">
              <h2>{mainArticle.title}</h2>
              <section class="hero">
                <div class="triangle upside-down">
                  <img src="https://via.placeholder.com/350x150" alt=""/>
                </div>
                <div class="triangle-wrapper">
                  <div class="triangle">
                    <img src="https://via.placeholder.com/350x150" alt="" />
                  </div>
                </div>
              </section>
              <section class="content">
                <header>
                  <h2>{articles[0].title}</h2>
                  <div class="date">
                    {today}
                  </div>
                </header>
                <div class="text-wrapper">
                  {articles[0].paragraphs.map(para=><p key={para}>{para}</p>)}
                </div>
              </section>
            </article>
            <aside>
              <h2>More Articles</h2>
              <div class="article-container">
                {
                  articles.map(({previewText, img: {src}, title} ={}) => (
                    <article className="preview" key={title}>
                       <img src={src} />
                       {previewText}
                    </article>
                  ))
                }
              </div>
            </aside>
        </>
    )
}
export default function Main ({children}) {
    return (
      <main> {children} </main>
    );
  }