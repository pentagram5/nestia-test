import { tags } from 'typia';

export interface IPage<T> {
  data: T[];
  pagination: IPage.IPagination;
}

// eslint-disable-next-line @typescript-eslint/no-namespace
export namespace IPage {
  /**
   * Page request dataㄴㄴㄴ
   */
  export interface IRequest {
    /**
     * 페이지명 움냠냠
     * @type number
     */
    page?: null | (number & tags.Type<'uint32'>);

    /**
     * 리밋 움냠냠 옴뇸뇸
     * @type number
     */
    limit?: null | (number & tags.Type<'uint32'>);
  }

  export interface IPagination {
    current: number & tags.Type<'uint32'>;
    limit: number & tags.Type<'uint32'>;
    records: number & tags.Type<'uint32'>;
    pages: number & tags.Type<'uint32'>;
  }
}

// eslint-disable-next-line @typescript-eslint/no-namespace
export namespace IBbsArticle {
  export interface ISummary {
    id: string & tags.Format<'uuid'>;
    section: string;
    writer: string;
    title: string & tags.MinLength<3> & tags.MaxLength<50>;
    created_at: string & tags.Format<'date-time'>;
    /**
     * 어쩌구 저쩌구
     * @format date-time
     */
    updated_at: string & tags.Examples<any>;
  }
}

export interface IItem {
  /**
   * @minLength 1
   * @maxLength 100
   */
  name: string;

  /**
   * @minimum 1
   * @maximum 5000
   * @example 5000
   */
  price?: number;

  /**
   * @format email
   * @minLength 10
   * @maxLength 100
   */
  email: string;
}

export interface ICreateItems {
  items: IItem[];
}
