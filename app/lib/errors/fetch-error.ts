export class FetchError extends Error {
  statusText: string;
  status: number;

  constructor({
    message,
    statusText = '',
    status = 0,
  }: {
    message: string;
    statusText?: string;
    status?: number;
  }) {
    super(message);
    this.statusText = statusText;
    this.status = status;
  }
}
