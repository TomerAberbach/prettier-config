import test from 'ava'

test(`prettier-config`, async t => {
  const config = await import(`./index.js`)

  t.not(config, null)
  t.is(typeof config, `object`)
})
