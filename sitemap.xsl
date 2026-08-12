<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0"
  xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
  xmlns:sitemap="http://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:xhtml="http://www.w3.org/1999/xhtml"
  exclude-result-prefixes="sitemap xhtml">

  <xsl:output method="html" version="1.0" encoding="UTF-8" indent="yes"/>

  <xsl:template match="/">
    <html lang="es">
      <head>
        <meta charset="UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <meta name="robots" content="noindex, follow"/>
        <title>Sitemap – Otro Ángulo Web · Erika Pinedo</title>
        <style>
          *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

          body {
            font-family: system-ui, -apple-system, sans-serif;
            background: #f5f5f7;
            color: #1d1d1f;
            min-height: 100vh;
          }

          .site-header {
            background: #101944;
            padding: 28px 40px;
            display: flex;
            align-items: center;
            gap: 16px;
          }

          .site-header h1 {
            font-size: 18px;
            font-weight: 700;
            color: #ffffff;
            letter-spacing: -0.3px;
          }

          .site-header .sub {
            font-size: 13px;
            color: rgba(255,255,255,0.55);
            font-weight: 400;
            margin-top: 2px;
          }

          .dot {
            display: inline-block;
            width: 8px;
            height: 8px;
            border-radius: 50%;
            background: #e9337c;
            margin-right: 4px;
            flex-shrink: 0;
          }

          .container {
            max-width: 960px;
            margin: 0 auto;
            padding: 40px 24px 64px;
          }

          .meta-bar {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-bottom: 20px;
            flex-wrap: wrap;
            gap: 12px;
          }

          .meta-bar h2 {
            font-size: 15px;
            font-weight: 600;
            color: #1d1d1f;
          }

          .badge {
            display: inline-flex;
            align-items: center;
            background: #101944;
            color: #ffffff;
            font-size: 12px;
            font-weight: 600;
            padding: 4px 12px;
            border-radius: 999px;
          }

          .badge .num {
            color: #e9337c;
            margin-right: 5px;
            font-size: 14px;
          }

          table {
            width: 100%;
            border-collapse: collapse;
            background: #ffffff;
            border-radius: 12px;
            overflow: hidden;
            box-shadow: 0 1px 3px rgba(0,0,0,0.08);
          }

          thead {
            background: #101944;
          }

          thead th {
            padding: 14px 18px;
            text-align: left;
            font-size: 11px;
            font-weight: 600;
            color: rgba(255,255,255,0.7);
            letter-spacing: 0.8px;
            text-transform: uppercase;
          }

          thead th:last-child,
          thead th:nth-child(3) {
            text-align: center;
          }

          tbody tr {
            border-bottom: 1px solid #f0f0f0;
            transition: background 0.15s;
          }

          tbody tr:last-child {
            border-bottom: none;
          }

          tbody tr:hover {
            background: #fafafa;
          }

          tbody td {
            padding: 13px 18px;
            font-size: 13.5px;
            vertical-align: middle;
          }

          .url-cell a {
            color: #101944;
            text-decoration: none;
            font-weight: 500;
            word-break: break-all;
          }

          .url-cell a:hover {
            color: #e9337c;
            text-decoration: underline;
          }

          .url-path {
            font-size: 11px;
            color: #888;
            margin-top: 2px;
          }

          .date-cell {
            color: #555;
            font-size: 12.5px;
            white-space: nowrap;
          }

          .freq-cell {
            text-align: center;
          }

          .freq-pill {
            display: inline-block;
            padding: 3px 10px;
            border-radius: 999px;
            font-size: 11px;
            font-weight: 600;
            letter-spacing: 0.2px;
          }

          .freq-monthly { background: #e8f0fe; color: #1a4acc; }
          .freq-yearly  { background: #f0fdf4; color: #166534; }

          .priority-cell {
            text-align: center;
          }

          .priority-bar-wrap {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 8px;
          }

          .priority-bar {
            height: 6px;
            border-radius: 3px;
            background: #e5e7eb;
            width: 60px;
            overflow: hidden;
          }

          .priority-fill {
            height: 100%;
            border-radius: 3px;
            background: linear-gradient(90deg, #e9337c, #101944);
          }

          .priority-val {
            font-size: 12px;
            color: #555;
            font-weight: 600;
            min-width: 24px;
          }

          .footer {
            margin-top: 28px;
            text-align: center;
            font-size: 12px;
            color: #aaa;
          }

          .footer a { color: #e9337c; text-decoration: none; }
          .footer a:hover { text-decoration: underline; }
        </style>
      </head>
      <body>
        <header class="site-header">
          <span class="dot"/>
          <div>
            <h1>Otro Ángulo Web · Erika Pinedo</h1>
            <div class="sub">otroanguloweb.cl — Sitemap XML</div>
          </div>
        </header>

        <div class="container">
          <div class="meta-bar">
            <h2>Todas las páginas indexadas</h2>
            <span class="badge">
              <span class="num"><xsl:value-of select="count(sitemap:urlset/sitemap:url)"/></span>
              URLs
            </span>
          </div>

          <table>
            <thead>
              <tr>
                <th>URL</th>
                <th>Última modificación</th>
                <th>Frecuencia</th>
                <th>Prioridad</th>
              </tr>
            </thead>
            <tbody>
              <xsl:for-each select="sitemap:urlset/sitemap:url">
                <xsl:variable name="loc" select="sitemap:loc"/>
                <xsl:variable name="path">
                  <xsl:choose>
                    <xsl:when test="string-length($loc) > 26">
                      <xsl:value-of select="substring($loc, 27)"/>
                    </xsl:when>
                    <xsl:otherwise>/</xsl:otherwise>
                  </xsl:choose>
                </xsl:variable>
                <xsl:variable name="prio" select="sitemap:priority"/>
                <xsl:variable name="fillWidth">
                  <xsl:value-of select="concat(number($prio) * 100, '%')"/>
                </xsl:variable>
                <tr>
                  <td class="url-cell">
                    <a href="{$loc}" target="_blank" rel="noopener">
                      <xsl:value-of select="$loc"/>
                    </a>
                  </td>
                  <td class="date-cell">
                    <xsl:value-of select="sitemap:lastmod"/>
                  </td>
                  <td class="freq-cell">
                    <span>
                      <xsl:attribute name="class">
                        <xsl:choose>
                          <xsl:when test="sitemap:changefreq = 'monthly'">freq-pill freq-monthly</xsl:when>
                          <xsl:otherwise>freq-pill freq-yearly</xsl:otherwise>
                        </xsl:choose>
                      </xsl:attribute>
                      <xsl:value-of select="sitemap:changefreq"/>
                    </span>
                  </td>
                  <td class="priority-cell">
                    <div class="priority-bar-wrap">
                      <div class="priority-bar">
                        <div class="priority-fill" style="width:{$fillWidth}"/>
                      </div>
                      <span class="priority-val"><xsl:value-of select="$prio"/></span>
                    </div>
                  </td>
                </tr>
              </xsl:for-each>
            </tbody>
          </table>

          <p class="footer">
            Generado para <a href="https://otroanguloweb.cl" target="_blank">otroanguloweb.cl</a>
            · <a href="https://www.sitemaps.org" target="_blank" rel="noopener">Protocolo Sitemaps.org</a>
          </p>
        </div>
      </body>
    </html>
  </xsl:template>

</xsl:stylesheet>
