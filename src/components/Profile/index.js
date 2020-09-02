import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { CameraFill } from '@styled-icons/bootstrap/CameraFill';

import * as S from './styles';

const Profile = () => {
  const {
    site: {
      siteMetadata: { title, author, description },
    },
  } = useStaticQuery(graphql`
    query MySiteMetadata {
      site {
        siteMetadata {
          title
          author
          description
        }
      }
    }
  `);

  return (
    <S.ProfileWrapper>
      <S.ProfileLink to="/" cover direction="left" bg="#E5E9F0" duration={0.6}>
        <CameraFill size="48" color="#434C5E" />
        <S.ProfileAuthor>
          {title}
          <S.ProfilePosition>{description}</S.ProfilePosition>
        </S.ProfileAuthor>
      </S.ProfileLink>
    </S.ProfileWrapper>
  );
};

export default Profile;
