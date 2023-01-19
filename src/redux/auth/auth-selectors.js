const selectIsLoggedIn = state => state.auth.isLoggedIn;

const selectUser = state => state.auth.user;

const selectUserName = state => state.auth.user.name;

const selectIsRefreshing = state => state.auth.isRefreshing;

const authSelectors = {
  selectIsLoggedIn,
  selectUser,
  selectIsRefreshing,
  selectUserName,
};
export default authSelectors;
