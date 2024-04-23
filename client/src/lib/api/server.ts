interface Body<TVariables> {
  query: string
  variables?: TVariables
}

export const server = {
  fetch: async <TData = any, TVariables = any>(body: Body<TVariables>) => {
    const res = await fetch('/api', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    })
    // we want to be confident on what return from json
    return res.json() as Promise<{ data: TData }>
  },
}
