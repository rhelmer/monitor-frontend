import Head from "next/head";
import Image from "next/image";
import styles from "../../components/layout.module.css";
import Link from "next/link";

import { useEffect, useState } from "react";
import useSWR from "swr";

export const siteTitle = "Firefox Monitor";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function Breachese2({ children, home }) {
  const { data, error } = useSWR("/api/v2/user/email/addresses", fetcher);

  if (error || (data && data.error)) return <div>Failed to load</div>;
  if (!data) return;

  console.debug(data);

  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header>
        <a href="/user/breaches">
          <img
            class="monitor-logo"
            srcset="/images/monitor-logo-transparent.webp 213w, /images/monitor-logo-transparent@2x.webp 425w"
            width="213"
            height="33"
            alt="Firefox Monitor"
          />
        </a>
        <div class="nav-wrapper">
          <button class="nav-toggle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 10 8"
              width="20"
            >
              <path
                d="M1 1h8M1 4h8M1 7h8"
                stroke="#000"
                stroke-width="1"
                stroke-linecap="round"
              />
            </svg>
          </button>

          <div class="user-menu-wrapper" tabindex="-1">
            <button
              aria-expanded="false"
              aria-haspopup="true"
              class="user-menu-button"
              title="User menu"
            >
              <img
                src="https://profile.accounts.firefox.com/v1/avatar/r"
                alt="Open user menu"
              />
            </button>
            <menu
              aria-label="Account menu"
              class="user-menu-container user-menu-popover"
              role="navigation"
              hidden
            >
              <li tabindex="1">
                <a
                  href="https://accounts.firefox.com/settings"
                  target="_blank"
                  class="user-menu-header"
                >
                  <b class="user-menu-email"></b>
                  <div class="user-menu-subtitle">
                    Manage your Firefox account
                    <img src="/images/icon-open-in.svg" />
                  </div>
                </a>
              </li>
              <hr />
              <li>
                <a href="/user/settings" class="user-menu-link">
                  <img src="/images/icon-settings.svg" />
                  Settings
                </a>
              </li>
              <li>
                <a
                  href="https://support.mozilla.org/kb/firefox-monitor"
                  target="_blank"
                  class="user-menu-link"
                >
                  <img src="/images/icon-help.svg" />
                  Help and support
                </a>
              </li>
              <li>
                <a href="/user/logout" class="user-menu-link">
                  <img src="/images/icon-signout.svg" />
                  Sign out
                </a>
              </li>
            </menu>
          </div>
        </div>
      </header>
      <nav class="site-nav">
        <div class="pages-nav">
          <a href="/user/breaches" class="nav-item current">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M10.5942 20.049C9.87439 21.3816 10.8394 22.9996 12.3539 22.9996H19.657C21.1692 22.9996 22.1344 21.3862 21.4193 20.0538L17.7796 13.2724C17.0264 11.8689 15.0148 11.8662 14.2577 13.2676L10.5942 20.049Z"
                fill="white"
                stroke="currentcolor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M16 21C16.5523 21 17 20.5523 17 20C17 19.4477 16.5523 19 16 19C15.4477 19 15 19.4477 15 20C15 20.5523 15.4477 21 16 21Z"
                fill="currentcolor"
              />
              <path
                d="M16 17V16"
                stroke="currentcolor"
                stroke-width="2"
                stroke-linecap="round"
              />
              <path
                d="M7 22H5C3.89543 22 3 21.1046 3 20V11C3 9.89543 3.89543 9 5 9H19C20.1046 9 21 9.89543 21 11V13"
                stroke="currentcolor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M7 9V7C7 4.23858 9.23858 2 12 2C14.7614 2 17 4.23858 17 7V9"
                stroke="currentcolor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            Resolve Data Breaches
          </a>
        </div>
        <div class="meta-nav">
          <a href="/user/settings" class="nav-item ">
            Settings
          </a>
          <br />
          <a
            target="_blank"
            href="https://support.mozilla.org/kb/firefox-monitor"
            class="nav-item"
          >
            Help and Support
          </a>
        </div>
        <div class="callouts">
          <p>Try our other security tools:</p>
          <a
            href="https://relay.firefox.com/?utm_medium=mozilla-websites&utm_source=monitor&utm_campaign=&utm_content=nav-bar-global"
            target="_blank"
          >
            <img
              src="/images/logo-relay.svg"
              width="232"
              height="48"
              alt="Firefox Relay"
            />
          </a>
          <a
            href="https://www.mozilla.org/products/vpn?utm_medium=mozilla-websites&utm_source=monitor&utm_campaign=&utm_content=nav-bar-global"
            target="_blank"
          >
            <img
              src="/images/logo-vpn.svg"
              width="232"
              height="48"
              alt="Mozilla VPN"
            />
          </a>
        </div>
      </nav>
      <main>
        <section>
          <header class="breaches-header">
            <h1>
              Data breaches for
              <custom-select name="email-account">
                {data.map((d) => (
                  <div>{d.email}</div>
                ))}
              </custom-select>
            </h1>
            <circle-chart
              class="breach-chart"
              title="Breached data"
              data-txt-other="Other"
              data-txt-none="None"
            ></circle-chart>
            <figure class="email-stats" data-count="2" data-total="5">
              <img src="/images/icon-email.svg" width="55" height="30" />
              <figcaption>
                <strong>{data.length} of 5 emails monitored</strong>
                <a href="/user/settings">Manage emails</a>
              </figcaption>
            </figure>
            <fieldset class="breaches-filter">
              <input
                id="breaches-unresolved"
                type="radio"
                name="breaches-status"
                value="unresolved"
                autocomplete="off"
                checked
              />
              <label for="breaches-unresolved">
                <output>&nbsp;</output>Unresolved breaches
              </label>
              <input
                id="breaches-resolved"
                type="radio"
                name="breaches-status"
                value="resolved"
                autocomplete="off"
              />
              <label for="breaches-resolved">
                <output>&nbsp;</output>Resolved breaches
              </label>
            </fieldset>
          </header>
        </section>
      </main>
    </div>
  );
}
