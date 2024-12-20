/**
 * @packageDocumentation
 * @module api.functional
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
import type { IConnection, Primitive } from "@nestia/fetcher";
import type { IPage, IBbsArticle } from "../../interface/app.interface";
export * as bbs from "./bbs";
/**
 * @controller TypedBodyController.test
 * @path GET /test
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export declare function test(connection: IConnection): Promise<test.Output>;
export declare namespace test {
    type Output = Primitive<IPage<IBbsArticle.ISummary>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/test";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: () => string;
}
