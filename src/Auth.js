import locationHelperBuilder from 'redux-auth-wrapper/history4/locationHelper'
import { connectedRouterRedirect } from 'redux-auth-wrapper/history4/redirect'
import connectedAuthWrapper from 'redux-auth-wrapper/connectedAuthWrapper'
import Loading from './Component/loading';

const locationHelper = locationHelperBuilder({});

const userIsNotAuthenticatedDefaults = {
  authenticatedSelector: state => state.auth.token === null && state.auth.isLoging === false,
  wrapperDisplayName: 'UserIsNotAuthenticated'
}

export const userIsNotAuthenticatedRedir = connectedRouterRedirect({
   ...userIsNotAuthenticatedDefaults,
  redirectPath: (state, ownProps) => locationHelper.getRedirectQueryParam(ownProps) || '/',
  allowRedirectBack: false
})

const userIsAuthenticatedDefaults = {
  authenticatedSelector: state => state.auth.token !== null,
  authenticatingSelector: state => state.auth.isLoging,
  wrapperDisplayName: 'UserIsAuthenticated'
}

export const userIsAuthenticated = connectedAuthWrapper(userIsAuthenticatedDefaults)

export const userIsAuthenticatedRedir = connectedRouterRedirect({
  ...userIsAuthenticatedDefaults,
  AuthenticatingComponent: Loading,
  redirectPath: '/login'
})