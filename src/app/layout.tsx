import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.scss";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://taotechingai.com'),
  title: {
    default: 'Tao Te Ching - Ancient Wisdom with Modern AI Interpretations',
    template: '%s | Tao Te Ching - AI Interpretations'
  },
  description: 'Discover the timeless wisdom of Laozi\'s Tao Te Ching with modern AI interpretations from ChatGPT, Claude, and Grok. Based on the acclaimed 1972 translation by Gia-Fu Feng and Jane English. Explore 81 chapters of Daoist philosophy with contemporary insights.',
  keywords: [
    'Tao Te Ching',
    'Laozi',
    'Lao Tzu',
    'Daoism',
    'Taoism',
    'Chinese Philosophy',
    'Eastern Wisdom',
    'Ancient Texts',
    'AI Interpretations',
    'ChatGPT',
    'Claude',
    'Grok',
    'Gia-Fu Feng',
    'Jane English',
    'Spiritual Wisdom',
    'Meditation',
    'Mindfulness',
    'Philosophy',
    'Ancient China',
    'Dao',
    'Te',
    'Ching',
    'Wu Wei',
    'Yin Yang'
  ],
  authors: [{ name: 'Tao Te Ching AI Interpretations' }],
  creator: 'Tao Te Ching AI Interpretations',
  publisher: 'Tao Te Ching AI Interpretations',
  category: 'Philosophy',
  classification: 'Educational Content',
  alternates: {
    canonical: 'https://taotechingai.com',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://taotechingai.com',
    siteName: 'Tao Te Ching - AI Interpretations',
    title: 'Tao Te Ching - Ancient Wisdom with Modern AI Interpretations',
    description: 'Explore Laozi\'s timeless Tao Te Ching with modern AI interpretations. 81 chapters of Daoist philosophy with insights from ChatGPT, Claude, and Grok.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Tao Te Ching - Ancient Wisdom with Modern AI Interpretations',
        type: 'image/png',
      },
      {
        url: '/og-image-square.png',
        width: 1200,
        height: 1200,
        alt: 'Tao Te Ching - Ancient Wisdom with Modern AI Interpretations',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@taoteching',
    creator: '@taoteching',
    title: 'Tao Te Ching - Ancient Wisdom with Modern AI Interpretations',
    description: 'Explore Laozi\'s timeless Tao Te Ching with modern AI interpretations. 81 chapters of Daoist philosophy with contemporary insights.',
    images: {
      url: '/og-image.png',
      alt: 'Tao Te Ching - Ancient Wisdom with Modern AI Interpretations',
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
    yahoo: 'your-yahoo-verification-code',
    other: {
      bing: ['your-bing-verification-code'],
    },
  },
  other: {
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'black-translucent',
    'apple-mobile-web-app-title': 'Tao Te Ching',
    'mobile-web-app-capable': 'yes',
    'msapplication-TileColor': '#1a1a1a',
    'msapplication-config': '/browserconfig.xml',
    'theme-color': '#1a1a1a',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": "https://taotechingai.com/#website",
        "url": "https://taotechingai.com",
        "name": "Tao Te Ching - AI Interpretations",
        "description": "Ancient wisdom of the Tao Te Ching with modern AI interpretations",
                  "publisher": {
            "@id": "https://taotechingai.com/#organization"
          },
        "potentialAction": [
          {
            "@type": "SearchAction",
            "target": {
              "@type": "EntryPoint",
              "urlTemplate": "https://taotechingai.com/?search={search_term_string}"
            },
            "query-input": "required name=search_term_string"
          }
        ],
        "inLanguage": "en-US"
      },
      {
        "@type": "Organization",
        "@id": "https://taotechingai.com/#organization",
        "name": "Tao Te Ching AI Interpretations",
        "url": "https://taotechingai.com",
        "logo": {
          "@type": "ImageObject",
          "inLanguage": "en-US",
          "@id": "https://taotechingai.com/#/schema/logo/image/",
          "url": "https://taotechingai.com/logo.png",
          "contentUrl": "https://taotechingai.com/logo.png",
          "width": 512,
          "height": 512,
          "caption": "Tao Te Ching AI Interpretations"
        },
        "image": {
          "@id": "https://taotechingai.com/#/schema/logo/image/"
        }
      },
      {
        "@type": "WebPage",
        "@id": "https://taotechingai.com/#webpage",
        "url": "https://taotechingai.com",
        "name": "Tao Te Ching - Ancient Wisdom with Modern AI Interpretations",
        "isPartOf": {
          "@id": "https://taotechingai.com/#website"
        },
        "about": {
          "@id": "https://taotechingai.com/#organization"
        },
        "description": "Explore Laozi's timeless Tao Te Ching with modern AI interpretations from ChatGPT, Claude, and Grok. Based on the acclaimed 1972 translation by Gia-Fu Feng and Jane English.",
        "breadcrumb": {
          "@id": "https://taotechingai.com/#breadcrumb"
        },
        "inLanguage": "en-US",
        "potentialAction": [
          {
            "@type": "ReadAction",
            "target": ["https://taotechingai.com"]
          }
        ]
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://taotechingai.com/#breadcrumb",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://taotechingai.com"
          }
        ]
      },
      {
        "@type": "Book",
        "name": "Tao Te Ching",
        "author": {
          "@type": "Person",
          "name": "Laozi",
          "alternateName": ["Lao Tzu", "Lao Zi"]
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
        "inLanguage": "en",
        "genre": ["Philosophy", "Spirituality", "Ancient Texts"],
        "about": [
          "Daoism",
          "Taoism",
          "Chinese Philosophy",
          "Eastern Wisdom",
          "Spiritual Practice"
        ],
        "description": "The Tao Te Ching is a fundamental text for both philosophical and religious Daoism, written by the sage Laozi in ancient China."
      }
    ]
  };

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="msapplication-tap-highlight" content="no" />
        <meta name="application-name" content="Tao Te Ching" />
        <meta name="apple-mobile-web-app-title" content="Tao Te Ching" />
        <meta name="theme-color" content="#1a1a1a" />
        <meta name="msapplication-TileColor" content="#1a1a1a" />
        <meta name="color-scheme" content="dark light" />
        
        <link rel="canonical" href="https://taotechingai.com" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="sitemap" href="/sitemap.xml" />
        
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
