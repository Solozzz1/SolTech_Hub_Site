import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'
import Link from 'next/link'

const config: DocsThemeConfig = {
  logo: (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: '0.75rem',
      padding: '0.5rem',
      transition: 'transform 0.3s ease'
    }}>
      <img 
        src="/static/soltech-logo.png" 
        alt="SolTech Hub Logo" 
        style={{
          width: '45px',
          borderRadius: '40%',
          height: '45px',
          objectFit: 'contain',
          transition: 'filter 0.3s ease'
        }}
      />
      <span style={{
        fontFamily: 'Poppins, sans-serif',
        fontWeight: 'bold',
        fontSize: '1.25rem',
        color: '#1c2237',
        transition: 'color 0.3s ease'
      }}>
        SolTech Hub
      </span>
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
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '1.5rem',
        padding: '2rem 0',
        width: '100%',
        backgroundColor: '#f8f9fa'
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '1rem'
        }}>
          <Link href="/" style={{ textDecoration: 'none' }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1rem',
              transition: 'transform 0.3s ease',
              cursor: 'pointer',
              padding: '0.5rem'
            }}>
              <img 
                src="/static/soltechb.png" 
                alt="SolTech Hub Logo" 
                style={{
                  width: '60px',
                  height: '60px',
                  borderRadius: '40%',
                  objectFit: 'contain',
                  transition: 'filter 0.3s ease'
                }}
              />
              <span style={{
                fontFamily: 'Poppins, sans-serif',
                fontWeight: 'bold',
                fontSize: '1.5rem',
                color: '#1c2237',
                transition: 'color 0.3s ease'
              }}>
                SolTech Hub
              </span>
            </div>
          </Link>
        </div>
        <div style={{
          display: 'flex',
          gap: '2rem',
          marginTop: '0.5rem'
        }}>
          <a 
            href="https://github.com/soltechhub" 
            target="_blank" 
            rel="noopener noreferrer"
            style={{
              color: '#2643d3',
              textDecoration: 'none',
              transition: 'color 0.3s ease',
              fontSize: '1rem',
              fontWeight: '500'
            }}
          >
            GitHub
          </a>
          <a 
            href="https://mail.google.com/mail/?view=cm&fs=1&to=solomonmukonda0@gmail.com" 
            target="_blank" 
            rel="noopener noreferrer"
            style={{
              color: '#2643d3',
              textDecoration: 'none',
              transition: 'color 0.3s ease',
              fontSize: '1rem',
              fontWeight: '500'
            }}
          >
            Contact
          </a>
        </div>
        <p style={{
          fontSize: '0.875rem',
          color: '#1c2237',
          margin: 0,
          marginTop: '0.5rem'
        }}>
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
      <link rel="icon" href="/static/favicon.ico" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap" rel="stylesheet" />
      <style>{`
        :root {
          --nextra-primary-hue: 210;
          --nextra-primary-saturation: 100%;
          --brand-orange: #ff9045;
          --brand-blue: #146fca;
          --brand-red: #ff0000;
        }
        .dark {
          --nextra-primary-hue: 210;
          --nextra-primary-saturation: 100%;
        }
        a {
          color: var(--brand-blue);
          transition: color 0.3s ease;
        }
        a:hover {
          color: var(--brand-orange);
        }
        .nextra-nav-container {
          border-bottom: 1px solid rgba(20, 111, 202, 0.1);
          background: linear-gradient(to right, var(--brand-blue), var(--brand-orange));
        }
        .nextra-sidebar-container {
          border-right: 1px solid rgba(20, 111, 202, 0.1);
        }
        .nextra-toc {
          border-left: 1px solid rgba(20, 111, 202, 0.1);
        }
        .nextra-breadcrumb {
          color: var(--brand-blue);
        }
        .nextra-breadcrumb a {
          color: var(--brand-blue);
        }
        .nextra-breadcrumb a:hover {
          color: var(--brand-orange);
        }
        .nextra-button {
          background-color: var(--brand-blue);
          color: white;
          transition: all 0.3s ease;
        }
        .nextra-button:hover {
          background-color: var(--brand-orange);
          transform: translateY(-2px);
        }
        .nextra-nav-container nav {
          background: transparent;
        }
        .nextra-nav-container nav a {
          color rgba(20, 111, 202, 0.1);
        }
        .nextra-nav-container nav a:hover {
          color: var(--brand-orange);
        }
        .nextra-nav-container .nextra-search {
          background: rgba(20, 111, 202, 0.1);
        }
        .nextra-nav-container .nextra-search input {
          color: white;
        }
        .nextra-nav-container .nextra-search input::placeholder {
          color: rgba(20, 111, 202, 0.1);
        }
      `}</style>
    </>
  ),
  primaryHue: 210,
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
