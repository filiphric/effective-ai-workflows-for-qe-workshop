import { test, expect, APIRequestContext } from '@playwright/test';

async function createBoard(request: APIRequestContext): Promise<number> {
  const res = await request.post('/api/boards', { data: { name: 'Test Board', starred: false } });
  const { id } = await res.json();
  return id;
}

test('T_LIST_01 - Create a new list on a board', async ({ page, request }) => {
  const id = await createBoard(request);

  await page.goto(`/board/${id}`);

  await page.getByTestId('add-list-input').fill('To Do');
  await page.getByRole('button', { name: 'Add list' }).click();

  await expect(page.getByTestId('list-name')).toHaveValue('To Do');
  await expect(page.getByTestId('new-card')).toBeVisible();
});

test('T_LIST_02 - Update a list title', async ({ page, request }) => {
  const id = await createBoard(request);
  await request.post('/api/lists', { data: { boardId: id, name: 'Backlog', order: 1 } });

  await page.goto(`/board/${id}`);

  const listName = page.getByTestId('list-name');
  await listName.click();
  await listName.fill('Ready for Dev');
  await listName.press('Enter');

  await expect(listName).toHaveValue('Ready for Dev');

  await page.reload();
  await expect(page.getByTestId('list-name')).toHaveValue('Ready for Dev');
});

test('T_LIST_03 - Delete an existing list', async ({ page, request }) => {
  const id = await createBoard(request);
  await request.post('/api/lists', { data: { boardId: id, name: 'List to Remove', order: 1 } });

  await page.goto(`/board/${id}`);

  await page.getByTestId('list-options').click();
  await page.getByTestId('delete-list').click();

  await expect(page.getByTestId('list')).toHaveCount(0);
});
