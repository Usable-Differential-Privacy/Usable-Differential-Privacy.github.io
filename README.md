# Usable Differential Privacy at UVM

This repository contains the public website for the Usable Differential Privacy research collaboration at the University of Vermont.

- **Website:** <https://usable-differential-privacy.github.io>
- **Repository:** <https://github.com/Usable-Differential-Privacy/Usable-Differential-Privacy.github.io>
- **Technology:** Jekyll, GitHub Pages, HTML, SCSS, and a small amount of JavaScript

This guide is written for team members who need to update people, publications, research themes, funding, resources, or general page content. Most routine updates only require editing YAML or Markdown; no programming is necessary.

## What do you want to update?

| Task | File or directory | Instructions |
| --- | --- | --- |
| Add or update a researcher | [`_data/people.yml`](_data/people.yml) | [People](#people) |
| Add a publication | [`_data/publications.yml`](_data/publications.yml) | [Publications](#publications) |
| Feature a publication on the homepage | [`_data/publications.yml`](_data/publications.yml) | [Homepage publications](#feature-a-publication-on-the-homepage) |
| Add or update a research theme | [`_research/`](_research/) | [Research themes](#research-themes) |
| Update an NSF award | [`_data/awards.yml`](_data/awards.yml) | [Funding](#funding) |
| Update the Resources page | [`resources.html`](resources.html) | [Resources](#resources) |
| Change homepage wording | [`index.html`](index.html) | [General page content](#general-page-content) |
| Change navigation | [`_config.yml`](_config.yml) | [Navigation](#navigation) |
| Change layout or visual styling | [`_layouts/`](_layouts/), [`_includes/`](_includes/), or [`css/group.scss`](css/group.scss) | [Maintainer files](#maintainer-files) |

## Recommended workflow

Use a branch and pull request for website changes. This gives another team member an opportunity to check names, links, publication information, formatting, and appearance before the change becomes public.

### For routine updates in the GitHub website

1. Open the file you need to change in GitHub.
2. Select the pencil icon, **Edit this file**.
3. Make the change and use the **Preview** tab when editing Markdown.
4. Select **Commit changes**.
5. Choose **Create a new branch for this commit and start a pull request**.
6. Give the branch and pull request a descriptive name, such as `add-2026-publication`.
7. In the pull request, explain what changed and request review from another team member.
8. After review, merge the pull request into `master`.

The current deployment workflow runs only after a change reaches `master`. Pull requests do not receive an automatic live-site preview, so use a [local preview](#local-preview) for structural or visual changes.

### For local Git users

```sh
git switch -c descriptive-branch-name
# Edit files, then preview and verify the site.
git add path/to/changed-file
git commit -m "Describe the website update"
git push -u origin descriptive-branch-name
```

Then open a pull request on GitHub. Do not commit generated files from `_site/`.

## People

The People page is generated from [`_data/people.yml`](_data/people.yml). Faculty and graduate students are grouped according to the `role` field. Within each group, profiles appear in the same order as their records in the file.

### Add a faculty member

```yaml
first-last:
  display_name: Dr. First Last
  title: Associate Professor of Computer Science
  institution: University of Vermont
  role: faculty
  image: /img/people/first-last.jpg
  bio: One or two sentences describing the researcher and their work.
  links:
    - label: Professional website
      url: https://example.org/
    - label: UVM profile
      url: https://www.uvm.edu/example
```

### Add a PhD student

```yaml
first-last:
  display_name: First Last
  title: Doctoral Student in Computer Science
  institution: University of Vermont
  role: grad
  initials: FL
  links:
    - label: Google Scholar
      url: https://scholar.google.com/example
```

### People field reference

| Field | Required? | Purpose |
| --- | --- | --- |
| Record key, such as `first-last` | Yes | Stable internal identifier. Use lowercase letters and hyphens. |
| `display_name` | Yes | Name displayed on the site. |
| `title` | Recommended | Academic title or program role. |
| `institution` | Recommended | Current institution. |
| `role` | Yes | Use `faculty` or `grad`; this controls page grouping. |
| `image` | Optional | Site-relative path to a profile photograph. |
| `initials` | Recommended without an image | Letters displayed in the profile placeholder. |
| `bio` | Optional | A concise research biography. |
| `interests` | Optional | Short list or sentence describing research interests. |
| `links` | Optional | One or more labeled external profile links. |

If a person has no photograph, omit `image` and provide `initials`. Do not leave an empty `image:` field.

## Profile images and other media

Place profile photographs in [`img/people/`](img/people/) and reference them with a leading slash:

```yaml
image: /img/people/first-last.jpg
```

Use these conventions:

- Use a clear, square or nearly square headshot.
- Prefer `.jpg` for photographs and `.png` for graphics that require transparency.
- Use lowercase filenames with hyphens, such as `first-last.jpg`.
- Avoid spaces, parentheses, and special characters in filenames.
- Crop images consistently and compress large files before committing them.
- As a practical target, use an image at least 600 × 600 pixels and below 500 KB.
- Confirm that the person has approved use of the photograph.

## Publications

The Publications page is generated from [`_data/publications.yml`](_data/publications.yml). The page automatically sorts records by year and lets visitors search or filter them by year and type.

Add a new publication as a complete YAML list item:

```yaml
- id: short-unique-id-2026
  title: "Full Publication Title"
  authors: "First Author, Second Author, and Third Author"
  year: 2026
  type: Conference paper
  venue: Conference or Journal Name
  url: https://doi.org/example
  summary: >-
    A concise description of the research question, method, and contribution.
```

### Publication field reference

| Field | Required? | Purpose |
| --- | --- | --- |
| `id` | Yes | Stable, unique identifier used by research sections. Use lowercase letters, numbers, and hyphens. |
| `title` | Yes | Full publication title. Quote titles containing punctuation. |
| `authors` | Yes | Author list in publication order. |
| `year` | Yes | Four-digit publication year. Do not quote it. |
| `type` | Yes | Display and filter category, such as `Journal article` or `Conference paper`. Reuse existing wording when possible. |
| `venue` | Recommended | Journal, conference, workshop, or archive. |
| `url` | Recommended | Publisher, proceedings, DOI, or stable paper URL. |
| `summary` | Recommended | A short, plain-language description. |
| `recent` | Optional | Set to `true` to feature the publication on the homepage. |

Publication IDs must be unique. Changing an existing ID can break links from research sections, so search [`_research/`](_research/) before renaming one.

### Feature a publication on the homepage

The homepage does not automatically show the newest papers. It displays every publication containing:

```yaml
recent: true
```

Add that field to feature a publication. Remove it, or change it to `false`, when the paper should no longer appear in the Recent Publications section.

## Research themes

The Research page is assembled from Markdown files in [`_research/`](_research/). Each file becomes a section on the single Research page; Jekyll does not generate a separate page for each theme.

To add a theme, create a descriptive filename such as `_research/privacy-communication.md`:

```markdown
---
title: Communicating Privacy Guarantees
eyebrow: Transparency and accountability
number: "05"
order: 5
anchor: communicating-privacy
variant: primary
lead: What question or challenge motivates this research theme?
publication_ids:
  - short-unique-id-2026
---

Write the research description here using ordinary Markdown.

- Bulleted lists are supported.
- Use short paragraphs for readability.
- Explain the problem, approach, and intended contribution.
```

### Research field reference

| Field | Required? | Purpose |
| --- | --- | --- |
| `title` | Yes | Section heading. |
| `eyebrow` | Yes | Short category label above the heading. |
| `number` | Yes | Display number. Quote values with leading zeroes. |
| `order` | Yes | Numeric position on the Research page. |
| `anchor` | Yes | Unique, stable HTML anchor. Use lowercase words separated by hyphens. |
| `variant` | Recommended | Visual treatment: `primary`, `synthesis`, or `related`. |
| `lead` | Recommended | One-sentence question or framing statement. |
| `publication_ids` | Optional | IDs from `_data/publications.yml` shown as Selected Work. |

The `publication_ids` values must exactly match publication `id` values. Missing IDs are silently omitted from the rendered page.

When reordering themes, update both `order` and the displayed `number` so they remain consistent. Avoid changing an existing `anchor` after publication because external links may depend on it.

## Funding

Funding acknowledgments on the homepage are generated from [`_data/awards.yml`](_data/awards.yml).

```yaml
- id: nsf-1234567
  number: "1234567"
  short_title: Short Public-Facing Award Title
  title: "Full Official NSF Award Title"
  investigators: First Last (PI) and Second Last (Co-PI)
  period: 2026–2029
  url: https://www.nsf.gov/awardsearch/show-award/?AWD_ID=1234567
  description: A concise explanation of the supported research.
```

Use the official award number, title, investigator roles, period, and NSF URL. Keep `number` in quotation marks so YAML treats it as text. Verify award details against the NSF award record before submitting a pull request.

## Resources

The MVP Resources page is currently a hand-written “Coming soon” page. Update its public wording and list of planned resource types directly in [`resources.html`](resources.html).

The repository also contains [`_data/resources.yml`](_data/resources.yml), but the current Resources page does **not** render that data yet. Editing the YAML file alone will not change the website. When the team is ready to publish individual resource cards, a maintainer should first connect this data file to the page template.

## General page content

The five main pages are:

| Page | Source file |
| --- | --- |
| Home and About | [`index.html`](index.html) |
| People | [`people.html`](people.html) plus `_data/people.yml` |
| Research | [`research.html`](research.html) plus `_research/` |
| Publications | [`publications.html`](publications.html) plus `_data/publications.yml` |
| Resources | [`resources.html`](resources.html) |

Each page begins with YAML front matter between two `---` lines. Common fields include:

```yaml
---
title: Page title
eyebrow: Short section label
intro: A concise introductory paragraph.
permalink: /example.html
---
```

Keep the opening and closing `---` lines intact. Quote a value if it contains a colon or other YAML-sensitive punctuation.

### Navigation

The main navigation is defined in [`_config.yml`](_config.yml):

```yaml
navigation:
  - title: Home
    link: /
  - title: People
    link: /people/
```

Navigation changes affect every page and should receive a visual review on desktop and mobile. Restart the local Jekyll server after changing `_config.yml`; Jekyll may not reload configuration changes automatically.

## Local preview

Routine text updates can be made through GitHub, but local preview is strongly recommended for new research sections, images, navigation changes, templates, JavaScript, or CSS.

### Requirements

- Git
- Ruby 3.x
- Jekyll

Avoid relying on the Apple-provided system Ruby on macOS; it may be too old to install current Jekyll dependencies. Use a maintained Ruby installation through a version manager such as `rbenv` or `asdf`, or another team-approved setup.

With a compatible Ruby active:

```sh
gem install jekyll
make serve
```

Open <http://127.0.0.1:5000> and review every affected page. Stop the server with <kbd>Control</kbd>+<kbd>C</kbd>.

Other useful commands:

```sh
make build   # Generate the site in _site/
make clean   # Remove generated files and the Jekyll cache
```

The `_site/` directory is generated output. Do not edit or commit its contents.

## Before merging

Use this checklist in the pull request:

- [ ] Names, titles, author order, dates, award details, and links are verified.
- [ ] No placeholder text or example URLs remain in the changed content.
- [ ] YAML uses spaces—not tabs—and indentation matches neighboring entries.
- [ ] New person, publication, award, and research identifiers are unique.
- [ ] Every referenced publication ID exists in `_data/publications.yml`.
- [ ] Every referenced image exists and displays correctly.
- [ ] External links open the intended authoritative page.
- [ ] The affected pages have been reviewed on desktop and mobile when layout may change.
- [ ] The pull request contains only relevant source files, not `_site/` or cache files.
- [ ] Another team member has reviewed substantive research descriptions and publication summaries.

## Deployment

Merging or pushing to `master` triggers [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml). GitHub Actions builds the Jekyll site and publishes it to GitHub Pages.

After merging:

1. Open the repository's **Actions** tab.
2. Select the latest **Deploy Jekyll site to Pages** run.
3. Confirm that both the build and deploy jobs succeed.
4. Open the public website and verify the change.

Deployment may take a few minutes. A successful local preview does not guarantee deployment if the committed YAML or Liquid syntax differs from what was tested.

## Troubleshooting

### The GitHub Actions build failed

Open the failed workflow run and inspect the first error in the build job. Common causes include:

- incorrect YAML indentation;
- a missing closing quotation mark;
- a colon in an unquoted YAML value;
- missing `---` delimiters in Markdown front matter; or
- invalid Liquid markup in an HTML template.

Compare the changed entry with a working neighboring entry. If necessary, revert the pull request and correct the change in a new branch.

### A person or publication does not appear

- Confirm that the entry is in the correct `_data` file.
- Check YAML indentation and list markers.
- For people, use a configured `role`: `faculty` or `grad`.
- For homepage publications, add `recent: true`.
- Restart the local server after changing `_config.yml`.

### A selected publication is missing from a research theme

Confirm that the value under `publication_ids` exactly matches the publication's `id`. Capitalization and hyphens matter.

### A profile image is missing

Confirm that:

- the image exists in `img/people/`;
- the filename capitalization matches exactly;
- the YAML path begins with `/img/people/`; and
- the extension in the YAML matches the file, such as `.jpg` versus `.png`.

### The public site still shows the old version

Confirm that the change was merged into `master`, then check the Actions tab. If deployment succeeded, refresh the page without cache or wait a few minutes for GitHub Pages to update.

## Repository map

```text
.
├── _config.yml                 Site settings, navigation, roles, and collections
├── _data/
│   ├── awards.yml              NSF funding records
│   ├── people.yml              Faculty and student profiles
│   ├── publications.yml        Publication records
│   └── resources.yml           Reserved resource records; not rendered yet
├── _research/                  Research-page section content
├── _includes/                  Reusable HTML components
├── _layouts/                   Shared page layouts
├── css/group.scss              Site-wide visual styles
├── img/people/                 Profile photographs
├── js/publications.js          Publication search and filtering
├── index.html                  Home and About content
├── people.html                 People page shell
├── research.html               Research page shell
├── publications.html           Publications page shell
├── resources.html              Resources page content
├── Makefile                    Local build and preview commands
└── .github/workflows/deploy.yml
                                GitHub Pages deployment workflow
```

## Maintainer files

Routine content contributors generally should not need to edit these files:

- `_layouts/` controls the shared document and page structure.
- `_includes/` contains reusable person, publication, award, and research components.
- `css/group.scss` controls visual styling and responsive behavior across the site.
- `js/publications.js` controls publication search and filters.
- `_config.yml` controls global behavior, navigation, and Jekyll collections.
- `.github/workflows/deploy.yml` controls production deployment.

Changes to these files can affect every page. Preview them locally, check desktop and mobile layouts, and request review from a team member comfortable with the website code.

## Getting help

If you are unsure how to make a change, open a draft pull request describing the desired update and request help from a website maintainer. For incorrect public content, broken links, or display problems, open a GitHub issue with:

- the affected page URL;
- a short description of the problem;
- the expected correction; and
- a screenshot when the issue is visual.

Do not include private study data, participant information, credentials, or unpublished sensitive material in issues, commits, or pull requests.
