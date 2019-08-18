import { IStrategy } from "./strategy/IStrategy";
import BaseCrawler from "./BaseCrawler";

export default class Crawler<T> extends BaseCrawler<T> {
    constructor(strategy: IStrategy<T>) {
        super(strategy);
    }

    onResult(result: T): void {
        console.log("Result", result);
    }
    onError(error: any): void {
        console.log("Error", error);
    }
}
