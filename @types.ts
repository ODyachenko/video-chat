export type BtnPropsType = {
  type: string;
  text: string;
  handler?: () => void;
};

export interface iUserReg {
  email: string;
  password: string;
  avatarUrl: string;
  fullName: string;
}
export interface iUserLog {
  email: string;
  password: string;
}

export interface iUser {
  _id: string;
  avatarUrl: string;
  fullName: string;
}

export interface iGetQuery {
  data: iUser[];
  isLoading: boolean;
  isError: boolean;
}
