import core from '@nestia/core';
import { Controller } from '@nestjs/common';
import typia from 'typia';
import { IBbsArticle, IPage } from './interface/app.interface';
import * as api from 'qwer-test-nestia-june/lib/api/functional';

@Controller()
export class TypedBodyController {
  /**
   * 테스트용 주석입니다.
   * @param section 섹션 스트링입니다.
   */
  @core.TypedRoute.Get('bbs/articles/:section')
  public async index(
    @core.TypedParam('section') section: string,
    @core.TypedQuery() query: IPage.IRequest,
  ): Promise<IPage<IBbsArticle.ISummary>> {
    const limit: number = query.limit ?? 100;
    const current: number = query.page ?? 1;
    const records: number = limit * (current + 3) + 5;
    return {
      pagination: {
        current,
        limit,
        records,
        pages: Math.ceil(records / limit),
      },
      data: new Array(limit).fill('').map(() => ({
        ...typia.random<IBbsArticle.ISummary>(),
        section,
      })),
    };
  }

  @core.TypedRoute.Get('test')
  public async test(): Promise<IPage<IBbsArticle.ISummary>> {
    const item = await api.bbs.articles.index(
      {
        host: 'http://127.0.0.1:3000',
      },
      'test',
      { page: 1, limit: 2 },
    );
    return item;
  }

  // @core.
}
