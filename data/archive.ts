type Newsletter = {
  name: string
  filePath: string
  latest?: boolean
}

export const newsletters: Newsletter[] = [
  {
    name: 'June/July 2021',
    filePath: 'june-july-2021',
    latest: true,
  },
]

export const latest = (): Newsletter | undefined => newsletters.filter((x) => x.latest)[0]
