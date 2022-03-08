const initialState: any = {
  auth: {
    user: { admin: { avatar: '', firstName: '', lastName: '' } },
    loading: false,
  },
  nav: null,
  campaigns: {
    campaigns: null,
    loading: true,
  },
};

export default initialState;
