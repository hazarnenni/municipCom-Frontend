export interface Option {
  id?: number;
  name?: string;
  value?: number;
  text?: string;
  checked?: boolean;
  optionList?: string;
  answerList?: string;
  subOptions?: Option[];
  selectedOption?: Option;
}
