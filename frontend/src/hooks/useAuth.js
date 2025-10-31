import { useSelector, useDispatch } from 'react-redux'
import { loginUser, registerUser, logout, clearError } from '../features/auth/authSlice'

export const useAuth = () => {
  const dispatch = useDispatch()
  const { user, isAuthenticated, loading, error } = useSelector(state => state.auth)

  return {
    user,
    isAuthenticated,
    loading,
    error,
    login: (credentials) => dispatch(loginUser(credentials)),
    register: (userData) => dispatch(registerUser(userData)),
    logout: () => dispatch(logout()),
    clearError: () => dispatch(clearError()),
  }
}