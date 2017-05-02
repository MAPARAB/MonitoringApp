import { MonitoringAppPage } from './app.po';

describe('monitoring-app App', function() {
  let page: MonitoringAppPage;

  beforeEach(() => {
    page = new MonitoringAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
