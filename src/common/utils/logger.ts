export class Logger {
  private static readonly PREFIX = "LOG";

  static log(message: any): void {
    console.log(
      `%c ${this.PREFIX} %c ${JSON.stringify(message)}`,
      "background: #222; color: #bada55",
      "background: #bada55; color: #222; font-weight: bold;"
    );
  }

  static error(message: any): void {
    console.log(
      `%c ${this.PREFIX} %c ${JSON.stringify(message)}`,
      "background: #222; color: #ff0000",
      "background: #ff0000; color: #222; font-weight: bold;"
    );
  }
}
