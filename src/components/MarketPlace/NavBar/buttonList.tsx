import {
  faSearch,
  faUser,
  faCartPlus,
  faList,
} from '@fortawesome/free-solid-svg-icons';
import { useRouter } from 'next/router';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { useDispatch, useSelector } from 'react-redux';
import { setMenu } from 'redux/actions/general';

export const useNavLink = () => {
  const router = useRouter();
  const { campaignId, campaignAdminId } = router.query;
  const { menu } = useSelector((state: any) => state.generals);
  const dispatch = useDispatch();

  const buttonList = [
    {
      icon: faSearch,
      actionType: '',
      name: 'Search',
    },
    {
      icon: faUser,
      actionType: 'click',
      name: 'User',
      display: {
        base: 'none',
        lg: 'inline-flex',
      },
    },
    {
      icon: faCartPlus,
      actionType: 'click',
      name: 'Cart',
      clickName: 'cart',
    },
    {
      icon: faList,
      actionType: '',
      name: 'WishList',
      display: {
        base: 'none',
        lg: 'inline-flex',
      },
      clickName: 'wishlist',
    },
  ];

  const navLinks = [
    {
      name: 'Home',
      href: `/market-place/${campaignId}/${campaignAdminId}`,
    },
    {
      name: 'About',
      href: `#`,
    },
    {
      name: 'Shop',
      href: ``,
      subPages: [
        {
          name: 'Food',
          href: `/food`,
        },
      ],
    },
  ];

  const closeMenu = () => {
    dispatch(
      setMenu({
        presentMenu: '',
        openPanel: false,
      })
    );
  };

  const openMenu = (name: string) => {
    dispatch(
      setMenu({
        presentMenu: name,
        openPanel: true,
      })
    );
  };

  return {
    buttonList,
    navLinks,
    router,
    menu,
    closeMenu,
    openMenu,
  };
};

export interface ButtonListProps {
  icon: IconProp;
  actionType: string;
  name: string;
  display?: {
    base: string;
    lg: string;
  };
  clickName?: string;
}

interface Link {
  name: string;
  href: string;
  subPages?: Link[];
}

export interface NavLinkProps extends Link {
  subPages?: Link[];
}
