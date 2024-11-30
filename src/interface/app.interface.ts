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
     * @format date-time
     */
    updated_at: string;
  }
}