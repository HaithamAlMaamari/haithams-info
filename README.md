# haithams.info

Personal portfolio of Haitham Yasser Al Maamari, focused on data analytics,
applied AI, automation, and telecom platform work.

**Live site:** [haithams.info](https://haithams.info)

## Overview

The site uses a responsive editorial design to present professional experience,
technical capabilities, and selected projects. It includes an interactive
briefing pipeline, transparent project statuses, and descriptions of internal
work that preserve confidential data boundaries.

## Technology

- Semantic HTML5
- Responsive CSS with print and reduced-motion rules
- Vanilla JavaScript for the interactive pipeline
- Cloudflare static deployment from `main`
- No framework, package installation, or build step

## Repository Structure

```text
.
|-- index.html             # Page content and semantic structure
|-- styles.css             # Visual system and responsive layouts
|-- script.js              # Pipeline interaction and current year
|-- personal-picture.jpg   # Portfolio image
|-- README.md              # Project documentation
`-- LICENSE                # MIT license for source code
```

## Local Preview

```bash
python -m http.server 8000
```

Open `http://localhost:8000`. The JavaScript can be checked with:

```bash
node --check script.js
```

The site is tested at desktop and mobile widths for image loading, interactive
behavior, link handling, and horizontal overflow.

## Related Project

The validation and delivery layer behind the featured news briefing is
available in the public
[newsletter-briefing repository](https://github.com/HaithamAlMaamari/newsletter-briefing).

## License

The HTML, CSS, and JavaScript are available under the [MIT License](LICENSE).
The personal photograph, branding, biographical information, CV content, and
project descriptions are excluded from that license and may not be reused.
