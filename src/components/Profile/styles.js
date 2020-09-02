import styled from 'styled-components';
import media from 'styled-media-query';
import AniLink from 'gatsby-plugin-transition-link/AniLink';

export const ProfileWrapper = styled.section`
  color: #434c5e;
  display: flex;
  flex-direction: column;
`;

export const ProfileLink = styled(AniLink)`
  color: #434c5e;
  text-decoration: none;
  ${media.lessThan('large')`
    display: flex;
    text-align: left;
  `}
`;

export const ProfileAuthor = styled.h1`
  font-size: 1.6rem;
  margin: 1rem auto 1.5rem;
  ${media.lessThan('large')`
    font-size: 1.2rem;
    margin: 0 0 0 10px;
  `}
`;

export const ProfilePosition = styled.small`
  display: block;
  font-size: 1.2rem;
  font-weight: 300;
  ${media.lessThan('large')`
    font-size: 0.8rem;
    margin-top: 0.5rem;
  `}
`;
