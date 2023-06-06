export class UserModel {
  /** @format uuid */
  id!: string;
  userName!: string;
  email!: string;
  firstName!: string;
  lastName!: string;
  roles!: string[];
  picture!: string;
  phoneNumber?: string | null;
  /** @format date-time */
  createdAt!: string;
  /** @format date-time */
  updateAt?: string | null;
  /** @format date-time */
  deletedAt?: string | null;
  token?: string | null;
}
