import { urlsafe } from '../utils/http.utils';
import { API_URL } from './conf.constants';

/* USERS
 */
export const API_USERS = urlsafe(API_URL, 'users');

/* AUTH
 */
export const API_AUTH = urlsafe(API_USERS, 'auth');
export const API_AUTH_LOGIN = urlsafe(API_AUTH, 'login');

/* JOBS
 */
export const API_JOBS = urlsafe(API_URL, 'jobs');

/**
 * JOBS APPLICATION
 */
export const API_JOBS_APPLICATION = urlsafe(API_JOBS, 'application');
