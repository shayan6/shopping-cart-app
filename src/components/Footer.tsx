import { Layout } from "antd";
import {
  FacebookOutlined,
  GithubOutlined,
  YoutubeOutlined,
  InstagramOutlined,
  CodeOutlined,
  LinkedinOutlined,
} from "@ant-design/icons";

const Footer = () => {
  const footerTextStyle = {
    fontSize: "1rem",
    color: "#888",
    marginBottom: "10px",
  };

  const iconStyle = {
    fontSize: "1.5rem",
    marginRight: "1rem",
  };

  const linkedinIconColor = { color: "#0077b5" };
  const youtubeIconColor = { color: "#FF0000" };
  const githubIconColor = { color: "#333" };
  const hackerrankIconColor = { color: "#2ec866" };
  const facebookIconColor = { color: "#1877f2" };
  const instagramIconColor = { color: "#E4405F" };

  return (
    <Layout.Footer style={{ textAlign: "center" }}>
      <div style={footerTextStyle}>Powered by Shayan Shaikh</div>
      <a
        href="https://www.linkedin.com/in/shayan-shaikh/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <LinkedinOutlined style={{ ...iconStyle, ...linkedinIconColor }} />
      </a>
      <a
        href="https://www.youtube.com/channel/UCuVZRy9Cff4xdh-GyyGknpA"
        target="_blank"
        rel="noopener noreferrer"
      >
        <YoutubeOutlined style={{ ...iconStyle, ...youtubeIconColor }} />
      </a>
      <a
        href="https://github.com/shayan6"
        target="_blank"
        rel="noopener noreferrer"
      >
        <GithubOutlined style={{ ...iconStyle, ...githubIconColor }} />
      </a>
      <a
        href="https://www.hackerrank.com/profile/shayan_shaikh"
        target="_blank"
        rel="noopener noreferrer"
      >
        <CodeOutlined style={{ ...iconStyle, ...hackerrankIconColor }} />
      </a>
      <a
        href="https://www.facebook.com/shayanshaikh996/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FacebookOutlined style={{ ...iconStyle, ...facebookIconColor }} />
      </a>
      <a
        href="https://www.instagram.com/_shayanshaikh"
        target="_blank"
        rel="noopener noreferrer"
      >
        <InstagramOutlined style={{ ...iconStyle, ...instagramIconColor }} />
      </a>
    </Layout.Footer>
  );
};

export default Footer;
