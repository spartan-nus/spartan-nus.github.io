# SPARTAN Website

Website for the Strategic Platform for Autonomous Resilient and Trusted Agents @ NUS.

Live at: https://spartan-nus.github.io

## How to update the site

All content lives in simple text files. You can edit them directly on GitHub — no coding required.

1. Go to the file you want to edit (see sections below)
2. Click the pencil icon (Edit) in the top-right corner
3. Make your changes
4. Click "Commit changes" at the bottom

The site will automatically rebuild and go live within a minute or two.

---

### Add or edit an Event

Edit `_data/events.yml`. Each event looks like this:

```yaml
- date: "3 Jun 2026"
  title: "AI4Code Roundtable – NYC"
  description: "A one day roundtable event in New York City on trustworthy AI for code."
  link: "https://spartan-nus.github.io/ai4code-roundtable-nyc.html"
```

To add a new event, copy the block above and paste it at the **top** of the file (newest first). Fill in your own date, title, description, and link. The link is optional — remove that line if you don't need it.

---

### Add or edit a News item

Edit `_data/news.yml`. Same format as events:

```yaml
- date: "Feb 19, 2025"
  title: "Sonar Acquires AutoCodeRover"
  description: "Short summary of the news item."
  link: "https://example.com/article"
```

Add new items at the **top** of the file (newest first).

---

### Add or edit a Research topic

Edit `_data/research.yml`:

```yaml
- title: "VeriGrey: Agent Security Assurance"
  description: "Security testing of Agents like OpenClaw"
  link: "https://example.com/project-page"
```

---

### Add or edit a Person

Edit `_data/people.yml`. People are grouped into four sections:

- `pi` — Principal Investigators & Professors
- `collaborators` — External collaborators
- `team` — PhD Students & Postdoctoral Researchers
- `alumni` — Graduating & Alumni

Each person looks like this:

```yaml
  - name: "Jane Doe"
    role: "Postdoctoral Researcher - AI for Security"
    image: "/people/jane.jpg"
    homepage: "https://janedoe.com"
```

To add a new person:
1. Add their photo to the `people/` folder (upload it via GitHub)
2. Add their entry under the right section in `_data/people.yml`

If the person doesn't have a photo yet, use initials instead of an image:

```yaml
  - name: "Z. Liu (Tony)"
    role: "(Incoming) PhD student"
    initials: "ZL"
    homepage: "https://example.com"
```

---

### Add or edit a Publication

Edit `_data/publications.yml`. Each entry looks like this:

```yaml
- venue: "ICSE"
  title: "My Paper Title"
  authors: "Author One, Author Two, Abhik Roychoudhury"
  where: "ACM/IEEE International Conference on Software Engineering, 2026"
  note: "Optional note, e.g. Best Paper Award"
  link: "https://arxiv.org/abs/..."
```

`note` and `link` are optional — remove those lines if not needed. Publications appear in the order listed, so put the newest ones at the top.

---

### Edit the About page

Edit `index.md`.

### Edit the navigation bar

Edit `_includes/header.html`.

### Edit the homepage carousel

Edit `_includes/carousel.html`.

---

## Where things are

```
_data/
  events.yml        ← Events on the News & Events page
  news.yml          ← News items on the News & Events page
  research.yml      ← Research topics on the Upcoming Efforts page
  people.yml        ← Everyone on the People page
  publications.yml  ← All publications

people/            ← Photos of team members
assets/images/     ← Other images (logos, carousel, etc.)

index.md           ← About page
news.md            ← News & Events page
research.md        ← Upcoming Efforts page
people.md          ← People page (template, reads from _data/people.yml)
publications.md    ← Publications page (template, reads from _data/publications.yml)
contact.md         ← Contact page
agentfuture.md     ← Coding Agents of The Future page

_includes/
  header.html      ← Navigation bar
  footer.html      ← Footer
  carousel.html    ← Homepage carousel

_layouts/
  default.html     ← Main page layout
```

## Adding images

Upload images via GitHub into the appropriate folder:
- Team member photos go in `people/`
- Other images go in `assets/images/`

Then reference them in your content as `/people/filename.jpg` or `/assets/images/filename.png`.
