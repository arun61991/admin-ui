export class ResponseVO<T> {
  statusCode: string;
  statusDescription: string;
  valueObject: T;
  totalHits: number;
  data: Array<T>;
}
