export type Result<T> = (data: T) => void
export type Error = (err: any) => void;

export interface  IStrategy<T> {
    use(r: Result<T>, e: Error): void
}