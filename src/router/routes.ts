export const LOGIN = "login";
export const SIGNUP = "signup";
export const HOME = "/";
export const MODAL_QUERY = (activeFormLink: string, pathname: string): string =>
  `${pathname}?modal=${activeFormLink}`;
