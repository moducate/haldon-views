type Newsletter = {
  name: string
  filePath: string
  latest?: boolean
}

export const newsletters: Newsletter[] = [
  {
    name: 'August/September 2021',
    filePath: 'august-september-2021',
    latest: true,
  },
  {
    name: 'June/July 2021',
    filePath: 'june-july-2021',
    latest: false,
  },
]

export const latest = (): Newsletter | undefined => newsletters.filter((x) => x.latest)[0]
