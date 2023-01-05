import { Question } from './question.model';

export interface Form {
  id?: number;
  name: string;
  nature: FormNatureEnum;
  image: string;
  eventId?: string;
  createdAt?: Date;
  questions?: Question[];
}
export enum FormNatureEnum {
  Form = 'Form',
  Response = 'Response',
}
