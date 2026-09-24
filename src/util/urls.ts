export class AppUrls {
  static readonly WebDriverIo = 'https://webdriver.io/es/';
  static readonly automationtesting = 'https://demo.automationtesting.in/';
  static readonly lab4 = 'https://practice.expandtesting.com/checkboxes';
  static readonly lab5 = "https://practice.expandtesting.com/dropdown";
  static readonly lab6 ="https://practice.expandtesting.com/dynamic-loading#google_vignette"
  static readonly lab7 ="https://practice.expandtesting.com/login"
  /**
   * Método reutilizable para navegar a cualquier ruta
   */
  static async navegarA(path: string): Promise<void> {
    await browser.url(path);
  }
}