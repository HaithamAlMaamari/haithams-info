# haithams.info

Source code for [haithams.info](https://haithams.info), the personal portfolio of
Haitham Yasser Al Maamari. The site presents selected data analytics, applied
AI, automation, and telecom platform work through an editorial, responsive
interface.

## Live Site

[Visit haithams.info](https://haithams.info)

## Highlights

- Responsive portfolio layout for desktop and mobile
- Live project statuses and explicit ownership boundaries
- Interactive daily-news briefing pipeline
- Deterministic validation workflow with five quality gates
- Internal telecom work described without exposing confidential data
- Accessible semantic structure and reduced-motion support
- External professional links that open safely in new tabs
- No framework, package installation, or build step

## Featured Work

### Automated Daily News Briefing

A VPS-hosted workflow that uses Hermes to gather candidate stories before a
Python layer validates, ranks, archives, and delivers a daily briefing. The
sanitised validation and delivery package is available in the public
[newsletter-briefing repository](https://github.com/HaithamAlMaamari/newsletter-briefing).

### Intelligent Email Assistant

An archived LLM prototype that reads full email threads, extracts context, and
drafts configurable replies. The project ranked first in Omantel's Gen Z AI
project competition.

### Telecom Competitor Intelligence Portal

A live internal collaboration covering competitor-data collection and
validation, stakeholder requirements, and interface development. Automation,
deployment, and ongoing support remain with the collaborating team.

## Project Structure

```text
.
|-- index.html             # Semantic page content and portfolio structure
|-- styles.css             # Responsive layout, visual system, and print rules
|-- script.js              # Pipeline interaction and current-year display
|-- personal-picture.jpg   # Personal portfolio image
|-- CHANGELOG.md           # Record of meaningful site iterations
|-- LICENSE                # MIT license for source code
|-- .gitattributes         # Text and binary file handling
|-- .gitignore             # Local files excluded from version control
`-- README.md
```

## Run Locally

The site is static and can be opened directly or served with any local HTTP
server:

```bash
python -m http.server 8000
```

Then visit `http://localhost:8000`.

## Verification

The JavaScript can be syntax-checked without installing dependencies:

```bash
node --check script.js
```

Before deployment, the site is also browser-tested at desktop and mobile
viewports for image loading, interactive pipeline behavior, link attributes,
and horizontal overflow.

## Deployment

The production site is served through Cloudflare. Updates to the default
`main` branch are deployed as a static site.

## Development Record

The commit history and [CHANGELOG.md](CHANGELOG.md) document the site's
evolution from its initial editorial layout through content validation,
portrait-led design, responsive refinements, and improved contact navigation.

## License and Personal Content

The HTML, CSS, and JavaScript source code are available under the
[MIT License](LICENSE).

`personal-picture.jpg`, personal branding, biographical information, CV
content, and project descriptions are not licensed for reuse. All rights to
those assets and materials are reserved by Haitham Yasser Al Maamari.
