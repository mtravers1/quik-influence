import {
  faSearch,
  faUser,
  faCartPlus,
  faList,
  faHome,
} from '@fortawesome/free-solid-svg-icons';
import { useRouter } from 'next/router';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { useDispatch, useSelector } from 'react-redux';
import { setMenu } from 'redux/actions/general';
import { CART_CLICK_NAME } from 'utils/constants';

export const useNavLink = () => {
  const router = useRouter();
  const { campaignId, campaignAdminId } = router.query;
  const { menu } = useSelector((state: any) => state.generals);
  const dispatch = useDispatch();

  const baseLink = campaignAdminId
    ? `/market-place/${campaignId}/${campaignAdminId}`
    : `/market-place/${campaignId}`;

  const buttonList = [
    {
      icon: faSearch,
      actionType: '',
      name: 'Search',
    },
    {
      icon: faUser,
      actionType: 'click',
      name: 'Account',
    },
    {
      icon: faCartPlus,
      actionType: 'click',
      name: 'Cart',
      clickName: CART_CLICK_NAME,
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

  const bottomButtonList = [
    {
      icon: faList,
      actionType: '',
      name: 'WishList',
      clickName: 'wishlist',
    },
    {
      icon: faCartPlus,
      actionType: 'click',
      name: 'Cart',
      clickName: 'cart',
    },
    {
      icon: faHome,
      actionType: '',
      name: 'Home',
    },
    {
      icon: faUser,
      actionType: 'click',
      name: 'Account',
    },
  ];

  const navLinks = [
    {
      name: 'Home',
      href: `${baseLink}/`,
    },
    {
      name: 'About',
      href: `${baseLink}/about`,
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
    bottomButtonList,
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
