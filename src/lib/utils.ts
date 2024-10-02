import type { Metadata } from "next"

const title = "Julian Piasecki's Portfolio"
const description =
  "Julian Piasecki's portfolio showcases his software engineering work, projects, and technical skills with a simple, clear design."
const image = "/thumbnail.pmg"
const url = new URL("https://julian-portfolio.vercel.app")

export const createMetadata = (): Metadata => ({
  title,
  description,
  twitter: {
    title,
    description,
    images: image,
    card: "summary_large_image",
  },
  openGraph: {
    title,
    description,
    url,
    images: image,
    siteName: title,
  },
  metadataBase: url,
})
