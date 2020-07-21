import { injectable } from 'inversify';

@injectable()
export default class Trigger {
  private regexp = '!no-respect';

  public isTrigger(stringToSearch: string): boolean {
    return stringToSearch.search(this.regexp) >= 0;
  }
}
