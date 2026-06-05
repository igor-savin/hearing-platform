# Meet the Team Parity Notes - 2026-06-04

Compared pages:
- Live: https://www.audiologyassociates.org/meet-the-team
- Rebuild: https://audiology-associates-westchester.vercel.app/meet-the-team

Initial mismatches found:
- Rebuild used portrait grids for team members; live site uses row-by-row biography sections.
- Rebuild introduced a separate Team Backgrounds section; live site places biography and credentials directly with each person.
- Rebuild omitted visible biographies for Jennifer Tarlton, Alicia Rivera, Barbara Lawrence, and Hazel Icaza in the body flow.
- Rebuild did not include the live blue Meet the Team band and blue group heading bands.
- Rebuild image placement/aspect used tall cards; live site uses square portraits alongside the biography content.

Fix approach:
- Rebuilt the Meet the Team renderer to match the live ordering: title band, H1/rule/intro, Doctors of Audiology, Executive Team, Administrative Team.
- Restored row-by-row person sections with name, pronouns, role, rule, paragraphs, image, credentials, and affiliation lists where present.
- Kept scope limited to the Meet the Team page renderer/data.
