type Newsletter = {
  name: string
  filePath: string
  latest?: boolean
}

export const newsletters: Newsletter[] = [
  {
    name: 'February/March 20222',
    filePath: 'february-march-2022',
    latest: true,
  },
  {
    name: 'December 2021/January 2022',
    filePath: 'december-january-2021',
    latest: false,
  },
  {
    name: 'October/November 2021',
    filePath: 'october-november-2021',
    latest: false,
  },
  {
    name: 'August/September 2021',
    filePath: 'august-september-2021',
    latest: false,
  },
  {
    name: 'June/July 2021',
    filePath: 'june-july-2021',
    latest: false,
  },
  {
    name: 'April/May 2021',
    filePath: 'april-may-2021',
    latest: false,
  },
  {
    name: 'February/March 2021',
    filePath: 'february-march-2021',
    latest: false,
  },
  {
    name: 'December 2020/January 2021',
    filePath: 'december-january-2020',
    latest: false,
  },
  {
    name: 'October/November 2020',
    filePath: 'october-november-2020',
    latest: false,
  },
  {
    name: 'August/September 2020',
    filePath: 'august-september-2020',
    latest: false,
  },
  {
    name: 'April/May 2020',
    filePath: 'april-may-2020',
    latest: false,
  },
  {
    name: 'February/March 2020',
    filePath: 'february-march-2020',
    latest: false,
  },
  {
    name: 'December 2019/January 2020',
    filePath: 'december-january-2019',
    latest: false,
  },
]

export const latest = (): Newsletter | undefined => newsletters.filter((x) => x.latest)[0]
