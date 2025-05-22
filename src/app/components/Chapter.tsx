import React, { useState } from "react";

interface Explanations {
  chatgpt: string;
  grok: string;
  claude: string;
}

interface ChapterProps {
  number: number;
  text: string;
  explanations: Explanations;
}

const aiNames = [
  { key: "chatgpt", label: "ChatGPT", description: "OpenAI's ChatGPT interpretation" },
  { key: "grok", label: "Grok", description: "xAI's Grok interpretation" },
  { key: "claude", label: "Claude", description: "Anthropic's Claude interpretation" },
];

export const Chapter: React.FC<ChapterProps> = ({ number, text, explanations }) => {
  const [open, setOpen] = useState<{ [key: string]: boolean }>({ chatgpt: true });

  const toggle = (ai: string) => {
    setOpen((prev) => ({ ...prev, [ai]: !prev[ai] }));
  };

  // Enhanced structured data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `https://taotechingai.com#chapter-${number}`,
    "headline": `Tao Te Ching Chapter ${number}`,
    "alternativeHeadline": `Chapter ${number} of the Tao Te Ching by Laozi`,
    "description": `Chapter ${number} of the Tao Te Ching by Laozi with modern AI interpretations from ChatGPT, Claude, and Grok. Based on the Gia-Fu Feng and Jane English translation.`,
    "articleSection": "Philosophy",
    "articleBody": text.replace(/<br\s*\/?>/gi, ' ').replace(/<[^>]*>/g, ''),
    "wordCount": text.replace(/<[^>]*>/g, '').split(' ').length,
    "inLanguage": "en-US",
    "isPartOf": {
      "@type": "Book",
      "@id": "https://taotechingai.com#tao-te-ching",
      "name": "Tao Te Ching",
      "author": {
        "@type": "Person",
        "name": "Laozi",
        "alternateName": ["Lao Tzu", "Lao Zi"],
        "description": "Ancient Chinese philosopher and founder of Taoism"
      },
      "translator": [
        {
          "@type": "Person",
          "name": "Gia-Fu Feng"
        },
        {
          "@type": "Person", 
          "name": "Jane English"
        }
      ],
      "datePublished": "1972",
      "genre": ["Philosophy", "Spirituality", "Ancient Texts"],
      "about": ["Daoism", "Taoism", "Chinese Philosophy", "Eastern Wisdom"]
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://taotechingai.com#chapter-${number}-page`
    },
    "publisher": {
      "@type": "Organization",
      "name": "Tao Te Ching AI Interpretations",
      "url": "https://taotechingai.com"
    },
    "datePublished": "2024-01-01",
    "dateModified": "2024-01-01",
    "keywords": [
      `Tao Te Ching Chapter ${number}`,
      "Laozi",
      "Daoism",
      "Philosophy",
      "AI Interpretation",
      "Ancient Wisdom",
      "Chinese Philosophy"
    ],
    "about": [
      {
        "@type": "Thing",
        "name": "Taoism",
        "description": "Chinese philosophical and religious tradition"
      },
      {
        "@type": "Thing", 
        "name": "Eastern Philosophy",
        "description": "Philosophical traditions from Asia"
      }
    ]
  };

  const chapterTitle = `Chapter ${number}`;
  const cleanText = text.replace(/<br\s*\/?>/gi, ' ').replace(/<[^>]*>/g, '');

  return (
    <article 
      className="chapter-container" 
      id={`chapter-${number}`}
      aria-labelledby={`chapter-${number}-title`}
      itemScope 
      itemType="https://schema.org/Article"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      
      <header>
        <h2 
          id={`chapter-${number}-title`}
          className="chapter-title"
          itemProp="headline"
        >
          {chapterTitle}
        </h2>
      </header>

      <div 
        className="chapter-text" 
        dangerouslySetInnerHTML={{ __html: text }}
        itemProp="articleBody"
        role="main"
        aria-label={`Original text of ${chapterTitle}`}
      />

      <section 
        className="ai-explanations"
        aria-labelledby={`chapter-${number}-interpretations`}
      >
        <h3 
          id={`chapter-${number}-interpretations`}
          className="sr-only"
        >
          AI Interpretations for {chapterTitle}
        </h3>
        
        {aiNames.map(({ key, label, description }) => (
          <div className="ai-explanation" key={key}>
            <h4
              className="collapse-toggle"
              onClick={() => toggle(key)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  toggle(key);
                }
              }}
              tabIndex={0}
              role="button"
              aria-expanded={!!open[key]}
              aria-controls={`chapter-${number}-${key}-content`}
              aria-describedby={`chapter-${number}-${key}-desc`}
              id={`chapter-${number}-${key}-toggle`}
            >
              <span aria-hidden="true">{open[key] ? "▼" : "►"}</span>
              <span> {label} Interpretation</span>
            </h4>
            
            <span 
              id={`chapter-${number}-${key}-desc`}
              className="sr-only"
            >
              {description} of {chapterTitle}
            </span>
            
            {open[key] && (
              <div
                id={`chapter-${number}-${key}-content`}
                className="ai-explanation-text"
                dangerouslySetInnerHTML={{ __html: explanations[key as keyof Explanations] }}
                role="region"
                aria-labelledby={`chapter-${number}-${key}-toggle`}
                itemProp="comment"
                itemScope
                itemType="https://schema.org/Comment"
              />
            )}
          </div>
        ))}
      </section>

      {/* Hidden content for screen readers */}
      <div className="sr-only">
        <p>
          This is {chapterTitle} of the Tao Te Ching by Laozi, 
          translated by Gia-Fu Feng and Jane English. 
          The chapter contains {cleanText.split(' ').length} words 
          and includes interpretations from three AI models: ChatGPT, Claude, and Grok.
        </p>
      </div>
    </article>
  );
}; 