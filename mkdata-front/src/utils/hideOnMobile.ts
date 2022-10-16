const hideOnMobile = (shoulHideOnMobile: boolean | undefined) => {
  return shoulHideOnMobile && { display: { xs: 'none', sm: 'block' } };
};

export default hideOnMobile;
