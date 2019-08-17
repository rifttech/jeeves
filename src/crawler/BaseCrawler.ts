import { IStrategy } from "./strategy/IStrategy";

export default abstract class BaseCrawler<T>{
    constructor(private strategy: IStrategy<T>){
    }
    public crawl(): void {
        this.strategy.use(this.onResult, this.onError);
    }

    abstract onResult(result: T): void
    abstract onError(error: any): void
}