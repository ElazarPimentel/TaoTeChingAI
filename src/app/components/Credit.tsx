import React from "react";

export const Credit: React.FC = () => (
  <div className="credit">
    <p>
      Tao Te Ching translation by Gia-Fu Feng and Jane English. Source:{" "}
      <a href="https://www.bookoftao.com/translations/tao-te-ching-translation-by-gia-fu-feng-and-jane-english" target="_blank" rel="noopener noreferrer">
        Book of Tao
      </a>
    </p>
    <p>
      © {new Date().getFullYear()} · AI Interpretations compiled with care
    </p>
  </div>
); 