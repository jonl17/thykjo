export interface PageInterface {
  id: string
  uid: string
  tags: string[]
  lang: string
  url: string
  title: string
  subtitle: string
  body: any[]
}

export const pageResolver = (node: any): PageInterface => ({
  id: node.id,
  uid: node.uid,
  tags: node.tags,
  lang: node.lang,
  url: node.url,
  title: node.data.page_title.text,
  subtitle: node.data.subtitle,
  body: node.data.body,
})

export interface MenuInterface {
  tags: string[]
  id: string
  pages: PageInterface[]
}

export const menuResolver = (node: any): MenuInterface => ({
  id: node.id,
  tags: node.tags,
  pages: node.data.pages.map((item: any) => pageResolver(item.page.document)),
})
