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

export { type Data, type Page };
