import { DATA_TYPE } from '../enums/enums';

type Data = {
  id: string;
  title: string;
  url: string;
  type: DATA_TYPE;
  isVisible: boolean;
};

type Page = {
  label: string;
  active: boolean;
};

type User = {
  id: number;
  name: string;
  lastname: string;
  dateOfBirth: Date;
  salary: number;
  workingHours: number;
};

export { type Data, type Page, type User };
