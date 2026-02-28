'use client'

import { useSearchParams } from 'next/navigation'

export function SearchParamsReader() {
  const sp = useSearchParams()

  if (sp.get('single') !== 'test') {
    throw new Error(
      `Expected sp.get('single') === 'test', got '${sp.get('single')}'`
    )
  }

  const multiple = sp.getAll('multiple')
  if (multiple.length !== 2 || multiple[0] !== 'a' || multiple[1] !== 'b') {
    throw new Error(
      `Expected sp.getAll('multiple') === ['a', 'b'], got ${JSON.stringify(multiple)}`
    )
  }

  if (sp.get('missing') !== null) {
    throw new Error(
      `Expected sp.get('missing') === null, got '${sp.get('missing')}'`
    )
  }

  return null
}
