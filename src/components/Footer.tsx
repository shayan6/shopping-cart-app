import { Layout } from "antd";
import {
  FacebookOutlined,
  GithubOutlined,
  YoutubeOutlined,
  InstagramOutlined,
  CodeOutlined, // Code icon for HackerRank
  LinkedinOutlined, // LinkedIn icon
} from "@ant-design/icons";

const Footer = () => {
  const footerTextStyle = {
    fontSize: '1rem',
    color: '#888',
    marginBottom: '10px',
  };

  // Define a common style for the icons
  const iconStyle = {
    fontSize: '1.5rem',
    marginRight: '1rem',
  };

  // Define CSS classes for each icon's color
  const linkedinIconColor = { color: '#0077b5' };
  const youtubeIconColor = { color: '#FF0000' };
  const githubIconColor = { color: '#333' };
  const hackerrankIconColor = { color: '#2ec866' };
  const facebookIconColor = { color: '#1877f2' };
  const instagramIconColor = { color: '#E4405F' };

  return (
    <Layout.Footer style={{ textAlign: "center" }}>
      <div style={footerTextStyle}>
        Powered by Shayan Shaikh
      </div>
      {/* Add social media links in the specified sequence with relative colors */}
      <a href="https://www.linkedin.com/in/shayan-shaikh/" target="_blank" rel="noopener noreferrer">
        <LinkedinOutlined style={{ ...iconStyle, ...linkedinIconColor }} />
      </a>
      <a href="https://www.youtube.com/channel/UCuVZRy9Cff4xdh-GyyGknpA" target="_blank" rel="noopener noreferrer">
        <YoutubeOutlined style={{ ...iconStyle, ...youtubeIconColor }} />
      </a>
      <a href="https://github.com/shayan6" target="_blank" rel="noopener noreferrer">
        <GithubOutlined style={{ ...iconStyle, ...githubIconColor }} />
      </a>
      <a href="https://www.hackerrank.com/profile/shayan_shaikh" target="_blank" rel="noopener noreferrer">
        <CodeOutlined style={{ ...iconStyle, ...hackerrankIconColor }} />
      </a>
      <a href="https://www.facebook.com/shayanshaikh996/" target="_blank" rel="noopener noreferrer">
        <FacebookOutlined style={{ ...iconStyle, ...facebookIconColor }} />
      </a>
      <a href="https://www.instagram.com/_shayanshaikh" target="_blank" rel="noopener noreferrer">
        <InstagramOutlined style={{ ...iconStyle, ...instagramIconColor }} />
      </a>
    </Layout.Footer>
  );
};

export default Footer;
