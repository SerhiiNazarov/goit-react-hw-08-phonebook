const selectIsLoggedIn = state => state.auth.isLoggedIn;

const selectUser = state => state.auth.user;

const selectUserName = state => state.auth.user.name;

const selectIsRefreshing = state => state.auth.isRefreshing;

const getToken = state => state.auth.token;

const authSelectors = {
  selectIsLoggedIn,
  selectUser,
  selectIsRefreshing,
  selectUserName,
  getToken,
};
export default authSelectors;
