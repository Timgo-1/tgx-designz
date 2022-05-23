import styled from "styled-components";
import { Link } from "react-router-dom";

export const FooterContainer = styled.div`
  padding: 1rem 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: url("./images/footer-bg.svg");
`;

export const FooterSubscription = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-bottom: 15px;
  color: yellowgreen;
  width: 100%;
  /* background-color: #101522; */
`;
export const SocialMedia = styled.section`
  max-width: 1000px;
  width: 100%;
`;

export const SocialMediaWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  max-width: 1000px;
  margin: 20px auto 0 auto;

  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`;

export const SocialLogo = styled(Link)`
  color: beige;
  justify-self: flex-start;
  cursor: pointer;
  text-decoration: none;
  font-size: 2rem;
  display: flex;
  align-items: center;
	&:hover {
    color: peachpuff;
    transition: 0.3s ease-out;
  }
`;

export const SocialIcon = styled.img`
	margin-right: -1.4rem;
	margin-bottom: -12px;
  width: 2.5em;
`;

export const WebsiteRights = styled.small`
  color: violet;
  margin-bottom: 16px;
`;

export const SocialIcons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 240px;
`;

export const SocialIconLink = styled.a`
  color: dodgerblue;
  font-size: 24px;
	margin-bottom: 20px;

  &:hover {
    color: blue;
    transition: 0.3s ease-out;
  }
`;

export const FooterSubHeading = styled.p`
  font-family: "Lucida Sans", Arial, sans-serif;
  margin-bottom: 15px;
  font-size: 24px;
  color: chartreuse;
`;

export const FooterSubText = styled.p`
  margin-bottom: 20px;
  font-size: 20px;
  color: navy;
`;


