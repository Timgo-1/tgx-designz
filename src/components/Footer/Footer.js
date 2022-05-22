import React from 'react';
import { FaFacebook, FaInstagram, FaYoutube, FaTwitter } from 'react-icons/fa';
import {
	FooterContainer,
	FooterSubscription,
	FooterSubHeading,
	FooterSubText,
	SocialMedia,
	SocialMediaWrap,
	SocialLogo,
	SocialIcon,
	WebsiteRights,
	SocialIcons,
	SocialIconLink,
} from './FooterStyles';

const Footer = () => {
	return (
		<FooterContainer>
			<FooterSubscription>
				<SocialLogo to="/">
					<SocialIcon src="./images/logo.png" />
					~Dexignx
				</SocialLogo>
				<FooterSubHeading>Interested in Working With Us?</FooterSubHeading>
				<FooterSubText>Kindly Sign Up and Get in Touch via Social Media. Thanks.</FooterSubText>
			</FooterSubscription>

			<SocialMedia>
				<SocialMediaWrap>
					<SocialIcons>
						<SocialIconLink href="/" target="blank" aria-label="Facebook">
							<FaFacebook />
						</SocialIconLink>
						<SocialIconLink href="/" target="blank" aria-label="Instagram">
							<FaInstagram />
						</SocialIconLink>
						<SocialIconLink href="/" target="blank" aria-label="Twitter">
							<FaTwitter />
						</SocialIconLink>
						<SocialIconLink href="/" target="blank" aria-label="Youtube">
							<FaYoutube />
						</SocialIconLink>
					</SocialIcons>
					<WebsiteRights>© Copyright 2022, TGX~Dexignx. All Rights Reserved.</WebsiteRights>
				</SocialMediaWrap>
			</SocialMedia>
		</FooterContainer>
	);
};

export default Footer;
