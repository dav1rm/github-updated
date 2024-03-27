describe('App E2E Tests', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  afterAll(async () => {
    await device.terminateApp();
  });

  it('should not find a username', async () => {
    await element(by.id('username')).tap();
    await element(by.id('username')).typeText('davir8');
    await element(by.text('Buscar usuário')).tap();

    await expect(element(by.text('Cadastrar'))).toBeVisible();
    await element(by.id('submit')).tap();

    await expect(element(by.id('error-message'))).toBeVisible();
  });

  it('should login successfully', async () => {
    await expect(element(by.text('Buscar usuário'))).toBeVisible();
    await expect(element(by.text('Crie sua conta através do seu usuário do GitHub'))).toBeVisible();

    await element(by.id('username')).tap();
    await element(by.id('username')).clearText();
    await element(by.id('username')).typeText('dav1rm');
    await element(by.text('Buscar usuário')).tap();

    await expect(element(by.text('Cadastrar'))).toBeVisible();
    await element(by.id('submit')).tap();

    await expect(element(by.id('title'))).toNotExist();
    await expect(element(by.text('Adicionar novo'))).toBeVisible();

    await expect(element(by.text('@dav1rm'))).toBeVisible();
  });

  it('should open a repository successfully', async () => {
    await expect(element(by.text('Davi'))).toBeVisible();
    await element(by.text('Davi')).tap();

    await expect(element(by.text('my-app-ionic-3'))).toBeVisible();
    
    await element(by.id('repositories')).swipe('up');
  });

  it('should add another user successfully', async () => {
    await expect(element(by.id('header-back'))).toBeVisible();
    await element(by.id('header-back')).tap();

    await expect(element(by.text('Adicionar novo'))).toBeVisible();
    await element(by.text('Adicionar novo')).tap();

    await expect(element(by.text('Adicione seus novos usuários do GitHub'))).toBeVisible();

    await element(by.id('username')).tap();
    await element(by.id('username')).typeText('jilcimar');
    await element(by.text('Buscar usuário')).tap();

    await expect(element(by.text('Cadastrar'))).toBeVisible();
    await element(by.id('submit')).tap();

    await expect(element(by.id('title'))).toNotExist();

    await expect(element(by.text('@dav1rm'))).toBeVisible();
    await expect(element(by.text('@jilcimar'))).toBeVisible();
  });

  it('should remove an user successfully', async () => {
    await expect(element(by.id('remove-user-2'))).toBeVisible();
    await element(by.id('remove-user-2')).tap();

    await expect(element(by.text('@dav1rm'))).toBeVisible();
    await expect(element(by.text('@jilcimar'))).toNotExist();
  });
});
