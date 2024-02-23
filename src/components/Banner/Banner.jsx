import './Banner.css';

export const Banner = ({ title, content }) => (
  <div className="bannerRoot">
    <h4>{title}</h4>
    <p>{content}</p>
  </div>
)