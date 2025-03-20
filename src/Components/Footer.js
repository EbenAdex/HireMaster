import React from 'react';

export default function Footer() {
  return (
    <footer className="footer">
      <p>Follow us on:</p>
      <ul>
        <li>
          <a href="https://twitter.com/yourcompany" target="_blank" rel="noopener noreferrer">
            Twitter
          </a>
        </li>
        <li>
          <a href="https://instagram.com/yourcompany" target="_blank" rel="noopener noreferrer">
            Instagram
          </a>
        </li>
        <li>
          <a href="https://tiktok.com/@yourcompany" target="_blank" rel="noopener noreferrer">
            TikTok
          </a>
        </li>
      </ul>
    </footer>
  );
}