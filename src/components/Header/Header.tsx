import Image from 'next/image';
import React, { VFC, useState } from 'react';
import { css } from '@emotion/react';
import { COLOR, HEADER } from '~/styles/const';
import { media } from '~/styles/shares';
import { useIsScrollDown, useGetTabTitleFromRoute } from '~/hooks';
import { PrimaryNavigationGlobalState } from '~/components';
import { Title } from './Title';
import { PopupMenu } from './PopupMenu';
import { useAuth0 } from '@auth0/auth0-react';

type Props = {
  hasTab?: boolean;
};

export const Header: VFC<Props> = ({ hasTab = true }) => {
  const [isOpen, setIsOpen] = useState(false);
  const isScrollDown: boolean = useIsScrollDown();
  const visibleState = isScrollDown ? visibility['hiddenPartial'] : visibility['visible'];
  const tabNames = useGetTabTitleFromRoute();
  const { user, isAuthenticated, logout } = useAuth0();

  return (
    <header css={[styles.header(hasTab), visibleState]}>
      <div css={styles.area}>
        <Title />
        {isAuthenticated && (
          <p css={styles.profile}>
            <Image css={styles.avatar} src={user?.picture ? user.picture : '/imgs/avatar.png'} width={44} height={44} alt={'プロフィール'} onClick={() => setIsOpen(true)} />
            {isOpen && <PopupMenu setIsOpen={setIsOpen} user={user} logout={logout} />}
          </p>
        )}
      </div>
      {hasTab && (
        <PrimaryNavigationGlobalState
          titles={tabNames}
          theme={'basicTab'}
          options={{ isSwiper: true, isToggle: true }}
          customCss={{
            nav: css`
              border-bottom: none;
            `,
            item: media.pc(
              css`
                display: none;
              `,
            ),
          }}
        />
      )}
    </header>
  );
};

const styles = {
  header: (hasTab: boolean) => css`
    height: ${hasTab ? HEADER.HEIGUT : 'none'};
    position: fixed;
    top: 0;
    z-index: 100000;
    background: #fff;
    width: 100vw;
    padding: ${hasTab ? '10px 25px 0 25px' : '15px 0'};
    border-bottom: 0.3px solid ${COLOR.BORDER_GRAY};
  `,
  area: css`
    text-align: center;
  `,
  profile: css`
    float: right;
    border-radius: 50%;
  `,
  avatar: css`
    float: right;
    border-radius: 50%;
    background-color: #b6babb;
    padding: 8px;
    cursor: pointer;
  `,
  human: css`
    position: relative;
  `,
};

const visibility = {
  visible: css`
    transition: top 0.1s ease-out;
  `,
  hiddenPartial: css`
    top: -55px;
    transition: top 0.1s ease-out;
  `,
};
