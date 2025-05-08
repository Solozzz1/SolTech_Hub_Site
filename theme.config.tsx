import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: (
    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
      <img src="/static/soltech-logo.bmp" alt="SolTech Hub Logo" style={{ width: '40px', height: '40px' }} />
      <span>SolTech Hub</span>
    </div>
  ),
  project: {
    link: 'https://github.com/soltechhub',
  },
  chat: {
    link: 'https://mail.google.com/mail/?view=cm&fs=1&to=solomonmukonda0@gmail.com',
  },
  docsRepositoryBase: 'https://github.com/soltechhub',
  footer: {
    text: (
      <div className="flex w-full flex-col items-center sm:items-start">
        <p className="mt-6 text-xs">
          © {new Date().getFullYear()} SolTech Hub. All rights reserved.
        </p>
      </div>
    )
  },
  useNextSeoProps() {
    return {
      titleTemplate: '%s – SolTech Hub',
      description: 'Innovative Software Solutions for Modern Businesses',
      openGraph: {
        title: 'SolTech Hub - Software Solutions',
        description: 'Transforming ideas into powerful digital experiences',
        url: 'https://soltechhub.com',
        siteName: 'SolTech Hub',
        locale: 'en_US',
        type: 'website',
      },
    }
  },
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:title" content="SolTech Hub" />
      <meta property="og:description" content="Innovative Software Solutions for Modern Businesses" />
      <link rel="icon" href="/static/soltech-logo.bmp" />
    </>
  ),
  primaryHue: 210, // Blue color scheme
  primarySaturation: 100,
  navigation: {
    prev: true,
    next: true,
  },
  sidebar: {
    defaultMenuCollapseLevel: 1,
    toggleButton: true,
  },
  banner: {
    key: 'contact-us',
    text: '📞 Contact us at +263782980290 or +263719110713',
  },
  feedback: {
    content: 'Questions? Give us feedback →',
    labels: 'feedback',
    useLink: () => '/contact'
  },
  editLink: {
    text: 'Edit this page on GitHub →',
  },
  toc: {
    float: true,
    title: 'On This Page',
  },
  gitTimestamp: ({ timestamp }) => (
    <>Last updated on {timestamp.toLocaleDateString()}</>
  ),
}

export default config
