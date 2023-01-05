import { Option } from './option.model';

export interface Question {
  id?: number;
  name: string;
  nature: QuestionNatureEnum;
  mandatory: boolean;
  options: Option[];
}

export enum QuestionNatureEnum {
  ShortText = 'ShortText',
  LongText = 'LongText',
  UniqueChoice = 'UniqueChoice',
  MultiChoice = 'MultiChoice',
  ListUniSelect = 'ListUniSelect',
  ListMultiSelect = 'ListMultiSelect',
  Date = 'Date',
  DateTime = 'DateTime',
  Number = 'Number',
  Email = 'Email',
}

export namespace QuestionNatureEnum {
  export const values: QuestionNatureEnum[] = [
    QuestionNatureEnum.ShortText,
    QuestionNatureEnum.LongText,
    QuestionNatureEnum.UniqueChoice,
    QuestionNatureEnum.MultiChoice,
    QuestionNatureEnum.Number,
    QuestionNatureEnum.Email,
    QuestionNatureEnum.Date,
    QuestionNatureEnum.DateTime,
    QuestionNatureEnum.ListMultiSelect,
    QuestionNatureEnum.ListUniSelect,
  ];

  export const haveOptions = [
    QuestionNatureEnum.UniqueChoice,
    QuestionNatureEnum.MultiChoice,
    QuestionNatureEnum.ListMultiSelect,
    QuestionNatureEnum.ListUniSelect,
  ];

  export const naturesHaveOptions = [
    QuestionNatureEnum.UniqueChoice,
    QuestionNatureEnum.MultiChoice,
  ];

  export const naturesHaveListOptions = [
    QuestionNatureEnum.ListMultiSelect,
    QuestionNatureEnum.ListUniSelect,
  ];

  export const icon = (nature: QuestionNatureEnum): string => {
    switch (nature) {
      case QuestionNatureEnum.ShortText:
        return 'fa-solid fa-minus';
      case QuestionNatureEnum.LongText:
        return 'fa-solid fa-align-left';
      case QuestionNatureEnum.UniqueChoice:
        return 'fa-solid fa-circle-dot';
      case QuestionNatureEnum.MultiChoice:
        return 'fa-solid fa-square-check';
      case QuestionNatureEnum.ListUniSelect:
        return 'fa-solid fa-circle-chevron-down';
      case QuestionNatureEnum.ListMultiSelect:
        return 'fa-solid fa-square-caret-down';
      case QuestionNatureEnum.Date:
        return 'fa-solid fa-calendar-days';
      case QuestionNatureEnum.DateTime:
        return 'fa-solid fa-clock';
      case QuestionNatureEnum.Number:
        return 'fa-solid fa-arrow-down-1-9';
      case QuestionNatureEnum.Email:
        return 'fa-solid fa-at';
      default:
        return '';
    }
  };

  export const iconCode = (nature: QuestionNatureEnum): string => {
    switch (nature) {
      case QuestionNatureEnum.ShortText:
        return '&#xf068;';
      case QuestionNatureEnum.LongText:
        return '&#xf036;';
      case QuestionNatureEnum.UniqueChoice:
        return '&#xf192;';
      case QuestionNatureEnum.MultiChoice:
        return '&#xf14a;';
      case QuestionNatureEnum.ListUniSelect:
        return '&#xf13a;';
      case QuestionNatureEnum.ListMultiSelect:
        return '&#xf150;';
      case QuestionNatureEnum.Date:
        return '&#xf073;';
      case QuestionNatureEnum.DateTime:
        return '&#xf017;';
      case QuestionNatureEnum.Number:
        return '&#xf162;';
      case QuestionNatureEnum.Email:
        return '&#x40;';
      default:
        return '';
    }
  };

  export const name = (nature: QuestionNatureEnum): string => {
    switch (nature) {
      case QuestionNatureEnum.ShortText:
        return 'سؤال عادي';
      case QuestionNatureEnum.LongText:
        return 'سؤال طويل';
      case QuestionNatureEnum.UniqueChoice:
        return 'سؤال خيار وحيد';
      case QuestionNatureEnum.MultiChoice:
        return 'سؤال عدة خيارات';
      case QuestionNatureEnum.ListUniSelect:
        return 'سؤال خيار وحيد في لائحة';
      case QuestionNatureEnum.ListMultiSelect:
        return 'سؤال عدة خيارات في لائحة';
      case QuestionNatureEnum.Date:
        return 'سؤال التاريخ';
      case QuestionNatureEnum.DateTime:
        return 'سؤال التاريخ و الوقت';
      case QuestionNatureEnum.Number:
        return 'سؤال العدد';
      case QuestionNatureEnum.Email:
        return 'سؤال الإيميل';
      default:
        return '-';
    }
  };
}
