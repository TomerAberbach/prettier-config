import { format } from 'prettier'
import { expect, test } from 'vitest'
import config from './index.js'

test(`config formats JavaScript`, async () => {
  const code = await format(
    `const greet = (name) => { return "Hello " + name + "!"; };`,
    { ...config, parser: `babel` },
  )

  expect(code).toBe(
    `const greet = name => {\n  return 'Hello ' + name + '!'\n}\n`,
  )
})

test(`config sorts Tailwind classes`, async () => {
  const code = await format(
    [
      `const a = <div className="p-4 flex" />`,
      `const b = clsx("p-4 flex")`,
    ].join(`\n`),
    { ...config, parser: `babel` },
  )

  expect(code).toBe(
    [
      `const a = <div className='flex p-4' />`,
      `const b = clsx('flex p-4')`,
      ``,
    ].join(`\n`),
  )
})
