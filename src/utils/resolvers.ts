export interface PageInterface {
  id: string
  uid: string
  tags: string[]
  lang: string
  url: string
  title: string
  subtitle: string
  body: any[]
  bg: string
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
  bg: node.tags.find((tag: string) => tag.includes('bg-')) ?? 'bg-yellow',
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

export type SocialMediaPlatform = 'facebook' | 'instagram'

export interface ContactInformationInterface {
  email: string
  socialMedia: {
    platform: SocialMediaPlatform
    url: string
  }[]
}

export const contactInformationResolver = (
  node: any
): ContactInformationInterface => ({
  email: node.data.email,
  socialMedia: node.data.social_media.map(
    (item: { platform: string; link: { url: string } }) => ({
      platform: item.platform,
      url: item.link.url,
    })
  ),
})
