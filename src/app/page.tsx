// src/app/page.tsx

"use client";
import React, { useState, useEffect, useRef } from "react";
import { taoChapters } from "@data/taoChapters";
import { Chapter } from "@components/Chapter";
import { Credit } from "@components/Credit";

const BATCH_SIZE = 5;

export default function Home() {
  const [visibleCount, setVisibleCount] = useState(BATCH_SIZE);
  const loader = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!loader.current) return;
      if (loader.current.getBoundingClientRect().top < window.innerHeight) {
        setVisibleCount((prev) => Math.min(prev + BATCH_SIZE, taoChapters.length));
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Tao Te Ching - Complete Collection with AI Interpretations",
    "description": "Complete collection of all 81 chapters of the Tao Te Ching by Laozi with modern AI interpretations from ChatGPT, Claude, and Grok",
    "url": "https://taotechingai.com",
    "mainEntity": {
      "@type": "ItemList",
      "numberOfItems": taoChapters.length,
      "itemListElement": taoChapters.slice(0, visibleCount).map((chapter, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "item": {
          "@type": "Article",
          "@id": `https://taotechingai.com#chapter-${chapter.number}`,
          "headline": `Tao Te Ching Chapter ${chapter.number}`,
          "description": `Chapter ${chapter.number} of the Tao Te Ching by Laozi with AI interpretations`,
          "articleSection": "Philosophy",
          "inLanguage": "en-US",
          "isPartOf": {
            "@type": "Book",
            "name": "Tao Te Ching",
            "author": {
              "@type": "Person",
              "name": "Laozi"
            }
          }
        }
      }))
    },
    "breadcrumb": {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://taotechingai.com"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Tao Te Ching Chapters",
          "item": "https://taotechingai.com#chapters"
        }
      ]
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      
      <header className="header" role="banner">
        <div className="container">
          <hgroup>
            <h1 className="main-title">Tao Te Ching</h1>
            <h2 className="subtitle">Ancient Wisdom by Laozi (6th century BC)</h2>
            <p className="subtitle">Gia-Fu Feng & Jane English translation with modern AI interpretations from ChatGPT, Claude, and Grok</p>
          </hgroup>
          

        </div>
      </header>

      <main role="main">
        <div className="container">
          <section id="about" aria-labelledby="about-heading">
            <h2 id="about-heading" className="sr-only">About This Collection</h2>
            <p className="sr-only">
              This collection presents all 81 chapters of the Tao Te Ching, the fundamental text of Daoism written by the ancient Chinese philosopher Laozi. 
              Each chapter includes the original text from the acclaimed 1972 translation by Gia-Fu Feng and Jane English, 
              accompanied by modern interpretations from leading AI models including ChatGPT, Claude, and Grok.
            </p>
          </section>

          <section id="chapters" aria-labelledby="chapters-heading">
            <h2 id="chapters-heading" className="sr-only">Tao Te Ching Chapters</h2>
            <div role="feed" aria-label="Tao Te Ching chapters with AI interpretations">
              {taoChapters.slice(0, visibleCount).map((chapter) => (
                <Chapter
                  key={chapter.number}
                  number={chapter.number}
                  text={chapter.originalText}
                  explanations={{
                    chatgpt: chapter.explanationChatGPT,
                    grok: chapter.explanationGrok,
                    claude: chapter.explanationClaude,
                  }}
                />
              ))}
            </div>
            <div ref={loader} aria-hidden="true" />
            
            {visibleCount < taoChapters.length && (
              <div className="loading-indicator" aria-live="polite">
                <p>Loading more chapters... ({visibleCount} of {taoChapters.length} loaded)</p>
              </div>
            )}
          </section>
        </div>
      </main>

      <footer className="footer" role="contentinfo">
        <div className="container">
          <Credit />
          <nav className="footer-links" role="navigation" aria-label="Footer navigation">
            <a href="#about">About</a>
            <span aria-hidden="true"> | </span>
            <a href="#chapters">Chapters</a>
            <span aria-hidden="true"> | </span>
            <a href="https://www.bookoftao.com/translations/tao-te-ching-translation-by-gia-fu-feng-and-jane-english" 
               target="_blank" 
               rel="noopener noreferrer">
              Source Translation
            </a>
          </nav>
        </div>
      </footer>
    </>
  );
}