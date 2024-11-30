/**
 * @packageDocumentation
 * @module api.functional.bbs.articles
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IPage, IBbsArticle } from "../../../../interface/app.interface";
/**
 * 테스트용 주석입니다.
 *
 * @param section 섹션 스트링입니다.
 *
 * @controller TypedBodyController.index
 * @path GET /bbs/articles/:section
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export declare function index(connection: IConnection, section: string, query: index.Query): Promise<index.Output>;
export declare namespace index {
    type Query = Resolved<IPage.IRequest>;
    type Output = Primitive<IPage<IBbsArticle.ISummary>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/bbs/articles/:section";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (section: string, query: index.Query) => string;
}