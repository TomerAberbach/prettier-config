test(`prettier-config`, async () => {
  const config = await import(`../src/index.js`)

  expect(config).not.toBeNull()
  expect(typeof config).toBe(`object`)
})
